import share from '../assets/share.png'

export function Navbar() {
  return `
    <nav class="w-full">
      <div class="flex items-center justify-between mt-3 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-lime-300 font-bold text-xl sm:text-2xl">VidExtract</span>
          <span class="text-white text-xl sm:text-2xl">.net</span>
        </div>

        <!-- Share button -->
        <div class="flex-shrink-0">
          <img 
            src=${share} 
            alt="share" 
            width="40" 
            height="40"
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 p-1 rounded cursor-pointer hover:bg-gray-700 active:bg-gray-600 transition-all duration-200"
          />
        </div>
      </div>

      <!-- Bottom border -->
      <div class="mt-4 h-[1px] bg-lime-300 w-full"></div>
    </nav>
  `
}