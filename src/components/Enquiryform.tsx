import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  course?: string; // Optional: pass course name if used for multiple courses
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ course }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    country: "",
    language: "",
    message: "",
    course: course || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch("https://getform.io/f/arogvqxb", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast({
          title: "Enquiry Sent!",
          description: "We'll get back to you soon.",
        });
        setFormData({
          name: "",
          phone: "",
          state: "",
          country: "",
          language: "",
          message: "",
          course: course || "",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow">
      <input type="hidden" name="course" value={formData.course} />

      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Your Name"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          name="state"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          required
          placeholder="Your State"
        />
      </div>

      <div>
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          required
          placeholder="Your Country"
        />
      </div>

      <div>
        <Label htmlFor="language">Preferred Language</Label>
        <Select
          value={formData.language}
          onValueChange={(value) => setFormData({ ...formData, language: value })}
        >
          <SelectTrigger id="language">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="punjabi">Punjabi</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          placeholder="Your message or query..."
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full">
        Send Enquiry
      </Button>
    </form>
  );
};

export default EnquiryForm;