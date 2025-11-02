import { Card } from "@/components/ui/card";
import { SiGithub, SiFacebook, SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";

const contactMethods = [
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    link: "https://wa.me/1234567890",
    color: "text-green-500",
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    link: "https://facebook.com/yourprofile",
    color: "text-blue-600",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    link: "https://github.com/yourusername",
    color: "text-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    link: "mailto:your.email@example.com",
    color: "text-red-500",
  },
];

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.name}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-contact-${method.name.toLowerCase()}`}
              >
                <Card className="p-8 text-center hover-elevate active-elevate-2 transition-transform hover:scale-105">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${method.color}`} />
                  <h3 className="font-semibold text-lg">{method.name}</h3>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
