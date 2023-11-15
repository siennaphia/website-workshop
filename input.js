function updateNameFromJSON() {
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
  }
  
  // Call the function as soon as the DOM content is loaded
  document.addEventListener('DOMContentLoaded', updateNameFromJSON);
  