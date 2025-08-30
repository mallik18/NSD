import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link href="/">School Uniforms</Link></h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link href="/schools" className="hover:underline">Schools</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

