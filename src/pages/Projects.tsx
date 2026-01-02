import PageWrapper from "@/components/layout/PageWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    number: 1,
    chapter: "Chương 1",
    title: "Máy tính và các thiết bị ngoại vi",
    objective: "Tìm hiểu cấu tạo, chức năng của máy tính và các thiết bị ngoại vi. Nhận biết và phân loại các loại thiết bị.",
    content: "Nghiên cứu về các thành phần phần cứng của máy tính bao gồm CPU, RAM, ổ cứng và các thiết bị ngoại vi như bàn phím, chuột, màn hình. Thực hành kết nối và cấu hình thiết bị.",
    attachments: [
      { label: "thao-tac-co-ban-voi-thu-muc-tttd.docx", url: "/documents/thao-tac-co-ban-voi-thu-muc-tttd.docx" }
    ]
  },
  {
    number: 2,
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    objective: "Phát triển kỹ năng tìm kiếm, đánh giá và sử dụng thông tin từ các nguồn đáng tin cậy trên Internet.",
    content: "Thực hành các kỹ thuật tìm kiếm nâng cao trên Google, đánh giá độ tin cậy của nguồn thông tin, và tổng hợp dữ liệu từ nhiều nguồn khác nhau.",
    attachments: [
      { label: "bai-tap-2-timkiemvadanhgiathongtin.docx", url: "/documents/bai-tap-2-timkiemvadanhgiathongtin.docx" }
    ]
  },
  {
    number: 3,
    chapter: "Chương 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    objective: "Hiểu khái niệm cơ bản về AI, các ứng dụng phổ biến và tác động của AI trong cuộc sống.",
    content: "Tìm hiểu về Machine Learning, Deep Learning và các ứng dụng AI như chatbot, nhận dạng hình ảnh. Thực hành sử dụng các công cụ AI trong học tập.",
    attachments: [
      { label: "bao-cao-thuc-hanh-viet-prompt-hieu-qua.docx", url: "/documents/bao-cao-thuc-hanh-viet-prompt-hieu-qua.docx" }
    ]
  },
  {
    number: 4,
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    objective: "Phát triển kỹ năng giao tiếp hiệu quả và làm việc nhóm trực tuyến sử dụng các công cụ số.",
    content: "Sử dụng các nền tảng như Microsoft Teams, Google Workspace để làm việc nhóm. Thực hành trình bày online và quản lý dự án nhóm.",
    attachments: [
      { label: "su-dung-cong-cu-hop-tac.docx", url: "/documents/su-dung-cong-cu-hop-tac.docx" }
    ]
  },
  {
    number: 5,
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    objective: "Tạo và chỉnh sửa các loại nội dung số bao gồm văn bản, hình ảnh, video và infographic.",
    content: "Sử dụng Canva, PowerPoint để thiết kế đồ họa. Tạo video ngắn với các công cụ chỉnh sửa cơ bản. Xuất bản nội dung lên các nền tảng số.",
    attachments: [
      { label: "bao-cao-cong-cu-ai-sang-tao-noi-dung.docx", url: "/documents/bao-cao-cong-cu-ai-sang-tao-noi-dung.docx" }
    ]
  },
  {
    number: 6,
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật",
    objective: "Nắm vững các nguyên tắc về an toàn thông tin và liêm chính học thuật trong môi trường số.",
    content: "Học về bảo mật mật khẩu, nhận biết lừa đảo trực tuyến. Tìm hiểu về quyền sở hữu trí tuệ, trích dẫn nguồn tài liệu và tránh đạo văn.",
    attachments: [
      { label: "su-dung-ai-trong-hoc-tap-va-nghien-cuu.docx", url: "/documents/su-dung-ai-trong-hoc-tap-va-nghien-cuu.docx" }
    ]
  }
];

const Projects = () => {
  return (
    <PageWrapper>
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Dự án & Bài tập"
            subtitle="Tổng hợp các bài tập đã hoàn thành trong quá trình học tập học phần Kỹ năng số"
            icon={<FolderOpen className="w-5 h-5" />}
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
