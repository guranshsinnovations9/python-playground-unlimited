import { useState } from "react";
import { useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/arogvqxb", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="input input-bordered w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="input input-bordered w-full"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="textarea textarea-bordered w-full"
        rows={5}
      ></textarea>
      <button type="submit" className="btn btn-primary w-full">
        Send Message
      </button>
      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
}

export default function EnquiryForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/arogvqxb", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="input input-bordered w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="input input-bordered w-full"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="textarea textarea-bordered w-full"
        rows={5}
      ></textarea>
      <button type="submit" className="btn btn-primary w-full">
        Send Message
      </button>
      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
}
