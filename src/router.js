import { HomePage } from "./pages/Home"

const routes = {
    "/" : HomePage
    // "/about" : AboutPage
}

const app = document.querySelector("#root");
export function Router() {
    const path = window.location.pathname;
    
    const page = routes[path] || (() => `<h1>404 - Page Not Found</h>`)
    app.innerHTML = page();
}