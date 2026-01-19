/* eslint-disable @typescript-eslint/camelcase */
/**
 * English - United States (Default)
 */
export const en_us: Bundle = {
    locale: 'en-US',
    messages: {
        array: 'Must be an array',
        boolean: 'Must be true or false',
        email: 'Must be a valid email address',
        empty: 'Must be empty',
        equals: 'Must be equal to ${other}',
        gt: 'Must be greater than ${min}',
        gte: 'Must be greater than or equal to ${min}',
        integer: 'Must be an integer',
        isnil: 'Required',
        isnull: 'Required',
        length: 'Must have a length of at least ${min}',
        length_between: 'Must have a length between ${min} and ${max}',
        lt: 'Must be less than ${max}',
        lte: 'Must be less than or equal to ${max}',
        not: 'Can not be ${value}',
        number: 'Must be a number',
        numeric: 'Must be numeric',
        object: 'Must be an object',
        required: 'Required',
        string: 'Must be a string',
    },
};

/**
 * French
 */
export const fr_fr: Bundle = {
    locale: 'fr-FR',
    messages: {
        array: 'Doit être un tableau',
        boolean: 'MDoit être vrai ou faux',
        email: 'Doit être une adresse email valide',
        empty: 'Doit être vide',
        equals: 'Doit être égal(e) à ${other}',
        gt: 'Doit être plus grand que ${min}',
        gte: 'Doit être plus grand ou égal(e) à ${min}',
        integer: 'Doit être un nombre entier',
        isnil: 'Requis',
        isnull: 'Requis',
        length: 'Doit avoir une longueur d\'au moins ${min}',
        length_between: 'Doit avoir une longueur entre  ${min} et ${max}',
        lt: 'Doit être plus petit que ${max}',
        lte: 'Doit être plus petit ou égal(e) à ${max}',
        not: 'Ne peut pas être ${value}',
        number: 'Doit être un nombre',
        numeric: 'Doit être numérique',
        object: 'Doit être un object',
        required: 'Requis',
        string: 'Soit être une chaîne de caractères',
    },
};


/**
 * German - Germany
 */
export const de_de: Bundle = {
    locale: 'de-DE',
    messages: {
        array: 'Muss ein Array sein',
        boolean: 'Muss true oder false sein',
        email: 'Muss eine gültige e-Mail Adresse sein',
        empty: 'Muss leer sein',
        equals: 'Muss gleich sein mit ${other}',
        gt: 'Muss größer als ${min} sein',
        gte: 'Muss größer als oder gleich sein wie ${min}',
        integer: 'Muss eine Ganzzahl sein',
        isnil: 'Erforderlich',
        isnull: 'Erforderlich',
        length: 'Muss mindestens die Länge ${min} haben',
        length_between: 'Muss eine Länge zwischen ${min} und ${max} haben',
        lt: 'Muss weniger sein als ${max}',
        lte: 'Muss weniger sein als oder gleich ${max} sein',
        not: 'Darf nicht ${value} sein',
        number: 'Muss eine Zahl sein',
        numeric: 'Muss numerisch sein',
        object: 'Muss ein Objekt sein',
        required: 'Erforderlich',
        string: 'Muss eine String sein',
    },
};


export interface Bundle {
    locale: string;
    messages: Messages;
}

export interface Messages {
    [key: string]: string;
    
    array: string;
    boolean: string;
    email: string;
    empty: string;
    equals: string;
    gt: string;
    gte: string;
    integer: string;
    isnil: string;
    isnull: string;
    length: string;
    length_between: string;
    lt: string;
    lte: string;
    not: string;
    number: string;
    numeric: string;
    object: string;
    required: string;
    string: string;
}
