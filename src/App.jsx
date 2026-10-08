import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react';

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Education', 'education'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Internships', 'internships'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
];

const skillGroups = [
  { icon: Code2, title: 'Programming', skills: ['Python', 'JavaScript'] },
  { icon: Layers3, title: 'Web technologies', skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'jQuery', 'Bootstrap'] },
  { icon: Database, title: 'Databases', skills: ['MongoDB', 'MySQL'] },
  { icon: BrainCircuit, title: 'AI & machine learning', skills: ['Artificial Intelligence', 'Machine Learning'] },
];

function ResumeLink({ children = 'Download resume', className = '' }) {
  return (
    <a className={className} href="/anushya-kadali-resume.txt" download>
      {children}
      <Download size={15} aria-hidden="true" />
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navigation.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-22% 0px -60% 0px', threshold: [0, 0.15, 0.35] },
    );
    sections.forEach((section) => observer.observe(section));
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Anushya Kadali, home">
          <span className="wordmark-mark">A<span>.</span></span>
          <span className="wordmark-name">Anushya Kadali</span>
        </a>
        <button className="menu-toggle icon-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-content${menuOpen ? ' nav-content-open' : ''}`}>
          <div className="nav-links">
            {navigation.map(([label, id]) => (
              <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
          <ResumeLink className="nav-resume" />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-anchor" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> Computer Science & Engineering <span className="availability-divider">/</span> Class of 2027</div>
          <p className="hero-greeting">Hi, I'm <span>Anushya Kadali</span></p>
          <h1 id="hero-title">Building a future<br />in <span className="gradient-text">software & AI.</span></h1>
          <p className="hero-role">B.Tech CSE Student <span>·</span> Aspiring Full Stack Developer <span>·</span> AI/ML Enthusiast</p>
          <p className="hero-description">Motivated Computer Science student with a foundation in programming, web technologies, databases, and Artificial Intelligence. I enjoy building useful applications, solving problems, and turning curiosity into practical skills.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my projects <ArrowRight size={16} /></a>
            <ResumeLink className="button button-secondary" />
            <a className="button button-text" href="#contact">Contact me <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://www.linkedin.com/in/Anushyakadali/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
            <span className="social-unavailable" role="img" aria-label="GitHub profile link not provided" title="GitHub profile link not provided"><Github size={17} /></span>
            <a href="mailto:kanushya6@gmail.com" aria-label="Email Anushya"><Mail size={17} /></a>
            <span className="social-note">Open to meaningful opportunities</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract software development illustration">
          <div className="visual-glow" />
          <div className="visual-coordinate">16°35' N &nbsp; 82°01' E</div>
          <div className="code-window">
            <div className="code-window-bar"><div className="window-dots"><i /><i /><i /></div><span>anushya.dev / about.py</span><span className="window-status"><span /> online</span></div>
            <div className="code-content">
              <div className="code-line"><span className="line-number">01</span><span><b>class</b> <strong>AnushyaKadali</strong>:</span></div>
              <div className="code-line"><span className="line-number">02</span><span className="indent"><b>role</b> = <em>"Software Developer"</em></span></div>
              <div className="code-line"><span className="line-number">03</span><span className="indent"><b>focus</b> = [</span></div>
              <div className="code-line"><span className="line-number">04</span><span className="indent deeper"><em>"Full Stack"</em>,</span></div>
              <div className="code-line"><span className="line-number">05</span><span className="indent deeper"><em>"Artificial Intelligence"</em>,</span></div>
              <div className="code-line"><span className="line-number">06</span><span className="indent deeper"><em>"Learning by building"</em></span></div>
              <div className="code-line"><span className="line-number">07</span><span className="indent">]</span></div>
              <div className="code-line code-cursor"><span className="line-number">08</span><span className="indent"><b>next_step</b> = <i>build_something_useful</i><span className="cursor-block" /></span></div>
            </div>
            <div className="code-window-footer"><span><Check size={13} /> Always learning</span><span>Python&nbsp; · &nbsp;JavaScript</span></div>
          </div>
          <div className="float-chip chip-cgpa"><span className="chip-icon"><GraduationCap size={15} /></span><span><strong>8.49</strong><small>Academic CGPA</small></span></div>
          <div className="float-chip chip-ai"><span className="chip-icon chip-cyan"><Sparkles size={15} /></span><span><strong>AI + Web</strong><small>Areas of interest</small></span></div>
          <div className="visual-caption">Curious by nature. <span>Building with purpose.</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={14} /></a>
      <div className="hero-index" aria-hidden="true">01 — 08</div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, number }) {
  return (
    <div className="section-heading reveal">
      <div><p className="eyebrow"><span>{number}</span>{eyebrow}</p><h2>{title}</h2></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function About() {
  const highlights = [
    { value: '8.49', label: 'CGPA' },
    { value: 'B.Tech', label: 'Computer Science' },
    { value: 'AI / ML', label: 'Curious learner' },
    { value: 'Full Stack', label: 'Growing every day' },
  ];
  return (
    <section className="section section-about section-anchor" id="about" aria-labelledby="about-title">
      <div className="page-shell">
        <SectionHeading number="01" eyebrow="About me" title="About Me" description="A thoughtful problem-solver with a strong foundation and plenty of room to grow." />
        <div className="about-layout reveal">
          <div className="about-copy">
            <h3 id="about-title">Learning the craft of<br /><span className="gradient-text">building useful things.</span></h3>
            <p>I'm a B.Tech Computer Science and Engineering student at Srinivasa Institute of Engineering and Technology, Amalapuram, with a CGPA of 8.49. My interests span software development and Artificial Intelligence, and I like understanding how an idea becomes a useful, working product.</p>
            <p>I bring logical thinking, problem-solving, and clear communication to the work I do. I'm a quick learner who values teamwork, adapts to new challenges, and stays curious about what I can build next.</p>
            <a href="#contact" className="inline-link">Let's connect <ArrowUpRight size={15} /></a>
          </div>
          <div className="about-panel">
            <div className="panel-topline"><span>AT A GLANCE</span><span className="panel-mark">AK / 01</span></div>
            <div className="highlight-grid">
              {highlights.map((item, index) => <div className="highlight" key={item.value}><span className={`highlight-index index-${index}`}>0{index + 1}</span><strong>{item.value}</strong><span>{item.label}</span></div>)}
            </div>
            <div className="about-values"><span>Problem solving</span><span>Teamwork</span><span>Adaptability</span><span>Quick learning</span></div>
            <div className="panel-corner" aria-hidden="true">✳</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const education = [
    { period: '2023 — 2027', degree: 'B.Tech · Computer Science and Engineering', school: 'Srinivasa Institute of Engineering and Technology', location: 'Amalapuram', result: '8.49', resultLabel: 'CGPA', current: true },
    { period: '2021 — 2023', degree: 'Intermediate · MPC', school: 'Sri Deepthi Mahila Junior College', location: 'Malikipuram', result: '84%', resultLabel: 'Score' },
    { period: '2021', degree: 'Secondary School Certificate', school: 'ZPP High School', location: 'Rameswaram', result: '9.5', resultLabel: 'Score' },
  ];
  return (
    <section className="section section-education section-anchor" id="education" aria-labelledby="education-title">
      <div className="page-shell">
        <SectionHeading number="02" eyebrow="The learning journey" title="Education" description="A steady foundation in science, engineering, and the habit of learning." />
        <div className="timeline" id="education-title">
          {education.map((item, index) => <article className="timeline-item reveal" key={item.degree}>
            <div className="timeline-rail"><span className={`timeline-node${item.current ? ' node-current' : ''}`}><GraduationCap size={15} /></span>{index < education.length - 1 && <span className="timeline-line" />}</div>
            <div className="timeline-content"><div className="timeline-meta"><span>{item.period}</span>{item.current && <span className="current-badge"><i /> In progress</span>}</div><h3>{item.degree}</h3><p>{item.school}<span className="meta-separator">·</span>{item.location}</p></div>
            <div className="timeline-result"><strong>{item.result}</strong><span>{item.resultLabel}</span></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-skills section-anchor" id="skills" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading number="03" eyebrow="Tools I work with" title="Skills & technologies" description="A growing toolkit across development, data, and intelligent systems." />
        <div className="skills-grid" id="skills-title">
          {skillGroups.map(({ icon: Icon, title, skills }, index) => <article className="skill-card reveal" key={title}>
            <div className={`skill-icon skill-icon-${index}`}><Icon size={19} /></div>
            <div className="skill-card-heading"><h3>{title}</h3><span>0{index + 1}</span></div>
            <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>)}
        </div>
        <p className="skills-footnote"><Sparkles size={14} /> Currently building depth through hands-on practice and continuous learning.</p>
      </div>
    </section>
  );
}

function ProjectPreview() {
  return (
    <div className="project-preview" aria-label="Preview of a career guidance dashboard">
      <div className="preview-topbar"><span className="preview-brand"><span className="preview-brand-icon"><BrainCircuit size={12} /></span> pathwise <span className="preview-beta">AI</span></span><span className="preview-avatar">AK</span></div>
      <div className="preview-body">
        <div className="preview-greeting">YOUR NEXT CHAPTER <span>✳</span></div>
        <div className="preview-title">A path shaped<br />around <em>you.</em></div>
        <div className="preview-role"><span className="preview-role-icon"><Code2 size={15} /></span><span><small>YOUR TARGET ROLE</small><strong>Full Stack Developer</strong></span><ArrowUpRight size={14} /></div>
        <div className="preview-progress-label"><span>SKILL ALIGNMENT</span><strong>03 focus areas</strong></div>
        <div className="preview-progress"><i /><i /><i /><i /></div>
        <div className="preview-bottom"><span><span className="preview-check"><Check size={10} /></span>Learning roadmap ready</span><span>30 days <ArrowRight size={11} /></span></div>
      </div>
      <div className="preview-floating preview-float-top"><Sparkles size={13} /><span>Personalized for you</span></div>
      <div className="preview-floating preview-float-bottom"><span className="preview-status-dot" /> AI career insights</div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: 'AI Career Guide & Resume Analyzer',
      category: 'AI · CAREER TECHNOLOGY',
      description: "An AI-powered career guidance and resume analysis application. The Career Guide creates a personalized 30-day learning roadmap from a user's target role, current skills, and available time. The Resume Analyzer reviews a resume and offers practical feedback and suggestions for improvement.",
      features: ['Personalized 30-day learning roadmap', 'Career guidance based on role, skills, and available time', 'Resume analysis with actionable feedback'],
      technologies: ['Python', 'AI/ML', 'Flask', 'React', 'JavaScript', 'HTML', 'CSS', 'Gemini API'],
      link: 'https://github.com/kanushya6/ai-analyzer',
      artwork: 'career',
    },
    {
      title: 'Smart Lender',
      category: 'MACHINE LEARNING · FINTECH',
      description: 'A loan approval prediction web application built with Python, Flask, and Scikit-learn. It uses a trained Random Forest model to predict whether a loan application is likely to be approved from applicant and property details.',
      features: ['Random Forest loan approval predictions', 'Flask web application with responsive pages', 'Applicant, income, credit history, and property inputs'],
      technologies: ['Python', 'Flask', 'HTML5', 'CSS3', 'Scikit-learn', 'NumPy', 'Pickle'],
      inputs: ['Gender', 'Married', 'Dependents', 'Education', 'Self employed', 'Applicant income', 'Co-applicant income', 'Loan amount', 'Loan term', 'Credit history', 'Property area'],
      link: 'https://github.com/sweetypalivela55-oss/Smart-Lender',
      artwork: 'lender',
    },
  ];

  return (
    <section className="section section-projects section-anchor" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <SectionHeading number="04" eyebrow="Selected work" title="Projects with purpose." description="Ideas built around real questions, thoughtful guidance, and practical next steps." />
        <div className="projects-list" id="projects-title">
          {projects.map((project, index) => <article className="project-card reveal" key={project.title}>
            <div className={`project-art${project.artwork === 'lender' ? ' project-art-lender' : ''}`}>
              <div className="project-art-grid" />
              {project.artwork === 'career' ? <ProjectPreview /> : <div className="lender-artwork"><span className="lender-art-icon"><Database size={27} /></span><span className="lender-art-label">LOAN APPROVAL MODEL</span><strong>Prediction ready</strong><span className="lender-art-status"><Check size={13} /> Random Forest · Scikit-learn</span></div>}
              <span className="project-art-index">PROJECT / 0{index + 1}</span>
            </div>
            <div className="project-details">
              <div className="project-type">{project.artwork === 'career' ? <Sparkles size={14} /> : <Database size={14} />} {project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="feature-list">{project.features.map((feature) => <span key={feature}><Check size={14} /> {feature}</span>)}</div>
              {project.inputs && <div className="project-inputs"><strong>Applicant inputs</strong><div className="project-tags">{project.inputs.map((input) => <span key={input}>{input}</span>)}</div></div>}
              <div className="project-tech"><strong>Technologies</strong><div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
              <div className="project-links">{project.link ? <a href={project.link} className="project-link-primary" target="_blank" rel="noopener noreferrer">Explore Project <ExternalLink size={14} /></a> : <><button className="project-link-primary project-link-disabled" type="button" disabled>Explore Project <ExternalLink size={14} /></button><span className="project-link-note">GitHub repository currently unavailable</span></>}</div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Internships() {
  const internships = [
    {
      company: 'SmartBridge',
      title: 'Artificial Intelligence Internship',
      duration: '1 July 2026 – 13 August 2026',
      description: 'Completed an Artificial Intelligence internship involving AI/ML concepts, practical project development, and implementation of intelligent solutions.',
      skills: ['Python', 'Artificial Intelligence', 'Machine Learning', 'Data Analysis', 'AI/ML Project Development'],
    },
    {
      company: 'SmartBridge',
      title: 'Full Stack Development Internship',
      description: 'Completed practical training in full-stack web development and worked with frontend and backend technologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Backend Development'],
    },
  ];

  return (
    <section className="section section-internships section-anchor" id="internships" aria-labelledby="internships-title">
      <div className="page-shell">
        <SectionHeading number="05" eyebrow="Professional experience" title="Internships" description="Practical experience is the next chapter." />
        <div className="opportunity-band reveal" id="internships-title">
          <div className="opportunity-icon"><BriefcaseBusiness size={20} /></div>
          <div><p className="opportunity-kicker">OPEN TO OPPORTUNITIES</p><h3>Ready to learn by doing.</h3><p>Seeking opportunities to grow through meaningful software development, full-stack, and AI/ML work.</p></div>
          <a href="#contact" className="round-arrow" aria-label="Contact Anushya about opportunities"><ArrowUpRight size={18} /></a>
        </div>
        <div className="internship-grid">
          {internships.map((internship) => <article className="internship-card reveal" key={internship.title}>
            <div className="credential-card-heading"><span className="credential-icon internship-icon"><BriefcaseBusiness size={18} /></span><span className="credential-organization">{internship.company}</span></div>
            <h3>{internship.title}</h3>
            {internship.duration && <p className="internship-duration">{internship.duration}</p>}
            <p className="credential-description">{internship.description}</p>
            <div className="credential-tags">{internship.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div className="credential-card-footer"><button className="credential-action" type="button" disabled>Explore Internship <ExternalLink size={13} /></button><span className="credential-unavailable">Certificate Link Coming Soon</span></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certifications = [
    { name: 'Introduction to Python and AI', organization: 'Infosys Springboard', description: 'Certification in foundational Python programming and artificial intelligence.' },
    { name: 'Artificial Intelligence', organization: 'SmartBridge', description: 'Certification in artificial intelligence concepts and practical learning.' },
    { name: 'Python', organization: 'NPTEL', description: 'Certification in Python programming.' },
    { name: 'Cloud Computing', organization: 'NPTEL', description: 'Certification in cloud computing concepts and technologies.' },
    { name: 'AI', organization: 'EY Skill Passport', description: 'Certification in artificial intelligence skills.' },
    { name: 'Green Skills', organization: 'EY Skill Passport', description: 'Certification in green skills and sustainability.' },
    { name: 'AI', organization: 'GeeksforGeeks', description: 'Certification in artificial intelligence.' },
    { name: 'Generative AI', organization: 'NASSCOM', description: 'Certification in generative artificial intelligence.' },
    { name: 'Full Stack Development', organization: 'NASSCOM', description: 'Certification in full-stack development.' },
  ];

  return (
    <section className="section section-certifications section-anchor" id="certifications" aria-labelledby="certifications-title">
      <div className="page-shell">
        <SectionHeading number="06" eyebrow="Learning & credentials" title="Certifications" description="A commitment to keep learning, one skill at a time." />
        <div className="certification-grid" id="certifications-title">
          {certifications.map((certification) => <article className="certification-card reveal" key={`${certification.organization}-${certification.name}`}>
            <div className="credential-card-heading"><span className="credential-icon certification-icon"><Award size={18} /></span><span className="credential-organization">{certification.organization}</span></div>
            <h3>{certification.name}</h3>
            <p className="credential-description">{certification.description}</p>
            <div className="credential-card-footer"><button className="credential-action credential-action-unavailable" type="button" disabled>Certificate Link Coming Soon</button></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-contact section-anchor" id="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="page-shell contact-shell reveal">
        <p className="eyebrow"><span>07</span> Start a conversation</p>
        <h2 id="contact-title">Good work starts<br />with <span className="gradient-text">a hello.</span></h2>
        <p className="contact-copy">Looking for an enthusiastic learner for your team, or have a project in mind? I'd be glad to hear from you.</p>
        <a className="contact-email" href="mailto:kanushya6@gmail.com">kanushya6@gmail.com <ArrowUpRight size={17} /></a>
        <div className="contact-bottom"><span><span className="availability-dot" /> Amalapuram, Andhra Pradesh</span><span>Usually happy to connect</span></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">A<span>.</span></span><span className="wordmark-name">Anushya Kadali</span></a>
        <span className="footer-caption">Learning, building, becoming.</span>
        <div className="footer-socials"><a href="https://www.linkedin.com/in/Anushyakadali/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={16} /></a><span className="social-unavailable" role="img" aria-label="GitHub profile link not provided" title="GitHub profile link not provided"><Github size={16} /></span><a href="mailto:kanushya6@gmail.com" aria-label="Email Anushya"><Mail size={16} /></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={16} /></a></div>
        <span className="footer-copyright">© 2026 Anushya Kadali</span>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <><Navbar /><main><Hero /><About /><Education /><Skills /><Projects /><Internships /><Certifications /><Contact /></main><Footer /><a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a></>;
}

export default App;