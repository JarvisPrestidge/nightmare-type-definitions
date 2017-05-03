
import * as Nightmare from "nightmare";

// Constants
const BASE_URL: string = 'https://www.whoscored.com';

// Datatype to hold scraped tuple
interface League {
    name: string;
    url: string;
}

const getLeagues = async () => {

    const nightmare: Nightmare = new Nightmare({
        show: true
    });

    try {
        // Attempt to fetch seasons
        const leagues: League[] = await nightmare
            .goto(BASE_URL)
            .wait('#domestic-regions')
            .click('#tournament-groups > li:nth-child(4) > a')
            .click('#domestic-index > dd:nth-child(6) > a')
            .click('#domestic-regions > div:nth-child(4) > ul > li > a')
            .evaluate(() => {
                const links: HTMLLinkElement[] =
                    <HTMLLinkElement[]>[...document.querySelectorAll('#domestic-regions > div:nth-child(4) > ul > li > ul > li > a')];
                let leagues: League[] = [];
                for (let link of links) {
                    leagues.push({
                        name: link.innerHTML,
                        url: link.href
                    });
                }
                return leagues;
            })
            .end();
        console.log(leagues);
        // return list of seasons
        return leagues;
    } catch (error) {
        console.log('error occured: ' + error);
        return undefined;
    }
}

// Datatype to hold scraped tuple
interface Season {
    year: string;
    url: string;
}

const getSeasons = async (url: string) => {

    const nightmare: Nightmare = new Nightmare({
        show: true
    });

    try {
        // Attempt to fetch seasons
        const seasons: Season[] = await nightmare
            .goto(url)
            .wait('#seasons')
            .evaluate(() => {
                const options: HTMLOptionElement[] = <HTMLOptionElement[]>[...document.querySelectorAll('#seasons > option')];
                let seasons: Season[] = [];
                for (let option of options) {
                    seasons.push({
                        year: option.innerHTML,
                        url: option.value
                    });
                }
                return seasons;
            })
            .end()
        console.log(seasons);
        // return list of seasons
        return seasons;
    } catch (error) {
        console.log('error occured: ' + error);
        return undefined;
    }
}

const start = async () => {
    const leagues: League[] = await getLeagues();
    const seasons: Season[] = await getSeasons(leagues[0].url);
}

start();
