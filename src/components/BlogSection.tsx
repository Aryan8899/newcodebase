import { useState } from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Blog {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  color: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const blogs: Blog[] = [
  {
    id: 1,
    tag: 'Mobile Development',
    title: 'The Future of Cross-Platform Mobile Apps in 2025',
    excerpt:
      'As the lines blur between native and web experiences, cross-platform frameworks like Flutter and React Native are reshaping how teams build for iOS and Android simultaneously.',
    author: 'Rahul Mehta',
    date: 'Feb 18, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    color: '#3b82f6',
  },
  {
    id: 2,
    tag: 'AI & ML',
    title: 'How AI is Transforming App UX Design Forever',
    excerpt:
      "From predictive interfaces to real-time personalization, artificial intelligence is no longer a buzzword — it's the backbone of next-generation user experiences.",
    author: 'Priya Shah',
    date: 'Feb 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    color: '#e91e8c',
  },
  {
    id: 3,
    tag: 'Web Development',
    title: 'Why Server Components Are the Next Big Shift in React',
    excerpt:
      "React Server Components promise a paradigm shift in how we think about rendering, data fetching, and performance — here's what every developer needs to know.",
    author: 'Arjun Patel',
    date: 'Jan 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    color: '#06b6d4',
  },
  {
    id: 4,
    tag: 'Blockchain',
    title: 'Building Secure dApps: Lessons from the Trenches',
    excerpt:
      "Decentralized applications are maturing fast. We share hard-won lessons on smart contract security, gas optimization, and UX patterns that actually convert.",
    author: 'Sneha Roy',
    date: 'Jan 15, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    color: '#f59e0b',
  },
  {
    id: 5,
    tag: 'UI/UX',
    title: 'Micro-Interactions That Make Users Fall in Love',
    excerpt:
      'The difference between a good app and a great one often comes down to the tiny moments of delight — how buttons respond, how loaders animate, how feedback feels.',
    author: 'Vikram Nair',
    date: 'Jan 5, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80',
    color: '#10b981',
  },
  {
    id: 6,
    tag: 'Cloud',
    title: 'Serverless in 2025: When to Use It, When to Avoid It',
    excerpt:
      "Serverless architecture has gone mainstream, but it's not a silver bullet. We break down the real-world tradeoffs for startups and enterprises alike.",
    author: 'Meera Iyer',
    date: 'Dec 20, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    color: '#8b5cf6',
  },
];

// ── Blog Detail ───────────────────────────────────────────────────────────────

function BlogDetail({ blog, onBack }: { blog: Blog; onBack: () => void }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', fontFamily: "'Fraunces', serif" }}>
      <style>{`
        .detail-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
          transition: color 0.2s;
        }
        .detail-back:hover { color: #e91e8c; }
        .detail-body p {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          line-height: 1.85;
          color: #444;
          margin-bottom: 24px;
        }
        .detail-body h2 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          color: #111;
          margin: 40px 0 16px;
        }
      `}</style>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '120px 24px 80px' }}>
        <button className="detail-back" onClick={onBack}>← Back to Blogs</button>

        <div style={{ marginTop: '32px' }}>
          <span style={{
            background: blog.color + '18', color: blog.color,
            fontSize: '12px', fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '1.5px', textTransform: 'uppercase',
            padding: '4px 12px', borderRadius: '50px',
          }}>{blog.tag}</span>

          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 900, color: '#111', lineHeight: 1.15, margin: '20px 0',
          }}>{blog.title}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#888', marginBottom: '32px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={13} />{blog.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={13} />{blog.readTime}</span>
            <span>{blog.date}</span>
          </div>

          <img src={blog.image} alt={blog.title}
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px', marginBottom: '40px' }} />

          <div className="detail-body">
            <p>{blog.excerpt}</p>
            <p>In today's fast-evolving digital landscape, staying ahead means embracing change rather than reacting to it. The most successful teams we've worked with treat technology not as a tool, but as a living part of their product strategy.</p>
            <h2>Key Takeaways</h2>
            <p>Whether you're a startup founder or a CTO at a Fortune 500, the principles remain the same: ship fast, measure everything, and never stop iterating. The best products aren't built — they're grown through continuous learning.</p>
            <p>As we look into the rest of 2025, the companies that will lead their markets are those investing now in scalable architectures, intelligent interfaces, and deeply human user experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Blog Section ──────────────────────────────────────────────────────────────

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf9', paddingTop: '110px', fontFamily: "'Fraunces', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,700;0,900;1,300&family=DM+Sans:wght@400;500;600;700&display=swap');

        .blog-hero-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #e91e8c;
        }
        .blog-hero-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 900; color: #111;
          line-height: 1.05; margin: 12px 0 0;
        }
        .blog-hero-h1 em { font-style: italic; color: #e91e8c; }

        .blog-card {
          background: #fff; border-radius: 20px; overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer; display: flex; flex-direction: column;
        }
        .blog-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .blog-card-img { width: 100%; height: 220px; object-fit: cover; transition: transform 0.4s ease; }
        .blog-card:hover .blog-card-img { transform: scale(1.04); }
        .blog-card-img-wrap { overflow: hidden; }
        .blog-card-body { padding: 24px 24px 28px; flex: 1; display: flex; flex-direction: column; }

        .blog-tag {
          display: inline-block; font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 3px 10px;
          border-radius: 50px; margin-bottom: 12px;
        }
        .blog-title {
          font-family: 'Fraunces', serif; font-size: 20px;
          font-weight: 700; color: #111; line-height: 1.3; margin-bottom: 10px;
        }
        .blog-excerpt {
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          color: #777; line-height: 1.7; flex: 1; margin-bottom: 20px;
        }
        .blog-meta {
          display: flex; align-items: center; gap: 12px;
          font-family: 'DM Sans', sans-serif; font-size: 12px;
          color: #aaa; margin-bottom: 16px;
        }
        .blog-readmore {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'DM Sans', sans-serif; font-size: 13px;
          font-weight: 600; color: #111; border: none;
          background: none; padding: 0; cursor: pointer;
          transition: gap 0.2s, color 0.2s;
        }
        .blog-readmore:hover { color: #e91e8c; gap: 10px; }
        .blog-readmore svg { transition: transform 0.2s; }
        .blog-readmore:hover svg { transform: translateX(3px); }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px; margin-top: 56px;
        }
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '600px' }}>
          <p className="blog-hero-label">Our Journal</p>
          <h1 className="blog-hero-h1">Ideas, Insights &amp; <em>Stories</em></h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: '#777', marginTop: '16px', lineHeight: 1.7 }}>
            Deep dives into technology, design, and what it takes to build products people love.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card" onClick={() => setSelectedBlog(blog)}>
              <div className="blog-card-img-wrap">
                <img src={blog.image} alt={blog.title} className="blog-card-img" />
              </div>
              <div className="blog-card-body">
                <span className="blog-tag" style={{ background: blog.color + '18', color: blog.color }}>
                  {blog.tag}
                </span>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={11} />{blog.author}</span>
                  <span>·</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={11} />{blog.readTime}</span>
                  <span>·</span>
                  <span>{blog.date}</span>
                </div>
                <button
                  className="blog-readmore"
                  onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSelectedBlog(blog); }}
                >
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}