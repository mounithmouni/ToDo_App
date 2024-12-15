let inpBox = document.querySelector("#text-box");
let addBtn = document.querySelector("#add-btn");
let displayList = document.querySelector("#display");
let arr = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

// localStorage.clear();
addBtn.addEventListener("click", () => {
  let task = inpBox.value;
  arr.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(arr));
  listItems();
  inpBox.value = "";
});
console.log(arr.length);

function listItems() {
  // if (arr.length == 0) displayList.innerHTML = "Tasklist is empty";
  if (arr.length != 0) {
    let addItems = "";
    arr.forEach((item, index) => {
      addItems += `<li class="list-group-item">
            ${item}
            <button  id="delete-btn" class="float-end list-group-item bg-light" onclick="removeItems(${index})">
              <i  class="bi bi-trash"></i>
            </button>
          </li>`;
    });
    displayList.innerHTML = addItems;
  } else {
    displayList.innerHTML = `<p class="text-danger">TaskList is empty!</p>`;
  }
}
listItems();

function removeItems(index) {
  arr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(arr));
  listItems();
}

// let deleteBtn = document.querySelector("#delete-btn");

// deleteBtn.addEventListener("click", () => {
//   arr = []; // Clear the array
//   listItems(arr); // Update the list
// });
