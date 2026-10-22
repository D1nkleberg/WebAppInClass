// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("click", (event) => { 
  if (event.target.classList.contains("publish-button")) {
    const button = event.target;
    const id = button.id.match(/\d+/)[0];

    console.log(id);
  };
})
