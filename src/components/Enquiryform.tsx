import React, { useState } from "react";

const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    country: "",
    preferredLanguage: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/your-getform-endpoint", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      });
      if (response.ok) {
        setStatus("✅ Enquiry submitted successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("❌ Failed to submit. Try again.");
      }
    } catch {
      setStatus("❌ Network error. Try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Enquire About This Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          required
          value={formData.state}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          value={formData.country}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />

        <select
          name="preferredLanguage"
          required
          value={formData.preferredLanguage}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        >
          <option value="">Preferred Language</option>
          <option value="Hindi">Hindi</option>
          <option value="Punjabi">Punjabi</option>
          <option value="English">English</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {status && <p className="text-center mt-3 text-sm">{status}</p>}
    </div>
  );
};

export default EnquiryForm;