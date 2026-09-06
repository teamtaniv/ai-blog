import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Sparkles, ExternalLink, Flame } from 'lucide-react';

export default function HeroFeatured({ post, onReadPost, onOpenAdvertise }) {
  if (!post) return null;

  return (
    <div style={{
      position: 'relative',
      margin: '36px 0 48px 0',
      borderRadius: '24px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-card)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }}>
      {/* Background Decorative Ambient Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-100px',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, rgba(139, 92, 246, 0.05) 60%, transparent 80%)',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />

      <div style={{
        padding: '40px',
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px'
      }}>
        {/* Top Badges & Sponsor Pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="badge" style={{ background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(79, 172, 254, 0.1))' }}>
              <Flame size={13} color="var(--cyan)" />
              LATEST FRONTIER DISPATCH
            </span>
            <span className="badge purple">
              {post.category}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}>
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          {/* Sponsor Slot in Hero */}
          {post.sponsor ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              padding: '5px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem'
            }}>
              <span style={{ color: 'var(--amber)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.7rem' }}>
                SPONSORED BY:
              </span>
              <a 
                href={post.sponsor.url} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {post.sponsor.name}
                <ExternalLink size={12} color="var(--amber)" />
              </a>
            </div>
          ) : (
            <button 
              onClick={onOpenAdvertise}
              style={{
                fontSize: '0.75rem',
                color: 'var(--amber)',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px dashed rgba(245, 158, 11, 0.4)',
                padding: '4px 10px',
                borderRadius: '9999px'
              }}
            >
              + Sponsor This Spot
            </button>
          )}
        </div>

        {/* Big Editorial Headline */}
        <div>
          <h1 
            onClick={() => onReadPost(post)}
            style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)',
              lineHeight: 1.18,
              marginBottom: '16px',
              cursor: 'pointer',
              letterSpacing: '-0.03em',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}
          >
            {post.title}
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '850px'
          }}>
            {post.subtitle}
          </p>
        </div>

        {/* 30-Second Executive Summary Callout Box */}
        <div style={{
          background: 'var(--bg-surface)',
          borderLeft: '4px solid var(--cyan)',
          padding: '18px 24px',
          borderRadius: '0 12px 12px 0',
          border: '1px solid var(--border-dim)',
          borderLeftWidth: '4px',
          borderLeftColor: 'var(--cyan)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-grotesk)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--cyan)',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <Sparkles size={16} />
            The 30-Second Engineering Brief
          </div>
          <p style={{
            fontSize: '0.94rem',
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            {post.summary}
          </p>
        </div>

        {/* Footer Meta & CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '18px',
          paddingTop: '12px',
          borderTop: '1px solid var(--border-dim)'
        }}>
          {/* Author & Verification Shield */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--border-card)'
              }}
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                {post.author.name}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {post.author.role} • {post.date}
              </div>
            </div>

            {/* Anti-Plagiarism Quality Shield */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '4px 10px',
              borderRadius: '8px',
              marginLeft: '12px'
            }} title="Independently verified original synthesis. No news scraping.">
              <ShieldCheck size={16} color="var(--emerald)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#34d399' }}>
                {post.originalityScore}% Original Research
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => onReadPost(post)}
            className="btn btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.94rem' }}
          >
            <span>Read Deep-Dive Analysis</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
