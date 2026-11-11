import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Track record of shipping mission-critical systems and scaling engineering architectures.
          </p>
        </div>

        <div className="timeline">
          {portfolioData.experience.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company">
                      <strong>{item.company}</strong> • <span style={{ fontSize: '0.88rem' }}>{item.location}</span>
                    </div>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  {item.description}
                </p>

                <ul className="timeline-achievements">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>

                <div className="project-tags" style={{ marginBottom: 0 }}>
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tech-tag" style={{ background: 'rgba(56, 189, 248, 0.08)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
