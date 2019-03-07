/**
 * League type definition.
 *
 * @typedef {Object} League
 * @property {string} type Ranked type.
 * @property {string} elo Tier and Rank of summoner.
 * @property {string} league Name of league.
 * @property {int} pdl Number of points in the summoner.
 * @property {int} wins Number of wins in the summoner.
 * @property {int} losses Number of losses in the summoner.
 */
module.exports = class League {

    constructor(type, elo, league, pdl, wins, losses) {
        this.type = type;
        this.elo = elo;
        this.league = league;
        this.pdl = pdl;
        this.wins = wins;
        this.losses = losses;
    }

    get getType() {
        return this.type;
    }

    get getElo() {
        return this.elo;
    }

    get getLeague() {
        return this.league;
    }

    get getPdl() {
        return this.pdl;
    }

    get getWins() {
        return this.wins;
    }

    get getLosses() {
        return this.losses;
    }

};