import { NavLink } from "@/components/NavLink";

export default function Documents() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📂 Tài liệu học tập</h2>

      <ul style={{ lineHeight: "2" }}>
        <li>
          <NavLink to="documents/bai-tap-01-cau-truc-thu-muc.docx">
            📥 Bài tập 01 – Cấu trúc thư mục
          </NavLink>
        </li>

        <li>
          <NavLink to="documents/bai-tap-02-tim-kiem-thong-tin.docx">
            📥 Bài tập 02 – Tìm kiếm thông tin
          </NavLink>
        </li>

        <li>
          <NavLink to="documents/bai-tap-03-danh-gia-thong-tin.docx">
            📥 Bài tập 03 – Đánh giá thông tin
          </NavLink>
        </li>

        <li>
          <NavLink to="documents/bao-cao-ai-sang-tao.docx">
            📥 Báo cáo – AI sáng tạo
          </NavLink>
        </li>

        <li>
          <NavLink to="documents/bao-cao-thuc-hanh-viet-prompt.docx">
            📥 Báo cáo – Thực hành viết Prompt
          </NavLink>
        </li>

        <li>
          <NavLink to="documents/su-dung-cong-cu-ho-tro.docx">
            📥 Sử dụng công cụ hỗ trợ
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
