# Trang mẫu Spa — nút "Nói chuyện với nhân viên" (phiên dịch 2 chiều, BẢN THỬ)

- Nút nổi góc phải dưới → khung phiên dịch: chọn tiếng của khách (EN/KO/中文/RU/JA/FR) ⇄ Tiếng Việt.
- **Nghe:** Web Speech API (`SpeechRecognition`/`webkitSpeechRecognition`), khách theo ngôn ngữ đang chọn, nhân viên `vi-VN`.
- **Dịch:** MyMemory (`api.mymemory.translated.net`) — miễn phí, **không cần key**; giới hạn khoảng 5.000 ký tự/ngày cho mỗi IP, chất lượng dịch máy.
- **Đọc:** `speechSynthesis` bằng giọng của ngôn ngữ đích (tuỳ máy có cài giọng hay không).
- Trình duyệt không nghe được (vd Firefox): hiện thông báo, dùng ô gõ chữ thay thế.

> **Đây là bản thử.** Khi bán thật sẽ chuyển phần dịch sang **Gemini qua Cloudflare Worker** (key giấu trong Worker, không bao giờ để trong repo công khai) — chỉ cần thay hàm `translate()` trong `interpreter.js`.
> Repo này không chứa key/secret nào.

File: `interpreter.js`, `interpreter.css` (độc lập với khung; trang các tiệm không dùng).
