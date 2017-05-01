
import * as Nightmare from "nightmare";

// Constants
const BASE_URL: string = 'https://www.whoscored.com'

var nightmare: Nightmare = new Nightmare({
    show: true
})

// Datatype to hold scraped tuple
interface League {
    name: string
    url: string
}

const getLeagues = async () => {
    try {
        // Attempt to fetch seasons
        const leagues: League[] = await nightmare
            .goto(BASE_URL)
            .wait('#domestic-regions')
            .click('#tournament-groups > li:nth-child(4) > a')
            .click('#domestic-index > dd:nth-child(6) > a')
            .click('#domestic-regions > div:nth-child(4) > ul > li > a')
            .evaluate(() => {
                const tags: HTMLLinkElement[] =
                    <HTMLLinkElement[]>[...document.querySelectorAll('#domestic-regions > div:nth-child(4) > ul > li > ul > li > a')]
                let leagues: League[] = []
                for (let tag of tags) {
                    leagues.push({
                        name: tag.innerHTML,
                        url: tag.href
                    })
                }
                return leagues
            })
            .end()
        console.log(leagues)
        // return list of seasons
        return leagues
    } catch (error) {
        console.log('error occured: ' + error)
        return undefined
    }
}

const getSeasons = async (url: string) => {
    try {
        // Attempt to fetch seasons
        const seasons: string[] = await nightmare
            .goto(url)
            .wait('#domestic-regions')
            .click('#tournament-groups > li:nth-child(4) > a')
            .click('#domestic-index > dd:nth-child(6) > a')
            .click('#domestic-regions > div:nth-child(4) > ul > li > a')
            .evaluate(() => {
                return [...document.querySelectorAll('#domestic-regions > div:nth-child(4) > ul > li > ul > li > a')].map(el => el.innerHTML)
            })
            .end()
        // return list of seasons
        return seasons
    } catch (error) {
        console.log('error occured: ' + error)
        return undefined
    }
}

getLeagues()
