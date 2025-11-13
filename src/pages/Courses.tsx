import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Brain, Code, Calculator, Network, Clock, BookOpen, Award } from "lucide-react";

const GETFORM_LINK = "https://getform.io/f/YOUR_GETFORM_ENDPOINT"; // Replace with your actual Getform link

const Courses = () => {
  const courses = [
    {
      id: "complete-ai",
      title: "Complete AI Mastery Program",
      icon: Brain,
      duration: "12 Months",
      description: "Python, Math, Machine Learning, Deep Learning",
    },
    {
      id: "python",
      title: "Python Mastery",
      icon: Code,
      duration: "3 Months",
      description: "Complete Python programming from basics to advanced",
    },
    {
      id: "math-ai",
      title: "Maths for AI",
      icon: Calculator,
      duration: "2 Months",
      description: "Essential mathematics for Machine Learning and AI",
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      icon: Brain,
      duration: "3 Months",
      description: "Master ML algorithms and practical implementations",
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      icon: Network,
      duration: "3 Months",
      description: "Build and deploy Neural Networks and AI models",
    },
  ];

  const submitEnquiry = async (e: React.FormEvent, courseName: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    data.append("course", courseName);

    try {
      const response = await fetch(GETFORM_LINK, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert(`Enquiry for "${courseName}" sent successfully!`);
        form.reset();
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Comprehensive training programs designed to take you from beginner to expert
          </p>
          <div className="inline-block bg-destructive text-destructive-foreground px-6 py-2 rounded-full font-semibold">
            🎉 50% OFF till 12/12/2025
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <course.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {course.duration} • {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Enquire About This Course</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{course.title} Enquiry</DialogTitle>
                        <DialogDescription>
                          Fill your details and we'll contact you soon.
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={(e) => submitEnquiry(e, course.title)}
                        className="space-y-4"
                      >
                        <div>
                          <Label htmlFor={`name-${course.id}`}>Full Name</Label>
                          <Input id={`name-${course.id}`} name="name" required />
                        </div>
                        <div>
                          <Label htmlFor={`phone-${course.id}`}>Phone Number</Label>
                          <Input id={`phone-${course.id}`} name="phone" type="tel" required />
                        </div>
                        <div>
                          <Label htmlFor={`state-${course.id}`}>State</Label>
                          <Input id={`state-${course.id}`} name="state" required />
                        </div>
                        <div>
                          <Label htmlFor={`country-${course.id}`}>Country</Label>
                          <Input id={`country-${course.id}`} name="country" required />
                        </div>
                        <div>
                          <Label htmlFor={`language-${course.id}`}>Preferred Language</Label>
                          <Select id={`language-${course.id}`} name="language" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="English">English</SelectItem>
                              <SelectItem value="Hindi">Hindi</SelectItem>
                              <SelectItem value="Punjabi">Punjabi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button type="submit" className="w-full">
                          Submit Enquiry
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;