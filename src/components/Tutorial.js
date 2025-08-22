import v1 from "../assets/Vector1.png"
import download from  "../assets/download.png"
import paste from  "../assets/paste.png"
import link from  "../assets/link.png"

export function HowToDownload() {
  return `
    <div class="overflow-x-hidden relative text-white mt-60 text-center text-2xl font-semibold w-full">
      <h1 class="text-3xl font-bold">How to Download Videos?</h1>

      <div class="grid grid-rows-3 gap-20 md:flex md:justify-between md:mx-20 mt-10 text-left">

        <!-- Card 1 -->
        <div class="relative w-full md:w-1/3 bg-amber-50 text-black px-10 py-30 cursor-pointer rounded-3xl transform hover:scale-105 transition duration-300">
          <!-- floating icon -->
      <!-- Floating circle with padding -->
        <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-lime-300 rounded-full flex items-center justify-center">
          <img src=${link} alt="Pinterest" class="w-7 h-7" />
        </div>
          
          <h2 class="text-center text-xl font-semibold mt-10">Copy the URL</h2>
          <p class="mt-5 text-base font-normal">
            On Instagram, Facebook, Twitter, or Pinterest, open the post,
            tap the three dots or share icon, and select "Copy Link".
            The link will be saved to your clipboard, ready to paste.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="relative w-full md:w-1/3 bg-amber-50 text-black px-10 py-30 cursor-pointer rounded-3xl transform hover:scale-105 transition duration-300">
          <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-lime-300 rounded-full flex items-center justify-center">
            <img src=${paste} alt="Pinterest" class="w-7 h-7" />
          </div>
          
          <h2 class="text-center text-xl font-semibold mt-10">Paste the Link</h2>
          <p class="mt-5 text-base font-normal">
            Go to <span class="font-bold">www.vidextract.net</span> and paste the link.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="relative w-full md:w-1/3 bg-amber-50 text-black px-10 py-30 cursor-pointer rounded-3xl transform hover:scale-105 transition duration-300">
          <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-lime-300 rounded-full flex items-center justify-center">
            <img src=${download} alt="Pinterest" class="w-7 h-7" />
          </div>
          
          <h2 class="text-center text-xl font-semibold mt-10">Click Download</h2>
          <p class="mt-5 text-base font-normal">
            Click the download button and save what you want. 
            We provide MP4 & MP3 in the highest quality — fast and free.
          </p>
        </div>
      </div>

      <!-- Decorative vector light -->
      <img src=${v1} alt="Light effect"
        class="absolute rotate-180 -right-10 top-2/4 -translate-y-1/3 w-150 h-auto pointer-events-none select-none" />
    </div>
  `
}
