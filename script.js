// Social Media clone.
// Signin + Mini Feed.


// Array - login information.
  var database = [
  {
    username: "kumlaude",
    password: "face11password",
  },
  {
    username: "one1wonder",
    password: "know4thyself",
  },
  {
    username: "camDipset",
    password: "harlem4life",
  }
  ];


// Function - signin + password verification:
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
      return true;
    }
  }
      return false;
  }

function signIn(username, password) {
    if (isUserValid(username, password) {
        console.log(newsFeed);
      } else {
        alert("Unable to log-in. Please try again.");
      }
}

// User input - username + password:
var userNamePrompt = prompt("Username:");
var passwordPrompt = prompt("Password:");

// Verify "signIn":
signIn(userNamePrompt, passwordPrompt);


// Mini Feed - viewing dashboard.
  var newsFeed = [
    {
      username: "Picasso",
      timeline: "Free Art Show!"
    },
    {
      username: "Jimmy",
      timeline: "Open Gym tonight at 6:00pm at Gene Friend Recreation Center."
    },
    {
      username: "Andrew",
      timeline: "Does Donald Trump realize how ridiculous he appears to the general public?",
    },
    {
      username: "Zoe",
      password: "For Sale: MacBook Pro, 2015, $450.",
    }
  ]
