import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import PostReader from './components/PostReader';
import AboutModal from './components/AboutModal';
import initialPosts from './data/posts.json';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('blog-theme') || 'dark';
  });

  const [posts, setPosts] = useState(initialPosts);
  const [currentView, setCurrentView] = useState('feed');
  const [activePost, setActivePost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [aboutOpen, setAboutOpen] = useState(false);

  // Sync theme
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('blog-theme', nextTheme);
  };

  const handleSelectPost = (post) => {
    setActivePost(post);
    setCurrentView('reader');
  };

  const categories = Array.from(new Set(posts.map(p => p.category)));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAbout={() => setAboutOpen(true)}
      />

      <main className="container" style={{ flex: 1 }}>
        {currentView === 'feed' ? (
          <ArticleList
            posts={posts}
            onSelectPost={handleSelectPost}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        ) : (
          <PostReader
            post={activePost}
            onBack={() => setCurrentView('feed')}
            allPosts={posts}
            onSelectPost={handleSelectPost}
          />
        )}
      </main>

      {/* Clean, Understated Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '36px 0',
        marginTop: '60px',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            Team Taniv © {new Date().getFullYear()} · AI Research Dispatches
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button
              onClick={() => setAboutOpen(true)}
              style={{ color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              Methodology
            </button>
            <a
              href="mailto:teamtaniv@gmail.com"
              style={{ color: 'var(--text-muted)' }}
            >
              Contact
            </a>
            <a
              href="https://github.com/teamtaniv/ai-blog"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)' }}
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
    </div>
  );
}
