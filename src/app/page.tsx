// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-orange-200 text-gray-800">
      {/* Navbar */}
      <header className="w-full bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">NextJS Demo</h1>
          <nav className="space-x-4 font-medium">
            <a href="#" className="hover:text-red-600 transition">Home</a>
            <a href="#" className="hover:text-red-600 transition">About</a>
            <a href="#" className="hover:text-red-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-4">
        <h2 className="text-4xl font-extrabold mb-4">Hallo Dunia 🌍</h2>
        <p className="max-w-xl mb-6 text-lg">
          Ini testing 1 dengan Next.js + Tailwind CSS. Kita bikin tampilannya
          lebih rame biar kayak landing page modern.
        </p>
        <div className="flex gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Mulai Sekarang
          </button>
          <button className="bg-white/70 hover:bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </section>

      {/* Card Grid */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 px-4">
        {[
          { title: "Cepat ⚡", desc: "Next.js bikin webmu super cepat." },
          { title: "Modern 🖥️", desc: "Dukungan React dan server components." },
          { title: "Responsif 📱", desc: "Tampilan rapi di desktop & mobile." },
          { title: "Tailwind 💅", desc: "Styling gampang, tanpa ribet CSS manual." },
          { title: "Gratis 🎉", desc: "Open source & bebas dipakai." },
          { title: "Powerful 🚀", desc: "Cocok buat proyek besar." }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} NextJS Demo. Dibuat dengan ❤️ & Tailwind CSS.
      </footer>
    </main>
  );
}
