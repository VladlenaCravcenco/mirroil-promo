import { LandingTemplate } from '../shared/LandingTemplate';

export default function CherryMan() {
  return (
    <LandingTemplate
      seoTitle="Mirroil Cherry Man — parfum pentru ea și pentru el"
      seoDescription="Mirroil Cherry Man — parfum uleios intens, cu persistenta și șleif memorabil. Cadoul ideal de 14 februarie."
      marqueeText="❤️ Ofertă de 14 februarie — reducere specială • "
      hero={{
        brand: 'Parfume Oil',
        title: 'Parfum pentru ea și pentru el',
        subtitle:
          'Un cadou care se simte din prima clipă. Parfumuri uleioase cu persistenta intensă și un șleif memorabil.',
        bullets: ['🎁 Cadoul ideal de 14 februarie', '💑 Pentru cuplu sau pentru tine', '✨ Aromă luxoasă, senzuală, care te definește'],
        offer: 'La achiziționarea a 2 parfumuri — doar 850 lei în loc de 1000',
        cta: '👉 Alege parfumul preferat și lasă o cerere'
      }}
      catalog={{
        heading: 'Parfumuri',
        leftTitle: '👩 Pentru ea',
        leftItems: [
          {
            name: 'CHERRY',
            size: '15 ml',
            price: '500 lei',
            text:
              'Un parfum fructat și seducător cu note vibrante de vișine suculente, zmeură și mandarină, urmate de inima dulce-cremoasă cu marshmallow, vanilie și gardenie și o bază caldă lemnoasă.'
          }
        ],
        rightTitle: '👨 Pentru el',
        rightItems: [
          {
            name: 'MEN',
            size: '15 ml',
            price: '500 lei',
            text:
              'Arome inspirate de prospețimea oceanului: deschiderea fresh, inima marină și baza masculin-lemnoasă creează un parfum modern.'
          }
          
        ],
        combo: '💡 Combinație recomandată: 🌟 2 parfumuri pentru 850 lei — alege un parfum pentru ea și unul pentru el!'
      }}
      form={{
        heading: 'Fă un cadou în doar 1 minut',
        perks: ['✔️ Livrare în Chișinău — gratuită', '✔️ Livrare în Moldova — contra cost', '✔️ Procesare rapidă a comenzii'],
        submitLabel: 'Trimite cererea',
        options: ['Un parfum', 'Două parfumuri (850 lei)'],
        footer: '🎁 Parfume Oil — parfumul care creează emoții și atrage complimente'
      }}
    />
  );
}