const request = require('request-promise');

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
            request('https://' + region + ".api.riotgames.com/lol/summoner/v3/summoners/by-name/" + name + '?api_key=' + api_key, options)
                .then(data => {
                    resolve(data.body);
                }).catch(err => {
                    return reject(err);
                });
        });
    };

}