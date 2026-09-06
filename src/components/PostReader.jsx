import React, { useEffect } from 'react';
import { marked } from 'marked';
import { ArrowLeft, ExternalLink, Share2, Check } from 'lucide-react';

export default function PostReader({ 
  post, 
  onBack, 
  allPosts, 
  onSelectPost 
}) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [post]);

  if (!post) return null;

  marked.setOptions({
    gfm: true,
    breaks: true
  });

  const htmlContent = marked.parse(post.content || '');

  // Share handler
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = allPosts ? allPosts.findIndex(p => p.id === post.id) : -1;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost = (currentIndex >= 0 && currentIndex < allPosts.length - 1) ? allPosts[currentIndex + 1] : null;

  return (
    <article className="reader-container fade-in" style={{ padding: '48px 0 96px 0' }}>
      {/* Return to feed link */}
      <div style={{ marginBottom: '36px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <ArrowLeft size={16} /> All Articles
        </button>
      </div>

      {/* Header */}
      <header style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontWeight: 600,
          marginBottom: '16px'
        }}>
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 3.8vw, 3rem)',
          lineHeight: 1.2,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '20px',
          color: 'var(--text-primary)'
        }}>
          {post.title}
        </h1>

        <p style={{
          fontSize: '1.25rem',
          lineHeight: 1.55,
          color: 'var(--text-secondary)',
          marginBottom: '28px'
        }}>
          {post.subtitle}
        </p>

        {/* Byline & Share */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '16px 0',
          fontSize: '0.88rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            Published by <strong style={{ color: 'var(--text-primary)' }}>{post.author.name}</strong> on {post.date}
          </div>

          <button
            onClick={handleShare}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            {copied ? <Check size={14} color="#10b981" /> : <Share2 size={14} />}
            <span>{copied ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>
      </header>

      {/* Main Prose Content */}
      <div 
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Primary Sources & Academic Citations Block */}
      {post.sources && post.sources.length > 0 && (
        <section style={{
          marginTop: '60px',
          paddingTop: '28px',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--text-primary)',
            marginBottom: '14px'
          }}>
            References & Primary Sources
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {post.sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <ExternalLink size={13} />
                  <span>{src.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Subtle Bottom Navigation */}
      <nav style={{
        marginTop: '64px',
        paddingTop: '32px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        {prevPost ? (
          <div
            onClick={() => onSelectPost(prevPost)}
            style={{ cursor: 'pointer', maxWidth: '45%' }}
          >
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              ← PREVIOUS
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {prevPost.title}
            </div>
          </div>
        ) : <div />}

        {nextPost ? (
          <div
            onClick={() => onSelectPost(nextPost)}
            style={{ cursor: 'pointer', maxWidth: '45%', textAlign: 'right' }}
          >
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              NEXT →
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {nextPost.title}
            </div>
          </div>
        ) : <div />}
      </nav>
    </article>
  );
}
