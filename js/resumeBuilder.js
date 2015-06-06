// Collecting click locations
$(document).click(function(loc) { 
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// Personal bio
var bio = 
{
  "name": "Lorenzo Von Matterhorn",
  "role": "Chairman and CEO",
  "contacts": {
    "mobile": "555-1234-5678",
    "email": "lorenzo@example.com",
    "github": "bendingrodriguez",
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
      
       $("#header").append(HTMLcontactsStart);
       $("#footerContacts").append(HTMLcontactsStart);
       
       formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
       $(".contacts").append(formattedMobile);
       formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
       $(".contacts").append(formattedEmail);
       formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
       $(".contacts").append(formattedGithub);
       formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
       $(".contacts").append(formattedTwitter);
       formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
       $(".contacts").append(formattedLocation);
       
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
      "dates" : "online dates1",
      "url" : "url1"
    },
    {
      "title" : "title2",
      "school" : "school2",
      "dates" : "online dates2",
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
    
    $("#education").append(HTMLonlineClasses);
    
    for (course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
      $(".education-entry:last").append(formattedTitleSchool);
      
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedOnlineURL);
      
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
      
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates); 
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
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
  ],
  "display": function () {
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
}

projects.display();

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

// Add Google Map
$("#mapDiv").append(googleMap);

//More visualisations can be found at http://d3js.org/
