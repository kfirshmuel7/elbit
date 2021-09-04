declare module namespace {

    export interface Dates {
        [key: string] : number
    }
    export interface All {
        country: string;
        population: number;
        sq_km_area: number;
        life_expectancy: string;
        elevation_in_meters: number;
        continent: string;
        abbreviation: string;
        location: string;
        iso: number;
        capital_city: string;
        dates: Dates;
    }

    export interface HistoriesConfirmed {
        All: All;
    }

}

