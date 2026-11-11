import React, { useState } from 'react';
import { Layers, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
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
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of production-grade distributed architectures, developer platforms, and AI tools.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-filter">
          <button
            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'backend' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('backend')}
          >
            Systems & Backend
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('frontend')}
          >
            AI & Full Stack
          </button>
          <button
            className={`filter-btn ${selectedFilter === 'cloud' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('cloud')}
          >
            DevOps & Tooling
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
                  Deep Dive <ArrowRight size={14} />
                </button>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    title="View Source on GitHub"
                  >
                    <GithubIcon size={19} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    title="Live Production Demo"
                  >
                    <ExternalLink size={19} />
                  </a>
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
