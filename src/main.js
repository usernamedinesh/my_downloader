import { Router } from "./router";
import "./css/style.css"

document.querySelector('#root').innerHTML = ` 
 <main id = "app" ></main>
`;

window.addEventListener('DOMContentLoaded', Router);

window.addEventListener('popstate', Router)

document.body.addEventListener('click', e => {
  if (e.target.matches('a')) {
    e.preventDefault()
    history.pushState(null, "", e.target.href)
    Router();
  }
});