export function FooterPage() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="relative  text-gray-300 py-10 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <!-- Logo -->
        <div class="flex items-center justify-center md:justify-start gap-2">
          <span class="text-lime-300 font-bold text-2xl">VidExtract</span>
          <span class="text-white text-2xl">.net</span>
        </div>

        <!-- Links -->
        <div class="flex justify-center gap-6 text-sm">
          <a href="#" class="hover:text-lime-300 transition">Privacy Policy</a>
          <a href="#" class="hover:text-lime-300 transition">Terms & Conditions</a>
          <a href="#" class="hover:text-lime-300 transition">Contact Us</a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-6 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; ${currentYear} VidExtract.net. All rights reserved.</p>
      </div>
    </footer>
  `;
}
