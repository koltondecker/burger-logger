
// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    // UPDATE
    const eatBurgerBtns = document.querySelectorAll('.eat-burger');
  
    // Set up the event listener for the create button
    if (eatBurgerBtns) {
      eatBurgerBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          // Grabs the id of the element that goes by the name, "id"
          const id = e.target.getAttribute('data-id');
          const newEat = e.target.getAttribute('data-devoured');
  
          const newDevoured = {
            devoured: true,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            // make sure to serialize the JSON body
            body: JSON.stringify(newDevoured),
          }).then((response) => {
            // Check that the response is all good
            // Reload the page so the user can see the new quote
            if (response.ok) {
              console.log(`changed eaten state to: true`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("add button clicked!");
        // Grabs the value of the textarea that goes by the name, "quote"
        const newBurger = {
          burger_name: JSON.stringify(document.getElementById('ba').value.trim()),
          devoured: false
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          // make sure to serialize the JSON body
          body: JSON.stringify(newBurger),
        }).then(() =>  {
          // Empty the form
          document.getElementById('ba').value = '';
  
          // Reload the page so the user can see the new quote
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  
    // DELETE
    // const deleteCatBtns = document.querySelectorAll('.delete-cat');
  
    // // Set up the event listeners for each delete button
    // deleteCatBtns.forEach((button) => {
    //   button.addEventListener('click', (e) => {
    //     const id = e.target.getAttribute('data-id');
  
    //     // Send the delete request
    //     fetch(`/api/cats/${id}`, {
    //       method: 'DELETE',
    //     }).then((res) => {
    //       console.log(res);
    //       console.log(`Deleted cat: ${id}`);
  
    //       // Reload the page
    //       location.reload();
    //     });
    //   });
    // });
  });

