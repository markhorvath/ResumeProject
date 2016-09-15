var bio = {
    "name": "Mark Horvath",
    "role": "Web Developer",
    "contacts": {
        "mobile": "703-555-5555",
        "email": "m7@email.com",
        "github": "https://github.com/markhorvath",
        "location": "Falls Church, VA"
    },
    "welcomeMessage": "Resume",
    "skills": [
        "HTML", "CSS", "Javascript", "Teaching", "International Affairs", "Finance"
    ],
    "biopic": "images/fry.jpg",
    "display": function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        };
    }
};

var work = {
    "jobs": [{
        "employer": "Self",
        "title": "Private English Teacher",
        "location": "Taipei, Taiwan",
        "dates": "Sep 2015 - Jan 2016",
        "description": "Conducted private English lessons to various age groups from 8 to 40+ years old."
    }, {
        "employer": "Jeollanamdo",
        "title": "Native English Teacher",
        "location": "Beolgyo, South Korea",
        "dates": "Aug 2014 - Aug 2015",
        "description": "Taught English at three different schools to kids ages 10-16.  Primarily textbook-based teaching with a focus on speaking, listening and writing."
    }, {
        "employer": "NPES",
        "title": "Global Programs Assistant",
        "location": "Reston, VA",
        "dates": "Aug 2012 - Dec 2014",
        "description": "Managed and updated member database, perpared and verified monthly finances, assisted and worked with International Organization for Standardization, helped update company website"
    }, {
        "employer": "M&M Appliance",
        "title": "Finance Project Specialist",
        "location": "Washington, DC",
        "dates": "Apr 2012 - Aug 2012",
        "description": "Responsible for wholesale buying, inventory management, customer service operations, and collecting arrears"
    }, ],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(i) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", i.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", i.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", i.location);
            var formattedDates = HTMLworkDates.replace("%data%", i.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", i.description);

            var formattedAll = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

            $(".work-entry:last").append(formattedAll);
        });
    }
};

var education = {
    "schools": [{
        "name": "George Mason University",
        "degree": "BA",
        "dates": "2005-2010",
        "majors": ["Global Conflict Resolution"],
        "location": "Fairfax, VA",
        "url": "http://www2.gmu.edu"
    }, {
        "name": "TEFL Worldwide Prague",
        "degree": "TEFL Certificate",
        "dates": "Feb 2014",
        "majors": ["Teaching English as a Foreign Language"],
        "location": "Prague, Czech Republic",
        "url": "http://teflworldwideprague.com"
    }],

    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "Aug 2016 - Present",
        "url": "http://www.udacity.com"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);

        education.schools.forEach(function(edu) {
            var formattedschoolName = HTMLschoolName.replace("%data%", edu.name).replace("#", edu.url);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", edu.degree);
            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", edu.dates);
            $(".education-entry:last").append(formattedschoolDates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", edu.location);
            $(".education-entry:last").append(formattedschoolLocation);

            for (var i = 0; i < edu.majors.length; i++) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", edu.majors[i]);
                $(".education-entry:last").append(formattedschoolMajor);
            };
        });

        $("#education:last").append(HTMLonlineClasses);
        $("#education:last").append(HTMLschoolStart);
        // for (var onlineCourse in education.onlineCourses){
        for (var i = 0; i < education.onlineCourses.length; i++) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
            $(".education-entry:last").append(formattedonlineDates);
            $(".education-entry:last").append(formattedonlineUrl);
        };
    }
};

var projects = {
    "projects": [{
        "title": "Responsive Images",
        "dates": "August 2016",
        "description": "Example",
        "images": ["images/art.jpg", "images/tdp.jpg"],
        "url": "https://www.github.com/markhorvath"
    }],
    "display": function() {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(proj) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", proj.dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);
            $(".project-entry:last").append(formattedDescription);

            for (var i = 0; i < proj.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", proj.images[i]);
                $(".project-entry:last").append(formattedImage);
            };
        });
    }
};




/*function displayWork() {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var formattedAll = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

    $(".work-entry:last").append(formattedAll);
    }
}*/



$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});




// Internationalize button, probably unnecessary.  Good example of split and splice
/*function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);*/

//First (and working) function for displaying Projects

/*projects.display = function() {
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
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}*/


//Test forEach function for displaying Projects

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);