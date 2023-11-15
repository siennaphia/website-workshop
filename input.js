// Function to update user information by fetching data from 'form.json'
function updateInfo() {
    // Fetch name data and update the DOM element with ID 'name'
    fetch('form.json')
      .then(response => response.json())
      .then(data => {
        const name = data.index.name;
        const nameElement = document.getElementById('name');
        if (nameElement) {
          nameElement.textContent = `Hey, I'm ${name}`;
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });
  
    // Fetch profession data and update the DOM element with ID 'profession'
    fetch('form.json')
      .then(response => response.json())
      .then(data => {
        const profession = data.index.profession;
        const professionElement = document.getElementById('profession');
        if (professionElement) {
          professionElement.textContent = `I am a ${profession}`;
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });
  
    // Repeat the fetch process for project details and update respective elements
    // Each block fetches and updates a project detail in the DOM
    fetch('form.json')
      .then(response => response.json())
      .then(data => {
        const project1 = data.index.project1;
        const project1Element = document.getElementById('project1');
        if (project1Element) {
          project1Element.textContent = `${project1}`;
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });
  
    // The rest of the fetch calls follow the same pattern for project2 through project6
    // ...
  
    // Fetch project6 data as an example of repetition for clarity
    fetch('form.json')
      .then(response => response.json())
      .then(data => {
        const project6 = data.index.project6;
        const project6Element = document.getElementById('project6');
        if (project6Element) {
          project6Element.textContent = `${project6}`;
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });  
  }
  
  // Call the function as soon as the DOM content is loaded
  document.addEventListener('DOMContentLoaded', updateInfo);
  