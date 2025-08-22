import share from '../assets/share.png'

export function Navbar() {
  return `
    <nav class="w-full">
      <div class="flex items-center justify-between mt-3 mx-20">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-lime-300 font-bold text-2xl">VidExtract</span>
          <span class="text-white text-2xl">.net</span>
        </div>

        <!-- Share button -->
        <div>
          <img 
            src=${share} 
            alt="share" 
            width="52" 
            height="52"
            class=" p-1 rounded cursor-pointer  transition"
          />
        </div>
      </div>

      <!-- Bottom border -->
      <div class="mt-4 h-[1px] bg-lime-300 w-full"></div>
    </nav>
  `
}
