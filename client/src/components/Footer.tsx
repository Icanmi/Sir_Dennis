import { SiGithub, SiFacebook, SiWhatsapp, SiLinkedin } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              Dennis Willie
            </h3>
            <p className="text-muted-foreground">
              Full-stack developer, Web3 innovator, and business-focused problem solver. Helping startups and enterprises scale through technology and blockchain solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
              </li>
              <li>
                <a href="/resume" className="hover:text-foreground transition-colors">Resume</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-github"
              >
                <SiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
