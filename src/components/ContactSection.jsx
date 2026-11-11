import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, MessageSquare, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in high-scale systems architecture, AI engineering &amp; safety, or technical leadership? Reach out directly.
          </p>
        </div>

        <div className="contact-hub-card">
          <div className="status-badge" style={{ marginBottom: '1.25rem' }}>
            <span className="status-dot"></span>
            <span>Open to Senior Engineering, AI Engineering &amp; Safety Leadership Roles</span>
          </div>

          <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.85rem' }}>
            Let's build scalable systems &amp; safe AI architectures together.
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Whether you are looking to scale distributed cloud architectures, design reliable agentic AI systems with rigorous safety guardrails, or explore technical leadership opportunities, my inbox is always open.
          </p>

          {/* Quick Action Channels */}
          <div className="contact-hub-channels">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              <Mail size={18} /> Compose Email
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn btn-outline"
              style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
              title="Copy Email to Clipboard"
            >
              {copiedEmail ? <Check size={18} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={18} />}
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
            >
              <LinkedinIcon size={18} /> LinkedIn Profile <ExternalLink size={14} />
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
            >
              <GithubIcon size={18} /> GitHub Profile <ExternalLink size={14} />
            </a>
          </div>

          {/* Verified Metadata Row */}
          <div className="contact-details-row">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', marginBottom: '0.35rem', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <Mail size={16} /> Verified Email
              </div>
              <div className="mono" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                {portfolioData.personal.email}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', marginBottom: '0.35rem', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <MapPin size={16} /> Location
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                {portfolioData.personal.location}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', marginBottom: '0.35rem', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <Clock size={16} /> Response Time
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                Typically within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
