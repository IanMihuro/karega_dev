import React, { useState } from 'react';
import { ArrowUpRight, Terminal, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('developer.ts');

  const codeSnippets = {
    'developer.ts': `// ian_mihuro.ts
export const engineer = {
  name: "Ian Karega Mihuro",
  role: "Senior Software Engineer · Tech Lead · AI Engineer",
  leadScope: "Microsoft 365 Name Pronunciation",
  scale: "30M fetch reqs/day (550M/month in Teams)",
  aiHarness: [
    "Schema-first AI skills (Zod input/output contracts)",
    "Stage-aware skill routing & policy overlays",
    "Counterfactual replay & fail-closed safety gates"
  ],
  stack: [
    "TypeScript", "React", "C#", ".NET",
    "Azure", "M365 Substrate", "Kusto/KQL", "Zod"
  ]
};`,
    'metrics.json': `{
  "dailyFetchRequests": "30,000,000+",
  "monthlyFetchRequests": "550,000,000+",
  "startupIstanbul": "1st Place Winner (2015)",
  "clientSurfaces": ["Microsoft Teams", "Outlook", "People Cards"],
  "yearsExperience": "10+",
  "education": "BSc IT, Dedan Kimathi University"
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section" style={{ paddingTop: '3rem' }}>
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>{portfolioData.personal.status}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>.<br />
              Technical Lead & Senior Software Engineer.
            </h1>

            <p className="hero-desc">
              {portfolioData.personal.bio}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Featured Work <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
              <a href="#terminal" className="btn btn-outline">
                <Terminal size={16} /> Interactive Terminal
              </a>
            </div>

            <div className="hero-stats">
              {portfolioData.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="code-window">
              <div className="code-window-header">
                <div className="window-dots">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => setActiveTab('developer.ts')}
                    style={{
                      background: activeTab === 'developer.ts' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                      color: activeTab === 'developer.ts' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      cursor: 'pointer',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics.json')}
                    style={{
                      background: activeTab === 'metrics.json' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                      color: activeTab === 'metrics.json' ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      cursor: 'pointer',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    metrics.json
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  title="Copy code"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="code-window-body">
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
