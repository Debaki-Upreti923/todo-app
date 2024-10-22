//get element
    const inputName = document.getElementById('input-name');
    const addButton = document.getElementById('add-btn');
    const userList = document.getElementById('user-list');
   userList.innerHTML='';

    let users = [];
    let editIndex = null;

    addButton.addEventListener('click', function() {
      const enteredName = inputName.value.trim();
      
      errormessage.textContent='';
      if (enteredName === '') {
        errormessage.textContent="Name is required";
        return;
      }

      if (editIndex === null) {
        // Add new user
        users.push(enteredName);
      } else {
        // Edit existing user
        users[editIndex] = enteredName;
        editIndex = null; // Reset editIndex after editing
        addButton.innerText = 'Add User'; // Reset button text
      }

      inputName.value = ''; // Clear input field
      displayUsers(); // Update the table
    });

    // Display users
    function displayUsers() {
      userList.innerHTML = ''; // Clear the list before displaying

      users.forEach((user, index) => {
        userList.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${user}</td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="editUser(${index})">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-danger" onclick="deleteUser(${index})">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        `;
      });
    }

    // Edit user
    function editUser(index) {
      inputName.value = users[index]; 
      editIndex = index; 
      addButton.innerText = 'Edit'; 
    }

    // Delete user
    function deleteUser(index) {
      users.splice(index, 1); 
      displayUsers(); 
    }
