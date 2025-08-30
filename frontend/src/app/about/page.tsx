import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-12">About NSD Uniforms</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="md:col-span-1">
            <Image
              src="https://placehold.co/1200x800/e0e7ff/1e3a8a/png?text=About+Us+Image"
              alt="NSD Uniforms Team"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg object-cover w-full h-96"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Story & Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At NSD Uniforms, we believe in the power of a well-crafted uniform to inspire confidence and foster a sense of unity. 
              With years of experience in the textile industry, we have dedicated ourselves to providing high-quality, durable, and stylish uniforms for schools, 
              colleges, and various institutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower students and professionals alike with uniforms that not only meet stringent quality standards but also reflect 
              the identity and values of their respective institutions. We are committed to excellence in every stitch, ensuring comfort and longevity.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Quality</h3>
              <p className="text-gray-600">We are uncompromising in our commitment to quality, from fabric selection to the final stitching.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Integrity</h3>
              <p className="text-gray-600">Honesty and transparency guide all our interactions with clients and partners.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We strive to exceed expectations with every order.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Why Choose NSD Uniforms?</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <p className="mb-4">Choosing NSD Uniforms means partnering with a team that understands the importance of a uniform in building identity and pride. We offer:</p>
            <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md">
              <li>Premium quality fabrics that are comfortable and durable.</li>
              <li>Customizable designs to perfectly match your institution's branding.</li>
              <li>Reliable and timely delivery for all order sizes.</li>
              <li>Exceptional customer service and support.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
