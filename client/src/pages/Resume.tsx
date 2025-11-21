import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    id: "1",
    company: "Tech Innovations Inc.",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    responsibilities: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored team of 5 junior developers",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Architected scalable solutions using React, Node.js, and AWS",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "2",
    company: "Digital Solutions Ltd.",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    responsibilities: [
      "Developed and maintained 10+ client-facing web applications",
      "Collaborated with design team to implement responsive UI/UX",
      "Optimized database queries improving performance by 40%",
      "Integrated third-party APIs and payment gateways",
    ],
    technologies: ["React", "Python", "Django", "MongoDB", "Redis"],
  },
  {
    id: "3",
    company: "Startup Ventures",
    role: "Frontend Developer",
    period: "2019 - 2020",
    responsibilities: [
      "Built reusable component library for multiple products",
      "Implemented modern frontend practices and testing strategies",
      "Worked closely with backend team for API integration",
      "Contributed to product strategy and feature planning",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Jest", "Git"],
  },
];

const education = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2015 - 2019",
    achievements: ["First Class Honors", "Dean's List 2017-2019"],
  },
];

const certifications = [
  "🏆 BlockDAG Network Hackathon Winner",
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "Meta React Developer Professional",
  "Blockchain Developer Certified",
];

const skills = {
  "Blockchain": ["Solidity", "Web3.js", "Ethers.js", "Smart Contracts", "DAG"],
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
  "Backend": ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
  "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  "DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
};

export default function Resume() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Expertise & Track Record</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            5+ years delivering high-impact technical solutions that drive growth, reduce costs, and scale to millions of users.
          </p>
          <Button size="lg" data-testid="button-download-resume">
            <Download className="w-4 h-4 mr-2" />
            Download Full Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={exp.id} className="p-6">
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-semibold" data-testid={`text-role-${exp.id}`}>
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium" data-testid={`text-company-${exp.id}`}>
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    
                    <ul className="space-y-2 mb-4 text-muted-foreground">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              {education.map((edu) => (
                <Card key={edu.id} className="p-6">
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                  <ul className="space-y-1 text-muted-foreground">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              
              <Card className="p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category} className="p-6">
                    <h3 className="font-semibold mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
