import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  delay?: number;
}

const InfoCard = ({ icon, title, children, delay = 0 }: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center text-primary shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-lg text-heading mb-3">
            {title}
          </h3>
          <div className="text-foreground/80 space-y-2">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
