// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const buttons = document.querySelectorAll(".publish-button");

buttons[0].addEventListener("click", (event) => { 
  const button = event.target;
  const id = button.id.match(/\d+/)[0];

  console.log(id);
})
