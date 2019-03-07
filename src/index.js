const axios = require('axios');
const Summoner = require('./model/summoner.model');

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
        if (nickname === undefined || region === undefined) {
            throw new Error("Nickname or region not defined.");
        }

        const riot_endpoint = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}`;
        const riot = await axios.get(riot_endpoint, { params: { api_key: this.key } });

        const summonerIcon =
            `http://ddragon.leagueoflegends.com/cdn/${this.version}/img/profileicon/${riot.data.profileIconId}.png`;

        return new Summoner(riot.data.id, summonerIcon, riot.data.name, riot.data.summonerLevel);
    }

};