import React from 'react';
import { Clock, ShieldCheck, Bookmark, ArrowUpRight } from 'lucide-react';

export default function PostCard({ post, onReadPost, isBookmarked, onToggleBookmark }) {
  return (
    <article style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-card)',
      borderRadius: '18px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.borderColor = 'var(--border-hover)';
      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 242, 254, 0.08)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border-card)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    onClick={() => onReadPost(post)}
    >
      {/* Top Header Row */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge" style={{ fontSize: '0.7rem' }}>
              {post.category}
            </span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}>
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(post.id);
            }}
            style={{
              padding: '6px',
              borderRadius: '6px',
              color: isBookmarked ? 'var(--cyan)' : 'var(--text-muted)',
              transition: 'all 0.15s ease'
            }}
            title={isBookmarked ? "Remove bookmark" : "Bookmark dispatch"}
          >
            <Bookmark size={16} fill={isBookmarked ? 'var(--cyan)' : 'none'} />
          </button>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.25rem',
          lineHeight: 1.35,
          marginBottom: '10px',
          letterSpacing: '-0.02em',
          fontWeight: 700
        }}>
          {post.title}
        </h3>

        {/* Subtitle / Summary */}
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.55,
          marginBottom: '18px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {post.summary || post.subtitle}
        </p>

        {/* Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginBottom: '20px'
        }}>
          {post.tags && post.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              padding: '2px 8px',
              borderRadius: '6px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-dim)',
              color: 'var(--text-muted)'
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Author + Shield + Read Arrow */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '16px',
        borderTop: '1px solid var(--border-dim)',
        marginTop: 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>
              {post.author.name}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              {post.date}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.72rem',
            color: '#34d399',
            background: 'rgba(16, 185, 129, 0.08)',
            padding: '2px 6px',
            borderRadius: '4px'
          }}>
            <ShieldCheck size={12} />
            {post.originalityScore}%
          </span>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-main)'
          }}>
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </article>
  );
}
