const axios = require("axios");
const Summoner = require("./model/summoner.model");
const League = require("./model/league.model");

/**
 * RiotAPI type definition.
 *
 * @typedef {Object} RiotAPI
 * @property {string} key Credential of access the api.
 * @property {string} version Patch version.
 */
module.exports = class RiotAPI {

    constructor(key, version) {
        this.key = key;
        this.version = version;
    }

    /**
     * Find summoner by nickname.
     * 
     * @param {string} nickname 
     * @param {string} region
     */
    async findSummoner(nickname, region) {
        const summonerEndpoint = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}`;
        const summonerResponse = await axios.get(summonerEndpoint, { params: { api_key: this.key } });
        const summoner = summonerResponse.data;
        const summonerIcon =
            `http://ddragon.leagueoflegends.com/cdn/${this.version}/img/profileicon/${summoner.profileIconId}.png`;

        const leagueEndpoint = `https://${region}.api.riotgames.com/lol/league/v4/positions/by-summoner/${summoner.id}`;
        const leagueResponse = await axios.get(leagueEndpoint, { params: { api_key: this.key } });
        const data = leagueResponse.data;
        const leagues = [];

        data.forEach((ranked) => {
            let type = ranked.queueType.replace(/_/g, " ");
            let elo = `${ranked.tier} ${ranked.rank}`;

            let league = new League(type, elo, ranked.leagueName, ranked.leaguePoints, ranked.wins, ranked.losses);

            leagues.push(league);
        });

        return new Summoner(summoner.id, summonerIcon, summoner.name, summoner.summonerLevel, leagues);
    }

};