import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  // --- DE ---
  {
    path: 'ueber-wteo/index.html',
    lang: 'de',
    title: 'Über WTEO',
    heroTitle: 'Unsere Mission',
    heroText: 'Qualität. Integrität. Exzellenz.',
    content: `
      <h2>Vision & Mission</h2>
      <p>Die World Trainer Elite Organisation (WTEO) hat es sich zur Aufgabe gemacht, die Standards der Permanent Make-up Industrie weltweit zu heben. Wir glauben, dass wahre Exzellenz Anerkennung verdient.</p>
      <h2>Warum WTEO?</h2>
      <p>In einem unregulierten Markt ist Vertrauen die härteste Währung. Das WTEO-Siegel garantiert Ihren Kunden, dass sie in besten Händen sind.</p>
      <h2>Unser Qualitätsversprechen</h2>
      <p>Wir prüfen streng, objektiv und fair. Nur wer unsere hohen Anforderungen erfüllt, wird Teil der Elite.</p>
    `
  },
  {
    path: 'zertifizierungen/index.html',
    lang: 'de',
    title: 'Zertifizierungen',
    heroTitle: 'Elite Zertifizierungen',
    heroText: 'Der Goldstandard für Ihre Karriere.',
    content: `
      <h2>Unsere Zertifizierungsstufen</h2>
      <div class="card-grid">
        <div class="card">
          <h3>World Elite Artist</h3>
          <p>Zeigen Sie der Welt, dass Ihre Kunst meisterhaft ist. Für erfahrene PMU-Artists mit nachweisbarer Qualität.</p>
        </div>
        <div class="card">
          <h3>World Elite Trainer</h3>
          <p>Für Ausbilder, die nicht nur können, sondern auch lehren. Pädagogische Kompetenz trifft auf fachliche Brillanz.</p>
        </div>
        <div class="card">
          <h3>World Elite Academy</h3>
          <p>Die höchste Auszeichnung für Ausbildungsinstitute. Hier lernen die Meister von morgen.</p>
        </div>
      </div>
      <h2 style="margin-top: 3rem;">Der 3-Schritte-Ablauf</h2>
      <ol style="margin-top: 1rem; margin-left: 1.5rem; color: #ccc;">
        <li style="margin-bottom: 0.5rem;"><strong>Bewerbung:</strong> Reichen Sie Ihre Unterlagen online ein.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Prüfung:</strong> Unsere Experten bewerten Ihre Qualifikationen.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Zertifizierung:</strong> Nach Bestehen erhalten Sie Ihr Siegel und Eintrag ins Register.</li>
      </ol>
      <div class="text-center" style="margin-top: 2rem;">
        <a href="/bewerbung/" class="btn">Jetzt zertifizieren lassen</a>
      </div>
    `
  },
  {
    path: 'bewerbung/index.html',
    lang: 'de',
    title: 'Bewerbung',
    heroTitle: 'Werden Sie Teil der Elite',
    heroText: 'Starten Sie jetzt Ihren Zertifizierungsprozess.',
    content: `
      <h2>Bewerbungsformular</h2>
      <p>Bitte füllen Sie das folgende Formular vollständig aus. Ihre Daten werden vertraulich behandelt.</p>
      <form class="card" style="text-align: left; max-width: 600px; margin: 0 auto;">
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" placeholder="Ihr vollständiger Name">
        </div>
        <div class="form-group">
          <label class="form-label">E-Mail</label>
          <input type="email" class="form-control" placeholder="ihre@email.com">
        </div>
        <div class="form-group">
          <label class="form-label">Zertifizierungstyp</label>
          <select class="form-control" style="background: #111;">
            <option>World Elite Artist</option>
            <option>World Elite Trainer</option>
            <option>World Elite Academy</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Portfolio Upload (PDF/ZIP)</label>
          <input type="file" class="form-control">
        </div>
        <div class="form-group">
          <label style="color: #999; font-size: 0.8rem;">
            <input type="checkbox"> Ich stimme der Verarbeitung meiner Daten gemäß der <a href="/rechtliches/" style="text-decoration:underline;">Datenschutzerklärung</a> zu.
          </label>
        </div>
        <button type="submit" class="btn" style="width: 100%;">Jetzt bewerben</button>
      </form>
    `
  },
  {
    path: 'events-awards/index.html',
    lang: 'de',
    title: 'Events & Awards',
    heroTitle: 'Events & Awards',
    heroText: 'Networking, Inspiration und Ehrungen.',
    content: `
      <h2>Rückblick: Convention 2023</h2>
      <p>Ein voller Erfolg mit über 500 Teilnehmern aus 30 Ländern. Die Elite traf sich zum Austausch und Feiern.</p>
      <h2>Ausblick 2026</h2>
      <p>Seien Sie gespannt auf das nächste große Event. Weitere Informationen folgen in Kürze.</p>
      <h2>Awards</h2>
      <p>Wir ehren herausragende Leistungen in der Branche. Die WTEO Awards sind das Symbol für höchste Anerkennung.</p>
      <div class="text-center" style="margin: 3rem 0;">
        <h3>Unsere Sponsoren</h3>
        <p>Wir danken unseren Partnern für die Unterstützung.</p>
      </div>
    `
  },
  {
    path: 'register/index.html',
    lang: 'de',
    title: 'World Elite Register',
    heroTitle: 'World Elite Register',
    heroText: 'Die offizielle Datenbank zertifizierter Experten.',
    content: `
      <h2>Das Register</h2>
      <p>Überprüfen Sie hier den Status eines Mitglieds. Transparenz schafft Vertrauen.</p>
      <div class="card">
        <input type="text" class="form-control" placeholder="Nach Name oder ID suchen..." style="margin-bottom: 1rem;">
        <button class="btn">Suchen</button>
      </div>
      <p style="margin-top: 2rem; font-size: 0.9rem; color: #666;">Alle Daten sind tagesaktuell geprüft.</p>
    `
  },
  {
    path: 'trainer-partner/index.html',
    lang: 'de',
    title: 'Trainer & Partner',
    heroTitle: 'Für Trainer & Partner',
    heroText: 'Wachsen Sie mit uns.',
    content: `
      <h2>Lizenzmodell</h2>
      <p>Profitieren Sie von unserem bewährten Geschäftsmodell und internationalen Branding.</p>
      <h2>Ihre Vorteile</h2>
      <ul style="list-style: disc; margin-left: 1.5rem; color: #ccc; margin-bottom: 2rem;">
        <li>Nutzung des Elite-Logos</li>
        <li>Zugang zu exklusiven Materialien</li>
        <li>Internationale Vernetzung</li>
      </ul>
      <a href="/bewerbung/" class="btn">Partner werden</a>
    `
  },
  {
    path: 'community/index.html',
    lang: 'de',
    title: 'Community',
    heroTitle: 'Netzwerk & Community',
    heroText: 'Verbinden Sie sich mit den Besten.',
    content: `
      <h2>Alumni Netzwerk</h2>
      <p>Unsere zertifizierten Mitglieder bleiben in Kontakt. Tauschen Sie sich aus, finden Sie Mentoren oder Kooperationspartner.</p>
      <h2>International</h2>
      <p>Die WTEO ist weltweit vertreten. Nutzen Sie unser globales Netzwerk für Ihren Erfolg.</p>
    `
  },
  {
    path: 'kontakt/index.html',
    lang: 'de',
    title: 'Kontakt',
    heroTitle: 'Kontakt',
    heroText: 'Wir sind für Sie da.',
    content: `
      <h2>Kontakt aufnehmen</h2>
      <div class="card-grid">
        <div class="card">
          <h3>E-Mail</h3>
          <p>info@wteo-world.com</p>
        </div>
        <div class="card">
          <h3>WhatsApp</h3>
          <p>+49 123 456 7890</p>
        </div>
      </div>
      <form class="card" style="margin-top: 3rem; text-align: left;">
        <h3>Nachricht senden</h3>
        <div class="form-group"><input type="text" class="form-control" placeholder="Name"></div>
        <div class="form-group"><input type="email" class="form-control" placeholder="E-Mail"></div>
        <div class="form-group"><textarea class="form-control" rows="5" placeholder="Ihre Nachricht"></textarea></div>
        <button class="btn">Absenden</button>
      </form>
    `
  },
  {
    path: 'rechtliches/index.html',
    lang: 'de',
    title: 'Rechtliches',
    heroTitle: 'Rechtliches',
    heroText: 'Transparenz und Sicherheit.',
    content: `
      <h2>Impressum</h2>
      <p>Angaben gemäß § 5 TMG...</p>
      <h2>Datenschutzerklärung (DSGVO)</h2>
      <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst...</p>
      <h2>AGB</h2>
      <p>Unsere Allgemeinen Geschäftsbedingungen...</p>
    `
  },

  // --- EN ---
  {
    path: 'en/about/index.html',
    lang: 'en',
    title: 'About WTEO',
    heroTitle: 'Our Mission',
    heroText: 'Quality. Integrity. Excellence.',
    content: `
      <h2>Vision & Mission</h2>
      <p>The World Trainer Elite Organisation (WTEO) is dedicated to raising the standards of the Permanent Make-up industry worldwide. We believe true excellence deserves recognition.</p>
      <h2>Why WTEO?</h2>
      <p>In an unregulated market, trust is the hardest currency. The WTEO seal guarantees your clients that they are in the best hands.</p>
      <h2>Our Quality Promise</h2>
      <p>We verify strictly, objectively, and fairly. Only those who meet our high requirements become part of the Elite.</p>
    `
  },
  {
    path: 'en/certifications/index.html',
    lang: 'en',
    title: 'Certifications',
    heroTitle: 'Elite Certifications',
    heroText: 'The Gold Standard for your career.',
    content: `
      <h2>Our Certification Levels</h2>
      <div class="card-grid">
        <div class="card">
          <h3>World Elite Artist</h3>
          <p>Show the world that your art is masterful. For experienced PMU artists with proven quality.</p>
        </div>
        <div class="card">
          <h3>World Elite Trainer</h3>
          <p>For instructors who not only do but also teach. Pedagogical competence meets technical brilliance.</p>
        </div>
        <div class="card">
          <h3>World Elite Academy</h3>
          <p>The highest distinction for training institutes. This is where tomorrow's masters learn.</p>
        </div>
      </div>
      <h2 style="margin-top: 3rem;">The 3-Step Process</h2>
      <ol style="margin-top: 1rem; margin-left: 1.5rem; color: #ccc;">
        <li style="margin-bottom: 0.5rem;"><strong>Apply:</strong> Submit your documents online.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Verify:</strong> Our experts assess your qualifications.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Certify:</strong> Upon passing, you receive your seal and registry entry.</li>
      </ol>
      <div class="text-center" style="margin-top: 2rem;">
        <a href="/en/apply/" class="btn">Get Certified Now</a>
      </div>
    `
  },
  {
    path: 'en/apply/index.html',
    lang: 'en',
    title: 'Apply Now',
    heroTitle: 'Join the Elite',
    heroText: 'Start your certification process now.',
    content: `
      <h2>Application Form</h2>
      <p>Please fill out the form below completely. Your data will be treated confidentially.</p>
      <form class="card" style="text-align: left; max-width: 600px; margin: 0 auto;">
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" placeholder="Your full name">
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" placeholder="your@email.com">
        </div>
        <div class="form-group">
          <label class="form-label">Certification Type</label>
          <select class="form-control" style="background: #111;">
            <option>World Elite Artist</option>
            <option>World Elite Trainer</option>
            <option>World Elite Academy</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Portfolio Upload (PDF/ZIP)</label>
          <input type="file" class="form-control">
        </div>
        <div class="form-group">
          <label style="color: #999; font-size: 0.8rem;">
            <input type="checkbox"> I agree to the processing of my data according to the <a href="/en/legal/" style="text-decoration:underline;">Privacy Policy</a>.
          </label>
        </div>
        <button type="submit" class="btn" style="width: 100%;">Start Application</button>
      </form>
    `
  },
  {
    path: 'en/events-awards/index.html',
    lang: 'en',
    title: 'Events & Awards',
    heroTitle: 'Events & Awards',
    heroText: 'Networking, Inspiration, and Honors.',
    content: `
      <h2>Review: Convention 2023</h2>
      <p>A huge success with over 500 participants from 30 countries. The Elite met to exchange and celebrate.</p>
      <h2>Outlook 2026</h2>
      <p>Stay tuned for the next big event. More information coming soon.</p>
      <h2>Awards</h2>
      <p>We honor outstanding achievements in the industry. The WTEO Awards are the symbol of highest recognition.</p>
      <div class="text-center" style="margin: 3rem 0;">
        <h3>Our Sponsors</h3>
        <p>We thank our partners for their support.</p>
      </div>
    `
  },
  {
    path: 'en/register/index.html',
    lang: 'en',
    title: 'World Elite Register',
    heroTitle: 'World Elite Register',
    heroText: 'The official database of certified experts.',
    content: `
      <h2>The Register</h2>
      <p>Check the status of a member here. Transparency creates trust.</p>
      <div class="card">
        <input type="text" class="form-control" placeholder="Search by name or ID..." style="margin-bottom: 1rem;">
        <button class="btn">Search</button>
      </div>
      <p style="margin-top: 2rem; font-size: 0.9rem; color: #666;">All data is verified daily.</p>
    `
  },
  {
    path: 'en/trainer-partner/index.html',
    lang: 'en',
    title: 'Trainers & Partners',
    heroTitle: 'For Trainers & Partners',
    heroText: 'Grow with us.',
    content: `
      <h2>License Model</h2>
      <p>Benefit from our proven business model and international branding.</p>
      <h2>Your Benefits</h2>
      <ul style="list-style: disc; margin-left: 1.5rem; color: #ccc; margin-bottom: 2rem;">
        <li>Use of the Elite Logo</li>
        <li>Access to exclusive materials</li>
        <li>International networking</li>
      </ul>
      <a href="/en/apply/" class="btn">Become a Partner</a>
    `
  },
  {
    path: 'en/community/index.html',
    lang: 'en',
    title: 'Community',
    heroTitle: 'Community & Network',
    heroText: 'Connect with the best.',
    content: `
      <h2>Alumni Network</h2>
      <p>Our certified members stay in touch. Exchange ideas, find mentors or cooperation partners.</p>
      <h2>International</h2>
      <p>The WTEO is represented worldwide. Use our global network for your success.</p>
    `
  },
  {
    path: 'en/contact/index.html',
    lang: 'en',
    title: 'Contact',
    heroTitle: 'Contact',
    heroText: 'We are here for you.',
    content: `
      <h2>Get in Touch</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Email</h3>
          <p>info@wteo-world.com</p>
        </div>
        <div class="card">
          <h3>WhatsApp</h3>
          <p>+49 123 456 7890</p>
        </div>
      </div>
      <form class="card" style="margin-top: 3rem; text-align: left;">
        <h3>Send a Message</h3>
        <div class="form-group"><input type="text" class="form-control" placeholder="Name"></div>
        <div class="form-group"><input type="email" class="form-control" placeholder="Email"></div>
        <div class="form-group"><textarea class="form-control" rows="5" placeholder="Your Message"></textarea></div>
        <button class="btn">Send</button>
      </form>
    `
  },
  {
    path: 'en/legal/index.html',
    lang: 'en',
    title: 'Legal',
    heroTitle: 'Legal',
    heroText: 'Transparency and Security.',
    content: `
      <h2>Imprint</h2>
      <p>Information according to § 5 TMG...</p>
      <h2>Privacy Policy</h2>
      <p>We take the protection of your personal data very seriously...</p>
      <h2>Terms & Conditions</h2>
      <p>Our General Terms and Conditions...</p>
    `
  },
];

const getTemplate = (data, pth) => {
  const isEn = data.lang === 'en';
  // Determine depth to fix relative links (e.g., from en/about/ to root)
  // Actually, I'll use absolute paths like /en/about/ which work in Vite dev and usually prod if configured right.
  // Using absolute paths starting with /

  const nav = isEn ? `
    <ul class="nav-links">
        <li><a href="/en/" class="nav-link">Home</a></li>
        <li><a href="/en/about/" class="nav-link ${data.path.includes('about') ? 'active' : ''}">About WTEO</a></li>
        <li><a href="/en/certifications/" class="nav-link ${data.path.includes('certifications') ? 'active' : ''}">Certifications</a></li>
        <li><a href="/en/apply/" class="nav-link ${data.path.includes('apply') ? 'active' : ''}">Apply Now</a></li>
        <li><a href="/en/events-awards/" class="nav-link ${data.path.includes('events') ? 'active' : ''}">Events</a></li>
        <li><a href="/en/register/" class="nav-link ${data.path.includes('register') ? 'active' : ''}">Register</a></li>
        <li><a href="/en/trainer-partner/" class="nav-link ${data.path.includes('trainer') ? 'active' : ''}">Partners</a></li>
        <li><a href="/en/community/" class="nav-link ${data.path.includes('community') ? 'active' : ''}">Community</a></li>
        <li><a href="/en/contact/" class="nav-link ${data.path.includes('contact') ? 'active' : ''}">Contact</a></li>
        <li class="lang-switch">
          <a href="/">DE</a>
          <a href="/en/" class="active">EN</a>
        </li>
    </ul>
  ` : `
    <ul class="nav-links">
        <li><a href="/" class="nav-link">Home</a></li>
        <li><a href="/ueber-wteo/" class="nav-link ${data.path.includes('ueber') ? 'active' : ''}">Über WTEO</a></li>
        <li><a href="/zertifizierungen/" class="nav-link ${data.path.includes('zertifizierungen') ? 'active' : ''}">Zertifizierungen</a></li>
        <li><a href="/bewerbung/" class="nav-link ${data.path.includes('bewerbung') ? 'active' : ''}">Bewerbung</a></li>
        <li><a href="/events-awards/" class="nav-link ${data.path.includes('events') ? 'active' : ''}">Events</a></li>
        <li><a href="/register/" class="nav-link ${data.path.includes('register') ? 'active' : ''}">Register</a></li>
        <li><a href="/trainer-partner/" class="nav-link ${data.path.includes('trainer') ? 'active' : ''}">Partner</a></li>
        <li><a href="/community/" class="nav-link ${data.path.includes('community') ? 'active' : ''}">Community</a></li>
        <li><a href="/kontakt/" class="nav-link ${data.path.includes('kontakt') ? 'active' : ''}">Kontakt</a></li>
        <li class="lang-switch">
          <a href="/" class="active">DE</a>
          <a href="/en/">EN</a>
        </li>
    </ul>
  `;

  return `<!DOCTYPE html>
<html lang="${data.lang}">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${data.title} | WTEO</title>
  </head>
  <body>
    <header class="header">
      <div class="container nav-container">
        <a href="${isEn ? '/en/' : '/'}" class="logo">WTEO</a>
        <div class="menu-toggle">☰</div>
        <nav>
            ${nav}
        </nav>
      </div>
    </header>

    <main>
      <section class="hero" style="min-height: 60vh; height: auto; padding: 100px 0;">
        <div class="hero-content">
          <h1>${data.heroTitle}</h1>
          <p>${data.heroText}</p>
        </div>
      </section>

      <section class="section fade-in-section">
        <div class="container">
            ${data.content}
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h4>WTEO</h4>
            <ul class="footer-links">
                ${isEn ?
      `<li><a href="/en/about/">About Us</a></li>
                   <li><a href="/en/certifications/">Certifications</a></li>
                   <li><a href="/en/register/">Elite Register</a></li>`
      :
      `<li><a href="/ueber-wteo/">Über uns</a></li>
                   <li><a href="/zertifizierungen/">Zertifizierungen</a></li>
                   <li><a href="/register/">Elite Register</a></li>`
    }
            </ul>
          </div>
          <div class="footer-col">
            <h4>Community</h4>
            <ul class="footer-links">
                ${isEn ?
      `<li><a href="/en/events-awards/">Events</a></li>
                   <li><a href="/en/trainer-partner/">Trainer Program</a></li>
                   <li><a href="/en/community/">Network</a></li>`
      :
      `<li><a href="/events-awards/">Events</a></li>
                   <li><a href="/trainer-partner/">Trainer Programm</a></li>
                   <li><a href="/community/">Netzwerk</a></li>`
    }
            </ul>
          </div>
           <div class="footer-col">
            <h4>${isEn ? 'Legal' : 'Rechtliches'}</h4>
            <ul class="footer-links">
                ${isEn ?
      `<li><a href="/en/legal/">Legal Info</a></li>
                   <li><a href="/en/contact/">Contact</a></li>`
      :
      `<li><a href="/rechtliches/">Datenschutz & Impressum</a></li>
                   <li><a href="/kontakt/">Kontakt</a></li>`
    }
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2025 World Trainer Elite Organisation. All Rights Reserved.
        </div>
      </div>
    </footer>
    
    <script type="module" src="/main.js"></script>
    <div class="scroll-to-top" onclick="window.scrollTo(0,0)">↑</div>
  </body>
</html>`;
};

pages.forEach(page => {
  const fullPath = path.resolve(__dirname, page.path);
  const content = getTemplate(page, page.path);
  fs.writeFileSync(fullPath, content);
  console.log('Created: ' + page.path);
});
