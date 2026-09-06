import React, { useState } from 'react';
import { Mail, Check, Sparkles, Shield } from 'lucide-react';

export default function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <div style={{
      margin: '60px 0 40px 0',
      padding: '48px 36px',
      borderRadius: '24px',
      background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
      border: '1px solid var(--border-accent)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '400px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(30px)'
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto' }}>
        <span className="badge purple" style={{ marginBottom: '16px' }}>
          <Sparkles size={13} /> DAILY FRONTIER AI BRIEFING
        </span>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.3rem)',
          lineHeight: 1.25,
          marginBottom: '12px',
          fontWeight: 800
        }}>
          Get Ahead of the AI Hype Cycle.
        </h2>

        <p style={{
          fontSize: '1.02rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '28px'
        }}>
          Join <strong>18,450+ AI engineers, researchers, and systems architects</strong> who receive our daily technical synthesis, ArXiv breakdowns, and GPU benchmarks directly in their inbox.
        </p>

        {subscribed ? (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#34d399',
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '0.95rem'
          }}>
            <Check size={18} />
            <span>You're in! Check your inbox for tomorrow's dispatch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '10px',
            maxWidth: '480px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 260px', position: 'relative' }}>
              <input
                type="email"
                placeholder="Enter your work email (e.g. dev@openai.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-main)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.92rem', whiteSpace: 'nowrap' }}
            >
              <span>Subscribe Free</span>
            </button>
          </form>
        )}

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '20px',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Shield size={13} color="var(--cyan)" /> Zero spam. One-click unsubscribe anytime.
          </span>
        </div>
      </div>
    </div>
  );
}
