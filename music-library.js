class Library {
  constructor (name, creator) {
    if (typeof name === "string" && typeof creator === "string") {
      this.name = name;
      this.creator = creator;
      this.playlists = [];
      this.tracks = [];
    }
  }

  addPlaylist(playlist) {
    if (playlist instanceof Playlist) this.playlists.push(playlist);
  }

  addTrack(track) {
    if (track instanceof Track) this.tracks.push(track);
  }
}

class Playlist {
  constructor (name) {
    if (typeof name === "string") {
      this.name = name;
      this.tracks = [];
    }
  }

  addTrack(track) {
    if (track instanceof Track) this.tracks.push(track);
  }

  get avgRating () {
    return ((this.tracks.reduce((a, b) =>  a + b.rating, 0)) / this.tracks.length);
  }

  get totalLength () {
    return this.tracks.reduce((a, b) => a + b.length, 0);
  }
}

class Track {
  constructor (name, length, rating) {
    if (typeof name === "string" && typeof length === "number" && typeof rating === "number" && ((ratingCheck=rating, a=0, b=6) => (rating - a) * (rating - b) <= 0)) {
      this.name = name;
      this.length = length;
      this.rating = rating;
    }
  }
}

const lib1 = new Library ('my music', 'geoff');
const p1 = new Playlist ('Super Music');
const t1 = new Track ('Call Me Maybe', 193, 5);
const t2 = new Track ('To The Stage', 211, 1);

lib1.addPlaylist(p1);
p1.addTrack(t1);
p1.addTrack(t2);
lib1.addTrack(t1);
lib1.addTrack(t2);

console.log(lib1);
console.log(p1);
console.log(p1.avgRating);
console.log(p1.totalLength);
