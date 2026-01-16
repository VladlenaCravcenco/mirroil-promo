import { useEffect } from 'react';

type CatalogItem = { name: string; size: string; price: string; text: string };

type Props = {
  seoTitle: string;
  seoDescription: string;
  marqueeText: string;
  hero: {
    brand: string;
    title: string;
    subtitle: string;
    bullets: string[];
    offer: string;
    cta: string;
  };
  catalog: {
    heading: string;
    leftTitle: string;
    leftItems: CatalogItem[];
    rightTitle: string;
    rightItems: CatalogItem[];
    combo: string;
  };
  form: {
    heading: string;
    perks: string[];
    submitLabel: string;
    options: string[];
    footer: string;
  };
};

export function LandingTemplate({ seoTitle, seoDescription, marqueeText, hero, catalog, form }: Props) {
  useEffect(() => {
    document.title = seoTitle;

    const desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (desc) desc.content = seoDescription;
  }, [seoTitle, seoDescription]);

  return (
    <div className="page">
      <header className="marquee">
        <div className="marquee__track">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </header>

      {/* фон-заглушка под будущую анимацию */}
      <div className="bg-object" aria-hidden="true" />

      <main className="content">
        <section className="section section--hero">
          <div className="heroGrid">
            <div>
              <div className="kicker">{hero.brand}</div>
              <h1>{hero.title}</h1>
              <p className="muted">{hero.subtitle}</p>

              <ul className="bullets">
                {hero.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="offer">{hero.offer}</div>
              <div className="cta">{hero.cta}</div>
            </div>

            <div className="visualCard">
              <div className="visualHint">[ aici va fi parfumul / animația ]</div>
            </div>
          </div>
        </section>

        <section className="section section--catalog">
          <h2>{catalog.heading}</h2>

          <div className="twoCols">
            <div className="col">
              <h3>{catalog.leftTitle}</h3>
              {catalog.leftItems.map((it) => (
                <div className="itemCard" key={it.name}>
                  <div className="itemTop">
                    <strong>{it.name}</strong>
                    <span className="muted">
                      {it.size} | {it.price}
                    </span>
                  </div>
                  <p className="muted">{it.text}</p>
                </div>
              ))}
            </div>

            <div className="col">
              <h3>{catalog.rightTitle}</h3>
              {catalog.rightItems.map((it) => (
                <div className="itemCard" key={it.name}>
                  <div className="itemTop">
                    <strong>{it.name}</strong>
                    <span className="muted">
                      {it.size} | {it.price}
                    </span>
                  </div>
                  <p className="muted">{it.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="combo">{catalog.combo}</div>
        </section>

        <section className="section section--cta">
          <h2>{form.heading}</h2>

          <div className="twoCols">
            <div className="col">
              <ul className="bullets">
                {form.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="footerNote">{form.footer}</div>
            </div>

            <form className="formCard" onSubmit={(e) => e.preventDefault()}>
              <label>
                Nume
                <input placeholder="Numele tău" />
              </label>
              <label>
                Număr de telefon
                <input placeholder="+373 ..." />
              </label>

              <div className="radioGroup">
                {form.options.map((o) => (
                  <label key={o} className="radio">
                    <input type="radio" name="opt" />
                    <span>{o}</span>
                  </label>
                ))}
              </div>

              <button className="btn" type="submit">
                {form.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}