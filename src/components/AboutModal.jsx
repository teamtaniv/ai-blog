import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';

export default function AboutModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(4px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        background: 'var(--bg-app)',
        border: '1px solid var(--border-card)',
        borderRadius: '16px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        padding: '36px',
        position: 'relative'
      }} className="fade-in">
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
          About Team Taniv / AI Research
        </h2>

        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
          This publication is dedicated to serious, hype-free technical writing on artificial intelligence, reasoning systems, and infrastructure optimization.
        </p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>
          Editorial Methodology & Copyright Safety
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ color: 'var(--text-primary)', marginTop: '2px' }}>•</span>
            <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-primary)' }}>Primary Sources Only:</strong> We never scrape, spin, or rewrite third-party tech journalism. Articles are synthesized strictly from open-access ArXiv papers, official model release specs, and open-source GitHub codebases.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ color: 'var(--text-primary)', marginTop: '2px' }}>•</span>
            <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-primary)' }}>Original Technical Value-Add:</strong> Every dispatch contains an original explanatory breakdown, novel architecture diagrams, and custom-written code benchmarks.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ color: 'var(--text-primary)', marginTop: '2px' }}>•</span>
            <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-primary)' }}>Full Citation & Attribution:</strong> All papers and authors are credited directly in the references section of each article.
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>
          Contact & Inquiries
        </h3>
        <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          For research contributions, inquiries, or sponsorship discussions, reach out to:{' '}
          <a href="mailto:teamtaniv@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
            teamtaniv@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
