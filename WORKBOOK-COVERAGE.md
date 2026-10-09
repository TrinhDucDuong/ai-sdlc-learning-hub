# Đối chiếu workbook với nội dung learning hub

Rà soát ngày 09/10/2026. Nguồn chính đã đọc toàn văn: `Day1/WB-1.docx`, `Day2/WB-2.docx`, `Day3/WB-3.docx`, `Day4/WB-4.docx`. Đã kiểm kê workspace, thư mục tài liệu và ZIP: không tìm thấy WB-5 riêng. Session 5 trang 18 được đọc trực quan, chỉ ghi Workshop Activity — Capstone Project & Presentation. Yêu cầu dùng Spec Kit thêm chức năng vào MedBook do người học xác nhận.

Hub xuất bản nội dung diễn giải, không sao chép các file nguồn hoặc bài nộp riêng tư. Các ví dụ, template rút gọn và phương án kiến trúc là hướng dẫn học, không phải quyết định nghiệp vụ đã được phê duyệt.

Đã đối chiếu cả nội dung workbook trong ZIP: WB3/WB4 trùng text với bản trong Day3/Day4; WB1 chỉ khác ký tự mũi tên; WB2 có biến thể nội dung. Bản ZIP thêm AI-Readiness Check ở Activity 1 Bước 0 và tách API/Interaction, Data/State, Security/Traceability thành các Bước 5–8 của Activity 2. Hub giữ cả phần kiến thức bổ sung (SRP/cohesion/coupling, provider/consumer, runtime behaviors, state guards, audit/privacy/retention), ghi rõ nguồn biến thể và dùng trình tự bản Day2 để điều hướng. Không suy ra thứ tự phê duyệt từ tên hoặc vị trí file.

| Nguồn | Phần kiến thức/thao tác cần truyền tải | Bài bổ sung |
|---|---|---|
| WB1 Activity 1 Bước 1–4 | Chọn ba thông tin mỗi handoff; nhu cầu context của Dev/Tester/Architect; ba thông tin xuyên SDLC; bốn câu hỏi thảo luận; artifact map; một slide/5 phút | `#/lesson/wb1-collaboration` |
| WB1 Activity 2 Bước 1–4 | AI involvement; Responsibility Matrix; decision boundaries và top 3; HITL/HOTL; điều kiện chuyển đổi; governance statements; đầu ra slide | `#/lesson/wb1-collaboration` |
| WB2 Activity 1 Bước 1–6 | Canvas đủ 9 mục; Clarification Log; stories; chọn 3 story viết AC đủ happy/alternative/exception/timeout/conflict; gap review; MoSCoW có AI proposal/Human decision; Requirement Package và slide | `#/lesson/wb2-discovery` |
| WB2 Activity 2 Bước 1–3 | Context Engineering; workshop assumption về retrieval; impact Reuse/Extend/New; ba option khác nhau; trade-off có trọng số; phản biện; Architecture Decision | `#/lesson/wb2-architecture` |
| WB2 Activity 2 Bước 4–5.2 | Structural/Interaction/Data & State; risk review; ba tình huống bắt buộc; traceability hai chiều; Design Context và presentation | `#/lesson/wb2-architecture` |
| Biến thể WB2 trong ZIP | Activity 1 Bước 0 readiness; Activity 2 Bước 4–8 chi tiết component, business flow, API/event contracts, runtime, data ownership/integrity/lifecycle | `#/lesson/wb2-discovery`, `#/lesson/wb2-architecture` |
| WB3 Activity 1 Bước 0–5 | Active spec; task decomposition; development context; coding log; behavior-based tests; review/severity/Human decision; sửa/retest; Dev gate; 7 file Development Package + source/evidence | `#/lesson/wb3-development` |
| WB3 Activity 2 Bước 1–4 | QA context; chọn API/integration/E2E theo risk; design/execution; defect analysis; regression; ba mức QA assessment; QA Package và presentation | `#/lesson/wb3-qa` |
| WB4 Bước 0–2 | Readiness; audit artifact/version; code và assertion audit; trực tiếp/gián tiếp/gap; kiểm dead code và rationale; evidence type | `#/lesson/wb4-audit` |
| WB4 Bước 3–4 | Năm nhãn nguyên nhân; Critical/Major/Minor; không đếm trùng finding; phân bố; Charter 3–5 rule có condition/cause/verification/owner; năm mục trình bày | `#/lesson/wb4-audit` |
| Session 5 + yêu cầu người học | Capstone & Presentation; nối artifact của WB trước; Spec Kit brownfield; traceability; quality gate; demo/evidence; phân biệt yêu cầu nguồn và gợi ý | `#/lesson/day5-capstone`, các bài Spec Kit và MedBook lab |

## Những khoảng thiếu của bản 12 bài đã được bổ sung

1. Bản cũ chủ yếu giải thích khái niệm Session, ít hướng dẫn tạo đúng artifact của từng activity. Bản mới có quy trình, template, điểm review, đầu ra và bài tập tự làm.
2. Case waitlist/đổi lịch của WB1–4 nay được dạy riêng với case lịch hàng loạt của Day5, tránh nhầm feature hoặc policy.
3. Ba nhóm failure của Session 4 được phân biệt với năm nhãn root cause bắt buộc của WB4.
4. Phân biệt code-review severity với QA severity của WB3; phân biệt Dev PASS, QA recommendation và production approval.
5. Nêu sự không thống nhất giữa mô tả tổng quan workbook và baseline patient/staff/API thật; dạy cách đưa mismatch vào clarification thay vì tự mở rộng hệ thống.
6. Nêu rủi ro spec một-file cũ và gói FROZEN nhiều file; không coi tên file hoặc số file là bằng chứng phiên bản có hiệu lực.
7. Ghi rõ thiếu WB5 và không bịa rubric, thời lượng/số slide. Bố cục capstone do hub đề xuất.

## Phạm vi kết luận

Ma trận xác nhận nội dung học đã bám các bước/đầu ra trong nguồn hiện có; không chứng nhận người học đã đạt năng lực, không thay thế workbook gốc hay hướng dẫn bổ sung của giảng viên. Các số test/findings lịch sử của project chỉ minh họa giới hạn evidence của từng snapshot. Lần cập nhật này không tái audit backend hay đổi kết quả bài nộp cũ.

## Kiểm tra giao diện cho lần cập nhật

Đã chạy Chrome/Playwright trên bản local: 19 route bài học ở desktop 1440px và mobile 390px; 7 quiz/đáp án workbook; trang đối chiếu 5 buổi; tìm kiếm; sao chép template; điều hướng mobile; bảo toàn tiến độ bài cũ và lưu tiến độ bài mới; mô phỏng 36 slot. Không có JavaScript page error, asset nội bộ lỗi HTTP hoặc tràn ngang toàn trang. Đã xem ảnh render trang chủ, trang workbook trên mobile và bảng năm nhãn nguyên nhân. Đây là kiểm tra chức năng/hiển thị, không phải đánh giá năng lực học tập hay chứng nhận accessibility đầy đủ.
