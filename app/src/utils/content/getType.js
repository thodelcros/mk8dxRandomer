const getType = (character) => {
    const characterByType = {
        light: [
            'Skelerex',
            'Toad',
            'Larry',
            'Bébé Peach',
            'Bébé Harmonie',
            'Marie',
            'Wendy',
            'Koopa',
            'Lemmy',
            'Maskass',
            'Bébé Daisy',
            'Bébé Luigi',
            'Lakitu',
            'Bébé Mario',
            'Yoshi',
            'Toadette',
        ],
        medium: [
            'Iggy',
            'Ludwig',
            'Mario',
            'Mario Tanuki',
            'Peach',
            'Luigi',
            'Garçon Inkling',
            'Fille Inkling',
            'Bowser Jr',
            'Daisy',
            'Villageoise',
            'Villageois',
            'Peach chat',
        ],
        heavy: [
            'Mario de Métal',
            'Harmonie',
            'Morton',
            'Roy',
            'Link',
            'Donkey Kong',
            'Bowser',
            'Roi Boo',
            'Peach d\'or Rose',
            'Bowser Squelette',
            'Wario',
            'Waluigi',
        ],
        none: ['Mii & Amiibo'],
    };

    if (characterByType.light.includes(character)) { return 'Léger'; }
    if (characterByType.medium.includes(character)) { return 'Moyen'; }
    if (characterByType.heavy.includes(character)) { return 'Lourd'; }

    return 'Aucun';
};

export default getType;
