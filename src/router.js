import { HomePage, initHomePageListener } from "./pages/Home"

const routes = {
    "/" : {template: HomePage, init: initHomePageListener}
}

const app = document.querySelector("#root");
export function Router() {
    const path = window.location.pathname;
    
    const page = routes[path] ||{ template: () => `<h1>404 - Not Found</h1>`, init: () => {} }; 
    app.innerHTML = page.template();
    page.init();
}