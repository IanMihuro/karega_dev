import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Lock } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <span className="project-category">{project.categoryLabel}</span>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem' }}>
          {project.subtitle}
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={16} /> Architecture & Data Flow
          </h4>
          <div className="project-arch-box">
            {project.architecture}
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
            Key Engineering Metrics & Highlights
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
            Technologies Used
          </h4>
          <div className="project-tags">
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Production Reference <ExternalLink size={16} />
            </a>
          )}
          <span
            className="mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              padding: '0.65rem 0.95rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '0.5rem',
              border: '1px solid var(--border-color)',
            }}
          >
            <Lock size={14} style={{ color: 'var(--accent-cyan)' }} />
            Proprietary Enterprise Architecture
          </span>
        </div>
      </div>
    </div>
  );
}
