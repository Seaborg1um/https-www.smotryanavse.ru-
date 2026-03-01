import { useState, useEffect } from 'react';
import '../index.css';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  /*useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowContent(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
*/
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-image">
          <img src="/hero.jpg" alt="Hero" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={`about-section'}`}>
        <div className="container">
          <div className="about-header">
            <h2 className="title">Евгения Петрова</h2>

            <div className="about-text">
              <p className="subtitle">психолог, стратегический терапевт</p>

              <p className="description">
                Свобода, любовь и честность - три кита на которых держится мой мир. Мой внутренний
                девиз:{' '}
                <span className="gimn">«Уважай чужие гимны, но танцуй под свои барабаны».</span> Я
                работаю со взрослыми, подростками, детьми и их родителями. Помогаю разбирать хаос по
                полочкам, находить опору, возвращать себе выбор. Моя позиция в терапии проста: Я
                всегда на вашей стороне и за вас — даже там, где вы сами не за себя.
              </p>
            </div>
          </div>

          {/* Кнопки */}
          <div className="buttons-wrapper">
            <div className="button-grid">
              <a href="ttps://t.me/petrovaeytarget=" target="_blank" className="btn btn-dark">
                <span className="btn-text">
                  Записаться
                  <br />
                  <span className="btn-subtext">на консультацию</span>
                </span>
              </a>{' '}
              <a href="https://t.me/ppp_petrova" className="btn btn-green">
                <span className="btn-text">
                  Телеграм канал
                  <br />
                  <span className="btn-subtext">"смотря на всё"</span>
                </span>
              </a>
            </div>

            <p className="location"></p>
          </div>
        </div>
      </section>
    </>
  );
}
