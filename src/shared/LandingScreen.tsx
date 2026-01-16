import { useEffect, useMemo } from 'react';

type CatalogCard = { title: string; meta: string; text: string };

type Props = {
    bgClassName: string;
    marqueeText: string;

    hero: {
        title: string;
        subtitle: string;
        pills: string[];
    };

    offer: {
        lines: string[];
        button: string;
    };

    catalog: {
        cards: CatalogCard[]; // 2 карточки: CHERRY и MEN (или NUDE и ALLURE)
    };

    form: {
        heading: string;
        perks: string[];
        options: string[];
        submit: string;
        footer: string;
    };
};

export function LandingScreen({ bgClassName, marqueeText, hero, offer, catalog, form }: Props) {
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

            {/* fixed background */}
            <div className={`lp__bg ${bgClassName}`} aria-hidden="true" />

            <main className="lp__main">
                {/* Screen 1 */}
                <section className="screen">
                    <div className="center" data-reveal>
                        <h1 className="h1">{hero.title}</h1>
                        <p className="sub">{hero.subtitle}</p>

                        <div className="pillRow">
                            {hero.pills.map((p) => (
                                <span className="pill" key={p}>{p}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Screen 2 */}
                <section className="screen">
                    <div className="center" data-reveal>
                        <p className="offerLine">
                            {offer.lines.map((l, i) => (
                                <span key={i} className="offerLine__row">
                                    {l}
                                </span>
                            ))}
                        </p>
                        <button className="btn" type="button" onClick={goToForm}>
                            {offer.button}
                        </button>
                    </div>
                </section>

                {/* Screen 3 */}
                <section className="screen">
                    <div className="center wide" data-reveal>
                        <div className="cards">
                            {catalog.cards.map((c) => (
                                <article className="card" key={c.title}>
                                    <div className="cardTop">
                                        <h3 className="cardTitle">{c.title}</h3>
                                        <div className="cardMeta">{c.meta}</div>
                                    </div>
                                    <p className="cardText">{c.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Screen 4 */}
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