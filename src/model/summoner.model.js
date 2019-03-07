/**
 * Summoner type definition.
 *
 * @typedef {Object} Summoner
 * @property {string} id Encrypted summoner id.
 * @property {string} icon URL ddragon for icon.
 * @property {string} nickname Summoner nickname.
 * @property {int} level Summoner level.
 * @property {Object} league Summoner league.
 */
module.exports = class Summoner {

    constructor(id, icon, nickname, level, league) {
        this.id = id;
        this.icon = icon;
        this.nickname = nickname;
        this.level = level;
        this.league = league;
    }

    get getId() {
        return this.id;
    }

    get getIcon() {
        return this.icon;
    }

    get getNickname() {
        return this.nickname;
    }

    get getLevel() {
        return this.level;
    }

    get getLeague() {
        return this.league;
    }

};