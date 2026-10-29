// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

async function update_status(id, new_value) {
  const url = `/admin/assignments/${id}/update_status`;
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

  console.log(response);
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
