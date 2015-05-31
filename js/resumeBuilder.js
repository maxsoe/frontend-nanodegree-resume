// $("#main").append("Max Soe");

/*
var awesomeThoughts = "I am Max and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome","fun");
console.log(funThoughts);
$("#main").append(funThoughts);
*/

var name = "Max Soe";
var role = "Senior UX Designer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);





var s = "audacity";

var udacityizer = function(s) {  
    // s = s[1].toUpperCase() + s.slice(2); //udacity solution
    s = s.slice(1);
    s = s.charAt(0).toUpperCase() + s.slice(1);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));


var skills =
  ["awesomeness", "programming", "teaching", "JS"];
  
$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.length);




var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));


/*
{
    "schools": [
        {
            "name": "UNSW",
            "city": "Sydney",
            "degree": "BE",
            "major": [
                "CompSci",
                "HCi"
            ]
        },
        {
            "name": "Udacity",
            "city": "Internet",
            "degree": "Front end nanodegree",
            "major": [
                "Front end dev"
            ]
        }
    ]
}
*/


var work = 
{
  "jobs" : [
    {
      "employer" : "employer1",
      "title" : "title1",
      "location" : "location1",
      "dates" : "dates1",
      "description" : "description1"
    },
    {
      "employer" : "employer2",
      "title" : "title2",
      "location" : "location2",
      "dates" : "dates2",
      "description" : "description2"
    }
  ]   
}

var projects = 
{
  "projects" : [
    {
      "title" : "title1",
      "dates" : "dates1",
      "description" : "description1",
      "images" : [
        "imageURL1A",
        "imageURL1B"
      ]
    },
    {
      "title" : "title2",
      "dates" : "dates2",
      "description" : "description2",
      "images" : [
        "imageURL2A",
        "imageURL2B"
      ]
    }
  ]   
}

var bio = 
{
  "name" : "Lorenzo Von Matterhorn",
  "role" : "Chairman and CEO",
  "welcomeMessage" : "",
  "contacts" : {
    "mobile" : "555-1234-5678",
    "email" : "lorenzo@example.com",
    "github" : "",
    "twitter" : "@Barney_Fan",
    "location" : "New York City, New York, USA"
  },
  "skills" : []
}

var education =
{
  "schools" : [
    {
      "name" : "name1",
      "location" : "location1",
      "degree" : "degree1",
      "majors" : [
        "majors1A", "majors1B"
      ],
      "dates" : "dates1",
      "url" : "url1"
    },
    {
      "name" : "name2",
      "location" : "location2",
      "degree" : "degree2",
      "majors" : [
        "majors2A", "majors2B"
      ],
      "dates" : "dates2",
      "url" : "url2"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "title1",
      "school" : "school1",
      "dates" : "dates1",
      "url" : "url1"
    },
    {
      "title" : "title2",
      "school" : "school2",
      "dates" : "dates2",
      "url" : "url2"
    }
  ]
}