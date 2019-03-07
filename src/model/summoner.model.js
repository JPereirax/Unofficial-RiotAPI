module.exports = class Summoner {

    constructor(id, icon, nickname, level) {
        this.id = id;
        this.icon = icon;
        this.nickname = nickname;
        this.level = level;
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

};