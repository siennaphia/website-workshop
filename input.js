function updateInfo() {
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

    fetch('form.json')
      .then(response => response.json())
      .then(data => {
        const project2 = data.index.project2;
        const project2Element = document.getElementById('project2');
        if (project2Element) {
            project2Element.textContent = `${project2}`;
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });  

    
    fetch('form.json')
      .then(response => response.json())
      .then(data => {
        const project3 = data.index.project3;
        const project3Element = document.getElementById('project3');
        if (project3Element) {
            project3Element.textContent = `${project3}`;
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });  

    fetch('form.json')
      .then(response => response.json())
      .then(data => {
        const project4 = data.index.project4;
        const project4Element = document.getElementById('project4');
        if (project4Element) {
            project4Element.textContent = `${project4}`;
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing JSON:', error);
      });  
    
    fetch('form.json')
        .then(response => response.json())
        .then(data => {
            const project5 = data.index.project5;
            const project5Element = document.getElementById('project5');
        if (project5Element) {
            project5Element.textContent = `${project5}`;
        }
      })
        .catch(error => {
            console.error('Error fetching or parsing JSON:', error);
      });  

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
  