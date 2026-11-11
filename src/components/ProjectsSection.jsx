import React, { useState } from 'react';
import { Layers, ExternalLink, ArrowRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="section-title">Featured Projects & Systems</h2>
          <p className="section-subtitle">
            Enterprise platforms handling hundreds of millions of monthly requests, AI-assisted telemetry, and award-winning fintech.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-filter">
          <button
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Systems
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'cloud' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('cloud')}
          >
            Enterprise & M365
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('ai')}
          >
            Emerging AI & Ops
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('frontend')}
          >
            Frontend & Apps
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'backend' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('backend')}
          >
            Fintech & Startups
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <span className="project-badge">{project.badge}</span>
              <span className="project-category">{project.categoryLabel}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-arch-box">
                <span style={{ color: 'var(--text-muted)' }}>Arch: </span>
                {project.architecture}
              </div>

              <div className="project-tags">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="tech-tag">+{project.technologies.length - 5}</span>
                )}
              </div>

              <div className="project-footer">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn btn-outline btn-sm"
                  style={{ gap: '0.35rem' }}
                >
                  Architecture Deep Dive <ArrowRight size={14} />
                </button>

                <div className="project-links">
                  {project.architectureDocUrl && (
                    <a
                      href={project.architectureDocUrl}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="icon-link"
                      title={project.architectureDocLabel || 'Architectural Specification'}
                    >
                      <FileText size={19} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-link"
                      title={project.liveUrl.includes('youtube') || project.liveUrl.includes('youtu.be') ? 'Watch Feature Demo on YouTube' : 'Live Production Reference'}
                    >
                      <ExternalLink size={19} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
