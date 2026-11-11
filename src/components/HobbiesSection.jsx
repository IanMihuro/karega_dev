import React from 'react';
import { Sprout, Dumbbell, Gamepad2, Compass, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HobbiesSection() {
  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'Sprout': return <Sprout size={24} />;
      case 'Dumbbell': return <Dumbbell size={24} />;
      case 'Gamepad2': return <Gamepad2 size={24} />;
      case 'Compass': return <Compass size={24} />;
      default: return <Heart size={24} />;
    }
  };

  return (
    <section id="hobbies" className="section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Heart size={14} />
            <span>BEYOND THE CODE</span>
          </div>
          <h2 className="section-title">Life &amp; Personal Passions</h2>
          <p className="section-subtitle">
            What keeps me grounded, disciplined, and energized outside of large-scale systems engineering.
          </p>
        </div>

        <div className="hobbies-grid">
          {portfolioData.hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <div className="hobby-card-header">
                <div className="hobby-icon-box">
                  {getHobbyIcon(hobby.icon)}
                </div>
                <span className="hobby-category">{hobby.category}</span>
              </div>

              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-desc">{hobby.description}</p>

              <div className="hobby-tags">
                {hobby.tags.map((tag) => (
                  <span key={tag} className="tech-tag" style={{ background: 'rgba(56, 189, 248, 0.06)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
