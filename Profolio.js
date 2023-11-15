function updateNameFromJSON() {
  fetch('form.json')
    .then(response => response.json())
    .then(data => {
      const name = data.project1.name;
      const projecttype = data.project1.projecttype;
      const nameElement = document.getElementById('projectName');
      const projecttypeElement = document.getElementById('description');
      nameElement.textContent = `${name}`;
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON:', error);
    });
}

// Call the function as soon as the DOM content is loaded
document.addEventListener('DOMContentLoaded', updateNameFromJSON);

