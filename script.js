// Highlight current section in navbar
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main.content section');
  const currentSectionElement = document.getElementById('current-section');
  let currentSection = 'About Me'; // Default section

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
      currentSection = section.id.replace('-', ' ');
    }
  });

  currentSectionElement.textContent = currentSection;
});


// Data for school projects
const schoolProjects = {
  1: {
    className: "Human Computer Interaction and Design",
    Date: "Fall 2023",
    projectName: "Design a website for a Local Business",
    role: "Designer",
    client: "Medina Mini-Mall Owner",
    process: "Create sketches based on clients wants and preferences, build on feedback and HCI studies",
    description: "DThe Medina Mini Mall Owner wanted to make his store known through online channels instead of paper flyers he would post in cultural centers and shops around Tukwila. My team and I were able to make a wix site that displayed the information for his mall to build customer awareness.",
    skills: "Database Mapping, Design Importance, Teamwork, Problem-solving, Wix",
    photos: ["medina.jpeg", "medinasketch.jpg"],
  },
  2: {
    className: "Intro to Web Development",
    Date: "Winter 2024",
    projectName: "Design a website for a local business",
    role: "Project Manager",
    client: "Owner of Orion Archery",
    process: "Creating plans, finding solutions, leading by example",
    description: "Based on weekly meetings with the client for feedback, we improved his current website to attract younger audiences in the city of Auburn.",
    skills: "CSS Grid, Flexbox, Communication, Integrity, Leadership",
    photos: ["orion archery screenshot.png", "sketch.jpg"],
  },
  3: {
    className: "Managing Technical Teams",
    Date: "Spring 2024",
    projectName: "Create a product for a local organization",
    role: "UI Designer",
    client: "Green River Coalition",
    process: "Learning Microsoft PowerApps, developing data entry and representative interface designs",
    description: "The Green River Coalition is a nature conservation group housed at Green River College. They focus on land conservation projects with interns and employees, along with public events where the public can volunteer to increase the progress of a land project. Our projects aim was to collect and present the data for each of the land project for stakeholders and future grant approvals.",
    skills: "OneDrive, Microsoft PowerApps",
    photos: ["project flowchart .jpeg", "grc app screenshot.jpeg"],
  },
  4: {
    className: "Intro to Linux Administration",
    Date: "Summer 2024",
    projectName: "Network Administration",
    role: "Network Administrator",
    client: "Final Class Assignment",
    process: "Reading through StackOverflow and watching tutorials",
    description: "The final assignment for this course was to create new users among three different 'devices' with their own log-in information, and user access to an organization wiki. The wiki was created, and hosted by the administrator (me) with page permissions, printer access, and media sharing capabilities.",
    skills: "UTM Virtual Machine Software, Fedora, Ubuntu, Wikimedia, Server Configuration",
    photos: ["shrimp wiki.jpeg", "ubuntu.jpeg"],
  },
};

// Data for internship projects
const internshipProjects = {
  1: {
    ProjectName: "Wild Bird Emergency Calls",
    Date: "Summer 2024",
    background: "Puget Sound Wildcare Rehabilitation Center wanted to collect a substantial amount of data on how many emergency bird calls were recieved and referred to other facilities in the state. The issue is that they did not have the proper license to handle wild birds, and other facilities were hours away from caller locations meaning the wild bird in danger would not recieve care. All data collected would go towards proving the facilities importance in King and Pierce county.",
    issue: "Data retrieval, collection, and sanitization for future legal representation",
    role: "Data Analyst Intern",
    solution: "Created detailed data regulation processes for emergency calls.",
    process: "Report weekly to head facility director about collected calls, learn about wild bird laws and regulations, perform routine follow up calls from recent Emergency calls",
    summary: "This was a really fun internship where I got to learn so much about the wild animals that live with us here in the evergreen state. I was able to handle racoons, rabbits, squirrels, mice, and pigeons. I learned valuable information about data handling and how to carefully correct them for future data retrieval purposes.",
  },
  2: {
    ProjectName: "US Airforce Internship",
    Date: "Fall 2024",
    background: "Streamlined document handling and tracking processes for increased productivity.",
    issue: "Inefficient workflows",
    role: "Intern",
    solution: "Used existing data collection methods and improved them to more efficiently distribute and keep track of data",
    process: "Learned the entire Microsoft Suite",
    summary: "By learning the different parts of the Microsoft suite, I was able to better understand how make task creation more simpler for managers in a department, along with sharing the productivity of a task with members of the relavant departments.",
    photos: ["sharepoint1.jpeg", "powerapps1.jpeg"],
  },
};

function handleTabSwitch(section, projectId) {
  const projectData = section === "school" ? schoolProjects[projectId] : internshipProjects[projectId];

  if (section === "school") {
    document.getElementById("school-class-name").textContent = projectData.className;
    document.getElementById("school-date").textContent = projectData.Date;
    document.getElementById("school-project-name").textContent = projectData.projectName;
    document.getElementById("school-role").textContent = projectData.role;
    document.getElementById("school-client").textContent = projectData.client;
    document.getElementById("school-process").textContent = projectData.process;
    document.getElementById("school-description").textContent = projectData.description;
    document.getElementById("school-skills").textContent = projectData.skills;
    document.getElementById("school-photo1").src = projectData.photos[0];
    document.getElementById("school-photo2").src = projectData.photos[1];
  } else {
    document.getElementById("internship-project-name").textContent = projectData.ProjectName;
    document.getElementById("internship-date").textContent = projectData.Date;
    document.getElementById("internship-background").textContent = projectData.background;
    document.getElementById("internship-issue").textContent = projectData.issue;
    document.getElementById("internship-role").textContent = projectData.role;
    document.getElementById("internship-solution").textContent = projectData.solution;
    document.getElementById("internship-process").textContent = projectData.process;
    document.getElementById("internship-summary").textContent = projectData.summary;
    document.getElementById("internship-photo1").src = projectData.photos[0];
    document.getElementById("internship-photo2").src = projectData.photos[1];
  }
}
// Add event listeners for all tabs
document.querySelectorAll(".project-tabs .tab").forEach(tab => {
  tab.addEventListener("click", function () {
    const section = this.closest(".projects-section").classList.contains("school-projects") ? "school" : "internship";
    const projectId = this.dataset.project;

    // Update active tab
    this.parentElement.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    this.classList.add("active");

    // Switch content
    handleTabSwitch(section, projectId);
  });
});

