import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  FileText, 
  Layers, 
  AlertTriangle, 
  Maximize2 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

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
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.4rem', paddingRight: '2rem' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.98rem' }}>
          {project.subtitle}
        </p>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview &amp; Blueprint
          </button>
          {project.architectureLayers && (
            <button
              className={`modal-tab-btn ${activeTab === 'layers' ? 'active' : ''}`}
              onClick={() => setActiveTab('layers')}
            >
              System Layers ({project.architectureLayers.length})
            </button>
          )}
          {project.challengesAndSolutions && (
            <button
              className={`modal-tab-btn ${activeTab === 'challenges' ? 'active' : ''}`}
              onClick={() => setActiveTab('challenges')}
            >
              Engineering Challenges ({project.challengesAndSolutions.length})
            </button>
          )}
        </div>

        {/* Tab 1: Overview & Blueprint */}
        {activeTab === 'overview' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.92rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={16} /> Data Flow &amp; Runtime Pipeline
              </h4>
              <div className="project-arch-box">
                {project.architecture}
              </div>
            </div>

            {/* Visual Architecture Diagram Blueprint if available */}
            {project.architectureDiagram && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '0.92rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layers size={16} /> Architectural Blueprint
                  </h4>
                  <a
                    href={project.architectureDiagram}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.78rem',
                      color: 'var(--accent-cyan)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Maximize2 size={13} /> View Fullscreen
                  </a>
                </div>
                <div className="arch-diagram-container">
                  <img
                    src={project.architectureDiagram}
                    alt={`${project.title} Architectural Blueprint`}
                    className="arch-diagram-img"
                  />
                </div>
              </div>
            )}

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.92rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                Key Engineering Highlights &amp; Metrics
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
          </div>
        )}

        {/* Tab 2: System Layers */}
        {activeTab === 'layers' && project.architectureLayers && (
          <div className="arch-layer-grid">
            {project.architectureLayers.map((layer, idx) => (
              <div key={idx} className="arch-layer-card">
                <div className="arch-layer-title">
                  <span>{layer.name}</span>
                </div>
                <p className="arch-layer-desc">{layer.description}</p>
                <div className="arch-layer-tech">
                  <span style={{ color: 'var(--text-muted)' }}>Tech: </span>{layer.tech}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Challenges & Solutions */}
        {activeTab === 'challenges' && project.challengesAndSolutions && (
          <div className="challenge-grid">
            {project.challengesAndSolutions.map((c, idx) => (
              <div key={idx} className="challenge-card">
                <div className="challenge-title">
                  ⚠ {c.challenge}
                </div>
                <div className="challenge-solution">
                  {c.solution}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Used */}
        <div style={{ marginBottom: '1.75rem', marginTop: '1rem' }}>
          <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Technologies &amp; Protocols
          </h4>
          <div className="project-tags">
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
          {project.architectureDocUrl && (
            <a
              href={project.architectureDocUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)' }}
            >
              <FileText size={16} /> {project.architectureDocLabel || 'Download Architectural Spec'}
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              {project.liveUrl.includes('youtube') || project.liveUrl.includes('youtu.be') 
                ? 'Watch Feature Demo' 
                : 'Live Reference'} <ExternalLink size={16} />
            </a>
          )}

          <span
            className="mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              padding: '0.55rem 0.85rem',
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
