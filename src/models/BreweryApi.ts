import Brewery from "./Brewery";

const url = function (options: string): string {
    return "https://api.openbrewerydb.org/breweries{$options}";
};

function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

const get = function(options: string): Promise<Brewery> {
    return new Promise((resolve, reject) => {
        fetch(url(options))
            .then(handleErrors)
            .then(response => resolve(response))
            .catch(error => console.log(error, reject));    //logging for testing
    })
};


export default {
    getSingle(breweryId: string): Promise<Brewery> {
        return get("/{$breweryId}")
    }
};