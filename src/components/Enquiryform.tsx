import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  endpoint?: string; // optional, defaults to your Getform link
  uniqueId?: string; // optional, unique string to avoid ID conflicts
}

export default function EnquiryForm({
  endpoint = "https://getform.io/f/arogvqxb",
  uniqueId = "",
}: EnquiryFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Debug: log form data
    console.log("Submitting form data:");
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    setLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll contact you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not send your message. Try again later.",
        variant: "destructive",
      });
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      {/* Full Name */}
      <input
        type="text"
        id={`name-${uniqueId}`}
        name="name"
        placeholder="Full Name"
        required
        className="input input-bordered w-full"
      />

      {/* Email */}
      <input
        type="email"
        id={`email-${uniqueId}`}
        name="email"
        placeholder="Email"
        required
        className="input input-bordered w-full"
      />

      {/* Phone */}
      <input
        type="tel"
        id={`phone-${uniqueId}`}
        name="phone"
        placeholder="+91 XXXXX XXXXX"
        required
        className="input input-bordered w-full"
      />

      {/* Course Selection */}
      <select
        id={`course-${uniqueId}`}
        name="course"
        required
        className="select select-bordered w-full"
      >
        <option value="">Select Course</option>
        <option value="Python">Python</option>
        <option value="AI">AI</option>
      </select>

      {/* Message */}
      <textarea
        id={`message-${uniqueId}`}
        name="message"
        placeholder="Your Message"
        required
        className="textarea textarea-bordered w-full"
        rows={5}
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className={`btn btn-primary w-full ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
} 