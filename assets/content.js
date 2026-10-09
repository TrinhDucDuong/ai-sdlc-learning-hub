import { workbookLessons } from './workbooks.js';

export const modules = [
  { id: "day1", label: "Buổi 01", title: "Tư duy & cộng tác", note: "Context xuyên suốt vòng đời" },
  { id: "day2", label: "Buổi 02", title: "Yêu cầu & thiết kế", note: "Đặc tả đủ rõ để thực thi" },
  { id: "day3", label: "Buổi 03", title: "Phát triển & kiểm thử", note: "Chứng minh hành vi bằng test" },
  { id: "day4", label: "Buổi 04", title: "Governance", note: "Truy vết, kiểm soát, trách nhiệm" },
  { id: "day5", label: "Buổi 05", title: "AI-driven workflow", note: "Ghép các bước thành một hệ thống" },
  { id: "speckit", label: "Thực hành", title: "Spec Kit & MedBook", note: "Áp dụng trên codebase có sẵn" },
];

const coreLessons = [
  {
    id: "context", module: "day1", title: "AI trong toàn bộ SDLC", minutes: 9,
    intro: "Tốc độ viết code chỉ là một phần. Chất lượng bàn giao ngữ cảnh quyết định cả quy trình có đi nhanh hơn hay không.",
    goals: ["Phân biệt AI-assisted với AI-driven", "Nhận ra context drift ở điểm bàn giao", "Lập một artifact map có người chịu trách nhiệm"],
    sections: [
      ["SDLC vẫn có những công việc cốt lõi", "<p>Yêu cầu, thiết kế, phát triển, kiểm thử, triển khai và vận hành vẫn tồn tại. AI thay đổi cách thực hiện và cách phối hợp: làm rõ bài toán, khám phá phương án, tạo artifact, xác minh, hỗ trợ phát hành rồi phân tích phản hồi. Một công cụ viết code tốt chưa tự giải quyết được việc BA và QA hiểu khác nhau về cùng một quy tắc.</p><p><strong>AI-assisted</strong> thường là hỗ trợ từng tác vụ riêng lẻ. <strong>AI-driven workflow</strong> tổ chức cả chuỗi công việc quanh ngữ cảnh chung, tiêu chí kiểm tra, dấu vết và điểm con người quyết định.</p>"],
      ["Context drift và context debt", "<p>Context drift là ý nghĩa bị lệch qua các lần chuyển giao. BA nói ưu tiên y tế rồi thời gian chờ, nhưng developer chỉ nhận một mô tả ‘xếp hàng’ và cài FIFO. Code có thể chạy tốt mà giải quyết sai nghiệp vụ.</p><p>Context debt là tri thức cần thiết không còn nằm trong artifact được quản lý: lý do chỉ ở chat cũ, người cũ nhớ nhưng repo không ghi. Drift là sự lệch; debt là khoản thiếu tri thức khiến thay đổi sau này tốn kém.</p>"],
      ["Một artifact map dùng được", "<p>Với mỗi phase, ghi: input, output, nguồn có hiệu lực, owner, người nhận và điều kiện bàn giao. Ví dụ requirement package chuyển sang thiết kế phải mang theo BR, AC, thuật ngữ, ngoại lệ, ràng buộc và các câu hỏi chưa chốt. File PDF dài chưa chắc là context đủ.</p><p>Đo hiệu quả bằng lead time, rework, lỗi lọt và chất lượng bàn giao. Không suy ra năng suất toàn đội từ số dòng code AI sinh.</p>"],
    ],
    example: "MedBook có nhiều snapshot: bản nền, bài Day3 chỉ có repository và bản mẫu Day4 có thêm UI/engine. Đưa nhầm snapshot vào AI có thể khiến nó giả định một API đã tồn tại. Ghi đường dẫn baseline và phạm vi trước khi giao việc.",
    exercise: "Lập 3 dòng artifact map cho yêu cầu → thiết kế → kiểm thử của chức năng tạo lịch hàng loạt.",
    solution: "Yêu cầu: spec/AC và quyết định xử lý xung đột, owner BA. Thiết kế: API/transaction/lock và ADR, owner Tech Lead. Kiểm thử: mapping AC–test, log thực thi và giới hạn, owner QA. Mỗi dòng có nguồn phiên bản và tiêu chí nhận bàn giao.",
    quiz: { q: "AI tạo code nhanh hơn nhưng rework tăng. Bước phân tích đầu tiên phù hợp nhất?", options: ["Tăng số agent", "Kiểm tra ngữ cảnh và quyết định bị mất khi bàn giao", "Đo số dòng code mỗi giờ"], correct: 1, why: "Cần tìm nguyên nhân toàn quy trình. Tăng tốc một phase không bù được nghiệp vụ bị hiểu sai ở phase sau." },
    source: "Session 1, trang 13–29; Session 4, trang 5."
  },
  {
    id: "human-ai", module: "day1", title: "Ai làm, ai quyết định?", minutes: 7,
    intro: "Chọn mức tự chủ theo rủi ro, khả năng khôi phục và trách nhiệm; tránh giao quyết định nghiệp vụ chỉ vì AI trả lời tự tin.",
    goals: ["Chọn HITL, HOTL hoặc HOOTL phù hợp", "Tách người thực thi và người chịu trách nhiệm", "Thiết kế checkpoint có nội dung rõ"],
    sections: [
      ["Ba mô hình cộng tác", "<p><strong>Human-in-the-loop:</strong> con người xác nhận trước một hành động hoặc trước khi dùng kết quả, phù hợp với quyết định rủi ro cao. <strong>Human-on-the-loop:</strong> AI làm trong quy trình rõ, con người giám sát và can thiệp. <strong>Human-out-of-the-loop:</strong> tự động trong phạm vi chính sách đã thiết lập, thường cho việc rủi ro thấp và có thể phục hồi.</p><p>Không xếp ba mô hình thành thang ‘AI càng tốt càng ít người’. Một quyết định phát hành vẫn cần chủ sở hữu dù việc chạy test đã tự động.</p>"],
      ["Responsibility matrix", "<p>BA/PO xác nhận intent, BR và mức ưu tiên. Tech Lead quyết định kiến trúc, ranh giới và trade-off. Developer cung cấp context, tổ chức triển khai và review. QA xác nhận hành vi, thiết kế kiểm thử và phân tích rủi ro. AI có thể hỗ trợ tất cả các vai trò này nhưng không tự sở hữu trách nhiệm của họ.</p>"],
      ["Checkpoint phải có đầu vào và quyết định", "<p>‘Human review’ là tên một hoạt động, chưa phải checkpoint đủ rõ. Hãy ghi người review, artifact cần xem, tiêu chí, kết quả approve/request changes và bằng chứng quyết định. Chỉ yêu cầu review ở các ranh giới có ý nghĩa; không buộc con người xác nhận từng dòng code hay mỗi lần chạy lint.</p>"],
    ],
    example: "AI có thể sinh 36 slot từ quy tắc đã chốt. Quyết định cho phép bỏ qua slot xung đột hay hủy cả đợt ảnh hưởng trải nghiệm nhân viên, nên phải được thể hiện thành chính sách nghiệp vụ. Bản thực hành chọn hủy cả đợt và ghi rõ đây là giả định MVP.",
    exercise: "Phân loại: sinh unit test; chọn chính sách hủy lịch; tự chạy lint; phê duyệt release.",
    solution: "Sinh test: AI thực thi, người review phạm vi và assertion. Chọn chính sách: Human xác nhận. Lint: tự động theo rule. Release: Human chịu trách nhiệm, sử dụng evidence do pipeline/AI tổng hợp.",
    quiz: { q: "Điều gì quyết định mức tự chủ của AI?", options: ["Rủi ro và khả năng kiểm soát của quyết định", "Độ dài prompt", "Model mới nhất luôn được toàn quyền"], correct: 0, why: "Mức tự chủ phải phù hợp với hậu quả của sai sót, cơ chế phục hồi và owner." },
    source: "Session 1, trang 30–36; Session 5, trang 6–9."
  },
  {
    id: "requirements", module: "day2", title: "Yêu cầu, BR và AC", minutes: 12,
    intro: "Biến ‘tạo lịch nhanh hơn’ thành nhu cầu rõ, quy tắc có chủ sở hữu và hành vi có thể kiểm tra.",
    goals: ["Tách nhu cầu khỏi giải pháp", "Viết AC theo Given–When–Then", "Làm rõ ngoại lệ trước khi code"],
    sections: [
      ["Elicitation → clarification → specification", "<p>Elicitation thu thập mục tiêu, stakeholder, hệ thống hiện có và ràng buộc. Clarification bóc các chỗ mơ hồ: ai được làm, làm khi nào, dữ liệu nào hợp lệ, xử lý thất bại ra sao. Specification ghi kết quả đủ chính xác để các bên hiểu giống nhau. AI hỗ trợ đặt câu hỏi và phát hiện thiếu sót; người hiểu nghiệp vụ xác nhận câu trả lời.</p>"],
      ["User Story, Business Rule và Acceptance Criterion", "<p><strong>User Story</strong> diễn đạt actor, nhu cầu và giá trị: ‘Là staff, tôi muốn tạo lịch theo tuần để giảm nhập lặp’. <strong>BR</strong> là quy tắc: một bác sĩ không có hai slot giao thời gian. <strong>AC</strong> mô tả bằng chứng quan sát được: khi một slot dự kiến giao với slot có sẵn, xác nhận trả xung đột và không tạo slot nào.</p><p>NFR bổ sung chất lượng: giới hạn khối lượng, khả năng phục hồi, bảo mật, thời gian phản hồi. Đừng biến mọi quyết định thành công nghệ trong User Story.</p>"],
      ["Given–When–Then", "<pre><code>Given bác sĩ đã có slot 08:15–08:45\nWhen staff xác nhận đợt chứa 08:00–08:30\nThen hệ thống báo xung đột\nAnd không tạo bất kỳ slot nào trong đợt</code></pre><p>AC tốt nêu trạng thái ban đầu, tác nhân, hành động và kết quả. Ngoài happy path, cần boundary, negative, phân quyền và concurrent cases. ‘Hệ thống chạy đúng’ không kiểm chứng được.</p>"],
      ["Phạm vi và ưu tiên", "<p>Giới hạn MVP để hoàn thành một luồng có giá trị: một bác sĩ, một ca/ngày, khoảng ngày hữu hạn, preview và confirm. Lưu mẫu tái sử dụng, lịch ngày lễ và tự sinh lịch mỗi tuần là các feature khác. Ghi câu hỏi chưa chốt kèm owner và mức ảnh hưởng; không để AI âm thầm chọn giá trị nghiệp vụ.</p>"],
    ],
    example: "Thời lượng 30 phút chia hết ca 08:00–11:00. Với 40 phút, phải chọn chính sách: báo lỗi, bỏ phần dư hay tạo slot ngắn cuối. Bản MVP báo lỗi. Chính sách đó phải xuất hiện ở spec và test.",
    exercise: "Viết AC cho hai slot tiếp giáp 08:00–08:30 và 08:30–09:00.",
    solution: "Given đã có slot kết thúc 08:30; When tạo slot bắt đầu 08:30 cùng bác sĩ/ngày; Then được phép tạo nếu không có xung đột khác. Khoảng thời gian dùng [start,end), nên chỉ tiếp giáp không phải giao nhau.",
    quiz: { q: "Câu nào là AC kiểm chứng được?", options: ["Giao diện thân thiện", "Code phải dùng service", "Có xung đột thì 409 và số slot không đổi"], correct: 2, why: "Có điều kiện kích hoạt và kết quả quan sát được. Thiết kế service thuộc kế hoạch kỹ thuật." },
    source: "Session 2, trang 4–15."
  },
  {
    id: "architecture", module: "day2", title: "Thiết kế và AI-ready spec", minutes: 10,
    intro: "Một gói yêu cầu chưa trả lời được mọi câu hỏi triển khai. Thiết kế cần nối nghiệp vụ với component, dữ liệu và ranh giới giao dịch.",
    goals: ["Đánh giá trade-off theo context", "Viết ADR có lý do", "Chuẩn bị gói spec liên kết được"],
    sections: [
      ["Thiết kế bắt đầu từ hệ thống thật", "<p>Đọc kiến trúc, dependency, schema, API và các test đang bảo vệ hành vi. Với MedBook: Express và PostgreSQL; Route → Service → Repository; SQL tham số hóa; frontend Vanilla JS. Việc thêm Redis hay một framework mới chỉ để sinh lịch có thể tăng chi phí mà không giải quyết yêu cầu nào.</p>"],
      ["Component và tương tác", "<p>Route xử lý HTTP và gọi service. Service kiểm tra nghiệp vụ và sở hữu transaction. Repository thực hiện SQL. Hàm chia lịch thuần tách khỏi database để kiểm tra các mốc ngày/giờ. Khi thiết kế tương tác, hỏi ai gọi ai, dữ liệu nào truyền qua, ai sở hữu dữ liệu và thất bại ở đâu.</p><p>Trong MedBook, preview chỉ đọc. Confirm phải kiểm tra lại rồi ghi trong transaction. Khóa theo bác sĩ phối hợp các đường tạo/sửa lịch; khóa theo request phối hợp các lần gửi lại.</p>"],
      ["ADR và trade-off", "<p>Một ADR ngắn có bối cảnh, các lựa chọn, quyết định, lý do và hệ quả. Ví dụ chọn khóa theo bác sĩ: dễ hiểu, không thêm hạ tầng, nhưng các đợt cùng bác sĩ phải chờ nhau. Một transaction không tự bảo đảm không trùng nếu hai transaction cùng đọc trước khi ghi; cần chiến lược kiểm soát đồng thời rõ.</p>"],
      ["AI-ready specification package", "<p>Gói đủ dùng liên kết business problem, User Story, BR/AC, thuật ngữ, entity model, API contract, interaction, NFR, ADR và open questions. Một spec là nguồn làm việc chung để AI developer, tester, reviewer hiểu cùng intent. Không cần tài liệu thật dài; cần đủ thông tin đúng và khả năng truy vết.</p>"],
    ],
    example: "Tên feature cũ có chữ ‘Rescheduling’ nhưng MedBook không có endpoint dời appointment. Đọc tên không đủ để quyết định kiến trúc. Code, contract và scope có hiệu lực mới xác định phần nào tồn tại.",
    exercise: "Viết trade-off giữa hủy cả đợt và bỏ qua slot xung đột.",
    solution: "Hủy cả đợt: đơn giản, dễ giải thích, không có lịch thiếu âm thầm; staff có thể phải chỉnh lại nhiều. Bỏ qua: thuận tiện khi xung đột ít nhưng phải báo rõ số đã tạo/bỏ qua, quản lý retry và nghiệm thu từng phần.",
    quiz: { q: "Vì sao cần kiểm tra lại khi confirm?", options: ["Preview đã giữ chỗ", "Dữ liệu có thể thay đổi sau preview", "Để luôn tạo thêm một request"], correct: 1, why: "Preview là ảnh chụp tại một thời điểm. Các giao dịch khác có thể thay đổi lịch trước khi xác nhận." },
    source: "Session 2, trang 17–33."
  },
  {
    id: "development", module: "day3", title: "Từ spec đến coding task", minutes: 9,
    intro: "Giao cho AI một nhiệm vụ có ranh giới, context phù hợp và tiêu chí hoàn thành.",
    goals: ["Tạo development context theo task", "Chia task theo phụ thuộc", "Review code đối chiếu spec"],
    sections: [
      ["Development context", "<p>Spec trả lời cần xây gì; development context bổ sung module/file liên quan, API đang có, dữ liệu, phụ thuộc, coding convention và chiến lược triển khai. Chọn context theo nhiệm vụ. Task repository cần data model, query mẫu và invariant; không cần mọi cuộc hội thoại của toàn khóa.</p>"],
      ["Kế hoạch và decomposition", "<p>Chia chức năng thành phần có thể kiểm chứng: sinh slot; kiểm tra xung đột; lưu batch; API; UI; integration test. Ghi task ID, AC liên quan, đường dẫn và phụ thuộc. Dấu [P] trong nhiều task template nghĩa là có thể song song nếu không đụng cùng trạng thái; không phải yêu cầu chạy mọi việc đồng thời.</p>"],
      ["Code review dựa trên intent", "<p>Review đầu tiên hỏi hành vi nào đang được cài đặt và nguồn nào quy định nó. Sau đó xét transaction, phân quyền, input, lỗi, SQL và mức tác động. Với chức năng hàng loạt, vòng lặp gọi API tạo đơn lẻ có thể tạo dở dang; review cần phát hiện vi phạm AC all-or-nothing.</p>"],
      ["Development handoff", "<p>Bàn giao gồm source, coding log, test đã chạy, cách tái hiện, API, giả định và phần chưa làm. Ghi đúng scope. Repository chọn ứng viên chạy được chưa chứng minh luồng offer UI hoạt động. Một checkpoint ‘Ready for QA’ khác với ‘Ready for release’.</p>"],
    ],
    example: "Bài Day3 trong workspace chỉ triển khai TASK-04 và prerequisite schema. Bản Day5 kế thừa nó và thêm lịch hàng loạt; không tự nhận rằng waiting list đã hoàn thiện.",
    exercise: "Task ‘làm backend’ quá rộng. Hãy chia thành ba task có đầu ra kiểm chứng.",
    solution: "T1: hàm sinh lịch + unit test 36 slot và invalid dates. T2: repository/conflict + PostgreSQL integration tests. T3: service/API atomic create + roles, retries, rollback và race tests.",
    quiz: { q: "Một test repository pass chứng minh điều gì?", options: ["Toàn bộ chức năng UI hoạt động", "Phần hành vi repository được assertion kiểm tra", "Đủ điều kiện release"], correct: 1, why: "Phạm vi evidence phải khớp phạm vi test. Luồng service, HTTP và UI cần bằng chứng tương ứng." },
    source: "Session 3, trang 5–14; ví dụ bổ sung từ bài thực hành MedBook."
  },
  {
    id: "quality", module: "day3", title: "Kiểm thử và bằng chứng chất lượng", minutes: 12,
    intro: "Số test pass có ý nghĩa khi biết chúng kiểm tra hành vi nào, trên phiên bản nào và bằng assertion nào.",
    goals: ["Phân biệt unit/integration/E2E", "Tạo traceability ở mức assertion", "Đọc một báo cáo test có giới hạn rõ"],
    sections: [
      ["Chọn loại kiểm thử theo rủi ro", "<p>Unit test phù hợp cho tính ngày, chia slot, kiểm tra biên. Integration test với PostgreSQL thật kiểm constraint, transaction và race. E2E qua trình duyệt xác minh thao tác staff, preview mất hiệu lực khi đổi input và hiển thị lỗi. Mock không thay thế được khóa và transaction của database.</p>"],
      ["AC → test → assertion", "<p>Gắn AC vào tên test giúp tìm nguồn nhưng chưa chứng minh coverage. Với AC rollback, phải kiểm tra số slot và batch sau lỗi không đổi; chỉ assert HTTP 500 là thiếu. Với idempotency, kiểm cả receipt, số bản ghi và cùng requestId khi retry. Với concurrency, phát nhiều request thực sự đồng thời và kiểm số bên thắng.</p>"],
      ["Evidence có thể tái hiện", "<p>Báo cáo nên ghi revision, Node/PostgreSQL version, lệnh chạy, database dùng, ngày chạy, pass/fail/skip và link log. Phân biệt test chưa chạy, test thất bại và test bị bỏ qua. Không dùng số pass lịch sử như kết quả xác minh code hiện tại.</p><p>Test MedBook reset dữ liệu nên chỉ chạy ở DB riêng. Giữ regression cũ nguyên vẹn để phát hiện tác động ngoài ý muốn.</p>"],
      ["QA gate và readiness", "<p>QA kiểm completeness, consistency, behavior coverage và rủi ro còn lại. Khi lỗi: triage → sửa → regression/retest → đánh giá lại. Qua QA gate chưa tự động là production ready; release còn cần business acceptance, kế hoạch triển khai/rollback và điều kiện vận hành.</p>"],
    ],
    example: "Bản capstone kiểm race giữa batch và API tạo slot cũ. Nếu chỉ test hai batch với nhau, một đường ghi cũ chưa được khóa vẫn có thể làm hỏng invariant.",
    exercise: "Viết assertion cho lỗi xảy ra sau khi insert slot nhưng trước khi lưu xong batch.",
    solution: "Ghi counts trước; chủ động gây lỗi trong transaction; assert response thất bại; assert counts slots và batches bằng trước; thử request mới để chứng minh khóa được giải phóng và hệ thống phục hồi.",
    quiz: { q: "Tên test có AC-ID nhưng không kiểm rollback. Có thể kết luận AC rollback được cover?", options: ["Có, vì tên đã gắn AC", "Có, nếu suite xanh", "Không, cần assertion kiểm hậu quả dữ liệu"], correct: 2, why: "Traceability chỉ có giá trị khi test chứng minh đúng hành vi mà AC yêu cầu." },
    source: "Session 3, trang 17–23; Session 5, trang 15."
  },
  {
    id: "governance", module: "day4", title: "Điều tra failure & quản trị tri thức", minutes: 12,
    intro: "Khi output sai, cần tìm nguyên nhân có bằng chứng và bổ sung hàng rào ngăn lặp lại.",
    goals: ["Phân loại context/engineering/governance failures", "Tách symptom khỏi root cause", "Biến finding thành quy tắc kiểm soát"],
    sections: [
      ["Ba nhóm failure", "<p><strong>Context:</strong> mất ngữ cảnh, requirement drift, spec thiếu, thuật ngữ không thống nhất. <strong>Engineering:</strong> AI tự quyết sai, kiến trúc bị bào mòn, tự tin sai vì test. <strong>Governance:</strong> thiếu stakeholder review, traceability hoặc ownership.</p><p>Không quy mọi bug cho hallucination. Một race condition là lỗi kỹ thuật; cần bằng chứng riêng nếu muốn kết luận nguyên nhân do spec thiếu hay checkpoint vắng mặt.</p>"],
      ["Cách ghi finding", "<p>Ghi expected behavior và nguồn; actual behavior; vị trí code/log; kịch bản tái hiện; tác động; severity; root cause được chứng minh; hành động sửa và cách verify. Phân biệt quan sát tĩnh với lỗi đã tái hiện. Không biến nghi vấn thành kết luận chắc chắn.</p>"],
      ["Bốn tầng tri thức trong spec", "<p>Business Requirement giải thích vì sao làm. Use Case mô tả ai làm gì và ngoại lệ. Entity Model thống nhất khái niệm và quan hệ. Acceptance Criteria xác định làm sao biết đúng. Những tầng này liên kết để người mới truy ngược từ code tới lý do nghiệp vụ.</p>"],
      ["Sáu nguyên tắc governance", "<p><strong>Requirement-centric:</strong> thay đổi bắt đầu từ intent. <strong>AI-assisted:</strong> AI thực thi trong ranh giới. <strong>Iterative improvement:</strong> spec sống và cập nhật dần. <strong>Test-protected:</strong> test bảo vệ hành vi. <strong>Stakeholder-centric:</strong> người hiểu nghiệp vụ tham gia. <strong>Traceable:</strong> đi được từ requirement đến code/test và ngược lại.</p><p>Mỗi rule cần owner và evidence. ‘Review kỹ hơn’ không đủ; ‘Tech Lead kiểm mọi đường ghi lịch dùng chung cơ chế khóa, kèm race test’ cụ thể hơn.</p>"],
    ],
    example: "Một giới hạn 90 ngày xuất hiện trong code phải có nguồn trong spec/decision log. Bản MVP ghi rõ giới hạn là lựa chọn triển khai được công khai, không ghi giả một chữ ký phê duyệt nghiệp vụ.",
    exercise: "Chuyển finding ‘spec và code dùng timeout khác nhau’ thành governance rule.",
    solution: "Owner BA/TL duy trì một nguồn timeout có hiệu lực; mỗi thay đổi ghi spec và config mapping; QA kiểm boundary tại giá trị đó; gate từ chối nếu code/config/spec lệch nhau.",
    quiz: { q: "Có bug đồng thời trong code AI. Kết luận đầu tiên hợp lý?", options: ["AI hallucination", "Ghi lỗi kỹ thuật và điều tra nguyên nhân bằng evidence", "Human chắc chắn đã bỏ review"], correct: 1, why: "Nguồn sinh code không đủ để chứng minh nguyên nhân. Cần tách lỗi quan sát được khỏi suy luận về quy trình." },
    source: "Session 4, trang 5–40."
  },
  {
    id: "workflow", module: "day5", title: "Thiết kế AI-driven workflow", minutes: 10,
    intro: "Nối intent, thực thi, evidence, quality gate và quyết định thành một vòng lặp có thể vận hành.",
    goals: ["Thiết kế luồng change request", "Đặt ranh giới AI autonomy", "Áp dụng 5 quy tắc review"],
    sections: [
      ["Mười bước của change request", "<p>Hiểu yêu cầu → xây context → cập nhật spec → phân tích ảnh hưởng → lập kế hoạch → triển khai → kiểm chứng → human review → release → cập nhật tri thức chung. Đường đi có thể lặp lại khi evidence cho thấy cần sửa; không phải checklist hoàn thành một lần rồi bỏ.</p>"],
      ["AI execution loop", "<p>Trong intent và constraint đã xác nhận, AI lập kế hoạch, implement, test, analyze, fix và retest. Con người xác định phạm vi trước vòng lặp và review kết quả gate để quyết định tiếp theo. Quyết định thay chính sách, chấp nhận rủi ro hoặc phát hành cần owner.</p>"],
      ["Quality Gate", "<p>Gate xét <strong>đủ artifact</strong>, <strong>spec–code–test–docs nhất quán</strong>, <strong>chất lượng đạt tiêu chuẩn</strong> và <strong>truy vết được</strong>. Test results, lint, security checks, migration và docs đều là phần evidence tùy loại thay đổi. PASS kỹ thuật cung cấp cơ sở cho quyết định, không thay thế quyết định đó.</p>"],
      ["Năm quy tắc review", "<ol><li>Tách review thay đổi intent trong Spec PR và implementation trong Code PR.</li><li>Mỗi thay đổi truy được về Use Case.</li><li>Đọc spec trước khi review code.</li><li>Mỗi AC quan trọng có test chứng minh.</li><li>Xác định decision đến từ spec, human/ADR hay AI tự suy luận.</li></ol>"],
    ],
    example: "Day5 bổ sung tạo lịch hàng loạt vào MedBook. Chuỗi evidence gồm spec → API/lock plan → task → source → test rollback/race → demo UI. GitHub Pages chỉ host learning hub tĩnh; backend MedBook vẫn cần Node và PostgreSQL.",
    exercise: "Một suite xanh nhưng npm audit phát hiện dependency nghiêm trọng. Gate nên làm gì?",
    solution: "Ghi finding bảo mật, đánh giá ảnh hưởng và sửa phiên bản trong phạm vi tương thích rồi kiểm lại. Nếu chưa xử lý được, gate cần phản ánh rủi ro còn tồn tại; không ghi PASS chỉ vì test xanh.",
    quiz: { q: "Điều kiện nào diễn đạt đúng Quality Gate?", options: ["Có đủ evidence đáng tin, nhất quán và đạt tiêu chuẩn", "Có một screenshot app chạy", "Tất cả test có sẵn pass là đủ"], correct: 0, why: "Gate bao gồm phạm vi và chất lượng bằng chứng, không chỉ một tín hiệu đơn lẻ." },
    source: "Session 5, trang 3–17."
  },
  {
    id: "speckit-intro", module: "speckit", title: "Spec Kit là gì?", minutes: 8,
    intro: "Bộ công cụ mã nguồn mở của GitHub giúp coding agent làm việc có quy trình, template và artifact được lưu trong dự án.",
    goals: ["Hiểu Spec Kit hỗ trợ việc gì", "Phân biệt CLI và coding agent", "Biết khi nào nên áp dụng"],
    sections: [
      ["Các thành phần", "<p><strong>Specify CLI</strong> khởi tạo cấu trúc, template, script và tích hợp agent. <strong>Coding agent</strong> đọc workflow, giúp viết spec/plan/task và triển khai. <strong>Artifact trong repo</strong> giữ nguyên tắc, yêu cầu, thiết kế, task và evidence để lần làm việc sau có thể tiếp tục.</p><p>Spec Kit không phải model AI, không phải backend framework và không tự biết nghiệp vụ. Kết quả phụ thuộc context, quyết định và kiểm chứng của nhóm.</p>"],
      ["Spec-driven development", "<p>Thống nhất ‘cần gì, vì sao’ trước khi lựa chọn ‘làm thế nào’. Constitution ở cấp project; spec/plan/tasks theo từng feature. Khi thay đổi nghiệp vụ, cập nhật artifact liên quan và kiểm tra tác động, thay vì chỉ nối thêm prompt vào một đoạn chat dài.</p>"],
      ["Tác dụng trên dự án có sẵn", "<p>Giúp ghi baseline, invariant, API cần giữ, hành vi được phép thay, ranh giới và cách verify. Với feature nhiều rule như lịch hàng loạt, việc viết trước conflict policy và retry semantics giúp tránh triển khai theo phỏng đoán.</p><p>Với sửa một nhãn nhỏ, đầy đủ quy trình feature có thể quá nặng. Chọn workflow theo mức tác động. Spec Kit 1.1.2 còn có các extension bug-fix và idea assessment tùy chọn; chúng không phải các phase bắt buộc của SDD.</p>"],
    ],
    example: "Thư mục .specify chứa cấu hình/template và constitution. specs/001-weekly-slot-batches chứa spec.md, plan.md, research.md, data-model.md, contracts/, tasks.md và quickstart.md.",
    exercise: "Vì sao đã có README vẫn cần feature spec?",
    solution: "README thường giới thiệu cách chạy và toàn cảnh. Feature spec giữ quyết định hành vi cụ thể, ngoại lệ và tiêu chí nghiệm thu của một thay đổi. Hai tài liệu phục vụ mục đích khác nhau và nên liên kết.",
    quiz: { q: "Ai thực hiện yêu cầu trong skill Spec Kit?", options: ["PostgreSQL", "Coding agent dựa trên workflow và context", "Specify CLI tự viết toàn bộ ứng dụng"], correct: 1, why: "CLI cài hạ tầng workflow. Agent thực hiện các bước khi bạn gọi skill/command trong giao diện agent." },
    source: "GitHub Spec Kit README và docs chính thức; phiên bản thực hành 1.1.2."
  },
  {
    id: "speckit-setup", module: "speckit", title: "Cài đặt và dùng đúng cú pháp", minutes: 10,
    intro: "Phân biệt lệnh chạy ở terminal với skill gọi trong agent. Ghim phiên bản để hướng dẫn có thể tái hiện.",
    goals: ["Khởi tạo trên project có sẵn", "Gọi đúng skill theo integration", "Đọc cấu trúc file được sinh"],
    sections: [
      ["Chuẩn bị", "<p>Cần Python 3.11+, uv và coding agent được hỗ trợ. Có thể dùng uv quản lý Python 3.12. Với codebase hiện có, tạo branch hoặc bản copy trước, đọc các file đã có và kiểm tra diff sau init. Không khởi tạo chồng một bản template vào repo mà chưa biết file nào sẽ đổi.</p>"],
      ["Lệnh terminal cho bản thực hành", "<pre><code>uv tool install --python 3.12 specify-cli==1.1.2\nspecify init --here --integration codex --integration-options=\"--skills\" --script ps</code></pre><p>Chạy trong thư mục ứng dụng. Lệnh init có thể hỏi vì folder không rỗng. Chỉ dùng <code>--force --non-interactive</code> trong bản copy đã kiểm tra để chạy tự động. Với Linux/macOS chọn script phù hợp, chẳng hạn <code>--script sh</code>. Dùng <code>specify init --help</code> để đối chiếu phiên bản đang cài.</p>"],
      ["Skill trong Codex", "<pre><code>$speckit-constitution\n$speckit-specify Mô tả chức năng và giá trị nghiệp vụ\n$speckit-clarify\n$speckit-plan Ràng buộc và context kỹ thuật\n$speckit-tasks\n$speckit-analyze\n$speckit-implement\n$speckit-converge</code></pre><p>Đây là nội dung gửi trong chat của agent, không phải lệnh PowerShell. Codex skills mode của bản 1.1.2 sinh skill vào <code>.agents/skills</code>. Một số integration dùng <code>/speckit-*</code>; tài liệu cũ thường dùng <code>/speckit.*</code> và <code>--ai</code>. Hãy dùng hướng dẫn mà bản init thực tế in ra.</p>"],
      ["Artifact nào nằm ở đâu?", "<pre><code>.specify/\n  memory/constitution.md\n  feature.json\n  templates/\n  scripts/\n.agents/skills/\nspecs/001-weekly-slot-batches/\n  spec.md\n  plan.md\n  tasks.md\n  contracts/\n  research.md\n  data-model.md\n  quickstart.md</code></pre><p><code>feature.json</code> chỉ tới feature đang làm; trong bản hiện tại, tên spec directory không buộc trùng tên Git branch. Khi agent không nhận skill mới, mở lại phiên làm việc trong đúng project.</p>"],
    ],
    example: "Bản MedBook Day5 đã chạy CLI init 1.1.2 thật và các script setup-plan/check-prerequisites. Artifact được agent hoàn thiện theo workflow; không có một ‘CLI tự code’ phía sau.",
    exercise: "Terminal báo không nhận $speckit-plan. Sửa thế nào?",
    solution: "Mở coding agent trong project và gửi skill trong chat. Kiểm tra .agents/skills đã được tạo và integration đúng. Không cố cài một executable tên speckit-plan.",
    quiz: { q: "Lệnh nào chạy trong terminal?", options: ["$speckit-specify", "$speckit-converge", "specify init --here --integration codex"], correct: 2, why: "specify là CLI. Các tên speckit-* là skill/command của agent và cú pháp phụ thuộc integration." },
    source: "https://github.com/github/spec-kit; https://github.github.io/spec-kit/reference/integrations.html; specify-cli 1.1.2 init --help."
  },
  {
    id: "speckit-workflow", module: "speckit", title: "Một feature đi qua Spec Kit", minutes: 12,
    intro: "Mỗi bước tạo ra một cơ sở để review bước tiếp theo. Không cần chạy lại toàn bộ workflow khi chỉ đổi một chi tiết nhỏ.",
    goals: ["Biết input/output của từng bước", "Viết prompt theo đúng giai đoạn", "Hiểu analyze và converge"],
    sections: [
      ["Constitution, specify và clarify", "<p>Constitution giữ nguyên tắc ổn định như kiến trúc, test và quản lý quyết định. Specify mô tả actor, nhu cầu, scope, scenarios, AC và success criteria; chưa nhồi mọi chi tiết SQL. Clarify tập trung các lựa chọn ảnh hưởng hành vi: conflict policy, timezone, retry và giới hạn. Ghi câu trả lời vào spec thay vì chỉ để trong chat.</p>"],
      ["Plan và tasks", "<p>Plan nối spec với codebase thật: file nào đổi, API nào thêm, schema, transaction, phụ thuộc và test strategy. Tasks chia thành công việc thực hiện được, có thứ tự và đường dẫn. Task phải thực hiện requirement đã tồn tại, không tự sinh thêm một feature chỉ vì tiện.</p>"],
      ["Analyze, implement và converge", "<p>Analyze rà nhất quán giữa spec, plan, tasks và constitution trước triển khai. Implement làm theo task và thu evidence. Converge của bản hiện tại đánh giá codebase so với yêu cầu và ghi phần việc còn lại; lặp implement/converge khi còn gap. Báo cáo ‘Converged’ vẫn phụ thuộc evidence và không thay thế nghiệm thu nghiệp vụ.</p>"],
      ["Prompt có thể áp dụng", "<pre><code>Bổ sung tạo lịch theo mẫu tuần vào MedBook hiện có.\nStaff chọn bác sĩ, khoảng ngày, thứ, ca và thời lượng.\nPhải xem trước; confirm kiểm tra lại xung đột.\nCó lỗi thì không tạo một phần; retry không tạo trùng.\nKhông làm notification hoặc tự dời appointment.\nLiệt kê các chính sách chưa đủ rõ trước khi triển khai.</code></pre><p>Ở bước plan, bổ sung stack, source baseline và constraint kỹ thuật. Ở bước review, yêu cầu chỉ ra AC nào chưa được assertion chứng minh. Luôn đọc artifact trước khi cho phép hành vi quan trọng đi tiếp.</p>"],
    ],
    example: "Trong plan MedBook, khóa theo bác sĩ phải dùng cả ở API hàng loạt lẫn API tạo/sửa cũ. Analyze chỉ đối chiếu file chưa đủ để biết khóa hoạt động; integration race test cung cấp evidence ở bước implement.",
    exercise: "Sau implement, phát hiện retry tạo thêm 36 slot. Cần cập nhật artifact nào?",
    solution: "Đối chiếu AC idempotency; nếu AC đã rõ thì sửa implementation và bổ sung failing test, cập nhật task/evidence. Nếu chính sách chưa có, làm rõ rồi cập nhật spec, plan và tests. Không sửa spec chỉ để hợp thức hóa bug.",
    quiz: { q: "Constitution nên chứa nội dung nào?", options: ["Ngày cụ thể của một đợt lịch", "Nguyên tắc chất lượng, kiến trúc và quản trị dự án", "Toàn bộ log test"], correct: 1, why: "Constitution định hướng cấp project; chi tiết hành vi một feature thuộc spec và evidence có nơi lưu riêng." },
    source: "Spec Kit 1.1.2, các skills constitution/specify/plan/tasks/analyze/implement/converge; docs chính thức."
  },
  {
    id: "medbook-lab", module: "speckit", title: "Lab: tạo 36 slot cho MedBook", minutes: 15,
    intro: "Theo dõi một thay đổi từ nhu cầu đến dữ liệu, concurrency và evidence. Mô phỏng ngay bên dưới giúp hiểu logic chia lịch.",
    goals: ["Giải thích preview và confirm", "Hiểu transaction, lock và idempotency", "Tự thiết kế kịch bản demo"],
    sections: [
      ["Bài toán và baseline", "<p>MedBook đã tạo slot đơn lẻ nhưng chưa tạo hàng loạt. Bản thực hành kế thừa source Day3 TASK-04, giữ Express/pg và Vanilla JS. Feature thêm một bác sĩ mỗi đợt, khoảng tối đa 90 ngày, tối đa 500 slot, một ca/ngày. Các giới hạn là lựa chọn MVP được ghi rõ, không phải quy tắc bệnh viện đã được nghiên cứu thực tế.</p>"],
      ["Luồng ghi dữ liệu", "<p>Preview sinh candidates và tìm giao thời gian, không lưu. Confirm xác thực requestId, kiểm receipt cũ, khóa lịch bác sĩ, kiểm thời gian và xung đột lại, insert slots và receipt, rồi commit. Lỗi ở giữa dẫn đến rollback. Các đường tạo/sửa slot cũ dùng cùng khóa để phối hợp.</p><p>Idempotency key được scope theo staff. Dùng cùng key và payload trả receipt cũ; cùng key khác payload là lỗi. Receipt mô tả kết quả tạo ban đầu, không tự cập nhật khi slot bị sửa về sau.</p>"],
      ["Kịch bản demo", "<ol><li>Đăng nhập staff và xem trước 2 tuần thứ Hai/Tư/Sáu, 08:00–11:00, 30 phút: 36 slot.</li><li>Đổi input: nút xác nhận phải mất hiệu lực cho tới preview mới.</li><li>Xác nhận thành công và thấy slot trên màn hình hiện có.</li><li>Xem trước cùng lịch lần nữa: xuất hiện xung đột.</li><li>Dùng bệnh nhân đặt một slot mới; luồng cũ vẫn chạy.</li></ol>"],
      ["Bằng chứng cần mang theo", "<p>Unit tests kiểm lịch/biên/timezone. API integration tests kiểm roles, stale preview, rollback và retries. Race tests kiểm hai batch và batch với API cũ. Browser checks kiểm thao tác thật. Lint và dependency audit bổ sung quality gate. Backend chạy bằng Docker Node20/PostgreSQL16; trang mô phỏng tĩnh không gọi database.</p>"],
    ],
    example: "Công thức 2 tuần × 3 ngày/tuần × 3 giờ/ngày × 2 slot/giờ = 36 slot. Đây là số lượng tính từ ví dụ, không phải số đo tăng năng suất.",
    exercise: "Hai staff xác nhận cùng bác sĩ/cùng thời gian. Vì sao transaction riêng lẻ chưa đủ?",
    solution: "Cả hai có thể cùng đọc ‘chưa có slot’ rồi cùng insert nếu không phối hợp. Khóa doctor tuần tự hóa kiểm tra và ghi; bên sau nhìn thấy dữ liệu của bên trước rồi trả xung đột. Test phải phát request đồng thời thật.",
    quiz: { q: "Có thể host backend MedBook trực tiếp trên GitHub Pages không?", options: ["Không, Pages chỉ phục vụ nội dung tĩnh", "Có, PostgreSQL chạy trong trình duyệt", "Có nếu đổi đuôi JS thành HTML"], correct: 0, why: "Learning hub và mô phỏng chạy tĩnh trên Pages. MedBook cần tiến trình Node và database, được chạy riêng bằng Docker." },
    source: "Bài capstone MedBook Day5: specs/001-weekly-slot-batches và source/test tương ứng."
  },
];

export const lessons = modules.flatMap(m => [
  ...coreLessons.filter(l => l.module === m.id),
  ...workbookLessons.filter(l => l.module === m.id),
]);

export const glossary = [
  ["SDLC", "Software Development Life Cycle: vòng đời yêu cầu, thiết kế, phát triển, kiểm thử, triển khai và vận hành."],
  ["Artifact", "Sản phẩm công việc được lưu lại: spec, ADR, code, test, báo cáo hoặc log."],
  ["Context", "Ngữ cảnh cần thiết để hiểu và thực hiện đúng một nhiệm vụ, gồm nghiệp vụ, kỹ thuật và quyết định."],
  ["Context drift", "Ý nghĩa hoặc giả định bị lệch khi chuyển giao giữa người, agent hoặc phase."],
  ["Context debt", "Tri thức quan trọng thiếu trong artifact quản lý được, khiến thay đổi sau này khó và tốn công."],
  ["Business Rule (BR)", "Quy tắc nghiệp vụ xác định hành vi hoặc ràng buộc của hệ thống."],
  ["Acceptance Criterion (AC)", "Điều kiện quan sát/kiểm chứng được để chấp nhận một hành vi."],
  ["Use Case (UC)", "Luồng tương tác của actor với hệ thống, gồm luồng chính và ngoại lệ."],
  ["ADR", "Architecture Decision Record: bối cảnh, lựa chọn, quyết định kiến trúc và hệ quả."],
  ["NFR", "Non-functional requirement: tiêu chí chất lượng như độ tin cậy, bảo mật, hiệu năng."],
  ["Traceability", "Khả năng truy liên kết giữa nhu cầu, spec, quyết định, code, test và evidence."],
  ["Quality Gate", "Điểm kiểm tra theo tiêu chí chất lượng và bằng chứng trước khi chuyển bước."],
  ["Evidence", "Bằng chứng hỗ trợ kết luận: assertion, log thực thi, nguồn code, báo cáo trên revision xác định."],
  ["Regression test", "Kiểm thử bảo vệ hành vi đã có khi thêm hoặc sửa chức năng."],
  ["Idempotency", "Gửi lại cùng một yêu cầu không tạo thêm tác động ngoài kết quả của lần thực hiện ban đầu."],
  ["Transaction", "Nhóm thao tác dữ liệu cùng commit hoặc rollback; cần thêm chiến lược isolation/lock khi có cạnh tranh."],
  ["Race condition", "Kết quả phụ thuộc thứ tự xen kẽ của các thao tác đồng thời chưa được phối hợp đúng."],
  ["Constitution", "Bộ nguyên tắc cấp project được agent dùng để định hướng thiết kế, triển khai và review."],
  ["Spec Kit", "Toolkit mã nguồn mở của GitHub cung cấp workflow, template và script cho coding agent."],
  ["Brownfield", "Phát triển trên hệ thống có sẵn, phải hiểu constraint, compatibility và tác động đến hành vi cũ."],
];
