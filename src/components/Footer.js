export function FooterPage() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="relative  bg-gray-800 text-white text-center h-30 justify-center items-center mt-10">
    <div class="absolute inset-x-0 bottom-10 text-center ">
          <p>&copy; ${currentYear} My Website. All rights reserved.</p>
    </div>
    </footer>
  `;
}