import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-text">

          <p className="small-title">
            PORTFOLIO — 2026
          </p>

          <h1>
            Hai, Saya <span>Daffa</span>
          </h1>

          <h3>
            Front-End Developer
          </h3>

          <p className="description">
            Hallo semua, nama saya Daffa Fauzan Ruben Firdaus.
            Saya seorang Front-End Developer yang masih belajar
            dan terus mengembangkan kemampuan saya dalam membuat
            website.
          </p>

          <div className="hero-button">

            <a
              href="https://www.instagram.com/benslife_1229?stkn=emNjMjB2cXkyZmI="
              target="_blank"
              rel="noreferrer"
            >
              <button className="button-primary">
                Boleh Kali DM
              </button>
            </a>

            <Link to="/about">
              <button className="button-secondary">
                Tentang Saya
              </button>
            </Link>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-frame">
            <img
              src="/img/foto.jpeg"
              alt="Foto Daffa"
            />
          </div>

          <div className="image-label">
            <span>DAFFA</span>
            <span>FRONT-END</span>
          </div>

        </div>

      </section>

      <section className="quote-section">
        <p>
          "Orang yang kuat bukan mereka yang tidak pernah menangis,
           namun mereka yang tetap bangkit meski jatuh berkali-kali."
        </p>
      </section>

    </main>
  );
}

export default Home;

