import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aboutImage from "@assets/generated_images/Professional_developer_headshot_2b2eaffc.png";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Next.js",
  "Express",
  "Docker",
  "AWS",
  "GraphQL",
  "MongoDB",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience building 
                scalable web applications and innovative digital solutions. My expertise spans 
                across modern frontend frameworks, backend technologies, and cloud infrastructure.
              </p>
              <p>
                I specialize in creating user-centric applications that solve real-world problems. 
                My approach combines technical excellence with creative problem-solving to deliver 
                exceptional results.
              </p>
              <p>
                When I'm not coding, I share my knowledge through blog posts and YouTube videos, 
                helping others grow in their development journey.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Specializations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="p-6 hover-elevate">
                  <div className="text-primary text-2xl mb-2">⚛️</div>
                  <h4 className="font-semibold">Frontend</h4>
                  <p className="text-sm text-muted-foreground">Modern UI/UX</p>
                </Card>
                <Card className="p-6 hover-elevate">
                  <div className="text-primary text-2xl mb-2">⚙️</div>
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-sm text-muted-foreground">Scalable APIs</p>
                </Card>
                <Card className="p-6 hover-elevate">
                  <div className="text-primary text-2xl mb-2">☁️</div>
                  <h4 className="font-semibold">Cloud</h4>
                  <p className="text-sm text-muted-foreground">Infrastructure</p>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <img
              src={aboutImage}
              alt="Professional developer"
              className="rounded-2xl w-full shadow-lg"
            />
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase()}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
