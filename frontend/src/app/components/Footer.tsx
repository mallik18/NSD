export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} School Uniforms. All rights reserved.</p>
      </div>
    </footer>
  );
}

