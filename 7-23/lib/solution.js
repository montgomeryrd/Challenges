'use strict';

module.exports = function whosOnline(friends) {
	let obj = {};

	for( let i = 0 ; i < friends.length ; i++ ) {
		friends[i].status === 'online' && friends[i].lastActivity > 10 && !obj.away ? obj.away = new Array() : 
		friends[i].status === 'online' && friends[i].lastActivity <= 10 && !obj.online ? obj.online = new Array() : 
		friends[i].status === 'offline' && !obj.offline ? obj.offline = new Array() : obj;
	
		friends[i].status === 'online' && friends[i].lastActivity > 10 ? obj.away.push(friends[i].username) : 
		friends[i].status === 'online' && friends[i].lastActivity <= 10 ? obj.online.push(friends[i].username) :
		friends[i].status === 'offline' ? obj.offline.push(friends[i].username) : obj;
	}
	return obj;
}


// Alt Solution:

// const whosOnline = (friends) => {

//   let status = {}
  
//   for(let friend of friends) {
//     if(friend.status === 'offline') {
//       status['offline'] = status['offline'] || []
//       status['offline'].push(friend.username)
//     }
//     if(friend.status === 'online') {
//       if(friend.lastActivity > 10) {
//         status['away'] = status['away'] || []
//         status['away'].push(friend.username)
//       } else {
//         status['online'] = status['online'] || []
//         status['online'].push(friend.username)
//       }
//     }
//   }
//   return status
// }