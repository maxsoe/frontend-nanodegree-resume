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
  "welcomeMessage" : "I am Lorenzo",
  "contacts" : {
    "mobile" : "555-1234-5678",
    "email" : "lorenzo@example.com",
    "github" : "",
    "twitter" : "@Barney_Fan",
    "location" : "New York City, New York, USA"
  },
  "skills" : ["Legendary", "Awesome", "High fives"]
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




// If Statements Quiz

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


// Unspaghettify(displayWork)

function displayWork() {
  // For-In Loops Quiz
  
  for (job in work.jobs) {
  /*
    console.log(work.jobs[job].employer);
    console.log(work.jobs[job].title);
  */
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  /*
    $("#workExperience").append(formattedTitle);
    $("#workExperience").append(formattedEmployer);
  */
      
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    // Work Quiz
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates); 
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);  
  }
}

displayWork();

// Collecting click locations
$(document).click(function(loc) { 

  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y);

  /*
  console.log("location x is " +loc.pageX);
  console.log("location y is " +loc.pageY);
  */

});

// Return work locations

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
       var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].description);
   $(".project-entry:last").append(formattedImage);
     }
   }
 }
}

projects.display();