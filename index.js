const request = require('request-promise');

let version = '8.21.1'; // League of legends patch version
let language = 'en_US'; // Language of descriptions of item in API.

let options = {
    simple: false,
    resolveWithFullResponse: true,
    json: true
};

module.exports = function RiotAPI(api_key) {
    this.regions = {
        RUSSIA: 'ru',
        KOREA: 'kr',
        BRAZIL: 'br1',
        OCEANIA: 'oc1',
        JAPAN: 'jp1',
        NORTH_AMERICA: 'na1',
        EUROPE_NORTH_EAST: 'eun1',
        EUROPE_WEST: 'euw1',
        TURKEY: 'tr1',
        LATIN_AMERICA_1: 'la1',
        LATIN_AMERICA_2: 'la2'
    };

    this.getSummonerByName = async (region, name) => {
        if (api_key == null)
            return "API Key not found.";

        return new Promise((resolve, reject) => {
            let uri = 'https://' + region + ".api.riotgames.com/lol/summoner/v3/summoners/by-name/" + name + '?api_key=' + api_key;
            request(uri, options)
                .then(data => {
                    resolve(data.body);
                }).catch(err => {
                    return reject(err);
                });
        });
    };

    this.getIconBySummonerName = async (region, name) => {
        if (api_key == null)
            return "API Key not found.";

        return new Promise(async (resolve) => {
            let summoner = await this.getSummonerByName(region, name);
            resolve('http://ddragon.leagueoflegends.com/cdn/' + version + '/img/profileicon/' + summoner.profileIconId + '.png');
        });
    };

    this.getChampions = async () => {
        if (api_key == null)
            return "API Key not found.";

        return new Promise((resolve, reject) => {
            let uri = 'http://ddragon.leagueoflegends.com/cdn/' + version + '/data/' + language + '/champion.json';
            request(uri, options).then(data => {
                resolve(data.body.data);
            }).catch(err => {
                return reject(err);
            });
        });
    };

    this.getChampionsById = async (championId) => {
        if (api_key == null)
            return "API Key not found.";

        return new Promise(async (resolve) => {
            let data = await this.getChampions();
            for (champion in data) {
                if (data[champion].key == championId) {
                    resolve(data[champion]);
                }
            }
        });
    }

    this.getFreeToPlayChampions = async (region) => {
        if (api_key == null)
            return "API Key not found.";

        return new Promise(async (resolve, reject) => {
            let uri = 'https://' + region + '.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=' + api_key;
            request(uri, options).then(data => {
                resolve(data.body.freeChampionIds);
            }).catch(err => {
                return reject(err);
            });
        });
    };

}
