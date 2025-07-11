"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Smartphone,
  Globe,
  Send,
  MapPin,
  Calendar,
  Coffee,
  Heart,
  Link2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologies = [
    {
      name: "React",
      level: 95,
      color: "from-blue-400 to-blue-600",
      icon: "⚛️",
    },
    {
      name: "Next.js",
      level: 90,
      color: "from-gray-400 to-gray-600",
      icon: "▲",
    },
    {
      name: "TypeScript",
      level: 88,
      color: "from-blue-500 to-blue-700",
      icon: "TS",
    },
    {
      name: "JavaScript",
      level: 92,
      color: "from-yellow-400 to-yellow-600",
      icon: "JS",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "from-cyan-400 to-cyan-600",
      icon: "🎨",
    },
    {
      name: "Git/Github",
      level: 90,
      color: "from-slate-500 to-slate-700",
      icon: "🐙",
    },
    {
      name: "Shadcn/ui",
      level: 80,
      color: "from-green-500 to-green-700",
      icon: "",
    },
    {
      name: "Material UI",
      level: 80,
      color: "from-blue-500 to-blue-700",
      icon: "MUI",
    },
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     title: "E-Commerce Platform",
  //     description:
  //       "A full-stack e-commerce solution with React, Next.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
  //     github: "#",
  //     live: "#",
  //     featured: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Task Management App",
  //     description:
  //       "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  //     github: "#",
  //     live: "#",
  //     featured: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Weather Dashboard",
  //     description:
  //       "Beautiful weather application with location-based forecasts, interactive charts, and detailed weather analytics.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
  //     github: "#",
  //     live: "#",
  //     featured: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Social Media Dashboard",
  //     description:
  //       "Analytics dashboard for social media management with real-time data visualization and reporting features.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["Vue.js", "D3.js", "Express", "MySQL"],
  //     github: "#",
  //     live: "#",
  //     featured: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Portfolio Website",
  //     description:
  //       "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
  //     github: "#",
  //     live: "#",
  //     featured: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Chat Application",
  //     description:
  //       "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tech: ["React", "Socket.io", "Node.js", "Redis"],
  //     github: "#",
  //     live: "#",
  //     featured: false,
  //   },
  // ];

  const experiences = [
    {
      title: "Junior Frontend Developer",
      company: "Softclub Academy",
      period: "2024 - 2025",
      description:
        "Built interactive user interfaces, maintained existing codebases, and learned modern development practices.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const subject = form[2].value;
    const message = form[3].value;

    const text = `
📬 Новое сообщение с сайта:
👤 Имя: ${name}
📧 Email: ${email}
📝 Тема: ${subject}
💬 Сообщение:
${message}
  `;

    const botToken = "7614931440:AAEU8gSXfe3gAise_2NjtkaN5Ox1yXQFljw";
    const chatId = "721719514";

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      alert("Сообщение отправлено!");
      form.reset(); // очищаем форму
    } catch (error) {
      console.error("Ошибка при отправке в Telegram:", error);
      alert("Ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Murtazo Azimov
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-slate-300"
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"></div>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-slate-800 hover:text-blue-400"
              >
                <Link target="_blank" href="https://github.com/Murtazo031">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-slate-800 hover:text-blue-400"
              >
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/murtazo-azimov-2ab46236b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8DzEHMAnScm8PAoal2t10Q%3D%3D"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-slate-800 hover:text-blue-400"
              >
                <Link
                  target="_blank"
                  href={
                    "https://mail.google.com/mail/u/0/?fs=1&to=azimovmurtazo31@gmail.com.com&su=%D0%A2%D0%B5%D0%BC%D0%B0&body=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82+%D0%9C%D1%83%D1%80%D1%82%D0%B0%D0%B7%D0%BE!&tf=cm"
                  }
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm text-blue-300">
                    Available for new opportunities
                  </span>
                </div>

                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="text-white">Creative</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Frontend
                  </span>
                  <br />
                  <span className="text-white">Developer</span>
                </h1>

                <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                  I craft exceptional digital experiences with modern
                  technologies. Passionate about clean code, innovative design,
                  and bringing creative visions to life.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=azimovmurtazo31@gmail.com.com&su=Тема&body=Привет%20Муртазо!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My e-mail
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 bg-transparent"
                >
                  <Link2 />
                  Here is My CV
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-sm text-slate-400">Projects</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    0
                  </div>
                  <div className="text-sm text-slate-400">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    0
                  </div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div> */}
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative">
                <div className="w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                      <Avatar className="w-72 h-72">
                        <AvatarImage
                          src="/img/MurtazoAzimov.jpg"
                          alt="Murtazo Azimov"
                        />
                        <AvatarFallback className="text-6xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          MA
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 animate-bounce">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div className="absolute -top-8 -right-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 animate-bounce delay-300">
                  <Palette className="h-6 w-6 text-purple-400" />
                </div>
                <div className="absolute -bottom-4 -left-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 animate-bounce delay-500">
                  <Smartphone className="h-6 w-6 text-pink-400" />
                </div>
                <div className="absolute -bottom-8 -right-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 animate-bounce delay-700">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Passionate developer with a love for creating beautiful,
              functional, and user-friendly applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  I{"'"}m a passionate frontend developer focused on creating
                  beautiful, functional, and intuitive web applications. I
                  specialize in React, Next.js, and modern JavaScript
                  frameworks, with a strong focus on clean UI, responsive
                  design, and performance optimization. I believe that great
                  interfaces tell stories — and I love building experiences that
                  feel natural, engaging, and efficient.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in web development started with a curiosity about
                  how websites work, and it has evolved into a deep passion for
                  creating exceptional digital experiences. I believe in writing
                  clean, maintainable code and staying up-to-date with the
                  latest industry trends.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and tutorials.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/img/AboutMe.jpg"
                  alt="About me"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative p-6 bg-slate-800/30 rounded-2xl border border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{tech.icon}</div>
                    <span className="font-semibold text-white">
                      {tech.name}
                    </span>
                  </div>
                  <span className="text-sm text-slate-400">{tech.level}%</span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`group bg-slate-800/30 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="h-8 w-8 p-0 bg-slate-800/80 hover:bg-slate-700"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 w-8 p-0 bg-slate-800/80 hover:bg-slate-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> 

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 bg-transparent"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
          </div>*/}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-slate-700 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700 backdrop-blur-sm">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-slate-400">
                      azimovmurtazo31@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700 backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-slate-400">Dushanbe Tajikistan</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700 backdrop-blur-sm">
                  <Coffee className="h-6 w-6 text-pink-400" />
                  <div>
                    <div className="text-white font-medium">Let's Chat</div>
                    <div className="text-slate-400">
                      Always open for a coffee chat
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link target="_blank" href="https://github.com/Murtazo031">
                  <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/murtazo-azimov-2ab46236b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfDspVNRKS1mSl1U15qyFbQ%3D%3D"
                >
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Input
                  placeholder="Subject"
                  className="bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                My telegram bot
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Murtazo Azimov
                </span>
              </div>
              <p className="text-slate-400">
                Frontend Developer & Creative Thinker
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-slate-400">Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-slate-400">
                using Next.js & Tailwind CSS
              </span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Murtazo Azimov. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
