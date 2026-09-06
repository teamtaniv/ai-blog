import React, { useState } from 'react';
import { X, Megaphone, CheckCircle2, TrendingUp, Users, Target, Send, Zap } from 'lucide-react';

export default function AdvertiseModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    tier: 'Hero Sponsor',
    budget: '$500 - $1,500',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setTimeout(onClose, 2500);
    }, 500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-card)',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '820px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '36px',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)'
      }} className="animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '28px' }}>
          <span className="badge amber" style={{ marginBottom: '8px' }}>
            <Megaphone size={13} /> 2026 SPONSORSHIP KIT
          </span>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '8px' }}>
            Reach 18,400+ AI Builders & Systems Architects
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
            NeuralPulse is the daily briefing of choice for developers building with frontier reasoning models, local LLMs, and autonomous agents.
          </p>
        </div>

        {/* Key Metrics Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid var(--border-dim)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--cyan)' }}>
              120,000+
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Monthly Reads
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid var(--border-dim)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399' }}>
              48.2%
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Email Open Rate
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid var(--border-dim)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--amber)' }}>
              6.4%
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Sponsor CTR
            </div>
          </div>

          <div style={{
            background: 'var(--bg-card)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid var(--border-dim)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#a78bfa' }}>
              82%
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Engineers & Leads
            </div>
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '14px', fontWeight: 700 }}>
            Available Placement Inventory
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px'
          }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dim)',
              padding: '18px',
              borderRadius: '12px'
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                Header Hero Sponsor
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--cyan)', marginBottom: '8px' }}>
                $250 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ issue</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Above-the-fold banner on the web dispatch and primary header callout in the morning newsletter.
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dim)',
              padding: '18px',
              borderRadius: '12px'
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                Featured Tool of the Day
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--amber)', marginBottom: '8px' }}>
                $150 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ issue</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Dedicated showcase card with screenshot, feature list, and tracking link in the feed & newsletter.
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dim)',
              padding: '18px',
              borderRadius: '12px'
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>
                Technical Case Study
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#a78bfa', marginBottom: '8px' }}>
                $600 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ post</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                A custom, reproducible benchmark or architecture breakdown profiling your developer API or infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsor Inquiry Form */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
          borderRadius: '16px',
          padding: '24px'
        }}>
          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '24px',
              color: '#34d399'
            }}>
              <CheckCircle2 size={36} style={{ margin: '0 auto 12px auto' }} />
              <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Inquiry Received!</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                Our team will reply from <strong>teamtaniv@gmail.com</strong> with availability dates and a Stripe invoice link within 12 hours.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>
                Book Your Sponsorship Slot
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px',
                marginBottom: '14px'
              }}>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-dim)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Company / Product
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="InferCompute Labs"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-dim)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-dim)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Target Product URL & Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="https://yourproduct.com - we'd like to feature our new serverless inference API..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-dim)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontSize: '0.85rem',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
              >
                <Send size={16} />
                <span>Submit Sponsorship Inquiry</span>
              </button>

              <div style={{
                textAlign: 'center',
                marginTop: '12px',
                fontSize: '0.78rem',
                color: 'var(--text-muted)'
              }}>
                Prefer direct email? Reach us at{' '}
                <a href="mailto:teamtaniv@gmail.com" style={{ color: 'var(--cyan)', textDecoration: 'underline' }}>
                  teamtaniv@gmail.com
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
