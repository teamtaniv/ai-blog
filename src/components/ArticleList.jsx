import React from 'react';

export default function ArticleList({ 
  posts, 
  onSelectPost, 
  selectedCategory, 
  setSelectedCategory,
  categories 
}) {
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  return (
    <div className="fade-in" style={{ padding: '48px 0 80px 0' }}>
      {/* Editorial Intro Banner */}
      <section style={{ marginBottom: '48px' }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '16px',
          color: 'var(--text-primary)'
        }}>
          Frontier AI Research & Systems
        </h1>
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '640px'
        }}>
          In-depth technical analyses of modern reasoning models, inference scaling, and distributed architecture. Grounded in primary academic papers.
        </p>
      </section>

      {/* Clean Category Filters */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '14px',
        marginBottom: '40px',
        overflowX: 'auto'
      }}>
        <button
          onClick={() => setSelectedCategory('All')}
          style={{
            fontSize: '0.88rem',
            fontWeight: selectedCategory === 'All' ? 600 : 400,
            color: selectedCategory === 'All' ? 'var(--text-primary)' : 'var(--text-muted)',
            position: 'relative',
            paddingBottom: '4px',
            borderBottom: selectedCategory === 'All' ? '2px solid var(--text-primary)' : '2px solid transparent',
            transition: 'all var(--transition-fast)'
          }}
        >
          All ({posts.length})
        </button>

        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              fontSize: '0.88rem',
              fontWeight: selectedCategory === cat ? 600 : 400,
              color: selectedCategory === cat ? 'var(--text-primary)' : 'var(--text-muted)',
              position: 'relative',
              paddingBottom: '4px',
              borderBottom: selectedCategory === cat ? '2px solid var(--text-primary)' : '2px solid transparent',
              whiteSpace: 'nowrap',
              transition: 'all var(--transition-fast)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Clean Article List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => onSelectPost(post)}
            style={{
              cursor: 'pointer',
              paddingBottom: '48px',
              borderBottom: '1px solid var(--border-subtle)',
              transition: 'transform var(--transition-fast)'
            }}
          >
            {/* Meta Line: Date, Category, Read Time */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 500
            }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.category}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
              lineHeight: 1.3,
              marginBottom: '12px',
              color: 'var(--text-primary)',
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              {post.title}
            </h2>

            {/* Subtitle / Excerpt */}
            <p style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '14px',
              maxWidth: '680px'
            }}>
              {post.subtitle || post.summary}
            </p>

            {/* Author Byline */}
            <div style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)'
            }}>
              By {post.author.name}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
