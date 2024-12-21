export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    priceValue: number;
    image: string;
    features: string[];
    facebookPostUrl: string;
    beds: number;
    baths: number;
    area: number;
    areaValue: number;
    type: string; // Added property
}
