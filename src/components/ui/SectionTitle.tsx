import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "left" | "center";
}

const SectionTitle = ({ title, subtitle, icon, align = "left" }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-8 ${align === "center" ? "text-center" : ""}`}
    >
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-heading">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
