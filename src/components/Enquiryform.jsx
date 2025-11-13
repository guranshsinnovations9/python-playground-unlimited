import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace this URL with your Getform or custom API endpoint
      const response = await fetch("https://getform.io/f/your-form-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-4 p-6 border rounded-2xl shadow-md bg-white"
    >
      <h2 className="text-2xl font-bold text-center">Enquiry Form</h2>

      <Input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        name="phone"
        type="tel"
        placeholder="Your Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      <Textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </Button>

      {status === "success" && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center">Something went wrong. Try again!</p>
      )}
    </form>
  );
} 