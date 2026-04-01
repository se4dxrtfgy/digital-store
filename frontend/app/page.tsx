export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4">Marcus’s Digital Store</h1>
        <p className="text-xl text-gray-600 mb-6">
          High‑quality digital products, built with precision and creativity.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-lg text-lg">
          Browse Products
        </button>
      </section>

      {/* Product Grid */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Product Card */}
          <div className="border p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Short description goes here.</p>
            <button className="px-4 py-2 bg-black text-white rounded-lg">
              View Product
            </button>
          </div>

          {/* Duplicate this card for more placeholders */}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        © {new Date().getFullYear()} Marcus’s Digital Store
      </footer>
    </main>
  );
}
