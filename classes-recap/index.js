//This object represents our song
class Song {
    //songs contain title & artist
    constructor(title, artist, totalMinutes){
        this.title = title;
        this.artist = artist;
        this.totalMinutes = totalMinutes;
    }
    //when we use the song inside a string it will print this below. 
    //overriding toString method. 
    toString(){
      return `${this.title} by ${this.artist}`;
    }
}

//This object is going to be the muiscplayer
class MusicPlayer {
   constructor(currentSong){
     this.currentSong = currentSong;
     this.isPlaying = false;
     this.songQueue = [];
   } 
   //new function to play music
   play(){
    this.isPlaying = true;
    console.log(`${this.currentSong} started playing`);
   }

   stop(){
    this.isPlaying = false;
    console.log("Musicplayer stopped playing music");
   }
   //getter method
   getStatus(){
    //if the musicplayer is playing music ==> 
    if(this.isPlaying){
        //isPlaying should btrue
        console.log(`${this.currentSong} is playing`)
    } 
    else {
        console.log("No songs are playing at this time");
    }
   }
   //setter method that takes one parameter which is song
   setSong(song){
    //check if song is an instance of the Song class if not let the user know
     if(!(song instanceof Song)){
        console.log("We are expecting an object of type Song");
        return;
     }

     //set the current song to the parameter of our function 
     this.currentSong = song;
     console.log(`Song changed to ${this.currentSong}`);
   }
   //addotque with song as a parameter
   addToQueue(song){
    //check if song is an instance of the Song class if not let the user know
    if(!(song instanceof Song)){
        console.log("We are expecting an object of type Song");
        return;
    }

    this.songQueue.push(song);
    console.log(`Song ${song} was added to the queue. There are now ${this.songQueue.length} songs in the queue`);
   }
   //get the total minutes in queue 
   getTotalMinutesInQueue(){
      const sumTotalMinutes = this.songQueue.map(song => Number(song.totalMinutes)).reduce((acc, curr) => acc + curr,0);

      //without mapping function example
      const sumTotalMinutesAlternative = this.songQueue.reduce((acc, curr) => acc + curr.totalMinutes,0)
      console.log("alternative :",sumTotalMinutesAlternative)

    //   //EXAMPLE STEP BY STEP
    //----------------------------------------------------------------------------------
    //   //map will return a new array with just the totalminutes converted into number
    //   const mappedArrayExample = this.songQueue.map(song => Number(song.totalMinutes));
    //   console.log("The mapped array example: ", mappedArrayExample);

    //   //reduce to a cretain value
    //   const result = mappedArrayExample.reduce((acc, curr) => {
    //     console.log("the accumulating value is", acc); 
    //     console.log("the current value is", curr);

    //     return acc+curr;
    //   },0);
    //   console.log("the result is ", result);

      return sumTotalMinutes;
   }
}

//initialize one song example: 
//const songToInitialize = new Song("Start me up", "Rolling Stones")

//we construct an object from a class using the new keyword.
const mp = new MusicPlayer(new Song("Start me up","Rolling Stones",3));
const mp2 = new MusicPlayer(new Song("Rock and roll all night","KISS",3));

console.log("Welcome to the musicplayer program...");
console.log("The musicplayer object looks like this", mp);
console.log("The second musicplayer object looks like this", mp2);

//play the musicplayer
mp.play();
mp2.play();

//stop one of the musicplayers
mp.stop();

//get status of both musicplayers
mp.getStatus();
mp2.getStatus();

//change the songs 
mp2.setSong(new Song("Let it be","Beatles", 2));
mp2.getStatus();
//add songs to the queue
mp2.addToQueue(new Song("Here comes the sun", "Beatles",3));
mp2.addToQueue(new Song("Uptown Funk", "Mark Ronson",4));
mp2.addToQueue(new Song("Blinding Lights", "The Weeknd",3));

//Get total minutes in queue
console.log("Total minutes in queue: ", mp2.getTotalMinutesInQueue());