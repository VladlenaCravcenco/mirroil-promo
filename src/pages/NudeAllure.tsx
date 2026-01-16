import { LandingTemplate } from '../shared/LandingTemplate';

export default function NudeAllure() {
  return (
    <LandingTemplate
      seoTitle="Mirroil Nude Allure — parfum senzual cu persistenta"
      seoDescription="Mirroil Nude Allure — aromă luxoasă și memorabilă. Cadoul ideal de 14 februarie."
      marqueeText="❤️ Cu dragoste — ofertă specială de 14 februarie • "
      hero={{
        brand: 'Parfume Oil',
        title: 'Parfum pentru ea și pentru el',
        subtitle:
          'Parfumuri uleioase cu persistenta intensă și un șleif memorabil — pentru ea și pentru el.',
        bullets: ['🎁 Cadoul ideal de 14 februarie', '💑 Pentru cuplu sau pentru tine', '✨ Aromă luxoasă, senzuală, care te definește'],
        offer: 'La achiziționarea a 2 parfumuri — doar 850 lei în loc de 1000',
        cta: '👉 Alege parfumul preferat și lasă o cerere'
      }}
      catalog={{
        heading: 'Parfumuri',
        leftTitle: '👩 Pentru ea',
        leftItems: [
          {
            name: 'NUDE FANTASY',
            size: '15 ml',
            price: '500 lei',
            text:
              'Contrastul perfect între dulceață și senzualitate: deschidere luminos-citrica, inimă florală profundă și bază gourmand.'
          }
        ],
        rightTitle: '👨 Pentru el',
        rightItems: [
          {
            name: 'ALLURE',
            size: '15 ml',
            price: '500 lei',
            text:
              'Parfum fresh sportiv și elegant, cu note citrice proaspete, tonuri aromatice și o bază caldă de moscul și lemn nobil.'
          }
        ],
        combo: '💡 2 parfumuri pentru 850 lei — alege combinația perfectă.'
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