import { LandingScreen } from '../shared/LandingScreen';

export default function CherryMan() {
    return (
        <LandingScreen
            bgClassName="bg--cherry-men"
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
                        title: 'CHERRY',
                        meta: '15 ml | 500 lei',
                        text:
                            'Un parfum fructat și seducător cu note vibrante de vișine suculente, zmeură și mandarină, urmate de inima dulce-cremoasă cu marshmallow, vanilie și gardenie și o bază caldă lemnoasă. Perfect pentru femeia energică, jucăușă și feminină.',
                    },
                    {
                        title: 'MEN',
                        meta: '15 ml | 500 lei',
                        text:
                            'Arome inspirate de prospețimea oceanului: deschiderea fresh cu yuzu și grepfrut, inima marină și baza masculin-lemnoasă creează un parfum modern, energizant și sigur de sine — pentru bărbatul liber și activ.',
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