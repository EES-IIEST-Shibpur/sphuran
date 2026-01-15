const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-xl font-bold tracking-wider text-foreground">
            SPHURAN<span className="text-primary">4.0</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#events" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Events
            </a>
            <a href="#schedule" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Schedule
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="font-body text-sm text-muted-foreground">
            2025 Sphuran. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
