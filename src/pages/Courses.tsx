import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Brain, Code, Calculator, Network, Clock, BookOpen, Award, Users } from "lucide-react";

const Courses = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    country: "",
    language: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you soon about your selected course.",
    });
    setFormData({ name: "", phone: "", state: "", country: "", language: "", course: "" });
  };

  const courses = [
    {
      id: "python",
      icon: Code,
      title: "Python Mastery",
      duration: "3 Months",
      color: "text-accent",
      borderColor: "border-accent/50",
      description: "Complete Python programming from basics to advanced",
      highlights: [
        "Python Fundamentals & Syntax",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "File Handling & Exception Management",
        "Web Scraping & Automation",
        "Building Real-World Python Applications",
      ],
      libraries: ["Python Standard Library", "NumPy", "Pandas"],
      projects: "5+ Hands-on Projects",
      schedule: "Monday to Friday",
      languages: "English, Hindi, Punjabi",
    },
    {
      id: "math-ai",
      icon: Calculator,
      title: "Maths for AI",
      duration: "2 Months",
      color: "text-primary",
      borderColor: "border-primary/50",
      description: "Essential mathematics for Machine Learning and AI",
      highlights: [
        "Linear Algebra & Matrix Operations",
        "Probability & Statistics",
        "Calculus Basics for ML",
        "Optimization Techniques",
        "Vector Mathematics",
        "Mathematical Foundations for Neural Networks",
      ],
      libraries: ["NumPy", "SymPy", "Matplotlib"],
      projects: "Mathematical Problem Solving",
      schedule: "Monday to Friday",
      languages: "English, Hindi, Punjabi",
    },
    {
      id: "machine-learning",
      icon: Brain,
      title: "Machine Learning",
      duration: "3 Months",
      color: "text-primary",
      borderColor: "border-primary/50",
      description: "Master ML algorithms and practical implementations",
      highlights: [
        "Supervised & Unsupervised Learning",
        "Regression & Classification Algorithms",
        "Model Training & Evaluation",
        "Feature Engineering",
        "Ensemble Methods",
        "Real-World ML Projects",
      ],
      libraries: ["scikit-learn", "pandas", "NumPy", "Matplotlib"],
      projects: "ML Projects with Real Datasets",
      schedule: "Monday to Friday",
      languages: "English, Hindi, Punjabi",
    },
    {
      id: "deep-learning",
      icon: Network,
      title: "Deep Learning",
      duration: "3 Months",
      color: "text-accent",
      borderColor: "border-accent/50",
      description: "Build and deploy Neural Networks and AI models",
      highlights: [
        "Neural Networks Fundamentals",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs)",
        "Transfer Learning",
        "Model Optimization & Deployment",
        "Advanced Deep Learning Projects",
      ],
      libraries: ["TensorFlow", "Keras", "PyTorch"],
      projects: "AI Applications & Models",
      schedule: "Monday to Friday",
      languages: "English, Hindi, Punjabi",
    },
  ];

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

        {/* Complete AI Mastery Bundle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16"
        >
          <Card className="border-primary shadow-xl">
            <CardHeader className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="w-16 h-16" />
                <div>
                  <CardTitle className="text-3xl mb-2">Complete AI Mastery Program</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-lg">
                    12 Months • All-Inclusive Training
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg mb-6 text-muted-foreground">
                Our flagship program combines all four courses into one comprehensive journey. Master Python,
                Math for AI, Machine Learning, and Deep Learning to become a complete AI professional.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Duration</h4>
                    <p className="text-sm text-muted-foreground">12 months comprehensive training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Curriculum</h4>
                    <p className="text-sm text-muted-foreground">4 integrated courses + Projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Outcome</h4>
                    <p className="text-sm text-muted-foreground">Job-ready AI expert</p>
                  </div>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full md:w-auto" onClick={() => setFormData({ ...formData, course: "Complete AI Mastery Program" })}>
                    Enroll in Complete Program
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Course Enquiry</DialogTitle>
                    <DialogDescription>Fill in your details and we'll get back to you soon.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required
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
                    <Button type="submit" className="w-full">Submit Enquiry</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </motion.div>

        {/* Individual Courses */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Individual Courses</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Prefer to take courses separately? Choose from our individual programs below
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full ${course.borderColor} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <course.icon className={`w-12 h-12 ${course.color} mb-4`} />
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-lg">{course.duration} • {course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className={`${course.color} mr-2`}>•</span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Key Libraries</h4>
                      <p className="text-muted-foreground">{course.libraries.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Projects</h4>
                      <p className="text-muted-foreground">{course.projects}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-1">
                      <strong>Schedule:</strong> {course.schedule}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Languages:</strong> {course.languages}
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setFormData({ ...formData, course: course.title })}>
                        Enquire About This Course
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{course.title} Enquiry</DialogTitle>
                        <DialogDescription>Fill in your details and we'll get back to you soon.</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
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
                        <Button type="submit" className="w-full">Submit Enquiry</Button>
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