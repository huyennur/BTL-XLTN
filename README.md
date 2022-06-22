# BTL CUỐI KỲ MÔN XỬ LÝ TIẾNG NÓI (2122II_INT3411_20) - NHÓM 6
## Trang web đọc báo online - Online newspaper reading website 
### Giới thiệu chung
Trang web đọc báo online được xây dựng dành cho những người dùng muốn đọc báo bằng việc điều khiển giọng nói và không cần đọc chữ. Trang web hướng đến đối tượng là những người quá bận để có thể đọc báo hay là những người lớn tuổi không nhìn thấy rõ được nội dung của bài báo.
### Các chức năng chính
1. Cung cấp thông tin các bài báo cho người dùng (đọc báo bình thường như các trang khác).
2. Đọc nội dung bài báo cho người dùng nghe.
3. Tìm kiếm tin tức bằng chức năng giọng nói.
4. Điều khiển trang web bằng giọng nói.
### Các công nghệ sử dụng
1. Django python (backend)
2. HTML/CSS/JS (frontend)
3. Google text-to-speech API
4. Speech-to-text speech recognition
5. Platform Alan AI 

### Lưu ý khi chạy project
1. Ngoài cài đặt những thư viện để có thể chạy được web django, cần cài đặt thêm các thư viện sau:  
```
pip install SpeechRecognition
pip install gTTS
```
2. Đăng kí tài khoản và tạo project ở platform Alan AI

## Phân chia công việc
1. Đỗ Ngọc Huyền: \
      Backend + Voice controller (điều khiển trang web bằng giọng nói)
3. Vũ Tú Anh: \
      Backend + Speech-to-text (tìm kiếm tin tức bằng giọng nói)
5. Phạm Thị Minh Khuê: \
      Backend + Text-to-speecg (đọc báo bằng giọng nói)
7. Nguyễn Thị Thuý Hiền: \
      Frontend (xây dựng giao diện trang web)

## Một số hình ảnh giao diện của sản phẩm
<img width="1437" alt="Screen Shot 2022-06-22 at 06 54 13" src="https://user-images.githubusercontent.com/61541281/174915248-e67285ce-772f-47c8-8766-3501f6b03dce.png">
<img width="1438" alt="Screen Shot 2022-06-22 at 06 54 30" src="https://user-images.githubusercontent.com/61541281/174915273-75751a2e-4799-49b1-93e1-bad474d614e2.png">
<img width="1440" alt="Screen Shot 2022-06-22 at 06 54 46" src="https://user-images.githubusercontent.com/61541281/174915299-8019fa46-4e32-402a-8fdc-62c954f3d2fc.png">
<img width="1440" alt="Screen Shot 2022-06-22 at 06 55 08" src="https://user-images.githubusercontent.com/61541281/174915333-4e90b71c-46e6-4251-bcf0-f68d15b4dd49.png">


## Link video demo sản phẩm
https://www.youtube.com/watch?v=rVQQQex991E


