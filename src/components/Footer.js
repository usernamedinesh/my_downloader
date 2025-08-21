export function FooterPage() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="bg-gray-800 text-white p-4 text-center mt-8">
      <p>&copy; ${currentYear} My Website. All rights reserved.</p>
    </footer>
  `;
}