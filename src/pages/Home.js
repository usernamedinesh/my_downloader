import { FooterPage } from "../components/Footer";
import { HeaderPage } from "../components/Header";

export function HomePage() {
    return `
        <div class="flex flex-col min-h-dvh">
        
            ${HeaderPage()}
             <main class="flex-grow p-8">
                    <div class="text-black">
                        <h1 class="text-4xl font-bold"> HOME PAGE </h1>
                        <p class="mt-4">This is the main content area.</p>
                    </div>
             </main>
           ${FooterPage()}

        </div>
        `
}

export function initHomePageListener() {
    
const social_nav = document.querySelector('#social-nav')
if (social_nav) {
  social_nav.addEventListener('click', (event => {

    //find the button that was actually clicked
    const clickedBtn = event.target.closest('.social-btn');
    if (!clickedBtn) {
      return;
    }
    const currentActive = social_nav.querySelector('.active-btn')
    if(currentActive) {
      currentActive.classList.remove('active-btn')
    }
    clickedBtn.classList.add('active-btn');
  }))
} else {
  console.log("social-nav is : ", social_nav);
}
}