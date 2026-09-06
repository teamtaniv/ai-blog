import React from 'react';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

export default function Navbar({
  currentView,
  setCurrentView,
  theme,
  toggleTheme,
  onOpenAbout
}) {
  return (
    <header style={{
      borderBottom: '1px solid var(--border-subtle)',
      backgroundColor: 'var(--bg-app)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'background-color var(--transition-base)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        {/* Left: Brand / Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {currentView === 'reader' && (
            <button
              onClick={() => setCurrentView('feed')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface)'
              }}
              title="Return to articles index"
            >
              <ArrowLeft size={15} />
              <span>Back</span>
            </button>
          )}

          <div
            onClick={() => setCurrentView('feed')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px'
            }}
          >
            <span style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}>
              Team Taniv
            </span>
            <span style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontWeight: 400
            }}>
              / AI Research
            </span>
          </div>
        </div>

        {/* Right: Clean, Quiet Actions */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={() => setCurrentView('feed')}
            style={{
              fontSize: '0.9rem',
              color: currentView === 'feed' ? 'var(--text-primary)' : 'var(--text-muted)',
              fontWeight: currentView === 'feed' ? 600 : 400,
              transition: 'color var(--transition-fast)'
            }}
          >
            Articles
          </button>

          <button
            onClick={onOpenAbout}
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            About & Methodology
          </button>

          <a
            href="https://github.com/teamtaniv/ai-blog"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            GitHub
          </a>

          {/* Clean Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              color: 'var(--text-muted)',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.background = 'var(--bg-subtle)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'transparent';
            }}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
