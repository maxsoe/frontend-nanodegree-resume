// Collecting click locations
$(document).click(function(loc) { 
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// Personal bio JSon
var bio = 
{
  "name": "Lorenzo Von Matterhorn",
  "role": "Chairman and CEO",
  "contacts": {
    "mobile": "555-1234-5678",
    "email": "lorenzo@example.com",
    "github": "",
    "twitter": "@Barney_Fan",
    "location": "New York City, New York, USA"
  },
  "welcomeMessage": "Bite my shiney metal ass",
  "skills": ["Legendary", "Awesome", "High fives"],
  "biopic": "images/bender.jpg",
  "display": function displayBio() 
  {
       formattedName = HTMLheaderName.replace("%data%", bio.name);
       $("#header").append(formattedName);
       formattedRole = HTMLheaderRole.replace("%data%", bio.role);
       $("#header").append(formattedRole);
       formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
       $("#header").append(formattedbioPic);
       formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
       $("#header").append(formattedwelcomeMsg);
       
       if (bio.skills.length > 0) {
         $("#header").append(HTMLskillsStart);
         for (skill in bio.skills) {
           var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
           $("#skills").append(formattedSkill);
         }
       }
  }
}

bio.display();

// Education history
var education =
{
  "schools" : [
    {
      "name" : "name1",
      "location" : "location1",
      "degree" : "degree1",
      "majors" : [
        "major1A", "major1B"
      ],
      "dates" : "dates1",
      "url" : "url1"
    },
    {
      "name" : "name2",
      "location" : "location2",
      "degree" : "degree2",
      "majors" : [
        "major2A", "major2B"
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
  ],
  "display": function displayEducation()
  {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      
      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        
      var formattedNameDegree = formattedschoolName + formattedschoolDegree;
      $(".education-entry:last").append(formattedNameDegree);
      
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedschoolDates);
      
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedschoolLocation);
      
      if (education.schools[school].majors.length > 0) {         
        for (major in education.schools[school].majors) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedMajor);
        }
      }
    }
  }
}
education.display();

// Work history
var work = 
{
  "jobs": [
    {
      "employer": "employer1",
      "title": "title1",
      "location": "New York City, New York, USA",
      "dates": "dates1",
      "description": "description1"
    },
    {
      "employer": "employer2",
      "title": "title2",
      "location": "Seattle, Washington, USA",
      "dates": "dates2",
      "description": "description2"
    }
  ],
  "display": function displayWork() 
  {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates); 
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);  
    }
  }
}

work.display(); // display work history in HTML file

// Projects history
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








// If Statements Quiz

/*
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);  
}
*/

function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        // console.log(location);
        locationArray.push(newLocation);
    }
    /* console.log(locations); */
    return locationArray;
}

// Internationalize names

function inName(fullname) {
  fullname = fullname.trim();
  var nameArray = fullname.split(" ");
  var firstName = nameArray[0];
  var surname = nameArray[1];
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  surname = surname.toUpperCase();
/*
  console.log(firstName);
  console.log(surname);
  console.log(firstName +" " +surname);
*/
  return (firstName +" " +surname);
}

/* inName("maaslSFSDF SOe"); */

$('#main').append(internationalizeButton);

// Encapsulating Functions
projects.display = function() {
 for (project in projects.projects) {
   $("#projects").append(HTMLprojectStart);
   
   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
   $(".project-entry:last").append(formattedTitle);
   
   var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
   $(".project-entry:last").append(formattedDates);
   
   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
   $(".project-entry:last").append(formattedDescription);
   
   if (projects.projects[project].images.length > 0) {
     for (image in projects.projects[project].images) {
       var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
   $(".project-entry:last").append(formattedImage);
     }
   }
 }
}

projects.display();

// Add Google Map
$("#mapDiv").append(googleMap);

//More visualisations can be found at http://d3js.org/
