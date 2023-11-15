function updateNameFromJSON() {
  fetch('form.json')
    .then(response => response.json())
    .then(data => {
      //Project Name
      const name = data.project5.name;
      const nameElement = document.getElementById('projectName');
      nameElement.textContent = `${name}`;

      //Project Type
      const projectType = data.project5.typeOfProject;
      const projecttypeElement = document.getElementById('typeOfProject');
      projecttypeElement.textContent = `${projectType}`;

      //Project Description
      const projectDescription = data.project5.description;
      const projectDescriptionElement = document.getElementById('description');
      projectDescriptionElement.textContent = `${projectDescription}`;

      //skills
      const skill = data.project5.skill;
      //parse each skill into a list of skills
      const skillList = skill.split(',');
      //get the ul element
      const skillElement = document.getElementById('skill');
      //loop through the list of skills and add each one to the ul
      for (let i = 0; i < skillList.length; i++) {
        let li = document.createElement('li');
        li.textContent = skillList[i];
        skillElement.appendChild(li);
      }

    })
    .catch(error => {
      console.error('Error fetching or parsing JSON:', error);
    });
}

// Call the function as soon as the DOM content is loaded
document.addEventListener('DOMContentLoaded', updateNameFromJSON);

