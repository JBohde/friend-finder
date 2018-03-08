// Constructor function
function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

// Startup Data
// ============================================
const friends = [
  new Friend("Ross", "https://vignette.wikia.nocookie.net/friends/images/8/89/Square_Ross.jpg/revision/20111216200027", [3,5,2,4,3,5,3,5,4,5]),
  new Friend("Rachel", "http://spi4uk.itvnet.lv/upload/articles/19/198632/images/10-ASV-visu-laiku-1.jpg", [5,3,1,4,3,4,1,4,2,3]),
  new Friend("Phoebe", "https://vignette.wikia.nocookie.net/friends/images/f/f5/Square_Phoebe.jpg/revision/latest?cb=20111216200026", [1,3,2,5,3,4,2,3,2,4]),
  new Friend("Chandler", "https://c1.staticflickr.com/3/2452/3985922948_360953da17.jpg", [1,3,4,5,2,1,3,5,2,3]),
  new Friend("Monica", "http://images.intouchweekly.com/uploads/images/file/31967/courteney-cox-friends-monica-hair-2.jpg?fit=crop&h=510&w=680", [5,3,1,2,5,1,6,2,1,5]),
  new Friend("Joey", "https://vignette.wikia.nocookie.net/friends/images/5/5a/Square_Joey.jpg/revision/latest?cb=20160528174812", [3,3,2,5,1,2,3,4,1,1])
]

const matchedFriends = [];

module.exports = {
  friends: friends,
  matchedFriends: matchedFriends,
  add: function(f) { 
    friends.push(new Friend(f.name, f.photo, f.scores));
  },
  match: function(f) {
    matchedFriends.assign(new Friend(f.name, f.photo, f.scores));
  }
}