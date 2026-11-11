import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Cpu, 
  Database, 
  Cloud, 
  Layers, 
  Sparkles, 
  Terminal 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      default: return <Code2 size={20} />;
    }
  };

  const filteredSkills = activeCategory === 'all'
    ? portfolioData.skills
    : portfolioData.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">Skills & Engineering Stack</h2>
          <p className="section-subtitle">
            Battle-tested frameworks, modern systems languages, and cloud-native infrastructure tooling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter">
          {portfolioData.skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrapper">
                  {getIcon(skill.icon)}
                </div>
                <span className="skill-exp-tag">{skill.experience}</span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-highlight">{skill.highlight}</p>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>Proficiency</span>
                  <span className="mono">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
