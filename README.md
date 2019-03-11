# Unofficial-RiotAPI


#### Use example:

```js
// Import the api.
import RiotAPI from "unofficial-riotapi";

// Create the instance of api.
const api = new RiotAPI("your key", "actual patch version");

// This is an asynchronous request, so you need to declare your function as asynchronous.
const summoner = await api.findSummoner("nick of summoner", "region of summoner");

// So you can get data from your summoner.
console.log(summoner.getIcon);
```
