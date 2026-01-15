import './styles/global.css';

export default function App() {
  return (
    <div className="page">
      <header className="marquee" aria-label="Promo">
        <div className="marquee__track">
          <span>❤️ Ofertă de 14 februarie — reducere specială • </span>
          <span>❤️ Ofertă de 14 februarie — reducere specială • </span>
          <span>❤️ Ofertă de 14 februarie — reducere specială • </span>
        </div>
      </header>

      <main className="content">
        <section className="section section--hero">
          <h1>Parfume Oil</h1>
          <p>Parfum pentru ea și pentru el</p>
        </section>

        <section className="section section--catalog">
          <h2>Parfumuri</h2>
        </section>

        <section className="section section--cta">
          <h2>Livrare + formular</h2>
        </section>
      </main>
    </div>
  );
}