import { LandingScreen } from '../shared/LandingScreen';

export default function CherryMan() {
    return (
        <LandingScreen
            bgClassName="bg--cherry-men"
            marqueeText="❤️ Ofertă specială"
            hero={{
                title: [
                    'Parfume Oil',
                    'parfum pentru ea și pentru el',
                ],
                subtitle:
                    'Un cadou care se simte din prima clipă. Parfumuri uleioase cu persistenta intensă și un șleif memorabil — pentru ea și pentru el.',
                pills: [
                    '🎁 Cadoul ideal de 14 februarie',
                    '💑 Pentru cuplu sau pentru tine',
                    '✨ Aromă luxoasă, senzuală, care te definește',
                ],
            }}
            offer={{
                title: 'La achiziționarea a 2 parfumuri',
                price: '850 lei',
                fromLabel: 'în loc de',
                oldPrice: '1000 lei',
                button: 'Alege parfumul preferat și lasă o cerere',
            }}
            catalog={{
                cards: [
                    {
                        title: "CHERRY",
                        meta: "15 ml | 500 lei",
                        lead: "Fructat, seducător, dulce-cremos.",
                        notes: ["vișine", "marshmallow", "vanilie", "gardenie", "lemnoasă caldă"],
                        bestFor: "Pentru femeia energică, jucăușă și feminină."
                    },
                    {
                        title: "MEN",
                        meta: "15 ml | 500 lei",
                        lead: "Fresh oceanic, modern, sigur pe sine.",
                        notes: ["yuzu", "grepfrut", "inimă marină", "bază masculin-lemnoasă"],
                        bestFor: "Pentru bărbatul liber și activ."
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