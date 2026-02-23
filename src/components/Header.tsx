import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Blogs', path: '/blog' },
    { label: 'Services', path: '/services' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .header-root {
          font-family: 'DM Sans', sans-serif;
          background: #fff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          position: fixed;
          width: 90%;
          left: 50%;
          transform: translateX(-50%);
          top: 10px;
          z-index: 50;
          border-radius: 50px;
          overflow: hidden;
        }
        .header-root.menu-open {
          border-radius: 24px;
        }

        .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          height: 72px;
        }

        .logo {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          letter-spacing: -0.3px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links li button {
          display: flex;
          align-items: center;
          gap: 3px;
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          background: none;
          border: none;
          border-radius: 50px;
          white-space: nowrap;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.15s, color 0.15s;
        }
        .nav-links li button:hover {
          background: #fdf2f8;
          color: #e91e8c;
        }
        .nav-links li button.active {
          background: #fdf2f8;
          color: #e91e8c;
          font-weight: 600;
        }

        .cta-btn {
          background: #1976d2;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 2px 8px rgba(25, 118, 210, 0.25);
        }
        .cta-btn:hover {
          background: #1565c0;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(25, 118, 210, 0.35);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #333;
        }

        .mobile-menu {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
          background: #fff;
          border-top: 1px solid transparent;
        }
        .mobile-menu.open {
          max-height: 400px;
          border-top-color: #f0f0f0;
        }
        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          padding: 8px 24px 20px;
          gap: 2px;
        }
        .mobile-menu-inner button.mob-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 12px 8px;
          font-size: 15px;
          font-weight: 500;
          color: #333;
          background: none;
          border: none;
          border-bottom: 1px solid #f5f5f5;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
        }
        .mobile-menu-inner button.mob-link:hover { color: #e91e8c; }
        .mobile-menu-inner button.mob-link.active { color: #e91e8c; font-weight: 600; }
        .mobile-cta {
          margin-top: 12px;
          width: 100%;
          text-align: center;
          border-radius: 50px;
        }

        @media (max-width: 1100px) {
          .nav-links { gap: 0; }
          .nav-links li button { padding: 8px 9px; font-size: 13px; }
        }

        @media (max-width: 768px) {
          .nav-row { padding: 0 20px; }
          .nav-links { display: none; }
          .desktop-cta { display: none; }
          .hamburger { display: flex; align-items: center; }
        }
      `}</style>

      <header className={`header-root ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-row">
          <button className="logo" onClick={() => handleNavigate('/')}>
            Mobrib
          </button>

          <nav>
            <ul className="nav-links">
              {navItems.map(({ label, path }) => (
                <li key={label}>
                  <button
                    className={currentPage === path ? 'active' : ''}
                    onClick={() => handleNavigate(path)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button className="cta-btn desktop-cta">Get A Free Quote</button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-inner">
            {navItems.map(({ label, path }) => (
              <button
                key={label}
                className={`mob-link ${currentPage === path ? 'active' : ''}`}
                onClick={() => handleNavigate(path)}
              >
                {label}
              </button>
            ))}
            <button className="cta-btn mobile-cta">Get A Free Quote</button>
          </div>
        </div>
      </header>
    </>
  );
}