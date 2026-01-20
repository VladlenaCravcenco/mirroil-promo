// ✅ Screen 1 — переписан под твой реф (TOP offer + CENTER title + BOTTOM glass panel)
// ❗️Screen 2 можно удалить полностью — оффер и CTA теперь внутри первого экрана.

import { useEffect, useMemo } from 'react';

type CatalogCard = {
  title: string;
  meta: string;
  lead: string;
  notes: string[];
  bestFor: string;
};

type Props = {
  
  bgVideo?: {
    desktop: string;
    mobile: string;
  };
  marqueeText: string;

  hero: {
    title: string[];      // ["Parfume Oil", "parfum pentru ea și pentru el"]
    subtitle: string;     // описание в нижней плашке
    pills: string[];      // 2–3 пилсы (лучше 2)
  };

  offer: {
    badge: string;        // "Cadoul ideal de 14 februarie"
    title: string;        // "La achiziționarea a 2 parfumuri"
    price: string;        // "850 lei"
    fromLabel: string;    // "în loc de"
    oldPrice: string;     // "1000 lei"
    button: string;       // "Alege parfumul preferat și lasă o cerere"
  };

  catalog: { cards: CatalogCard[] };

  form: {
    heading: string;
    perks: string[];
    options: string[];
    submit: string;
    footer: string;
  };
};

export function LandingScreen({ marqueeText, hero, offer, catalog, form }: Props) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
          else e.target.classList.remove('is-visible');
        });
      },
      { threshold: 0.35 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const marquee = useMemo(
    () =>
      `${marqueeText} • Cadoul ideal de 14 februarie • Pentru cuplu sau pentru tine • Aromă luxoasă, senzuală, care te definește • 2 parfumuri — doar 850 lei • `,
    [marqueeText]
  );

  const goToForm = () => document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="lp">
      <header className="marquee">
        <div className="marquee__track">
          <span>{marquee}</span>
          <span>{marquee}</span>
          <span>{marquee}</span>
        </div>
      </header>

      <div className="lp__bg lp__bg--video" aria-hidden="true">
        {/* desktop video */}
        <video
          className="bgVideo bgVideo--desktop"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-desktop-cherry.mp4" type="video/mp4" />
        </video>

        {/* mobile video */}
        <video
          className="bgVideo bgVideo--mobile"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-mobile-cherry.mp4" type="video/mp4" />
        </video>
      </div>

      <main className="lp__main">
        {/* ✅ Screen 1 (как в рефе) */}
        <section className="screen screen--hero">
          {/* TOP offer (над флаконами) */}
          <div className="heroTop" data-reveal>
            <div className="heroBadge pill" aria-label="offer badge">
              <span className="heroBadge__emoji" aria-hidden="true">🎁</span>
              <span className="heroBadge__text">{offer.badge}</span>
            </div>

            <div className="heroOffer" aria-label="offer">
              <div className="heroOffer__title">{offer.title}</div>
              <div className="heroOffer__price">doar {offer.price}</div>
              <div className="heroOffer__old">
                <span className="heroOffer__from">{offer.fromLabel}</span>
                <span className="heroOffer__oldPrice">{offer.oldPrice}</span>
              </div>
            </div>
          </div>

          {/* CENTER title (без плашек) */}
          <div className="heroCenter" data-reveal>

          </div>

          {/* BOTTOM glass panel (описание + pills + CTA) */}
          <div className="heroBottom" data-reveal>
            <div className="heroPanel" aria-label="hero panel">
              <div className="heroPanel__head">
                <div className="heroPanel__brand">{hero.title[0]}</div>
                <div className="heroPanel__subhead">{hero.title[1]}</div>
              </div>

              <p className="heroPanel__text">{hero.subtitle}</p>

              <div className="heroPanel__pills" aria-label="benefits">
                {hero.pills.map((p) => (
                  <span className="pill" key={p}>
                    {p}
                  </span>
                ))}
              </div>

              <button className="btn heroPanel__cta" type="button" onClick={goToForm}>
                {offer.button}
              </button>
            </div>
          </div>
        </section>

        {/* ✅ Screen 3 (каталог) — оставляем как есть у тебя */}
        <section className="screen">
          <div className="center wide" data-reveal>
            <div className="cards">
              {catalog.cards.map((c) => (
                <article className="card" key={c.title}>
                  <div className="cardTop">
                    <h3 className="cardTitle">{c.title}</h3>
                    <div className="cardMeta">{c.meta}</div>
                  </div>

                  <p className="cardLead">{c.lead}</p>

                  <div className="chips" aria-label="notes">
                    {c.notes.map((n, idx) => (
                      <span
                        className="chip"
                        key={`${c.title}-${idx}`}
                        style={{ transitionDelay: `${120 + idx * 90}ms` }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>

                  <p className="cardBest">
                    <span className="bestLabel">Perfect:</span> {c.bestFor}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Screen 4 (форма) — как было */}
        <section className="screen" id="order">
          <div className="center wide" data-reveal>
            <h2 className="h2">{form.heading}</h2>

            <ul className="perkList">
              {form.perks.map((p, i) => (
                <li className="perk" style={{ transitionDelay: `${i * 80}ms` }} key={p}>
                  {p}
                </li>
              ))}
            </ul>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <label className="field">
                Nume
                <input className="input" placeholder="Numele tău" />
              </label>

              <label className="field">
                Număr de telefon
                <input className="input" placeholder="+373 ..." />
              </label>

              <div className="options">
                {form.options.map((o) => (
                  <label className="opt" key={o}>
                    <input type="radio" name="opt" />
                    <span>{o}</span>
                  </label>
                ))}
              </div>

              <button className="btn btn--full" type="submit">
                {form.submit}
              </button>

              <p className="footer">{form.footer}</p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}