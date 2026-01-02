import PageWrapper from "@/components/layout/PageWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import InfoCard from "@/components/ui/InfoCard";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  FileText, 
  Lightbulb, 
  Award,
  ThumbsUp,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Link as LinkIcon
} from "lucide-react";

const Conclusion = () => {
  return (
    <PageWrapper>
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-hero flex items-center justify-center shadow-glow">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-heading mb-4">
              Tổng kết Portfolio
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nhìn lại quá trình học tập, những kiến thức đã đạt được và bài học kinh nghiệm 
              trong suốt quá trình xây dựng portfolio học phần
            </p>
          </motion.div>

          {/* Process Section */}
          <div>
            <SectionTitle
              title="Quá trình thực hiện"
              subtitle="Mô tả cách tổ chức và quản lý nội dung portfolio"
              icon={<FileText className="w-5 h-5" />}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8"
            >
              <div className="space-y-4">
                <p className="text-foreground/80">
                  Portfolio được xây dựng từng bước trong suốt quá trình học tập học phần. 
                  Sau mỗi chương học, tôi hoàn thành bài tập và cập nhật vào portfolio. 
                  Cách tổ chức bao gồm:
                </p>
                <ul className="space-y-3">
                  {[
                    "Phân chia nội dung theo từng chương học rõ ràng",
                    "Mỗi bài tập có mục tiêu, nội dung và sản phẩm đính kèm",
                    "Sử dụng công cụ số để thiết kế và trình bày chuyên nghiệp",
                    "Thường xuyên cập nhật và chỉnh sửa nội dung"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div>
            <SectionTitle
              title="Kiến thức và kỹ năng đạt được"
              subtitle="Những năng lực đã phát triển qua học phần"
              icon={<Award className="w-5 h-5" />}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard
                icon={<Lightbulb className="w-6 h-6" />}
                title="Kiến thức chuyên môn"
                delay={0.1}
              >
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Hiểu biết về cấu tạo và vận hành máy tính</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Kỹ năng tìm kiếm và đánh giá thông tin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Kiến thức cơ bản về trí tuệ nhân tạo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>An toàn và liêm chính học thuật</span>
                  </li>
                </ul>
              </InfoCard>
              
              <InfoCard
                icon={<Award className="w-6 h-6" />}
                title="Kỹ năng mềm"
                delay={0.2}
              >
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Giao tiếp và hợp tác trong môi trường số</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Sáng tạo nội dung số chuyên nghiệp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Làm việc nhóm hiệu quả online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Quản lý thời gian và tự học</span>
                  </li>
                </ul>
              </InfoCard>
            </div>
          </div>

          {/* Lessons Learned */}
          <div>
            <SectionTitle
              title="Thuận lợi, khó khăn và bài học"
              subtitle="Những trải nghiệm và bài học rút ra từ quá trình học tập"
              icon={<BookOpen className="w-5 h-5" />}
            />
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-teal-light border border-primary/20 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <ThumbsUp className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-heading mb-3">Thuận lợi</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Tài liệu học tập phong phú</li>
                  <li>• Giảng viên hỗ trợ tận tình</li>
                  <li>• Công cụ số miễn phí đa dạng</li>
                  <li>• Bạn bè hợp tác tốt</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-coral-light border border-accent/20 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-heading font-semibold text-heading mb-3">Khó khăn</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Quản lý thời gian ban đầu</li>
                  <li>• Làm quen với công cụ mới</li>
                  <li>• Phối hợp nhóm online</li>
                  <li>• Đánh giá nguồn tin cậy</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-secondary border border-border rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-heading mb-3">Bài học</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>• Lập kế hoạch học tập rõ ràng</li>
                  <li>• Chủ động tìm hiểu công nghệ</li>
                  <li>• Giao tiếp thường xuyên với nhóm</li>
                  <li>• Liên tục cải thiện bản thân</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <SectionTitle
              title="Tài liệu & Liên kết"
              subtitle="Các nguồn tài liệu tham khảo và liên kết hữu ích"
              icon={<LinkIcon className="w-5 h-5" />}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-semibold text-heading mb-4">Tài liệu tham khảo</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm">
                      <BookOpen className="w-4 h-4 text-primary shrink-0" />
                      <span>Giáo trình Kỹ năng số cơ bản</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <BookOpen className="w-4 h-4 text-primary shrink-0" />
                      <span>Tài liệu hướng dẫn Microsoft Office</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <BookOpen className="w-4 h-4 text-primary shrink-0" />
                      <span>Cẩm nang An toàn thông tin</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-heading mb-4">Liên kết hữu ích</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center gap-3 text-sm text-primary hover:underline">
                        <LinkIcon className="w-4 h-4 shrink-0" />
                        <span>Google Digital Garage</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 text-sm text-primary hover:underline">
                        <LinkIcon className="w-4 h-4 shrink-0" />
                        <span>Microsoft Learn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 text-sm text-primary hover:underline">
                        <LinkIcon className="w-4 h-4 shrink-0" />
                        <span>Coursera - Digital Skills</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Conclusion;
