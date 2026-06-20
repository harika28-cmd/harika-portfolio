import { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Code2, Database, Brain, Globe, Award, GraduationCap,
  Briefcase, ChevronDown, Menu, X, BarChart3, TrendingUp,
  Shield, BookOpen, Terminal, Layers, Star, ArrowRight
} from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const skills = {
  languages: [
    { name: 'Python', level: 88 },
    { name: 'SQL', level: 85 },
    { name: 'JavaScript', level: 78 },
    { name: 'HTML/CSS', level: 90 },
  ],
  frameworks: [
    { name: 'React', level: 80 },
    { name: 'Flask', level: 75 },
  ],
  ml: [
    { name: 'Machine Learning', level: 78 },
    { name: 'Scikit-learn', level: 74 },
    { name: 'Data Analysis', level: 82 },
  ],
  tools: ['VS Code', 'GitHub', 'MySQL', 'REST APIs', 'PCA', 'ARIMA', 'LSTM', 'Prophet'],
  creative: ['Poster Design'],
};

const experiences = [
  {
    company: 'BrightGeeks Technologies Pvt. Ltd',
    role: 'Full Stack Web Development Intern',
    period: 'Jul 2025 – Oct 2025',
    location: 'Bengaluru, Karnataka',
    desc: 'Built a full-stack library management web application. Developed responsive React frontend components, secure Flask backend APIs, and integrated SQL database handling 500+ records for book inventory, issuance, returns, and fine tracking.',
    tags: ['React', 'Flask', 'SQL', 'REST APIs'],
    icon: <Layers size={18} />,
  },
  {
    company: 'Skill Intern Private Ltd',
    role: 'Web Development Intern',
    period: 'Jan 2024 – Apr 2024',
    location: 'Bengaluru, Karnataka',
    desc: 'Built responsive, user-friendly web applications focusing on frontend interfaces and backend functionalities. Developed scalable solutions using modern web technologies while optimizing user experiences.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Dev'],
    icon: <Globe size={18} />,
  },
];

const projects = [
  {
    title: 'Library Management System',
    subtitle: 'Full Stack Application',
    desc: 'A comprehensive full-stack web application to manage book issuance, returns, and user records. Designed REST APIs with Flask-RESTful, integrated React frontend, and structured SQL database for 500+ records.',
    tags: ['React', 'Flask', 'SQL', 'REST APIs', 'Flask-RESTful'],
    icon: <BookOpen size={22} />,
    color: 'from-sky-500/20 to-cyan-500/20',
    border: 'border-sky-500/30',
    accent: '#0ea5e9',
    highlights: ['500+ DB records', 'REST APIs', 'Real-time updates'],
  },
  {
    title: 'Credit Card Fraud Detection',
    subtitle: 'Machine Learning Model',
    desc: 'Developed a Logistic Regression classifier to detect fraudulent transactions on 284k records. Applied PCA for dimensionality reduction while preserving data privacy. Achieved 94% classification accuracy.',
    tags: ['Python', 'Scikit-learn', 'PCA', 'Logistic Regression'],
    icon: <Shield size={22} />,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    accent: '#10b981',
    highlights: ['94% accuracy', '284k transactions', 'PCA applied'],
  },
  {
    title: 'Bitcoin Price Prediction',
    subtitle: 'Time Series Forecasting',
    desc: 'Implemented a forecasting system comparing ARIMA, Prophet, RNN, and LSTM models on historical Bitcoin data. Deployed a Flask web app with MySQL backend for user authentication and real-time forecast visualization.',
    tags: ['Python', 'Flask', 'MySQL', 'LSTM', 'Prophet'],
    icon: <TrendingUp size={22} />,
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/30',
    accent: '#f59e0b',
    highlights: ['4 ML models', 'Real-time graphs', 'User auth'],
  },
];

const education = [
  {
    school: 'NBKR Institute of Science and Technology',
    degree: 'B.Tech – Computer Science & Engineering',
    period: '2021 – 2025',
    grade: 'GPA: 7.94',
    icon: <GraduationCap size={18} />,
  },
  {
    school: 'Srinivasa Junior College',
    degree: 'Intermediate – M.P.C.',
    period: '2019 – 2021',
    grade: 'Percentage: 81.0%',
    icon: <BookOpen size={18} />,
  },
  {
    school: 'AP RESI (G) School',
    degree: 'Secondary School Certificate (SSC)',
    period: '2018 – 2019',
    grade: 'GPA: 8.80',
    icon: <Star size={18} />,
  },
];

const certifications = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia',
    desc: 'Gained practical exposure to data analysis workflows and business problem-solving in a professional consulting context.',
    icon: <BarChart3 size={20} />,
    color: 'from-sky-600/20 to-blue-600/20',
  },
  {
    title: 'Privacy & Security in Online Social Media',
    issuer: 'NPTEL',
    desc: 'Completed online certification covering data privacy principles, security protocols, and social media threat landscapes.',
    icon: <Shield size={20} />,
    color: 'from-emerald-600/20 to-teal-600/20',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'BrightLearn – Microsoft & AICTE',
    desc: 'Comprehensive full-stack development certification covering modern frontend and backend technologies endorsed by Microsoft and AICTE.',
    icon: <Code2 size={20} />,
    color: 'from-violet-600/20 to-purple-600/20',
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#060d1f]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm animate-pulse-glow">
            HC
          </div>
          <span className="font-semibold text-white hidden sm:block">Harika Chowdary</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/harika-chowdary-204b0b258"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300 hover:text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#060d1f]/98 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="text-slate-300 hover:text-white text-left text-sm font-medium py-1">
              {link}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/harika-chowdary-204b0b258"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-sky-500 text-white text-sm font-medium px-4 py-2 rounded-lg w-fit"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [typedText, setTypedText] = useState('');
  const [phase, setPhase] = useState(0);
  const titles = ['Data Analytics', 'Python Developer', 'Full Stack Dev', 'ML Enthusiast'];
  const fullText = titles[phase];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => setTypedText(fullText.slice(0, typedText.length + 1)), 80);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setPhase(p => (p + 1) % titles.length);
      }, 2200);
    }
    return () => clearTimeout(timeout);
  }, [typedText, phase, fullText]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hex-bg">
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Work – Entry Level Roles
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Harika{' '}
          <span className="text-gradient">Chowdary</span>
        </h1>

        {/* Typewriter */}
        <div className="h-12 flex items-center justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-mono text-xl sm:text-2xl text-sky-400 font-medium">
            {typedText}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Computer Science graduate from NBKR IST with expertise in Data Analytics, Python, and Full Stack Development.
          Passionate about turning data into actionable insights and building impactful applications.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
          >
            View Projects <ArrowRight size={17} />
          </button>
          <a
            href="mailto:harikachowdary254@gmail.com"
            className="flex items-center gap-2 border border-sky-500/40 hover:border-sky-400 text-sky-400 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-sky-500/10"
          >
            <Mail size={17} /> Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {[
            { value: '7.94', label: 'B.Tech GPA', icon: <GraduationCap size={16} /> },
            { value: '2', label: 'Internships', icon: <Briefcase size={16} /> },
            { value: '3', label: 'Projects', icon: <Code2 size={16} /> },
            { value: '94%', label: 'ML Accuracy', icon: <Brain size={16} /> },
          ].map(s => (
            <div key={s.label} className="glass-card rounded-xl p-4 flex flex-col items-center gap-1">
              <div className="text-sky-400 mb-1">{s.icon}</div>
              <span className="text-2xl font-bold text-white">{s.value}</span>
              <span className="text-xs text-slate-400">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 animate-bounce">
        <span className="text-xs">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-sky-500" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Who I Am</h2>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Avatar */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-52 h-52 rounded-2xl border border-sky-500/30 overflow-hidden animate-pulse-glow">
                  <img
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Harika Chowdary"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                  Open to Work
                </div>
                <div className="absolute -top-3 -left-3 bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-medium px-3 py-1.5 rounded-lg">
                  B.Tech CSE
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-3">
              <p className="text-slate-300 leading-relaxed mb-5">
                I'm a Computer Science graduate with a strong interest in <span className="text-sky-400 font-medium">Data Analytics</span>, Web Development, and Software Development. Skilled in Python, SQL, HTML, CSS, JavaScript, and Flask, I have built academic and professional projects involving REST APIs and database management.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Recently completed the <span className="text-cyan-400 font-medium">Deloitte Australia Data Analytics Job Simulation</span>, gaining practical exposure to data analysis workflows and business problem-solving. Currently seeking entry-level opportunities where I can learn, grow, and contribute effectively.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <MapPin size={14} />, text: 'Tirupati, Andhra Pradesh' },
                  { icon: <Mail size={14} />, text: 'harikachowdary254@gmail.com' },
                  { icon: <Phone size={14} />, text: '+91 9494079154' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-1.5 text-slate-400 text-sm bg-white/5 border border-white/8 px-3 py-1.5 rounded-lg">
                    <span className="text-sky-400">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-sky-400 text-sm font-medium">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 bg-[#080f20]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-sky-500" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Technical Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Languages */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Terminal size={18} className="text-sky-400" />
                <h3 className="text-white font-semibold">Programming Languages</h3>
              </div>
              {skills.languages.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 120} inView={inView} />
              ))}
            </div>

            {/* ML & Data */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Brain size={18} className="text-cyan-400" />
                <h3 className="text-white font-semibold">Data & Machine Learning</h3>
              </div>
              {skills.ml.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 120 + 200} inView={inView} />
              ))}
            </div>

            {/* Frameworks */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Layers size={18} className="text-emerald-400" />
                <h3 className="text-white font-semibold">Frameworks & Libraries</h3>
              </div>
              {skills.frameworks.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 120 + 400} inView={inView} />
              ))}
            </div>

            {/* Tools */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Code2 size={18} className="text-amber-400" />
                <h3 className="text-white font-semibold">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.tools.map(tool => (
                  <span key={tool} className="bg-white/5 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-sky-300 text-sm px-3 py-1.5 rounded-lg transition-colors duration-200">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">Creative</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.creative.map(skill => (
                    <span key={skill} className="flex items-center gap-1.5 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs px-3 py-1 rounded-full">
                      {skill}
                      <span className="bg-pink-500/20 text-pink-300 text-[10px] px-1.5 py-0.5 rounded-full">Beginner</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">Soft Skills</p>
                <div className="flex flex-wrap gap-2">
                  {['Teamwork', 'Problem Solving', 'Time Management', 'Communication'].map(skill => (
                    <span key={skill} className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-sky-500" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Work History</h2>

          <div className="relative pl-6 timeline-line">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative mb-8 last:mb-0 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-9 top-5 w-4 h-4 rounded-full bg-sky-500 border-2 border-sky-300 shadow-lg shadow-sky-500/40" />

                <div className="glass-card rounded-2xl p-6 ml-2">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-sky-400 font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-sky-500/15 border border-sky-500/25 text-sky-400 px-3 py-1 rounded-full font-medium">
                        {exp.period}
                      </span>
                      <p className="text-slate-500 text-xs mt-1.5 flex items-center gap-1 justify-end">
                        <MapPin size={11} /> {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 bg-[#080f20]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-sky-500" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Featured Work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <div
                key={proj.title}
                className={`glass-card rounded-2xl p-6 flex flex-col transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${proj.color} border ${proj.border} flex items-center justify-center mb-5`} style={{ color: proj.accent }}>
                  {proj.icon}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-1">{proj.title}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: proj.accent }}>{proj.subtitle}</p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{proj.desc}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.highlights.map(h => (
                    <span key={h} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: `${proj.accent}18`, color: proj.accent, border: `1px solid ${proj.accent}30` }}>
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/5 text-slate-500 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-sky-500" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Academic Background</h2>

          <div className="space-y-5">
            {education.map((edu, i) => (
              <div
                key={edu.school}
                className={`glass-card rounded-2xl p-6 flex items-center gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400 flex-shrink-0">
                  {edu.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold">{edu.school}</h3>
                  <p className="text-slate-400 text-sm mt-0.5">{edu.degree}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-sky-400 text-sm font-semibold block">{edu.grade}</span>
                  <span className="text-slate-500 text-xs">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="py-24 bg-[#080f20]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-sky-500" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Credentials & Courses</h2>

          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={`glass-card rounded-2xl p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-sky-400 mb-4`}>
                  {cert.icon}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Award size={13} className="text-amber-400" />
                  <span className="text-amber-400 text-xs font-medium">{cert.issuer}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-3">{cert.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hero-glow opacity-60 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-sky-500" />
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">Contact</span>
            <span className="w-8 h-0.5 bg-sky-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            I'm actively seeking entry-level roles in Data Analytics and Software Development. Feel free to reach out — I'd love to connect!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: <Mail size={20} />, label: 'Email', value: 'harikachowdary254@gmail.com', href: 'mailto:harikachowdary254@gmail.com', color: 'text-sky-400' },
              { icon: <Phone size={20} />, label: 'Phone', value: '+91 9494079154', href: 'tel:+919494079154', color: 'text-emerald-400' },
              { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'harika-chowdary', href: 'https://www.linkedin.com/in/harika-chowdary-204b0b258', color: 'text-cyan-400' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card rounded-2xl p-5 flex flex-col items-center gap-2 group hover:border-sky-500/40"
              >
                <span className={`${item.color} group-hover:scale-110 transition-transform duration-200`}>{item.icon}</span>
                <span className="text-slate-400 text-xs">{item.label}</span>
                <span className="text-white text-sm font-medium text-center break-all">{item.value}</span>
              </a>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/harika-chowdary-204b0b258"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
          >
            <Linkedin size={18} /> Connect on LinkedIn <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center">
      <p className="text-slate-500 text-sm">
        Designed & built with care &mdash; Harika Chowdary &copy; 2025
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#060d1f] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
