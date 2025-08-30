import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans antialiased bg-gray-50 text-gray-800">
        <Header />
        <main className="container mx-auto p-6 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
