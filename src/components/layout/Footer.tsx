import { Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xs">P</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Portfolio Học tập © 2026
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="mailto:student@edu.vn"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Liên hệ</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Tài liệu</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
