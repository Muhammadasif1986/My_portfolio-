export default function Contact() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
