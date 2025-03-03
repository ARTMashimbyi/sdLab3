function getMusicTitlesByYear(tracks) {

    
    return tracks.reduce((music, tracks) => {
        if (tracks.year && !isNaN(tracks.year)  && tracks.year%1==0 ){
        if (!music[tracks.year]) {
            music[tracks.year] = [];
        }
        //console.log(tracks.title);
        if (tracks.title){
        music[tracks.year].push(tracks.title);}}
        
        return music;
    }, {});
}
console.log( "Test Data");
// Test Data
const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
  ];
  const track = [
  { title: "The Great Gatsby", artist: "F. Scott Fitzgerald", year: 1953 },
    { title: "To Kill a Mockingbird", artist: "Harper Lee", year: 1960 },
    { title: "1984", artist: "George Orwell", year: 1960 },
    { title: "Brave New World", artist: "Aldous Huxley", year: 1953 },
    { title: "Fahrenheit 451", artist: "Ray Bradbury", year: 1953 }
];

const track2 = [
    { title: "The Great Gatsby", artist: "F. Scott Fitzgerald", year: 1953 },
      { title: "To Kill a Mockingbird", artist: "Harper Lee", year: 2.258},
      { title: "1984", artist: "George Orwell", year: 1960 },
      {  artist: "Aldous Huxley", year: 1953 },
      { title: "Fahrenheit 451", artist: "Ray Bradbury"}
  ];

  const track3 = [
    
  ];

console.log(getMusicTitlesByYear(tracks));

console.log(getMusicTitlesByYear(track));

console.log(getMusicTitlesByYear(track2));
console.log(getMusicTitlesByYear(track3));