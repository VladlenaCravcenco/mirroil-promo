import { LandingScreen } from '../shared/LandingScreen';

export default function CherryMan() {
    return (
        <LandingScreen

            bgVideo={{ desktop: "/hero-desktop-cherry.mp4" }}
            bgClass="bg--cherry-men"
            marqueeText="Ofertă specială"
            hero={{
                title: ['Parfume Oil', 'parfum pentru ea și pentru el'],
                subtitle:
                    'Un cadou care se simte din prima clipă.',
                // ✅ тут теперь только нижние маленькие плашки (2-3 коротких)
                pills: ['Aromă luxoasă', 'Pentru cuplu sau pentru tine'],
            }}
            offer={{
                // ✅ бейдж сверху (если в LandingScreen он берётся отсюда)
                badge: 'Cadoul ideal de 14 februarie',
                title: 'La achiziționarea a 2 parfumuri',
                price: '850 lei',
                fromLabel: 'în loc de',
                oldPrice: '1000 lei',
                button: 'Alege parfumul preferat și lasă o cerere',
            }}
            catalog={{
                cards: [
                    {
                        image: '/cherry-woman.png',
                         alt: 'Parfumul CHERRY pentru femei',
                        title: 'CHERRY',
                        meta: '15 ml | 500 lei',
                        lead: 'Fructat și dulce-cremos.',
                        notes: ['vișine', 'marshmallow', 'vanilie', 'gardenie', 'lemnoasă caldă'],
                        bestFor: 'Pentru femeia energică.',
                    },
                    {
                        image: '/men-men.png',
                        alt: 'Parfumul MEN pentru bărbați',
                        title: 'MEN',
                        meta: '15 ml | 500 lei',
                        lead: 'Fresh oceanic și modern.',
                        notes: ['yuzu', 'grepfrut', 'inimă marină', 'bază masculin-lemnoasă'],
                        bestFor: 'Pentru bărbatul liber.',
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