export default function Footer() {
  return (
    <footer className="py-6 bg-white text-center border-t border-gray-200">
      <span className="text-gray-800">
        &copy; {new Date().getFullYear()} Aura Visual Concepts. All rights reserved.
      </span>
    </footer>
  );
}
