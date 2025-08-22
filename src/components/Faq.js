import e1 from "../assets/E1.png"
import e2 from "../assets/e2.png"
import e3 from "../assets/e3.png"
import e4 from "../assets/e4.png"
import e5 from "../assets/e5.png"
import e6 from "../assets/e6.png"
import e7 from "../assets/e7.png"
import e8 from "../assets/e8.png"

export function Faq() {
  return `
    <section class="relative w-full flex justify-center items-center py-20  overflow-hidden">
      <!-- FAQ Box -->
      <div class="relative z-10 bg-gradient-to-b from-lime-900/10 to-lime-900/20 rounded-2xl border border-lime-400 max-w-3xl mx-4 p-10 text-white">
        <h1 class="text-3xl font-bold text-center mb-8">Frequently asked questions</h1>

        <div class="space-y-6 text-left">
          <div>
            <h2 class="text-lime-300 font-semibold">1. Is it legal to download videos, music, or photos from social media platforms?</h2>
            <p class="text-gray-200 text-sm mt-2">
              Downloading content is only legal if it’s for personal use and does not violate copyright laws. Always respect the content creator’s rights.
            </p>
          </div>

          <div>
            <h2 class="text-lime-300 font-semibold">2. Do I need to log in or provide my account details to use this downloader?</h2>
            <p class="text-gray-200 text-sm mt-2">
              No, you don’t need to log in. Our tool works without asking for your personal information or passwords.
            </p>
          </div>

          <div>
            <h2 class="text-lime-300 font-semibold">3. In which formats and quality can I download the files?</h2>
            <p class="text-gray-200 text-sm mt-2">
              Videos can usually be downloaded in MP4 (various resolutions), and images in JPG/PNG. The available quality depends on the original upload.
            </p>
          </div>

          <div>
            <h2 class="text-lime-300 font-semibold">4. Can I download content from private accounts?</h2>
            <p class="text-gray-200 text-sm mt-2">
              No, only publicly available posts can be downloaded. Content from private accounts is not accessible through this tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
}