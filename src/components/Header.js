import ins from "../assets/instagram.png"
import x from "../assets/x.png"
import face from "../assets/facebook.png"
import pin from "../assets/pinterest.png"

const downloaderType  = {
    Instagram : "Instagram",
    Facebook  : "Facebook",
    Twitter   : "Twitter",
    Pinterest : "Pinterest"
}

export function HeaderPage() {
    return `
    <div id="social-nav" class="flex flex-col md:flex-row justify-center mt-10 divide-y md:divide-y-0 md:divide-x-1 items-center">

      <button data-platform="ins" class="md:px-8 social-btn active-btn px-8 p-3 cursor-pointer md:rounded-s-2xl rounded-tl-2xl">
        <img src=${ins} alt="Instagram" width="40" class="pointer-events-none">
      </button>

      <button data-platform="face" class="md:px-8 social-btn p-3 px-8 md:rounded-none cursor-pointer">
        <img src=${face} alt="Facebook" width="40" class="pointer-events-none">
      </button>
      <button data-platform="x" class="md:px-8 social-btn p-3 px-8 md:rounded-none cursor-pointer">
        <img src=${x} alt="X" width="40" class="pointer-events-none">
      </button>

      <button data-platform="pin" class="md:px-8 social-btn  px-8 py-3  cursor-pointer md:rounded-r-2xl rounded-br-2xl">
        <img src=${pin} alt="Pinterest" width="40" class="pointer-events-none">
      </button>

    </div>

    <div class="text-white text-center mt-10 font-bold text-4xl">
        <h2> Instagram Video Downlader </h2>
        <h2> Facebook Video Downlader </h2>
        <h2> Pinterest Video Downlader </h2>
        <h2> X Video Downlader </h2>
    </div>
    `;
}