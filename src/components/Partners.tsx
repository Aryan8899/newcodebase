export default function Partners() {
  const partners = [
    {
      name: 'Flutter',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
    },
    {
      name: 'Firebase',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',
    },
    {
      name: 'Razorpay',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg',
    },
    {
      name: 'Stripe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      name: 'Socket.IO',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg',
    },
  ];

  return (
    <section style={{ padding: '60px 0', background: '#fff' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        .partners-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          font-family: 'DM Sans', sans-serif;
        }

        .partners-label {
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 36px;
        }

        .partners-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }

        .partner-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px 28px;
          border-radius: 16px;
          border: 1.5px solid #f1f5f9;
          background: #fafafa;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
          min-width: 130px;
        }
        .partner-card:hover {
          border-color: #e2e8f0;
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
          transform: translateY(-3px);
          background: #fff;
        }
        .partner-card:hover .partner-logo {
          filter: grayscale(0%);
          opacity: 1;
        }

        .partner-logo {
          height: 36px;
          width: auto;
          max-width: 100px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.6;
          transition: filter 0.3s, opacity 0.3s;
        }

        .partner-name {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.3px;
        }

        @media (max-width: 600px) {
          .partners-wrap { padding: 0 16px; }
          .partner-card { min-width: 100px; padding: 16px 18px; }
          .partner-logo { height: 28px; }
        }
      `}</style>

      <div className="partners-wrap">
        <p className="partners-label">Powered by Trusted Technologies</p>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}