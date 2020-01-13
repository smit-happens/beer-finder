import Brewery from "./Brewery";

const url = function (options: string): string {
    return `https://api.openbrewerydb.org/breweries${options}`;
};

//returns multiple breweries
const index = async function(searchText: string = ""): Promise<Array<Brewery>> {
    let options = "";
    if (searchText !== "") {
        options = `?by_name=${searchText}`;
    }
    const response = await fetch(url(options));
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return (await response.json()) as Array<Brewery>;
};

//returns single brewery
const get = async function(id: number): Promise<Brewery> {
    const response = await fetch(url(`/${id}`));
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return (await response.json()) as Brewery;
};

//Ex: BreweryApi.index()
export const BreweryApi = {
    index,
    get,
};