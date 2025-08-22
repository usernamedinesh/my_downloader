import { FooterPage } from "../components/Footer";
import { HeaderPage } from "../components/Header";

export function HomePage() {
    return `
        <div class="flex flex-col min-h-dvh text-white">
        
            ${HeaderPage()}
             <main class="flex-grow p-8">
               <div id="content-display" class="text-center text-2xl font-semibold">
              </div>
              <div class="md:flex justify-center items-center w-full mt-12">

                <div class="bg-white w-[60%] h-16 rounded-2xl flex items-center px-4 gap-4">

                  <input 
                   id="link-input"
                    type="text" 
                    placeholder="Insert your link here..." 
                    class=" placeholder:font-semibold  w-full h-full flex-grow bg-transparent outline-none text-left text-black font-light text-2xl"
                  >

                  <button  id="paste-btn" class="flex items-center gap-2 px-3 py-3.5 rounded-2xl bg-black hover:bg-lime-300 hover:text-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                      Paste
                  </button>

                  <button class="social-btn px-4 py-3.5 rounded-2xl text-black font-semibold cursor-pointer ">
                    Download
                  </button>

                </div>
              </div>
              </div>
             </main>
           ${FooterPage()}

        </div>
        `
}

export function initHomePageListener() {
  
  const content_data = {
    ins : `
    <h1 class="text-4xl font-bold text-center">My Awesome Video Downloader</h1>
          <p class="text-lg mt-2">Save your favorite videos from instagram.</p>
    `,
    face: `
          <h2 class="text-4xl font-bold text-center">Facebook Video Downloader</h2>
          <p class="text-lg mt-2">Save your favorite videos from Facebook.</p>
      `,
    x    : ` <h1 class="text-4xl font-bold text-center"> Donwload videos from X</h1>
              <p class="text-lg mt-2"> Download Twitter videos, music and posts free & fast </p>
            ` ,

    pin  : `<h1 class="text-4xl font-bold text-center">Pinterest Post Downloader</h1>
            <p class="text-lg mt-2">Download Pinterest post videos & photos free & fast<p>
    `
  }
    
const social_nav = document.querySelector('#social-nav')
const content_display = document.querySelector("#content-display")  
  
const initialActiveBtn = social_nav.querySelector(".active-btn")
if(initialActiveBtn) {
  const initialPlatform = initialActiveBtn.dataset.platform;
  console.log("initialPlatform: ", initialPlatform)
  content_display.innerHTML = content_data[initialPlatform];
}

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
        
      const platform = clickedBtn.dataset.platform;
        content_display.innerHTML = content_data[platform]
    }))
  }
  
const pasteBtn = document.getElementById("paste-btn");
const inputField = document.querySelector("#link-input");

if (pasteBtn && inputField) {
  pasteBtn.addEventListener("click", async () => {
    try {
      inputField.focus();

      if (!navigator.clipboard || !navigator.clipboard.readText) {
        throw new Error("Clipboard API not supported");
      }

      const text = await navigator.clipboard.readText();
      inputField.value = text;
    } catch (err) {
      console.warn("Clipboard paste failed:", err.message);
      alert("Your browser doesn't allow auto-paste. Please paste manually.");
    }
  });
}
}