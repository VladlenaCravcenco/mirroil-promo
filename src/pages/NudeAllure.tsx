import { LandingScreen } from '../shared/LandingScreen';

export default function NudeAllure() {
    return (
        <LandingScreen
            bgClassName="bg--nude-allure"
            marqueeText="❤️ Ofertă specială"
            hero={{
                title: 'Parfume Oil — parfum pentru ea și pentru el',
                subtitle:
                    'Un cadou care se simte din prima clipă. Parfumuri uleioase cu persistenta intensă și un șleif memorabil — pentru ea și pentru el.',
                pills: [
                    '🎁 Cadoul ideal de 14 februarie',
                    '💑 Pentru cuplu sau pentru tine',
                    '✨ Aromă luxoasă, senzuală, care te definește',
                ],
            }}
            offer={{
                lines: [
                    'La achiziționarea a 2 parfumuri',
                    'doar 850 lei în loc de 1000',
                ],
                button: 'Alege parfumul preferat și lasă o cerere',
            }}
            catalog={{
                cards: [
                    {
                        title: 'NUDE FANTASY',
                        meta: '15 ml | 500 lei',
                        text: 'Contrastul perfect între dulceață și senzualitate: deschidere luminos-citrica, inimă florală profundă cu trandafir negru și orhidee vanilată și bază gourmand cu praline, caramel și cafea. Ideal pentru femeia sigură pe sine, pasională și memorabilă.',
                    },
                    {
                        title: 'ALLURE',
                        meta: '15 ml | 500 lei',
                        text: 'Parfum fresh sportiv și elegant, cu note citrice proaspete, tonuri aromatice și o bază caldă de moscul și lemn nobil. Perfect pentru fiecare zi când vrei să miroși impecabil fără efort.',
                    },
                ],
            }}
            form={{
                heading: 'Fă un cadou în doar 1 minut',
                perks: ['✔️ Livrare în Chișinău — gratuită', '✔️ Livrare în Moldova — contra cost', '✔️ Procesare rapidă a comenzii'],
                options: ['Un parfum', 'Două parfumuri (850 lei)'],
                submit: 'Trimite cererea',
                footer: 'Parfume Oil — parfumul care creează emoții și atrage complimente',
            }}
        />
    );
}