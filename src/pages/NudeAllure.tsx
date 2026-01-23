import { LandingScreen } from '../shared/LandingScreen';

export default function NudeAllure() {
    return (
        <LandingScreen
            bgVideo={{ desktop: "/hero-desktop-nude.mp4" }}
            bgClass="bg--nude-allure"

            marqueeText="Ofertă specială"
            hero={{
                title: [
                    'Parfume Oil',
                    'parfum pentru ea și pentru el',
                ],
                subtitle:
                    'Un cadou care se simte din prima clipă.',
                pills: [

                    'Pentru cuplu sau pentru tine',
                    'Aromă luxoasă',
                ],
            }}
            offer={{
                badge: 'Cadoul ideal de 14 februarie', // ✅ ОБЯЗАТЕЛЬНО
                title: 'La achiziționarea a 2 parfumuri',
                price: '850 lei',
                fromLabel: 'în loc de',
                oldPrice: '1000 lei',
                button: 'Alege parfumul preferat și lasă o cerere',
            }}
            catalog={{
                cards: [
                    {
                        title: 'NUDE FANTASY',
                        meta: '15 ml | 500 lei',
                        lead: 'Dulce + senzual. Floral-gourmand memorabil.',
                        notes: [
                            'citrică luminoasă',
                            'trandafir negru',
                            'orhidee vanilată',
                            'praline',
                            'cafea',
                        ],
                        bestFor: 'pentru femeia sigură pe sine, pasională și memorabilă',
                    },
                    {
                        title: 'ALLURE',
                        meta: '15 ml | 500 lei',
                        lead: 'Fresh sportiv, curat și elegant.',
                        notes: [
                            'citrice proaspete',
                            'tonuri aromatice',
                            'mosc cald',
                            'lemn nobil',
                            'miros impecabil fără efort',
                        ],
                        bestFor: 'pentru fiecare zi — când vrei să miroși bine, simplu și sigur',
                    },
                ],
            }}
            form={{
                heading: 'Fă un cadou în doar 1 minut',
                perks: [
                    '✔️ Livrare în Chișinău — gratuită',
                    '✔️ Livrare în Moldova — contra cost',
                    '✔️ Procesare rapidă a comenzii',
                ],
                options: ['Un parfum', 'Două parfumuri (850 lei)'],
                submit: 'Trimite cererea',
                footer: 'Parfume Oil — parfumul care creează emoții și atrage complimente',
            }}
        />
    );
}