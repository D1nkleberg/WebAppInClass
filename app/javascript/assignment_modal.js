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

  const htmlString = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  if (response.ok) {
    const row = doc.querySelector(".assignment-html")

    const table = document.getElementById("assignments");

    table.append(row);
  } else {
    const form = doc.querySelector("#assignment-form");

    const modal_body = document.querySelector(".modal-body");
    modal_body.innerHTML = null;
    modal_body.append(form);
  };
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
