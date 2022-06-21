const COMMANDS = {
    HOME_PAGE: 'home-page',
    SOCIAL_NEW: 'social-new',
    SPORT_NEW: 'sport-new',
    WORLD_NEW: 'world-new',
    POLITICS_NEW: 'politics-new',
    LIFE_NEW: 'life-new',
    BUSINESS_NEW: 'business-new',
    ENTERTAINMENT_NEW: 'entertainment-new',
    TECHNOLOGY_NEW: 'technology-new',

    READ_NEW: 'read-new', 
    SEARCH_NEW: 'search-new',
    EXIT_ALAN: 'exit-alan'
}

var alanBtnInstance = alanBtn({
    key: "ad37114d9a798117c54b4efffba7ae852e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
    if (commandData.command === "home-page") {
        alanBtnInstance.playText("Coming to the home page")
        window.location.href ="http://127.0.0.1:8000/";
    } else if (commandData.command === "social-new") {
        window.location.href ="http://127.0.0.1:8000/category/Xahoi";
    } else if (commandData.command === "sport-new") {
        window.location.href ="http://127.0.0.1:8000/category/Phapluat";
    } else if (commandData.command === "world-new") {
        window.location.href ="http://127.0.0.1:8000/category/Thegioi";
    } else if (commandData.command === "politics-new") {
        window.location.href ="http://127.0.0.1:8000/category/Thoisu";
    } else if (commandData.command === "life-new") {
        window.location.href ="http://127.0.0.1:8000/category/Doisong";
    } else if (commandData.command === "business-new") {
        window.location.href ="http://127.0.0.1:8000/category/Kinhdoanh";
    } else if (commandData.command === "entertainment-new") {
        window.location.href ="http://127.0.0.1:8000/category/Giaitri";
    } else if (commandData.command === "technology-new") {
        window.location.href ="http://127.0.0.1:8000/category/Congnghe";
    } else if (commandData.command === "first-new-of-social") {
        window.location.href ="http://127.0.0.1:8000/article/1";
    } else if (commandData.command === "first-new-of-sport") {
        window.location.href ="http://127.0.0.1:8000/article/2";
    } else if (commandData.command === "first-new-of-world") {
        window.location.href ="http://127.0.0.1:8000/article/3";
    } else if (commandData.command === "search-new") {
        window.location.href ="http://127.0.0.1:8000/search/";
    } else if (commandData.command === "exit-alan") {
        alanBtnInstance.playText("Goodbye")
        alanBtnInstance.deactivate();
    } 

    },
    rootEl: document.getElementById("alan-btn"),
});