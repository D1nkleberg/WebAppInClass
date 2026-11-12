// Assignments Modal
import * as bootstrap from 'bootstrap'

// - Functions
async function getAssignmentForm(url) {
  const response = await fetch(url, {
  });

  const htmlString = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const form = doc.querySelector("#assignment-form");

  const modal_body = document.querySelector(".modal-body");
  modal_body.append(form);

  const modal = bootstrap.Modal.getOrCreateInstance("#exampleModal");
  modal.show();
};

async function clearAssignmentForm() {
  const modal_body = document.querySelector(".modal-body");
  modal_body.innerHTML = null;
}

async function submitAssignmentForm() {

  const assignment_form = document.querySelector("#assignment-form");
  const url = assignment_form.getAttribute("action");
  const formData = new FormData(assignment_form);

  const response = await fetch(url, {
    method: "POST",
    body: formData
  });

  const htmlString = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  if (response.ok) {
    const row = doc.querySelector(".assignment-html")

    const table = document.getElementById("assignments");

    table.append(row);

    const modal = bootstrap.Modal.getOrCreateInstance("#exampleModal");
    modal.hide();
  } else {
    const form = doc.querySelector("#assignment-form");

    const modal_body = document.querySelector(".modal-body");
    modal_body.innerHTML = null;
    modal_body.append(form);
  };
};

// - Listeners
document.addEventListener("click", (event) => {
  if (event.target.id == "new-assignment-button") {
    event.preventDefault();

    const link = event.target;
    const url = link.getAttribute("href");

    getAssignmentForm(url);
  };
});

document.addEventListener("hidden.bs.modal", (event) => {
  clearAssignmentForm();
});

document.addEventListener("submit", (event) => {
  event.preventDefault();

  submitAssignmentForm();
});
