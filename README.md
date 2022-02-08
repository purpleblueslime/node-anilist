nom <a href='https://anilist.co/home'>anilist.co</a> API wrapper `[UNOFFICIAL]`

### Install
##### through terminal
```js
npm i R-Rim/nomanilist
```

usage
```js
const nom = require('nomanilist');
```

<a href='https://anilist.gitbook.io/anilist-apiv2-docs/overview/oauth/authorization-code-grant'>oAuth Token</a>
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');
})()
```
<br>

fetch `(SEARCH)`
##### `user`, `media`, `character`, `staff`, `studio`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');
  
  var user = await nom.SEARCHuser('nomming');
  console.log(user);
})()
```
<br>

fetch `(GET)`
##### `user`, `media`, `character`, `staff`, `studio`, `activity`, `activityRE`, `thread`, `threadCOM`, `review`, `notification`, `medialist`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');
  
  var user = await nom.GETuser(5467990);
  console.log(user);
})()
```
<br>

sending, posting activities `(SEND)`, `(POST)`
##### `message`, `activity`, `activityRE`, `thread`, `threadCOM`, `review`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');
  var uwu = 'img(https://c.tenor.com/i3pR9emucLgAAAAC/what-dog.gif)';

  var irray = await nom.SEARCHuser('irray');
  await nom.SENDmessage(uwu, irray.data.User.id, false);

  var RemTheBlue = await nom.SEARCHuser('RemTheBlue');
  await nom.SENDmessage(uwu, RemTheBlue.data.User.id, false);

  console.log(uwu);
})()
```
<br>

editting activities `(EDIT)`
##### `message`, `activity`, `activityRE`, `thread`, `threadCOM`, `review`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');
  var uwu = 'img(https://64.media.tumblr.com/aebabac6806e97ee44ddb5b97ba3f326/tumblr_n481nn6i3p1tqbvxho1_500.jpg)';

  await nom.EDITmessage(306455537, uwu);
  console.log('edited');
})()
```
<br>

deleting activities `(DEL)`
##### `activity`, `activityRE`, `thread`, `threadCOM`, `review`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');

  await nom.DELactivity(306455537);
  console.log('deleted');
})()
```
<br>

user `(USER)`
##### `color`, `badge`, `about`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');
   
  await nom.USERcolor('blue');
  await nom.USERbadge('owner of demon slayer');
  await nom.USERabout('<a href="https://youtube.com/Rim/">i am Rim</a>');
})()
```
<br>

follow, like activities `(TOGGLE)`
##### `follow`, `like`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');

  var RemTheBlue = await nom.SEARCHuser('RemTheBlue');
  await nom.TOGGLEfollow(RemTheBlue.data.User.id);
})()
```
<br>

add, update, delete media list
##### `ADD`, `UPDATE`, `DEL`
```js
const nom = require('nomanilist');

(async()=> {
  await nom.SETtoken('token');

  var sao = await nom.SEARCHmedia('Sword Art Online');
  await nom.ADDlistentry(sao.data.Media.id, 'CURRENT', 100, 1, 1, false, 'I like Sword Art Online');
})()
```
<br>

##### `SEARCHuser`, `SEARCHmedia`, `SEARCHcharacter`, `SEARCHstaff`, `SEARCHstudio`, `GETuser`, `GETmedia`, `GETcharacter`, `GETstaff`, `GETstudio`, `GETactivity`, `GETactivityRE`, `GETthread`, `GETthreadCOM`, `GETreview`, `GETnotification`, `GETmedialist`, `SENDmessage`, `EDITmessage`, `POSTactivity`, `EDITactivity`, `DELactivity`, `POSTactivityRE`, `EDITactivityRE`, `DELactivityRE`, `POSTthread`, `EDITreview`, `DELreview`, `RATEreview`, `TOGGLEfavourite`, `TOGGLElike`, `TOGGLEfollow`, `SUBSCRIBEactivity`, `SUBSCRIBEthread`, `USERcolor`, `USERabout`, `USERbadge`, `ADDlistentry`, `UPDATElistentry`, `DELlistentry`
```js
await nom.SEARCHuser('name');
await nom.SEARCHmedia('name', 'MEDIATYPE');
await nom.SEARCHcharacter('name');
await nom.SEARCHstaff('name');
await nom.SEARCHstudio('name');
await nom.GETuser(id);
await nom.GETmedia(id);
await nom.GETcharacter(id);
await nom.GETstaff(id);
await nom.GETstudio(id);
await nom.GETactivity(id);
await nom.GETactivityRE(id);
await nom.GETthread(id);
await nom.GETthreadCOM(id);
await nom.GETreview(id);
await nom.GETnotification(false); //true to reset count
await nom.GETmedialist(USERid, 'MEDIATYPE')
await nom.SENDmessage('text', USERid, false); //true to make message private
await nom.EDITmessage(MESSAGEid, 'text', userid);
await nom.POSTactivity('text');
await nom.EDITactivity(ACTIVITYid, 'text');
await nom.DELactivity(ACTIVITYid); //can also be used to delete a message
await nom.POSTactivityRE(ACTIVITYid, 'text');
await nom.EDITactivityRE(REPLYid, 'text');
await nom.DELactivityRE(REPLYid);
await nom.POSTthread('title', 'body', categories, mediacategories);
await nom.EDITthread(THREADid, 'title', 'body', categories, mediacategories);
await nom.DELthread(THREADid);
await nom.POSTthreadCOM(THREADid, 'text');
await nom.EDITthreadCOM(COMMENTid, 'text'); 
await nom.DELthreadCOM(COMMENTid);
await nom.POSTreview(MEDIAid, 'body', 'summary', score, false); 
await nom.EDITreview(REVIEWid, 'body', 'summary', score, false);
await nom.DELreview(REVIEWid);
await nom.RATEreview(REVIEWid, 'REVIEWRATING');
await nom.TOGGLEfavourite(id, 'FAVOURITETYPE');
await nom.TOGGLElike(id, 'LIKABLETYPE');
await nom.TOGGLEfollow(USERid);
await nom.SUBSCRIBEactivity(ACTIVITYid, true); //false to unsubscribe
await nom.SUBSCRIBEthread(THREADid, true); //false to unsubscribe
await nom.USERcolor('color');
await nom.USERabout('text');
await nom.USERbadge('text');
await nom.ADDlistentry(MEDIAid, 'STATUSTYPE', score, progress, repeat, false, 'note') //true to make private update
await nom.UPDATElistentry(ENTRYid, 'STATUSTYPE', score, progress, repeat, false, 'note') //true to make private update
await nom.DELlistentry(ENTRYid);
```

TYPES
##### `MEDIATYPE`, `REVIEWRATING`, `LIKEABLETYPE`, `FAVOURITETYPE`, `STATUSTYPE`
```js
MEDIATYPE:
ANIME
MANGA

REVIEWRATING:
NO_VOTE
UP_VOTE
DOWN_VOTE

LIKABLETYPE:
THREAD
THREAD_COMMENT
ACTIVITY
ACTIVITY_REPLY

FAVOURITETYPE:
anime
manga
character
staff
studio

STATUSTYPE:
CURRENT
PLANNING
COMPLETED
DROPPED
PAUSED
REPEATING
```

<a href='https://github.com/Rim0-0/nomanilist/blob/main/LICENSE'>License</a>
###### Rim
