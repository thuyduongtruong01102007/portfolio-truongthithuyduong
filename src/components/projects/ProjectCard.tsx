import { motion } from "framer-motion";
import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  number: number;
  chapter: string;
  title: string;
  objective: string;
  content: string;
  delay?: number;
}

const ProjectCard = ({ number, chapter, title, objective, content, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-elegant hover:shadow-lg transition-all duration-300"
    >
      {/* Header */}
      <div className="gradient-hero p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-primary-foreground text-xs font-medium">
              Bài tập {number}
            </span>
            <span className="px-3 py-1 bg-coral/20 rounded-full text-coral-light text-xs font-medium">
              {chapter}
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-primary-foreground">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Mục tiêu</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {objective}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
            <FileText className="w-4 h-4" />
            <span>Nội dung thực hiện</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {content}
          </p>
        </div>

        <div className="pt-4 border-t border-border">
          <Button variant="outline" size="sm" className="w-full group/btn">
            <span>Xem sản phẩm</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
