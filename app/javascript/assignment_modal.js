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

  const modal_body = document.querySelector("#assignment-modal-content");
  modal_body.append(form);

  const modal = bootstrap.Modal.getOrCreateInstance("#exampleModal");
  modal.show();
};

async function clearAssignmentForm() {
  const modal_body = document.querySelector("#assignment-modal-content");
  modal_body.innerHTML = null;
}

async function submitAssignmentForm() {

  const assignment_form = document.querySelector("#assignment-form");
  const url = assignment_form.getAttribute("action");
  const existing_item = /\d$/.test(url)
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

    if (existing_item) {
      const id = row.id;
      const old_row = document.getElementById(id);
      old_row.replaceWith(row);
    } else {
      const table = document.getElementById("assignments");
      table.append(row);
    };

    const modal = bootstrap.Modal.getOrCreateInstance("#exampleModal");
    modal.hide();
  } else {
    const form = doc.querySelector("#assignment-form");

    const modal_body = document.querySelector("#assignment-modal-content");
    modal_body.innerHTML = null;
    modal_body.append(form);
  };
};

// - Listeners
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("assignment-button")) {
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
