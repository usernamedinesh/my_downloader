import v1 from "../assets/Vector1.png"

export function HowToDownload() {
  return `
    <div class="relative text-white mt-60 text-center text-2xl font-semibold w-full">
      <h1 class="text-3xl font-bold">How to Download Videos?</h1>

      <div class="grid grid-rows-3 gap-20 md:flex md:justify-between md:mx-20 mt-10 text-left">
        
        <div class="w-full md:w-1/3 bg-amber-50 text-black px-10 py-[30px] cursor-pointer rounded-3xl transform hover:scale-105 transition duration-300">
          <h2 class="text-center text-xl font-semibold">Copy the URL</h2>
          <p class="mt-5 text-base font-normal">
            On Instagram, Facebook, Twitter, or Pinterest, open the post,
            tap the three dots or share icon, and select "Copy Link".
            The link will be saved to your clipboard, ready to paste.
          </p>
        </div>

        <div class="w-full md:w-1/3 bg-amber-50 text-black px-10 py-[30px] rounded-3xl">
          <h2 class="text-center text-xl font-semibold">Paste the Link</h2>
          <p class="mt-5 text-base font-normal">
            Go to <span class="font-bold">www.vidextract.net</span> and paste the link.
          </p>
        </div>

        <div class="w-full md:w-1/3 bg-amber-50 text-black px-10 py-[30px] rounded-3xl">
          <h2 class="text-center text-xl font-semibold">Download</h2>
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
