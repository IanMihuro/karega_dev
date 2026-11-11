import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span>
              © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React & Vite.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={scrollToTop}
              className="btn btn-outline btn-sm"
              style={{ gap: '0.4rem', padding: '0.35rem 0.75rem' }}
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
