import ins from "../assets/instagram.png"
import x from "../assets/x.png"
import face from "../assets/facebook.png"
import pin from "../assets/pinterest.png"

export function HeaderPage() {
    return `
    <div id="social-nav" class="flex justify-center mt-16 md:mt-20 items-center max-w-xs sm:max-w-md md:max-w-none mx-auto">

      <button data-platform="ins" class="social-btn active-btn flex-1 md:flex-none px-4 sm:px-5 md:px-8 py-3 md:py-2 cursor-pointer rounded-l-2xl border-r border-black transition-all duration-200 hover:bg-gray-50 active:bg-gray-100">
        <img src=${ins} alt="Instagram" width="28" height="28" class="pointer-events-none mx-auto sm:w-8 sm:h-8">
      </button>

      <button data-platform="face" class="social-btn flex-1 md:flex-none px-4 sm:px-5 md:px-8 py-3 md:py-2 cursor-pointer border-r border-black transition-all duration-200 hover:bg-gray-50 active:bg-gray-100">
        <img src=${face} alt="Facebook" width="28" height="28" class="pointer-events-none mx-auto sm:w-8 sm:h-8">
      </button>

      <button data-platform="x" class="social-btn flex-1 md:flex-none px-4 sm:px-5 md:px-8 py-3 md:py-2 cursor-pointer border-r border-black transition-all duration-200 hover:bg-gray-50 active:bg-gray-100">
        <img src=${x} alt="X" width="28" height="28" class="pointer-events-none mx-auto sm:w-8 sm:h-8">
      </button>

      <button data-platform="pin" class="social-btn flex-1 md:flex-none px-4 sm:px-5 md:px-8 py-3 md:py-2 cursor-pointer rounded-r-2xl transition-all duration-200 hover:bg-gray-50 active:bg-gray-100">
        <img src=${pin} alt="Pinterest" width="28" height="28" class="pointer-events-none mx-auto sm:w-8 sm:h-8">
      </button>

    </div>
    `;
}