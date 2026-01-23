// LandingScreen.tsx
import { useEffect, useMemo, useState } from 'react';

type CatalogCard = {
  title: string;
  meta: string;
  lead: string;
  notes: string[];
  bestFor: string;
};

type Props = {
  // ✅ optional videos (если нет — фон просто не покажется)
  bgVideo?: {
    desktop: string;
  };
  bgClass?: string;

  marqueeText: string;

  hero: {
    title: string[];   // ["Parfume Oil", "parfum pentru ea și pentru el"]
    subtitle: string;  // текст в нижней плашке
    pills: string[];   // 2–3 пилсы
  };

  offer: {
    badge: string;
    title: string;
    price: string;
    fromLabel: string;
    oldPrice: string;
    button: string;
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

type SubmitStatus = 'idle' | 'sending' | 'ok' | 'error';

export function LandingScreen({ bgVideo, bgClass, marqueeText, hero, offer, catalog, form }: Props) {
  // ✅ Form stated
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [option, setOption] = useState(form.options?.[0] ?? '');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

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

  const goToForm = () =>
    document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const normalizePhone = (v: string) => v.replace(/\s+/g, '').trim();

  const validate = () => {
    const n = name.trim();
    const p = normalizePhone(phone);

    if (!n) return 'Scrie numele, te rog.';
    if (!p) return 'Scrie numărul de telefon, te rog.';

    // простая проверка (без жёсткой страны):
    // +373xxxxxxxx или просто цифры длиной >= 7
    const digits = p.replace(/[^\d]/g, '');
    if (digits.length < 7) return 'Numărul de telefon pare prea scurt.';

    return '';
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const v = validate();
    if (v) {
      setStatus('error');
      setErrorMsg(v);
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: normalizePhone(phone),
          option,
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Request failed');
      }

      // ✅ чистим
      setStatus('ok');
      setName('');
      setPhone('');
      setOption(form.options?.[0] ?? '');

      // ✅ небольшой таймаут, чтобы React успел отрендерить статус
      setTimeout(() => {
        window.location.assign('/thanks');
      }, 150);

    } catch (err) {
      setStatus('error');
      setErrorMsg('Eroare la trimitere. Încearcă din nou.');
    }
  };

  return (
    <div className="lp">
      <header className="marquee">
        <div className="marquee__track">
          <span>{marquee}</span>
          <span>{marquee}</span>
          <span>{marquee}</span>
        </div>
      </header>

      {/* ✅ BACKGROUND: desktop video OR image fallback */}
      {bgVideo ? (
        <div className={`lp__bg ${bgClass || ''}`} aria-hidden="true">
          {/* DESKTOP VIDEO */}
          <video
            className="bgVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={bgVideo?.desktop} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className={`lp__bg ${bgClass || ''}`} aria-hidden="true" />
      )}

      <main className="lp__main">
        {/* ✅ Screen 1 */}
        <section className="screen screen--hero">
          {/* TOP offer */}
          <div className="heroTop" data-reveal>
            <div className="heroBadge pill" aria-label="offer badge">
              
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

          {/* CENTER title */}
          <div className="heroCenter" data-reveal>
            {/* (оставила пустым, как у тебя) */}
          </div>

          {/* BOTTOM glass panel */}
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

        {/* ✅ Screen 3 */}
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

        {/* ✅ Screen 4 */}
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

            {/* ✅ теперь submit реально шлет на /api/lead */}
            <form className="form" onSubmit={submitLead}>
              <label className="field">
                Nume
                <input
                  className="input"
                  placeholder="Numele tău"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              <label className="field">
                Număr de telefon
                <input
                  className="input"
                  placeholder="+373 ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>

              <div className="options">
                {form.options.map((o) => (
                  <label className="opt" key={o}>
                    <input
                      type="radio"
                      name="opt"
                      checked={option === o}
                      onChange={() => setOption(o)}
                    />
                    <span>{o}</span>
                  </label>
                ))}
              </div>

              <button className="btn btn--full" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Se trimite...' : form.submit}
              </button>

              <p className="footer">{form.footer}</p>

              {/* ✅ статус */}
              {status === 'ok' && (
                <p style={{ marginTop: 12 }}>
                  ✅ Cererea a fost trimisă. Te contactăm în curând.
                </p>
              )}

              {status === 'error' && (
                <p style={{ marginTop: 12 }}>
                  ❌ {errorMsg || 'Eroare. Încearcă din nou.'}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}