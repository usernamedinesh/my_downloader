export function FooterPage() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="relative  bg-gray-800 text-white p-4 text-center h-11 items-center">
    <div class="absolute inset-x-0 bottom-2">
          <p>&copy; ${currentYear} My Website. All rights reserved.</p>
    </div>
    </footer>
  `;
}