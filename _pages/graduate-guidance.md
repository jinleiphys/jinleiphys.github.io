---
layout: archive
title: "Graduate Student Guidance"
permalink: /graduate-guidance/
author_profile: true
---

<style>
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #ec4899;
  --accent: #14b8a6;
  --bg-light: #f8fafc;
  --bg-card: #ffffff;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border: #e2e8f0;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.dark-mode {
  --bg-light: #0f172a;
  --bg-card: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --border: #334155;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.95;
  position: relative;
  z-index: 1;
}

.hero a {
  color: #fcd34d;
  text-decoration: underline;
}

/* Theme Toggle */
.theme-toggle {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1000;
  background: var(--bg-card);
  border: 2px solid var(--border);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

/* Progress Sidebar */
.progress-sidebar {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: none;
}

@media (min-width: 1400px) {
  .progress-sidebar {
    display: block;
  }
}

.progress-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--border);
  margin: 12px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.progress-dot.active {
  background: var(--primary);
  transform: scale(1.3);
}

.progress-dot:hover::after {
  content: attr(data-label);
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg-card);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  white-space: nowrap;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: var(--bg-card);
  padding: 1rem;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.nav-tab {
  padding: 0.75rem 1.25rem;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-tab:hover {
  background: var(--bg-light);
  color: var(--text-primary);
}

.nav-tab.active {
  background: var(--primary);
  color: white;
}

/* Section Cards */
.section {
  display: none;
  animation: fadeIn 0.5s ease;
}

.section.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card h2 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card h3 {
  color: var(--text-primary);
  font-size: 1.15rem;
  margin: 1.5rem 0 1rem;
}

.card p, .card li {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Accordion */
.accordion {
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin: 1rem 0;
}

.accordion-item {
  border-bottom: 1px solid var(--border);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: var(--bg-light);
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.accordion-header:hover {
  background: var(--border);
}

.accordion-header .icon {
  transition: transform 0.3s ease;
  font-size: 1.25rem;
}

.accordion-item.open .accordion-header .icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  background: var(--bg-card);
}

.accordion-item.open .accordion-content {
  max-height: 2000px;
}

.accordion-body {
  padding: 1.5rem;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.grid-item {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
}

.grid-item:nth-child(2) { border-left-color: var(--secondary); }
.grid-item:nth-child(3) { border-left-color: var(--accent); }
.grid-item:nth-child(4) { border-left-color: #f59e0b; }

.grid-item:hover {
  transform: translateX(5px);
}

.grid-item h4 {
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
}

.grid-item ul {
  margin: 0;
  padding-left: 1.25rem;
}

.grid-item li {
  margin: 0.4rem 0;
  font-size: 0.95rem;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 2rem;
  margin: 1.5rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--primary), var(--secondary));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding: 1rem 0 1rem 1.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.5rem;
  top: 1.25rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid var(--bg-card);
  box-shadow: var(--shadow);
}

.timeline-item h4 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-item p {
  margin: 0;
  font-size: 0.95rem;
}

/* Highlight Boxes */
.highlight {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
}

.highlight h3 {
  color: white;
  margin-top: 0;
}

.highlight p, .highlight li {
  color: rgba(255,255,255,0.95);
}

.highlight.secondary {
  background: linear-gradient(135deg, var(--secondary) 0%, #db2777 100%);
}

.highlight.accent {
  background: linear-gradient(135deg, var(--accent) 0%, #0d9488 100%);
}

/* Resource List */
.resource-box {
  background: var(--bg-light);
  border-left: 4px solid var(--accent);
  padding: 1.5rem;
  border-radius: 0 12px 12px 0;
  margin: 1.5rem 0;
}

.resource-box h3 {
  margin-top: 0;
  color: var(--text-primary);
}

/* CTA Box */
.cta {
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  margin: 2rem 0;
}

.cta h3 {
  color: white;
  margin-top: 0;
  font-size: 1.3rem;
}

.cta p {
  color: rgba(255,255,255,0.95);
  margin-bottom: 0;
}

/* Search Box */
.search-box {
  position: relative;
  margin-bottom: 2rem;
}

.search-box input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid var(--border);
  border-radius: 12px;
  font-size: 1rem;
  background: var(--bg-card);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.search-box input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.search-box::before {
  content: '🔍';
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
}

/* Checklist */
.checklist {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.checklist li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.checklist li:last-child {
  border-bottom: none;
}

.checklist input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: var(--primary);
  margin-top: 2px;
}

.checklist label {
  color: var(--text-secondary);
  cursor: pointer;
  flex: 1;
}

.checklist input:checked + label {
  text-decoration: line-through;
  opacity: 0.6;
}

/* Stats Counter */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-light);
  border-radius: 12px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  display: block;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero { padding: 2rem 1.5rem; }
  .hero h1 { font-size: 1.8rem; }
  .card { padding: 1.5rem; }
  .nav-tabs { flex-direction: column; }
  .nav-tab { justify-content: center; }
  .theme-toggle { top: auto; bottom: 20px; right: 20px; }
}
</style>

<button class="theme-toggle" onclick="toggleTheme()" title="Toggle dark mode">🌙</button>

<div class="progress-sidebar" id="progressSidebar">
  <div class="progress-dot" data-label="Getting Started" data-section="0"></div>
  <div class="progress-dot" data-label="Core Skills" data-section="1"></div>
  <div class="progress-dot" data-label="Mentor & Habits" data-section="2"></div>
  <div class="progress-dot" data-label="Research Growth" data-section="3"></div>
  <div class="progress-dot" data-label="Networking" data-section="4"></div>
  <div class="progress-dot" data-label="Career" data-section="5"></div>
</div>

<div class="hero">
  <h1>Your Journey in Nuclear Physics Graduate School</h1>
  <p>Welcome to the <a href="https://fewbody.com" target="_blank">Quantum Few-Body Dynamics Research Group</a>! This interactive guide will help you navigate your graduate journey and thrive as a nuclear physics researcher.</p>
</div>

<div class="search-box">
  <input type="text" id="searchInput" placeholder="Search topics... (e.g., 'conferences', 'mental health', 'coding')" onkeyup="searchContent()">
</div>

<div class="nav-tabs">
  <button class="nav-tab active" onclick="showSection(0)">🚀 Getting Started</button>
  <button class="nav-tab" onclick="showSection(1)">🛠️ Core Skills</button>
  <button class="nav-tab" onclick="showSection(2)">🤝 Mentor & Habits</button>
  <button class="nav-tab" onclick="showSection(3)">🎓 Research Growth</button>
  <button class="nav-tab" onclick="showSection(4)">🌐 Networking</button>
  <button class="nav-tab" onclick="showSection(5)">🚀 Career</button>
</div>

<!-- Section 0: Getting Started -->
<div class="section active" id="section-0">
  <div class="card">
    <h2>🌟 Understanding Graduate School</h2>
    <p>Graduate school represents a significant transition from undergraduate studies. As a graduate student in nuclear physics, you are training to become a professional researcher, contributing original knowledge while honing skills that extend beyond academia.</p>

    <div class="highlight">
      <h3>Key Differences from Undergraduate Study</h3>
      <ul>
        <li>Focus shifts from broad learning to deep specialization</li>
        <li>Emphasis on research and original contributions</li>
        <li>Mentorship-driven learning rather than exam-based</li>
        <li>Building professional researcher skills</li>
      </ul>
    </div>

    <p>In nuclear physics—a mature discipline with roots in early 20th-century discoveries—you'll explore fundamental questions about the universe, including nucleosynthesis in stars, exotic nuclei like halo structures, and fusion for clean energy.</p>
  </div>

  <div class="card">
    <h2>🎯 Your First Weeks</h2>

    <div class="timeline">
      <div class="timeline-item">
        <h4>Week 1-2: Onboarding</h4>
        <p>Receive your warm-up research project focused on quantum scattering theory, nuclear reaction dynamics, or advanced few-body quantum mechanics methods.</p>
      </div>
      <div class="timeline-item">
        <h4>Week 3-4: Foundation Building</h4>
        <p>Immerse yourself in foundational reading and computational environments. Get comfortable with Linux and programming in Fortran.</p>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>📚 Essential Reading Resources</span>
          <span class="icon">▼</span>
        </button>
        <div class="accordion-content">
          <div class="accordion-body">
            <ul>
              <li><strong>"Quantum Collision Theory"</strong> by C.J. Joachain - fundamental scattering theory</li>
              <li><strong>"Nuclear Reaction Theory"</strong> by Herman Feshbach - comprehensive reaction dynamics</li>
              <li><strong>"Quantum Mechanics II"</strong> by Rubin H. Landau</li>
              <li><strong>"Theory of Nuclear Reactions"</strong> by A.K. Kerman - advanced reaction mechanisms</li>
              <li><strong>Numerical Methods</strong> from Hjorth-Jensen's lectures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cta">
      <h3>🎯 Goal for First Month</h3>
      <p>Allocate time daily to reading and note-taking. Grasp core concepts before diving into hands-on coding.</p>
    </div>
  </div>

  <div class="card">
    <h2>🧠 Mental Health & Wellness</h2>

    <div class="grid">
      <div class="grid-item">
        <h4>⚖️ Work-Life Balance</h4>
        <ul>
          <li>Set boundaries and work hours</li>
          <li>Regular exercise</li>
          <li>Social connections outside academia</li>
          <li>Pursue hobbies</li>
          <li>Prioritize 7-8 hours sleep</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🎯 Stress Management</h4>
        <ul>
          <li>Practice mindfulness</li>
          <li>Break large tasks into steps</li>
          <li>Celebrate small victories</li>
          <li>Seek professional help when needed</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>💬 Support Systems</h4>
        <ul>
          <li>Regular advisor check-ins</li>
          <li>Peer support groups</li>
          <li>University counseling services</li>
          <li>Professional workshops</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🛡️ Dealing with Setbacks</h4>
        <ul>
          <li>View failures as learning</li>
          <li>Maintain long-term perspective</li>
          <li>Build resilience</li>
          <li>Practice self-compassion</li>
        </ul>
      </div>
    </div>

    <div class="highlight secondary">
      <h3>🚨 When to Seek Help</h3>
      <p>Don't hesitate if you experience persistent anxiety, depression, impostor syndrome, or burnout. These are common in graduate school—seeking help is a sign of strength.</p>
    </div>
  </div>
</div>

<!-- Section 1: Core Skills -->
<div class="section" id="section-1">
  <div class="card">
    <h2>📚 Research Methodology</h2>

    <div class="grid">
      <div class="grid-item">
        <h4>🔍 Literature Review</h4>
        <ul>
          <li>Boolean search on arXiv/Google Scholar</li>
          <li>Set up email alerts</li>
          <li>Track citations with Connected Papers</li>
          <li>Use Zotero or Mendeley</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>📖 Critical Reading</h4>
        <ul>
          <li>Read abstracts first</li>
          <li>Focus on methodology</li>
          <li>Question assumptions</li>
          <li>Synthesize across papers</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🎯 Research Questions</h4>
        <ul>
          <li>Identify knowledge gaps</li>
          <li>Formulate testable hypotheses</li>
          <li>Consider feasibility</li>
          <li>Align with group expertise</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>📊 Data Analysis</h4>
        <ul>
          <li>Statistical vs physical meaning</li>
          <li>Error propagation</li>
          <li>Appropriate fitting methods</li>
          <li>Multiple validation approaches</li>
        </ul>
      </div>
    </div>

    <div class="highlight accent">
      <h3>💡 Research Workflow</h3>
      <p>Read broadly → Identify problems → Formulate hypotheses → Design experiments → Validate results → Communicate findings. Keep detailed notebooks!</p>
    </div>
  </div>

  <div class="card">
    <h2>🛠️ Essential Tools & Skills</h2>

    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>🔬 Theoretical Foundations</span>
          <span class="icon">▼</span>
        </button>
        <div class="accordion-content">
          <div class="accordion-body">
            <ul>
              <li>Quantum scattering theory</li>
              <li>Nuclear reaction theory</li>
              <li>Few-body quantum mechanics</li>
              <li>Channel coupling methods</li>
              <li>R-matrix and S-matrix formalism</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>💻 Computational Skills</span>
          <span class="icon">▼</span>
        </button>
        <div class="accordion-content">
          <div class="accordion-body">
            <ul>
              <li>Python, Fortran, or C++</li>
              <li>NumPy for numerical work</li>
              <li>ROOT for data analysis</li>
              <li>High-performance computing</li>
              <li>Version control with GitHub</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>☁️ Modern Technologies</span>
          <span class="icon">▼</span>
        </button>
        <div class="accordion-content">
          <div class="accordion-body">
            <ul>
              <li>Google Colab for collaborative coding</li>
              <li>AWS/Azure for large-scale computations</li>
              <li>Docker containers for reproducibility</li>
              <li>Machine learning for nuclear data</li>
              <li>Overleaf for collaborative LaTeX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="resource-box">
      <h3>💡 Core Theory Focus</h3>
      <p>Master quantum scattering theory first—it provides the mathematical framework for all nuclear reactions. These foundations are essential before applying computational tools.</p>
    </div>
  </div>
</div>

<!-- Section 2: Mentor & Habits -->
<div class="section" id="section-2">
  <div class="card">
    <h2>🤝 Building Strong Mentor Relationships</h2>

    <p>Fostering a strong mentor relationship is key to navigating graduate school successfully.</p>

    <ul class="checklist">
      <li>
        <input type="checkbox" id="c1">
        <label for="c1"><strong>Regular Meetings:</strong> Schedule weekly or bi-weekly sessions</label>
      </li>
      <li>
        <input type="checkbox" id="c2">
        <label for="c2"><strong>Come Prepared:</strong> Always have an agenda with updates</label>
      </li>
      <li>
        <input type="checkbox" id="c3">
        <label for="c3"><strong>Active Participation:</strong> Engage in seminars and journal clubs</label>
      </li>
      <li>
        <input type="checkbox" id="c4">
        <label for="c4"><strong>Open Communication:</strong> Reply to emails within a day</label>
      </li>
      <li>
        <input type="checkbox" id="c5">
        <label for="c5"><strong>Embrace Feedback:</strong> View it as learning, not criticism</label>
      </li>
    </ul>

    <div class="highlight">
      <h3>🎯 Integration Strategy</h3>
      <p>Leverage the emphasis on connecting atomic and nuclear physics for deeper insights. This collaborative approach helps transition from guided tasks to independence.</p>
    </div>
  </div>

  <div class="card">
    <h2>📅 Daily and Weekly Habits</h2>

    <div class="stats">
      <div class="stat-item">
        <span class="stat-number">60%</span>
        <span class="stat-label">Core Research</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">20%</span>
        <span class="stat-label">Literature Review</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">20%</span>
        <span class="stat-label">Coding & Debug</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">40+</span>
        <span class="stat-label">Hours/Week</span>
      </div>
    </div>

    <div class="timeline">
      <div class="timeline-item">
        <h4>Year 1 Milestones</h4>
        <p>Reproduce a paper's results, master computational tools</p>
      </div>
      <div class="timeline-item">
        <h4>Year 2 Milestones</h4>
        <p>Submit conference abstract, begin independent research</p>
      </div>
    </div>

    <div class="cta">
      <h3>🎯 Weekly Group Meetings</h3>
      <p>Prepare summaries of your advancements and note new tasks for follow-up.</p>
    </div>
  </div>

  <div class="card">
    <h2>💪 Overcoming Challenges</h2>

    <div class="highlight secondary">
      <h3>🧗 Navigating the Learning Curve</h3>
      <p>The steep learning curve might involve initial confusion with complex theories or computational hurdles. Start with guided literature surveys before advancing to independent modeling.</p>
    </div>

    <div class="grid">
      <div class="grid-item">
        <h4>🔍 Problem-Solving</h4>
        <ul>
          <li>Break complex problems down</li>
          <li>Foster curiosity</li>
          <li>Build collaborations</li>
          <li>Maintain balance</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🌱 Personal Development</h4>
        <ul>
          <li>Cultivate resilience</li>
          <li>Celebrate small wins</li>
          <li>Stay adaptable</li>
          <li>Build networks</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Section 3: Research Growth -->
<div class="section" id="section-3">
  <div class="card">
    <h2>🎓 Developing Research Independence</h2>

    <div class="timeline">
      <div class="timeline-item">
        <h4>Phase 1: Foundation (Year 1)</h4>
        <p>Master foundational concepts through reading and coding. Start proposing small modifications to calculations.</p>
      </div>
      <div class="timeline-item">
        <h4>Phase 2: Growth (Year 2)</h4>
        <p>Take ownership of sub-projects. Collaborate to co-author papers, contributing original insights.</p>
      </div>
      <div class="timeline-item">
        <h4>Phase 3: Independence (Year 3+)</h4>
        <p>Formulate your thesis proposal independently. Drive your scientific trajectory through innovation.</p>
      </div>
    </div>

    <div class="highlight accent">
      <h3>🔬 Research Excellence</h3>
      <p>Regularly question assumptions, identify research gaps in areas like halo nuclei or astrophysical reactions, and discuss potential extensions with your mentor.</p>
    </div>
  </div>

  <div class="card">
    <h2>🚀 Advanced Skill Building</h2>

    <div class="grid">
      <div class="grid-item">
        <h4>🤖 Cutting-Edge Techniques</h4>
        <ul>
          <li>Machine learning for nuclear data</li>
          <li>High-performance computing</li>
          <li>Quantum computing applications</li>
          <li>Advanced numerical methods</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🌍 Interdisciplinary Links</h4>
        <ul>
          <li>Stellar nucleosynthesis</li>
          <li>Fusion energy</li>
          <li>Medical physics</li>
          <li>Security applications</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>💰 Professional Skills</h4>
        <ul>
          <li>Grant writing</li>
          <li>Proposal development</li>
          <li>Funding acquisition</li>
          <li>Project management</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>📚 Staying Current</h4>
        <ul>
          <li>Regular arXiv monitoring</li>
          <li>Trend adaptation</li>
          <li>Ethical practices</li>
          <li>Reproducible research</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>🏆 Metrics of Success</h2>

    <div class="grid">
      <div class="grid-item">
        <h4>📝 Academic Goals</h4>
        <ul>
          <li>Complete thesis on time</li>
          <li>2-3 co-authored publications</li>
          <li>Conference presentations</li>
          <li>Strong recommendations</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>📊 Publication Targets</h4>
        <ul>
          <li>Physical Review C articles</li>
          <li>Reaction theory contributions</li>
          <li>Astrophysics research</li>
          <li>Building h-index</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Section 4: Networking -->
<div class="section" id="section-4">
  <div class="card">
    <h2>🌐 Conferences & Networking</h2>

    <div class="timeline">
      <div class="timeline-item">
        <h4>Year 1: Local Conferences</h4>
        <p>Attend local physics meetings to observe presentation styles and network with nearby institutions.</p>
      </div>
      <div class="timeline-item">
        <h4>Year 2: First Presentations</h4>
        <p>Present preliminary results at student conferences. Practice clear, concise presentations.</p>
      </div>
      <div class="timeline-item">
        <h4>Year 3+: Major Conferences</h4>
        <p>Target prestigious venues like APS DNP, International Nuclear Physics Conference, or specialized workshops.</p>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>🎤 Presentation Excellence</span>
          <span class="icon">▼</span>
        </button>
        <div class="accordion-content">
          <div class="accordion-body">
            <ul>
              <li><strong>Structure:</strong> Motivation → Methods → Results → Implications</li>
              <li><strong>Visuals:</strong> Clear plots with large fonts and error bars</li>
              <li><strong>Timing:</strong> Practice to stay within limits</li>
              <li><strong>Questions:</strong> Prepare for technical and broad questions</li>
              <li><strong>Follow-up:</strong> Exchange contacts and send references</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span>🤝 Networking Strategy</span>
          <span class="icon">▼</span>
        </button>
        <div class="accordion-content">
          <div class="accordion-body">
            <ul>
              <li>Prepare elevator pitch about your research</li>
              <li>Attend social events and poster sessions</li>
              <li>Follow up with meaningful connections</li>
              <li>Offer to collaborate or share resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>🌍 International Opportunities</h2>

    <div class="grid">
      <div class="grid-item">
        <h4>🏛️ Research Facilities</h4>
        <ul>
          <li>CERN (Europe)</li>
          <li>RIKEN (Japan)</li>
          <li>GSI/FAIR (Germany)</li>
          <li>TRIUMF (Canada)</li>
          <li>HIAF (China)</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🎓 International Programs</h4>
        <ul>
          <li>CERN Summer Programme</li>
          <li>RIKEN IPA</li>
          <li>Helmholtz Graduate School</li>
          <li>Marie Curie Actions</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>📚 Summer Schools</h4>
        <ul>
          <li>Les Houches School</li>
          <li>INT Summer School</li>
          <li>ECT* Programme</li>
          <li>CTEQ Schools</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🤝 Benefits</h4>
        <ul>
          <li>Unique experimental data</li>
          <li>Different approaches</li>
          <li>Cultural skills</li>
          <li>Global network</li>
        </ul>
      </div>
    </div>

    <div class="highlight">
      <h3>🌟 Cultural Intelligence</h3>
      <p>International collaborations require cultural sensitivity. Learn basic phrases, understand different meeting styles, and be patient with communication barriers.</p>
    </div>
  </div>

  <div class="card">
    <h2>💰 Funding Opportunities</h2>

    <div class="grid">
      <div class="grid-item">
        <h4>✈️ Travel Grants</h4>
        <ul>
          <li>Professional society awards</li>
          <li>Graduate research grants</li>
          <li>Exchange programs</li>
          <li>Summer school funding</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>📝 Grant Writing</h4>
        <ul>
          <li>Start with small opportunities</li>
          <li>Learn budget preparation</li>
          <li>Develop clear timelines</li>
          <li>Write for non-specialists</li>
        </ul>
      </div>
    </div>

    <div class="cta">
      <h3>🎯 Funding Strategy</h3>
      <p>Start preparing applications 6-12 months in advance. Research deadlines and build relationships with potential mentors early.</p>
    </div>
  </div>
</div>

<!-- Section 5: Career -->
<div class="section" id="section-5">
  <div class="card">
    <h2>🚀 Career Paths</h2>

    <div class="grid">
      <div class="grid-item">
        <h4>🎓 Academic Path</h4>
        <ul>
          <li>Postdoc positions</li>
          <li>Teaching experience</li>
          <li>Grant writing skills</li>
          <li>Independent research program</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🏭 Industry</h4>
        <ul>
          <li>National labs (LLNL, ORNL)</li>
          <li>Defense contractors</li>
          <li>Medical physics</li>
          <li>Nuclear energy sector</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>💼 Alternative Careers</h4>
        <ul>
          <li>Data science/ML</li>
          <li>Quantitative finance</li>
          <li>Science policy</li>
          <li>Science communication</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🔧 Transferable Skills</h4>
        <ul>
          <li>Complex problem-solving</li>
          <li>Programming</li>
          <li>Statistical modeling</li>
          <li>Project management</li>
        </ul>
      </div>
    </div>

    <div class="highlight">
      <h3>💡 Career Planning</h3>
      <p>Start exploring options early. Attend career panels, conduct informational interviews, and develop diverse skills. Your training provides a strong foundation for many high-impact careers.</p>
    </div>
  </div>

  <div class="card">
    <h2>🌟 Professional Mindset</h2>

    <div class="resource-box">
      <h3>🤝 Ethical Collaboration</h3>
      <ul>
        <li><strong>Reproducibility:</strong> Ensure results can be reproduced</li>
        <li><strong>Proper Citations:</strong> Give credit where due</li>
        <li><strong>Inclusivity:</strong> Advocate for diversity</li>
        <li><strong>Mentorship:</strong> Help junior students</li>
      </ul>
    </div>

    <div class="highlight secondary">
      <h3>🎯 Success Indicators</h3>
      <ul>
        <li>Securing postdoc positions</li>
        <li>Achieving tenure-track roles</li>
        <li>Building a fulfilling legacy</li>
        <li>Contributing to scientific advancement</li>
      </ul>
    </div>
  </div>

  <div class="card">
    <h2>🎉 Your Journey Continues</h2>

    <p>Fostering personal growth and balance completes the graduate journey, transforming challenges into strengths.</p>

    <div class="grid">
      <div class="grid-item">
        <h4>🎨 Creative Balance</h4>
        <ul>
          <li>Integrate hobbies</li>
          <li>Maintain health</li>
          <li>Build connections</li>
          <li>Practice mindfulness</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>🌍 Community</h4>
        <ul>
          <li>Teaching & outreach</li>
          <li>Inspiring future scientists</li>
          <li>Science communication</li>
          <li>Professional networking</li>
        </ul>
      </div>
    </div>

    <div class="resource-box">
      <h3>🔗 Useful Resources</h3>
      <ul>
        <li><strong>Personal Website:</strong> <a href="https://jinleiphys.github.io">jinleiphys.github.io</a></li>
        <li><strong>Group Website:</strong> <a href="https://fewbody.com">fewbody.com</a></li>
        <li><strong>arXiv:</strong> Stay current with latest research</li>
        <li><strong>Nuclear Data:</strong> NNDC, ENSDF databases</li>
      </ul>
    </div>

    <div class="hero" style="margin-top: 2rem;">
      <h3>🎯 Your Success Formula</h3>
      <p>By communicating effectively, persisting through challenges, and contributing meaningfully, you'll emerge as an accomplished researcher ready for impactful contributions to nuclear physics and beyond.</p>
      <p style="margin-top: 1rem;"><strong>Your journey is not just about earning a degree—it's about becoming a professional who makes lasting contributions to science and society.</strong></p>
    </div>
  </div>
</div>

<script src="/assets/js/graduate-guidance.js"></script>
