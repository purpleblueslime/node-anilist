A lightweight and fast node wrapper to interact with the <b>anilist.co</b> graphql API. `[UNOFFICIAL]`

### Install
##### Through terminal
```js
npm i node-anilist
```
##### import/require
```js
const bot = require('node-anilist');
```
##### Setting-up oAuth Token
```js
const bot = require('node-anilist');
bot.AccessToken('token');
```

### Try
##### `Custom query`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

query = `
query ($userName: String) {
  User (name: $userName) {
    id
  }
}
`;
bot.Try(query, {userName: 'nomming'}).then(function (res) {
  console.log(res);
});
```

### Search
##### `user`, `anime`, `manga`, `character`, `staff`, `studio`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.Search.user('nomming').then(function (user) {
  console.log(user);
});
```

### Fetch
##### `user`, `anime`, `manga`, `character`, `staff`, `studio`, `activity`, `activityReply`, `thread`, `threadComment`, `review`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.Fetch.user(5467990).then(function (user) {
  console.log(user);
});
```

### User
##### `themeColor`, `badge`, `about`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.User.themeColor('blue');
bot.User.badge('owner of demon slayer');
bot.User.about('I am SLIME!');
```

### Entries
##### `search`, `fetch`, `add`, `update`, `delete`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.Search.anime('Sword Art Online').then(async function (anime) {
  bot.Entries.add(anime[0].id, 'PLANNING', 0, 0, 0, false, '');
  let entry = await bot.Entries.search('nomming', anime[0].id);
  console.log(entry);
});
```

### onNotification
##### `Triggers on new notifications`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.onNotification(function (ctx) {
  console.log(ctx);
}, 8000, 40);
```

### Send or Post
##### `sendMessage`, `postActivity`, `postActivityReply`, `postThread`, `postThreadComment`, `postReview`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.Search.user('RemTheBlue').then(function (user) {
  bot.sendMessage('https://c.tenor.com/i3pR9emucLgAAAAC/what-dog.gif', user[0].id, false);
});
```

### Edit
##### `editMessage`, `editActivity`, `editActivityReply`, `editThread`, `editThreadComment`, `editReview`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.editMessage(306455537, 'img(https://c.tenor.com/i3pR9emucLgAAAAC/what-dog.gif)');
```

### Delete
##### `deleteActivity`, `deleteActivityReply`, `deleteThread`, `deleteThreadComment`, `deleteReview`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.deleteActivity(306455537);
```

### Toggle
##### `toggleFavourite`, `toggleFollow`, `toggleLike`
```js
const bot = require('node-anilist');
bot.AccessToken('token');

bot.Search.user('RemTheBlue').then(function (user) {
  bot.toggleFollow(user[0].id);
});
```

### Functions
```js
.AccessToken('aaaaeeeee')
.Try('query($userName:String){user{name:$userName){id}}}', {userName: 'nomming'}, true)
.Search.user('nomming')
.Search.anime('Sword art online')
.Search.manga('Tensei shitara slime')
.Search.character('Shikimori')
.Search.staff('LiSA')
.Search.studio('MAPA')
.Fetch.user(5467990)
.Fetch.anime(127911)
.Fetch.manga(86355)
.Fetch.character(155702)
.Fetch.staff(105561)
.Fetch.studio(569)
.Fetch.activity(402452508)
.Fetch.activityReply(402452554)
.Fetch.thread(54523)
.Fetch.threadComment(1745692)
.Fetch.review(985)
.User.themeColor('blue')
.User.badge('uwu')
.User.about('I am SLIME!')
.Entries.search('nomming', 127911) 
.Entries.fetch(6969) 
.Entries.add(127911, 'PLANNING', 0, 0, 0, false, '') 
.Entries.update(6969, 'CURRENT', 10, 1, 0, false, 'Asuna my waifu <3')
.Entries.delete(6969)
.onNotificaion(function (ctx) {console.log(ctx)}, 8000, 40)
.sendMessage('Yo! Its SLIEM!', 5467990, false)
.editMessage(402452908, 'Yo! Its SLIME!')
.postActivity('The user above me is cute')
.editActivity(391462685, 'ty uwu')
.deleteActivity(391462685)
.postActivityReply(391462685, 'XDDD')
.editActivityReply(391469085, 'XD XD')
.deleteActivityReply(391469085)
.postThread('Rimuru City', 'Rimuru City is a community of slimes.', [], [86355, 101280])
.editThread(54523, 'Rimuru City Discord Server', 'Rimuru City is a community of slimes and demi humans.', [], [86355, 101280])
.deleteThread(54523)
.postThreadComment(54523, 'Me!!!')
.editThreadComment(1745692, 'I would like to Join <3')
.deleteThreadComment(1745692)
.postReview(104325, '.........', 'One of the bestest ecchi anime <3', 10, false)
.editReview(7181, 'https://c.tenor.com/yYC0vL1db1cAAAAC/prison-of-simps-horny-jail.gif', 'One of the bestest ecchi anime <3', 10, false)
.deleteReview(7181)
.rateReview(7181, 'UP VOTE')
.toggleFavourite(118465, 'ANIME')
.toggleFollow(5467990)
.toggleLike(54523, 'THREAD')
.subscribeActivity(390195756, true)
.subscribeThread(54523, true)
```