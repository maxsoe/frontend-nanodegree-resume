// Collecting click locations
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

// Personal bio
var bio = {
  "name": "Bender Bending Rodriguez",
  "role": "Bending extraordinaire",
  "contacts": {
    "mobile": "555-1234-5678",
    "email": "bender@ilovebender.com",
    "github": "bender",
    "twitter": "@bender",
    "location": "New York City, New York, USA"
  },
  "welcomeMessage": "Bite my shiney metal ass",
  "skills": ["Bending", "Stealing", "Speaking French"],
  "biopic": "images/bender.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    
    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(HTMLcontactsStart);
    $("#footerContacts").append(HTMLcontactsStart);
    $(".contacts").append(formattedMobile);
    $(".contacts").append(formattedEmail);
    $(".contacts").append(formattedGithub);
    $(".contacts").append(formattedTwitter);
    $(".contacts").append(formattedLocation);
    $("#header").append(formattedbioPic);
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
bio.display(); // display biography in HTML file

// Education history
var education = {
  "schools": [{
    "name": "Bending College",
    "location": "Salt Lake City, Utah, USA",
    "degree": "Bending",
    "majors": ["Bending", "Robo-American Studies"],
    "dates": "2996",
    "url": "bendingcollege@futurama.com"
  }, {
    "name": "Mars University",
    "location": "Sydney, NSW, Australia",
    "degree": "Dropout",
    "majors": ["Dropout 101", "Dropout 201"],
    "dates": "2999",
    "url": "marsuniversity@futurama.com"
  }],
  "onlineCourses": [{
    "title": "The Dirty Double Cross",
    "school": "Swindling Online School",
    "dates": "3000",
    "url": "screwyou@futurama.com"
  }, {
    "title": "How to kill all humans, expect one",
    "school": "Mom's Robot School",
    "dates": "3000",
    "url": "momsrobotschool@futurama.com"
  }],
  "display": function() {
    for (school in education.schools) {
      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedNameDegree = formattedschoolName + formattedschoolDegree;
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedNameDegree);
      $(".education-entry:last").append(formattedschoolDates);
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
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedTitleSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
}
education.display(); // display education history in HTML file

// Work history
var work = {
  "jobs": [{
    "employer": "Plant Express",
    "title": "Head of Security",
    "location": "New York City, New York, USA",
    "dates": "2999",
    "description": "Planet Express, Inc. is an intergalactic delivery company owned by Professor Farnsworth to fund his research. Founded in 2961, primary location is located in New New York, and its crew includes many important characters of the series. The current crew reached their 100th delivery in September 3010, and to celebrate, Bender threw a 100th-delivery party. The inaugural delivery crew, which disappeared on its first interplanetary mission, was found alive in August 3011."
  }, {
    "employer": "Army of the Damned",
    "title": "Commander of the Army of the Damned",
    "location": "Seattle, Washington, USA",
    "dates": "3010",
    "description": "The Army of the Damned was an army given to Bender by the Robot Devil in return for Bender's firstborn son. It is an army of thousands of robots who came from Robot Hell in order to overthrow humanity, led by Bender. However, when they went to do this, all of the humans and other species left to live on Yivo, making the invasion of Earth useless. Bender took his army to get them back in a Pirate Ship."
  }],
  "display": function() {
    for (job in work.jobs) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}
work.display(); // display work history in HTML file

// Projects history
var projects = {
  "projects": [{
    "title": "Ruler of Earth",
    "dates": "3028",
    "description": "After Nixon's fourth term in office began, things went downhill for the Earthican population to the point when robots began doing all the tedious labor and consequently, they began a rebellion led by me, Bender. At some point between 3014 and 3028, I became ruler of Earth and started killing humans, thus fulfilling my life-long desire.",
    "images": ["images/projects1a.jpg", "images/projects1b.png"]
  }, {
    "title": "Superking",
    "dates": "3011",
    "description": "Bender joins the New Justice Team as the superhero Superking, with a cape, a mask and a royal crown. Superking is a bit of a rogue (or an anti-hero), and while he fights crime with the team, he has been known to abuse his powers for his own gain.",
    "images": ["images/projects2a.jpg", "images/projects2b.png"]
  }],
  "display": function() {
    for (project in projects.projects) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      
      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      } 
    }
  }
}
projects.display(); // display projects history in HTML file

// Add Google Map
$("#mapDiv").append(googleMap);
//More visualisations can be found at http://d3js.org/