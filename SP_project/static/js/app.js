var csrf = $('input[name=csrfmiddlewaretoken]').val();
const searchForm = document.getElementById('searchInput');
const searchFormInput = document.querySelector("#search-input input");
const micInx = document.querySelector("#micBtn");
// const info = document.querySelector(".info");

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if (SpeechRecognition) {
    console.log("Your Browser supports speech Recognition");

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    micInx.insertAdjacentHTML("beforeend", '<button class="search-btn" style="border:none;">\
    <i class="bi bi-mic-fill"></i></button>');
    searchFormInput.style.paddingRight = "50px";

    const micBtn = micInx.querySelector("button");
    const micIcon = micBtn.firstElementChild;

    micBtn.addEventListener("click", micBtnClick);

    function micBtnClick() {
        if (micIcon.classList.contains("bi-mic-fill")) { // Start Voice Recognition
            recognition.start(); // First time you have to allow access to mic!
        } else {
            recognition.stop();
            searchNews();
        }
    }

    recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
    function startSpeechRecognition() {
        micIcon.classList.remove("bi-mic-fill");
        micIcon.classList.add("bi-mic-mute-fill");
        searchFormInput.focus();
        console.log("Voice activated, SPEAK");
    }

    recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
    function endSpeechRecognition() {
        micIcon.classList.remove("bi-mic-mute-fill");
        micIcon.classList.add("bi-mic-fill");
        searchFormInput.focus();
        console.log("Speech recognition service disconnected");
    }

    recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
    function resultOfSpeechRecognition(event) {
        event.preventDefault();
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        console.log(transcript);

        if (transcript.toLowerCase().trim() === "stop") {
            recognition.stop();
        } else if (!searchForm.value) {
            searchForm.value = transcript;
        } else {
            if (transcript.toLowerCase().trim() === "go") {
                //searchForm.submit();
            } else if (transcript.toLowerCase().trim() === "reset input") {
                searchFormInput.value = "";
            } else {
                searchFormInput.value = transcript;
            }
        }
        // searchFormInput.focus();
        // setTimeout(() => {
        //   searchForm.submit();
        // }, 500);
    }

} else {
    console.log("Your Browser does not support speech Recognition");
}

function searchNews() {
    const searchInput = searchFormInput.value;
    console.log(searchInput);
    $.ajax({
        url: '/searchNew/',
        method: "POST",
        data: {
            csrfmiddlewaretoken: csrf,
            searchInput
        },
        success: function(response) {
            var count = $('div.block-1').length;
            if (count >= 1) {
                $('div[class="block-1"]').fadeOut('fast', function() {
                    console.log(this);
                    $(this).remove();
                })
            }
            for (var i = 0; i < response.data.length; i++) {
                console.log("sdjhasdgasdg");
                var tb = $('#news-containter');
                var rows = $("<div class=' block-1 row'>\
                            <div class='img-container col-lg-4'>\
                            <img src='https://icdn.dantri.com.vn/2022/05/31/anh-3-1653965931262.jpeg'></div>\
                            <div class='title col-lg-8'><h6><a href='#'>" + response.data[i]["header"] + "</a></h6>\
                            <div class='date'>\
                            <i class='bi bi-calendar'></i>\
                            <span>22 Tháng Sáu, 2022</span></div>\
                            <div class='read'>\
                            <a href='#'>Đọc thêm >></a></div></div></div>");
                rows.hide();
                tb.after(rows);
                rows.fadeIn("slow");
            }
        }
    })
}
var form = document.getElementById("search-input");

document.getElementById("searchBtn").addEventListener("click", function() {
    form.submit();
});