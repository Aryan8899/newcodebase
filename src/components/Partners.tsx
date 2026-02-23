export default function Partners() {
  const partners = [
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'CMMI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/CMMI_Logo.svg/320px-CMMI_Logo.svg.png',
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      name: 'Oracle',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    },
  ];

  const clients = [
    {
      name: 'GAR',
      logo: 'https://www.hyperlinkinfosystem.com/assets/img/clients/gar.png',
    },
    {
      name: 'TATA',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg',
    },
    {
      name: 'Viacom',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Viacom_logo_%282006%29.svg/320px-Viacom_logo_%282006%29.svg.png',
    },
    {
      name: 'Zyrtec',
      logo: 'https://www.hyperlinkinfosystem.com/assets/img/clients/zyrtec.png',
    },
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
      name: 'Astral',
      logo: 'https://www.hyperlinkinfosystem.com/assets/img/clients/astral.png',
    },
    {
      name: 'Disney',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg',
    },
    {
      name: 'CEAT',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CEAT_logo.svg/320px-CEAT_logo.svg.png',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <style>{`
        .logo-img {
          height: 32px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.65;
          transition: filter 0.3s, opacity 0.3s;
        }
        .logo-img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }
        .client-logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.6;
          transition: filter 0.3s, opacity 0.3s;
        }
        .client-logo-img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }
        .partners-divider {
          border: none;
          border-top: 1px solid #f0f0f0;
          margin: 40px 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Official Partners */}
        <div className="text-center mb-10">
          <p className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-8">Official Partner of</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="logo-img"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>

        <hr className="partners-divider" />

        {/* Clients */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-10">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="client-logo-img"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // fallback to text if logo fails
                const span = document.createElement('span');
                span.textContent = client.name;
                span.style.cssText = 'font-weight:700;font-size:18px;color:#999;';
                target.parentNode?.replaceChild(span, target);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}