export type StarshipsParams = {
    MGLT: string;
    cargoCapacity: string;
    consumables: string;
    costInCredits: string;
    created: string;
    crew: string;
    edited: string;
    films: string[];
    hyperdriveRating: string;
    length: string;
    manufacturer: string;
    maxAtmospheringSpeed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[];
    starshipClass: string;
    url: string;
};

export type StarshipsViewProps = {
    starships: StarshipsParams[];
};
