export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-10 mt-12 shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Company Info / About Us */}
        <div className="col-span-1">
          <h3 className="text-2xl font-bold mb-4">NSD Uniforms</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Providing high-quality, durable, and stylish uniforms for schools, colleges, and various institutions.
            Committed to excellence in every stitch.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/products" className="text-blue-100 hover:text-white transition-colors duration-200">Products</a></li>
            <li><a href="/testimonials" className="text-blue-100 hover:text-white transition-colors duration-200">Testimonials</a></li>
            <li><a href="/schools" className="text-blue-100 hover:text-white transition-colors duration-200">Schools</a></li>
            <li><a href="/about" className="text-blue-100 hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="/faq" className="text-blue-100 hover:text-white transition-colors duration-200">FAQ</a></li>
            <li><a href="/contact" className="text-blue-100 hover:text-white transition-colors duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="/products?category=school" className="text-blue-100 hover:text-white transition-colors duration-200">School Uniforms</a></li>
            <li><a href="/contact" className="text-blue-100 hover:text-white transition-colors duration-200">Custom Programs</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Corporate Uniforms</a></li>
            <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Sports Uniforms</a></li>
          </ul>
        </div>

        {/* Contact Us & Social Media */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-blue-100 text-sm mb-2">Email: info@nsduniforms.com</p>
          <p className="text-blue-100 text-sm mb-4">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-7 w-7" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-7 w-7" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-7 w-7" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-600 mt-8 pt-8 text-center">
        <p className="text-sm text-blue-100">&copy; {new Date().getFullYear()} NSD Uniforms. All rights reserved.</p>
      </div>
    </footer>
  );
}

