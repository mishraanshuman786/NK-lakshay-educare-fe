const FormSection = () => {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] items-center gap-8 py-12 px-4">
      {/* Image */}
      <div>
        <img
          src="/contact/formImage.webp"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="border border-gray-200 rounded-lg shadow-xl p-6 sm:p-8 md:p-12 lg:p-16">
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-background-secondary"
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-background-secondary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-background-secondary"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-background-secondary"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-gray-300 rounded-md p-3 outline-none resize-none focus:ring-2 focus:ring-background-secondary"
          />

          <button
            type="submit"
            className="w-full bg-background-secondary text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;