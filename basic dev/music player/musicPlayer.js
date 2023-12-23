class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class MusicPlayer {
    constructor() {
      this.head = null;
      this.tail = null;
      this.currentSong = null;
    }
  
    addSong(songName) {
      const newNode = new Node(songName);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.currentSong = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.displaySongs();
    }
  
    play(songNode) {
      this.currentSong = songNode;
      console.log("Playing:", songNode.data);
      this.updateNowPlaying();
    }
  
    next() {
      if (this.currentSong && this.currentSong.next) {
        this.currentSong = this.currentSong.next;
        console.log("Playing:", this.currentSong.data);
        this.updateNowPlaying();
      } else {
        console.log("End of playlist");
      }
    }
  
    prev() {
      if (this.currentSong && this.currentSong.prev) {
        this.currentSong = this.currentSong.prev;
        console.log("Playing:", this.currentSong.data);
        this.updateNowPlaying();
      } else {
        console.log("Beginning of playlist");
      }
    }
  
    updateNowPlaying() {
      const nowPlayingElement = document.getElementById('nowPlaying');
      nowPlayingElement.textContent = `Now Playing: ${this.currentSong.data}`;
    }
  
    displaySongs() {
      const songButtonsContainer = document.getElementById('songButtons');
      songButtonsContainer.innerHTML = '';
  
      let current = this.head;
      while (current) {
        const button = document.createElement('button');
        button.textContent = current.data;
        button.onclick = () => this.play(current);
        songButtonsContainer.appendChild(button);
        current = current.next;
      }
    }
  }
  
  const musicPlayer = new MusicPlayer();
  
  function addSong(event) {
    event.preventDefault();
    const songNameInput = document.getElementById('songName');
    const songName = songNameInput.value.trim();
  
    if (songName) {
      musicPlayer.addSong(songName);
      songNameInput.value = '';
    }
  }
  
  function next() {
    musicPlayer.next();
  }
  
  function prev() {
    musicPlayer.prev();
  }
  