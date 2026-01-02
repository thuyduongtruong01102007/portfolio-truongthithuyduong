import PageWrapper from "@/components/layout/PageWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import InfoCard from "@/components/ui/InfoCard";
import { motion } from "framer-motion";
import { 
  User, 
  GraduationCap, 
  Mail, 
  Target, 
  Heart, 
  BookOpen,
  Sparkles,
  FolderOpen,
  Share2
} from "lucide-react";

const About = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full gradient-hero flex items-center justify-center shadow-glow">
                <User className="w-14 h-14 md:w-18 md:h-18 text-primary-foreground" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-4"
            >
              Trương Thị Thuỳ Dương
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-6"
            >
              Sinh viên năm 1 • Ngành Kinh Tế • Khoa Kinh tế Chính Trị
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">MSSV: 25050110</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">thuyduongtruong01102007@gmail.com</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Personal Introduction */}
          <div>
            <SectionTitle
              title="Giới thiệu bản thân"
              subtitle="Đôi nét về quá trình học tập và sở thích cá nhân"
              icon={<Heart className="w-5 h-5" />}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard
                icon={<BookOpen className="w-6 h-6" />}
                title="Quá trình học tập"
                delay={0.1}
              >
                <p>
                  Hiện tại, tôi là sinh viên năm nhất Trường Đại học Kinh tế - ĐHQGHN, 
                  đang trong giai đoạn thi cuối kỳ I. Trong học kỳ đầu tiên này, tôi đã làm quen 
                  với môi trường học tập đại học, phương pháp học tập mới cũng như các môn học 
                  nền tảng của ngành. Quá trình học tập bước đầu giúp tôi hình thành ý thức tự học, 
                  quản lý thời gian và từng bước phát triển các kỹ năng cần thiết cho chặng đường 
                  học tập tiếp theo.
                </p>
              </InfoCard>
              
              <InfoCard
                icon={<Sparkles className="w-6 h-6" />}
                title="Sở thích & Mối quan tâm"
                delay={0.2}
              >
                <p>
                  Tôi có mối quan tâm đặc biệt đến lĩnh vực kinh tế chính trị, nhất là các vấn đề 
                  liên quan đến mối quan hệ giữa kinh tế và chính sách xã hội. Tôi hứng thú với 
                  việc tìm hiểu cách các yếu tố kinh tế tác động đến sự phát triển của quốc gia 
                  và đời sống của người dân. Những nội dung này giúp tôi mở rộng tư duy phân tích 
                  và định hướng rõ hơn cho quá trình học tập trong tương lai.
                </p>
              </InfoCard>
            </div>
          </div>

          {/* Learning Goals */}
          <div>
            <SectionTitle
              title="Mục tiêu học tập"
              subtitle="Định hướng phát triển kỹ năng và kiến thức"
              icon={<Target className="w-5 h-5" />}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard
                icon={<Target className="w-6 h-6" />}
                title="Mục tiêu học tập"
                delay={0.1}
              >
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Nắm vững kiến thức nền tảng về kinh tế chính trị và các quy luật kinh tế</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Phát triển tư duy phân tích mối quan hệ giữa kinh tế và chính sách xã hội</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Rèn luyện kỹ năng nghiên cứu, làm việc nhóm và thuyết trình</span>
                  </li>
                </ul>
              </InfoCard>
              
              <InfoCard
                icon={<GraduationCap className="w-6 h-6" />}
                title="Định hướng tương lai"
                delay={0.2}
              >
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Trở thành chuyên gia phân tích chính sách kinh tế - xã hội</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Nghiên cứu sâu về tác động của chính sách đến phát triển quốc gia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span>Đóng góp vào hoạch định chính sách phát triển bền vững tại Việt Nam</span>
                  </li>
                </ul>
              </InfoCard>
            </div>
          </div>

          {/* Portfolio Goals */}
          <div>
            <SectionTitle
              title="Mục tiêu Portfolio"
              subtitle="Ý nghĩa và mục đích của việc xây dựng portfolio học tập"
              icon={<FolderOpen className="w-5 h-5" />}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-light to-secondary rounded-2xl p-8 border border-border"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FolderOpen className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-heading mb-2">Tổng hợp bài tập</h4>
                  <p className="text-sm text-muted-foreground">
                    Trình bày các bài tập đã hoàn thành trong học phần
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-heading mb-2">Phát triển kỹ năng</h4>
                  <p className="text-sm text-muted-foreground">
                    Thể hiện quá trình học tập và phát triển kỹ năng số
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Share2 className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-heading mb-2">Chia sẻ học thuật</h4>
                  <p className="text-sm text-muted-foreground">
                    Lưu trữ sản phẩm phục vụ đánh giá và chia sẻ
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
