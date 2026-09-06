import React from 'react';
import { Megaphone, ExternalLink, Zap, ArrowRight } from 'lucide-react';

export default function SponsorBanner({ sponsor, onOpenAdvertise }) {
  return (
    <div style={{
      margin: '40px 0',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%)',
      border: '1px solid rgba(245, 158, 11, 0.25)',
      padding: '20px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '750px' }}>
        <div style={{
          width: '46px',
          height: '46px',
          borderRadius: '12px',
          background: 'rgba(245, 158, 11, 0.12)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Zap size={22} color="var(--amber)" />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{
              fontFamily: 'var(--font-grotesk)',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--amber)'
            }}>
              ⭐ Featured AI Infrastructure Sponsor
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>• Ad</span>
          </div>
          <div style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
            <strong>InferCompute:</strong> Low-latency serverless GPU inference clusters for frontier reasoning models. Zero cold-starts and 60% cheaper than hyperscalers.
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a
          href="https://example.com/sponsor-neuralpulse"
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: 'var(--amber)',
            fontSize: '0.84rem',
            padding: '9px 18px'
          }}
        >
          <span>Claim $100 GPU Credits</span>
          <ExternalLink size={14} />
        </a>

        <button
          onClick={onOpenAdvertise}
          className="btn btn-ghost"
          style={{ fontSize: '0.8rem', gap: '4px' }}
          title="Reach 18,400+ AI engineers"
        >
          <Megaphone size={14} />
          <span>Sponsor Next Issue</span>
        </button>
      </div>
    </div>
  );
}
