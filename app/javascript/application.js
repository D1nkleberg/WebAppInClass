// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"

import "controllers"

async function update_status(id, new_value) {
  const element = document.querySelector(`#assignment_${id}`);
  const status_text = document.querySelector(`#assignment_${id} .status`);

  const url = `/assignments/${id}/update_status`;
  const headers = {
    "Content-Type": "application/json",
  }
  const params = {
    published: new_value
  }

  const response = await fetch(url, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(params)
  });

  const json = await response.json();

  status_text.innerText = json["published"];

  if (new_value) {
    element.classList.add("published");
  } else {
    element.classList.remove("published");
  };
};

// Listeners
document.addEventListener("click", (event) => { 
  if (event.target.classList.contains("publish-button")) {
    const button = event.target;
    const id = button.id.match(/\d+/)[0];

    console.log(id);
    update_status(id, true);
  };
});

document.addEventListener("click", (event) => { 
  if (event.target.classList.contains("unpublish-button")) {
    const button = event.target;
    const id = button.id.match(/\d+/)[0];

    console.log(id);
    update_status(id, false);
  };
});


// Assignments Modal
// - Functions
async function getAssignmentForm() {
  const url = "/courses/1/assignments/new";

  const response = await fetch(url, {
  });

  const htmlString = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const form = doc.querySelector("#assignment-form");

  const modal_body = document.querySelector(".modal-body");
  modal_body.append(form);
};

async function clearAssignmentForm() {
  const modal_body = document.querySelector(".modal-body");
  modal_body.innerHTML = null;
}

async function submitAssignmentForm() {
  const url = `/courses/1/assignments`;

  const assignment_form = document.querySelector("#assignment-form");
  const formData = new FormData(assignment_form);

  const response = await fetch(url, {
    method: "POST",
    body: formData
  });

  const html = await response.text();

  console.log(html);
};

// - Listeners
document.addEventListener("show.bs.modal", (event) => {
  getAssignmentForm();
});

document.addEventListener("hidden.bs.modal", (event) => {
  clearAssignmentForm();
});

document.addEventListener("submit", (event) => {
  event.preventDefault();

  submitAssignmentForm();
});



















