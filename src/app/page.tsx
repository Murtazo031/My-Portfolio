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
  Moon,
  Sun,
  Languages,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Localization content
const translations = {
  en: {
    available: "Available for new opportunities",
    title1: "Creative",
    title2: "Frontend",
    title3: "Developer",
    subtitle:
      "I craft exceptional digital experiences with modern technologies. Passionate about clean code, innovative design, and bringing creative visions to life.",
    contactMe: "Contact Me",
    downloadCV: "Download CV",
    projects: "Projects",
    yearsExp: "Years Exp",
    happyClients: "Happy Clients",
    aboutTitle: "About Me",
    aboutSubtitle:
      "Passionate developer with a love for creating beautiful, functional, and user-friendly applications",
    aboutText1:
      "I'm a passionate frontend developer focused on creating beautiful, functional, and intuitive web applications. I specialize in React, Next.js, and modern JavaScript frameworks, with a strong focus on clean UI, responsive design, and performance optimization.",
    aboutText2:
      "My journey in web development started with a curiosity about how websites work, and it has evolved into a deep passion for creating exceptional digital experiences.",
    aboutText3:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.",
    skillsTitle: "Skills & Technologies",
    skillsSubtitle: "Technologies I work with to bring ideas to life",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A showcase of my recent work and creative solutions",
    experienceTitle: "Experience",
    experienceSubtitle: "My professional journey and career milestones",
    contactTitle: "Let's Work Together",
    contactSubtitle:
      "Ready to bring your ideas to life? Let's discuss your next project",
    email: "Email",
    location: "Location",
    letsChat: "Let's Chat",
    chatText: "Always open for a coffee chat",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    sendMessage: "Send Message",
    footerText: "Frontend Developer & Creative Thinker",
    madeWith: "Made with",
    usingTech: "using Next.js & Tailwind CSS",
    copyright: "All rights reserved",
    navItems: ["Home", "About", "Skills", "Projects", "Experience", "Contact"],
  },
  ru: {
    available: "Открыт для новых возможностей",
    title1: "Креативный",
    title2: "Frontend",
    title3: "Разработчик",
    subtitle:
      "Я создаю исключительные цифровые впечатления с помощью современных технологий. Увлечен чистым кодом, инновационным дизайном и воплощением творческих идей в жизнь.",
    contactMe: "Связаться",
    downloadCV: "Резюме",
    projects: "Проекты",
    yearsExp: "Лет опыта",
    happyClients: "Довольных клиентов",
    aboutTitle: "Обо мне",
    aboutSubtitle:
      "Увлеченный разработчик, любящий создавать красивые, функциональные и удобные приложения",
    aboutText1:
      "Я увлеченный фронтенд-разработчик, специализирующийся на создании красивых, функциональных и интуитивно понятных веб-приложений. Мои основные технологии - React, Next.js и современные JavaScript-фреймворки, с особым вниманием к чистому UI, адаптивному дизайну и оптимизации производительности.",
    aboutText2:
      "Мой путь в веб-разработке начался с любопытства о том, как работают сайты, и превратился в глубокую страсть к созданию исключительных цифровых впечатлений.",
    aboutText3:
      "Когда я не пишу код, я изучаю новые технологии, участвую в open-source проектах или делюсь знаниями через блоги и туториалы.",
    skillsTitle: "Навыки и Технологии",
    skillsSubtitle: "Технологии, которые я использую для воплощения идей",
    projectsTitle: "Избранные Проекты",
    projectsSubtitle: "Демонстрация моих последних работ и творческих решений",
    experienceTitle: "Опыт",
    experienceSubtitle: "Мой профессиональный путь и вехи карьеры",
    contactTitle: "Давайте Работать Вместе",
    contactSubtitle:
      "Готовы воплотить ваши идеи в жизнь? Обсудим ваш следующий проект",
    email: "Почта",
    location: "Местоположение",
    letsChat: "Давайте Поговорим",
    chatText: "Всегда открыт для чата за кофе",
    namePlaceholder: "Ваше Имя",
    emailPlaceholder: "Ваш Email",
    subjectPlaceholder: "Тема",
    messagePlaceholder: "Ваше Сообщение",
    sendMessage: "Отправить",
    footerText: "Frontend Разработчик и Креативный Мыслитель",
    madeWith: "Сделано с",
    usingTech: "на Next.js и Tailwind CSS",
    copyright: "Все права защищены",
    navItems: ["Главная", "Обо мне", "Навыки", "Проекты", "Опыт", "Контакты"],
  },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  const t = translations[language as keyof typeof translations];

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

  const experiences = [
    {
      title:
        language === "en"
          ? "Junior Frontend Developer"
          : "Младший Frontend Разработчик",
      company: "Softclub Academy",
      period: "2024 - 2025",
      description:
        language === "en"
          ? "Built interactive user interfaces, maintained existing codebases, and learned modern development practices."
          : "Разрабатывал интерактивные пользовательские интерфейсы, поддерживал существующие кодовые базы и изучал современные практики разработки.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = form[0] as HTMLInputElement;
    const email = form[1] as HTMLInputElement;
    const subject = form[2] as HTMLInputElement;
    const message = form[3] as HTMLTextAreaElement;
    const text =
      language === "en"
        ? `📬 New message from portfolio:
👤 Name: ${name.value}
📧 Email: ${email.value}
📝 Subject: ${subject.value}
💬 Message:
${message.value}`
        : `📬 Новое сообщение с сайта:
👤 Имя: ${name.value}
📧 Email: ${email.value}
📝 Тема: ${subject.value}
💬 Сообщение:
${message.value}`;

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

      alert(language === "en" ? "Message sent!" : "Сообщение отправлено!");
      form.reset();
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      alert(
        language === "en"
          ? "Error sending. Try again later."
          : "Ошибка при отправке. Попробуйте позже."
      );
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en");
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-slate-950 text-white" : "bg-gray-50 text-gray-900"
      } overflow-x-hidden transition-colors duration-300`}
    >
      {/* Animated Background */}
      {darkMode && (
        <div className="fixed inset-0 z-0">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              darkMode
                ? "from-slate-950 via-slate-900 to-slate-950"
                : "from-gray-100 via-gray-200 to-gray-100"
            }`}
          ></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? `${
                darkMode ? "bg-slate-950/80" : "bg-white/80"
              } backdrop-blur-md border-b ${
                darkMode ? "border-slate-800" : "border-gray-200"
              }`
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
              {t.navItems.map((item, index) => (
                <Link
                  key={index}
                  href={`#${
                    [
                      "home",
                      "about",
                      "skills",
                      "projects",
                      "experience",
                      "contact",
                    ][index]
                  }`}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 hover:text-blue-400 ${
                    activeSection ===
                    [
                      "home",
                      "about",
                      "skills",
                      "projects",
                      "experience",
                      "contact",
                    ][index]
                      ? "text-blue-400"
                      : darkMode
                      ? "text-slate-300"
                      : "text-gray-700"
                  }`}
                  onClick={() =>
                    setActiveSection(
                      [
                        "home",
                        "about",
                        "skills",
                        "projects",
                        "experience",
                        "contact",
                      ][index]
                    )
                  }
                >
                  {item}
                  {activeSection ===
                    [
                      "home",
                      "about",
                      "skills",
                      "projects",
                      "experience",
                      "contact",
                    ][index] && (
                    <div className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"></div>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={`hover:${
                  darkMode ? "bg-slate-800" : "bg-gray-200"
                } hover:text-blue-400`}
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                <Languages className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`hover:${
                  darkMode ? "bg-slate-800" : "bg-gray-200"
                } hover:text-blue-400`}
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`hover:${
                  darkMode ? "bg-slate-800" : "bg-gray-200"
                } hover:text-blue-400`}
              >
                <Link target="_blank" href="https://github.com/Murtazo031">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`hover:${
                  darkMode ? "bg-slate-800" : "bg-gray-200"
                } hover:text-blue-400`}
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
                className={`hover:${
                  darkMode ? "bg-slate-800" : "bg-gray-200"
                } hover:text-blue-400`}
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
        className={`relative min-h-screen flex items-center justify-center px-6 pt-20 ${
          darkMode ? "" : "bg-gradient-to-br from-gray-50 to-gray-100"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="space-y-6">
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${
                    darkMode
                      ? "from-blue-500/10 to-purple-500/10"
                      : "from-blue-100 to-purple-100"
                  } border ${
                    darkMode ? "border-blue-500/20" : "border-blue-200"
                  } backdrop-blur-sm`}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {t.available}
                  </span>
                </div>

                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className={darkMode ? "text-white" : "text-gray-900"}>
                    {t.title1}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {t.title2}
                  </span>
                  <br />
                  <span className={darkMode ? "text-white" : "text-gray-900"}>
                    {t.title3}
                  </span>
                </h1>

                <p
                  className={`text-xl ${
                    darkMode ? "text-slate-400" : "text-gray-600"
                  } leading-relaxed max-w-lg`}
                >
                  {t.subtitle}
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
                    {t.contactMe}
                  </a>
                </Button>
                <Button
                  variant={darkMode ? "outline" : "secondary"}
                  size="lg"
                  className={`${
                    darkMode
                      ? "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 bg-transparent"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Link2 className="mr-2 h-4 w-4" />
                  {t.downloadCV}
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-slate-400" : "text-gray-500"
                    }`}
                  >
                    {t.projects}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative">
                <div className="w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                    <div
                      className={`w-full h-full rounded-full ${
                        darkMode ? "bg-slate-950" : "bg-white"
                      } flex items-center justify-center`}
                    >
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
                <div
                  className={`absolute -top-4 -left-4 ${
                    darkMode ? "bg-slate-800/50" : "bg-white/80"
                  } backdrop-blur-sm rounded-xl p-4 border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } animate-bounce`}
                >
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div
                  className={`absolute -top-8 -right-8 ${
                    darkMode ? "bg-slate-800/50" : "bg-white/80"
                  } backdrop-blur-sm rounded-xl p-4 border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } animate-bounce delay-300`}
                >
                  <Palette className="h-6 w-6 text-purple-400" />
                </div>
                <div
                  className={`absolute -bottom-4 -left-8 ${
                    darkMode ? "bg-slate-800/50" : "bg-white/80"
                  } backdrop-blur-sm rounded-xl p-4 border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } animate-bounce delay-500`}
                >
                  <Smartphone className="h-6 w-6 text-pink-400" />
                </div>
                <div
                  className={`absolute -bottom-8 -right-4 ${
                    darkMode ? "bg-slate-800/50" : "bg-white/80"
                  } backdrop-blur-sm rounded-xl p-4 border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } animate-bounce delay-700`}
                >
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`relative py-20 px-6 ${darkMode ? "" : "bg-gray-50"}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.aboutTitle}
              </span>
            </h2>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-gray-600"
              } text-lg max-w-2xl mx-auto`}
            >
              {t.aboutSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className={`space-y-6 ${
                  darkMode ? "text-slate-300" : "text-gray-700"
                }`}
              >
                <p className="text-lg leading-relaxed">{t.aboutText1}</p>
                <p className="text-lg leading-relaxed">{t.aboutText2}</p>
                <p className="text-lg leading-relaxed">{t.aboutText3}</p>
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
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode ? "from-slate-950/50" : "from-white/50"
                  } to-transparent rounded-2xl`}
                ></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`relative py-20 px-6 ${darkMode ? "" : "bg-white"}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.skillsTitle}
              </span>
            </h2>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-gray-600"
              } text-lg max-w-2xl mx-auto`}
            >
              {t.skillsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`group relative p-6 ${
                  darkMode ? "bg-slate-800/30" : "bg-gray-50"
                } rounded-2xl border ${
                  darkMode ? "border-slate-700" : "border-gray-200"
                } backdrop-blur-sm hover:${
                  darkMode ? "bg-slate-800/50" : "bg-gray-100"
                } transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{tech.icon}</div>
                    <span className="font-semibold">{tech.name}</span>
                  </div>
                  <span
                    className={`text-sm ${
                      darkMode ? "text-slate-400" : "text-gray-500"
                    }`}
                  >
                    {tech.level}%
                  </span>
                </div>

                <div
                  className={`w-full ${
                    darkMode ? "bg-slate-700" : "bg-gray-300"
                  } rounded-full h-2 mb-4`}
                >
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
      <section
        id="projects"
        className={`relative py-20 px-6 ${darkMode ? "" : "bg-gray-50"}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.projectsTitle}
              </span>
            </h2>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-gray-600"
              } text-lg max-w-2xl mx-auto`}
            >
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Projects Placeholder - Add your projects here */}
          <div className="text-center py-12">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <p className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}>
                {language === "en"
                  ? "Projects coming soon!"
                  : "Проекты скоро появятся!"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`relative py-20 px-6 ${darkMode ? "" : "bg-white"}`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.experienceTitle}
              </span>
            </h2>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-gray-600"
              } text-lg max-w-2xl mx-auto`}
            >
              {t.experienceSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-slate-700 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <div
                  className={`${
                    darkMode ? "bg-slate-800/30" : "bg-gray-50"
                  } rounded-2xl p-6 border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } backdrop-blur-sm hover:${
                    darkMode ? "bg-slate-800/50" : "bg-gray-100"
                  } transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div
                      className={`flex items-center ${
                        darkMode ? "text-slate-400" : "text-gray-500"
                      } text-sm`}
                    >
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
                  <p
                    className={`${
                      darkMode ? "text-slate-300" : "text-gray-700"
                    } leading-relaxed`}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`relative py-20 px-6 ${darkMode ? "" : "bg-gray-50"}`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.contactTitle}
              </span>
            </h2>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-gray-600"
              } text-lg max-w-2xl mx-auto`}
            >
              {t.contactSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className={`flex items-center space-x-4 p-4 ${
                    darkMode ? "bg-slate-800/30" : "bg-white"
                  } rounded-xl border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } backdrop-blur-sm`}
                >
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="font-medium">{t.email}</div>
                    <div
                      className={`${
                        darkMode ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      azimovmurtazo31@gmail.com
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-center space-x-4 p-4 ${
                    darkMode ? "bg-slate-800/30" : "bg-white"
                  } rounded-xl border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } backdrop-blur-sm`}
                >
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="font-medium">{t.location}</div>
                    <div
                      className={`${
                        darkMode ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      Dushanbe Tajikistan
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-center space-x-4 p-4 ${
                    darkMode ? "bg-slate-800/30" : "bg-white"
                  } rounded-xl border ${
                    darkMode ? "border-slate-700" : "border-gray-200"
                  } backdrop-blur-sm`}
                >
                  <Coffee className="h-6 w-6 text-pink-400" />
                  <div>
                    <div className="font-medium">{t.letsChat}</div>
                    <div
                      className={`${
                        darkMode ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      {t.chatText}
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
                  placeholder={t.namePlaceholder}
                  className={`${
                    darkMode
                      ? "bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
                  }`}
                />
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className={`${
                    darkMode
                      ? "bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
                  }`}
                />
                <Input
                  placeholder={t.subjectPlaceholder}
                  className={`${
                    darkMode
                      ? "bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
                  }`}
                />
                <Textarea
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  className={`${
                    darkMode
                      ? "bg-slate-800/30 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
                  } resize-none`}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                {t.sendMessage}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`relative py-12 px-6 border-t ${
          darkMode ? "border-slate-800" : "border-gray-200"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Murtazo Azimov
                </span>
              </div>
              <p className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}>
                {t.footerText}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <span
                className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}
              >
                {t.madeWith}
              </span>
              <Heart className="h-4 w-4 text-red-400" />
              <span
                className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}
              >
                {t.usingTech}
              </span>
            </div>
          </div>

          <div
            className={`mt-8 pt-8 border-t ${
              darkMode ? "border-slate-800" : "border-gray-200"
            } text-center`}
          >
            <p className={`${darkMode ? "text-slate-400" : "text-gray-600"}`}>
              © {new Date().getFullYear()} Murtazo Azimov. {t.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
