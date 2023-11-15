function updateNameFromJSON() {
  fetch('form.json')
    .then(response => response.json())
    .then(data => {
      //Project Name
      const name = data.project1.name;
      const nameElement = document.getElementById('projectName');
      nameElement.textContent = `${name}`;

      //Project Type
      const projectType = data.project1.typeOfProject;
      const projecttypeElement = document.getElementById('typeOfProject');
      projecttypeElement.textContent = `${projectType}`;

      //Project Description
      const projectDescription = data.project1.description;
      const projectDescriptionElement = document.getElementById('description');
      projectDescriptionElement.textContent = `${projectDescription}`;

      
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON:', error);
    });
}

// Call the function as soon as the DOM content is loaded
document.addEventListener('DOMContentLoaded', updateNameFromJSON);

