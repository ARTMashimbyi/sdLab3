// Export the function
function getMusicTitlesByYear(tracks) {
    // Validate input is an array
    if (!Array.isArray(tracks)) {
        return {}; // Return an empty object if input is not an array
    }

    // Object to store tracks grouped by year
    const music = {};

    for (const track of tracks) {
        // Validate each track object
        if (
            !track ||
            typeof track !== "object" ||
            typeof track.title !== "string" ||
            typeof track.artist !== "string" ||
            typeof track.year !== "number" ||
            isNaN(track.year)
        ) {
            continue; // Skip invalid track
        }

        // If the year does not exist in result, initialize it
        if (!music[track.year]) {
            music[track.year] = [];
        }

        // Push the title to the corresponding year
        music[track.year].push(track.title);
    }

    // Sort each year's track titles alphabetically
    for (const year in music) {
        music[year].sort();
    }

    return music;
}



const tracks = [
    { title: "Blinding Lights", artist: "The Weeknd", year: 2020 },
    { title: "Levitating", artist: "Dua Lipa", year: 2021 },
    { title: "Save Your Tears", artist: "The Weeknd", year: 2020 },
  ];
  
  console.log(getMusicTitlesByYear(tracks));
  // Expected Output:
  // {
  //   2020: ["Blinding Lights", "Save Your Tears"],
  //   2021: ["Levitating"]
  // }
  
  // Edge Case: Empty Array
  console.log(getMusicTitlesByYear([])); // Expected Output: {}
  
  // Edge Case: Malformed Data (ignored instead of error)
  console.log(
    getMusicTitlesByYear([
      { title: "Song", artist: "Artist" }, // Missing year → ignored
      { title: "Blinding Lights", artist: "The Weeknd", year: 2020 },
      { title: "Invalid", year: 2020 }, // Missing artist → ignored
      { title: "Levitating", artist: "Dua Lipa", year: "2021" }, // Invalid year type → ignored
    ])
  );
  // Expected Output:
  // { 2020: ["Blinding Lights"] }
  
  // Edge Case: Invalid Input (not an array)
  console.log(getMusicTitlesByYear("not an array")); // Expected Output: {}
  
  console.log(getMusicTitlesByYear(null)); // Expected Output: {}
  
  console.log(getMusicTitlesByYear(123)); // Expected Output: {}
/* Exporting the function for external use
module.exports = getMusicTitlesByYear;*/
