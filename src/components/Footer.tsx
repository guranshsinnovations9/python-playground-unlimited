import { Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">GURANSH INNOVATIONS</h3>
            <p className="text-background/80 uppercase tracking-wider text-sm">
              Learn. Code. Create. Innovate.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-background/80 text-sm">
              <p>
                <a href="tel:+919877038519" className="hover:text-background transition-colors">
                  +91 98770 38519
                </a>
              </p>
              <p>
                <a
                  href="mailto:guranshsinghinnovations9@gmail.com"
                  className="hover:text-background transition-colors break-all"
                >
                  guranshsinghinnovations9@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/919877038519"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-background/60 text-sm">
          <p>© 2025 GURANSH INNOVATIONS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;