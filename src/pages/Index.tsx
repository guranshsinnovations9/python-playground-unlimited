import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Code, Brain, Trophy, Clock, Users } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [aiFormData, setAiFormData] = useState({
    name: "",
    phone: "",
    state: "",
    country: "",
    language: ""
  });
  const [pythonFormData, setPythonFormData] = useState({
    name: "",
    phone: "",
    state: "",
    country: ""
  });

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you soon about the AI course."
    });
    setAiFormData({ name: "", phone: "", state: "", country: "", language: "" });
  };

  const handlePythonSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you soon about the Python course."
    });
    setPythonFormData({ name: "", phone: "", state: "", country: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            GURANSHS INNOVATIONS
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 font-light">
            learn.code.create.innovate.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10">
            Transform your career with industry-leading AI and Python courses. Expert-led training in English, Hindi, and Punjabi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Learn from industry professionals with real-world experience in AI and software development.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Trophy className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Real Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Work on practical projects and build a portfolio that showcases your skills to employers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monday to Friday classes with weekend rest, designed for working professionals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Courses</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI Course */}
            <Card className="border-primary shadow-lg">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Complete AI Mastery Program</CardTitle>
                <CardDescription className="text-lg">12 Months | Comprehensive Training</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What You'll Learn:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Python Programming Fundamentals
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Mathematics for AI & ML
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Machine Learning & Deep Learning
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Real-world AI Projects & Tests
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Schedule:</h4>
                  <p className="text-muted-foreground">Monday to Friday (Weekends Off)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Languages Available:</h4>
                  <p className="text-muted-foreground">English, Hindi, Punjabi</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" size="lg">Enquire Now</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>AI Course Enquiry</DialogTitle>
                      <DialogDescription>
                        Fill in your details and we'll get back to you soon.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAiSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="ai-name">Full Name</Label>
                        <Input
                          id="ai-name"
                          value={aiFormData.name}
                          onChange={(e) => setAiFormData({ ...aiFormData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="ai-phone">Phone Number</Label>
                        <Input
                          id="ai-phone"
                          type="tel"
                          value={aiFormData.phone}
                          onChange={(e) => setAiFormData({ ...aiFormData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="ai-state">State</Label>
                        <Input
                          id="ai-state"
                          value={aiFormData.state}
                          onChange={(e) => setAiFormData({ ...aiFormData, state: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="ai-country">Country</Label>
                        <Input
                          id="ai-country"
                          value={aiFormData.country}
                          onChange={(e) => setAiFormData({ ...aiFormData, country: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="ai-language">Preferred Language</Label>
                        <Select
                          value={aiFormData.language}
                          onValueChange={(value) => setAiFormData({ ...aiFormData, language: value })}
                        >
                          <SelectTrigger id="ai-language">
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

            {/* Python Course */}
            <Card className="border-accent shadow-lg">
              <CardHeader>
                <Code className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Python Programming Course</CardTitle>
                <CardDescription className="text-lg">3 Months | Pure Python</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What You'll Learn:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Python Basics to Advanced
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Object-Oriented Programming
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Real-world Python Projects
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Focus:</h4>
                  <p className="text-muted-foreground">Pure Python Programming (No AI Content)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Languages Available:</h4>
                  <p className="text-muted-foreground">English, Hindi, Punjabi</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" className="w-full bg-accent hover:bg-accent/90" size="lg">
                      Enquire Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Python Course Enquiry</DialogTitle>
                      <DialogDescription>
                        Fill in your details and we'll get back to you soon.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handlePythonSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="python-name">Full Name</Label>
                        <Input
                          id="python-name"
                          value={pythonFormData.name}
                          onChange={(e) => setPythonFormData({ ...pythonFormData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="python-phone">Phone Number</Label>
                        <Input
                          id="python-phone"
                          type="tel"
                          value={pythonFormData.phone}
                          onChange={(e) => setPythonFormData({ ...pythonFormData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="python-state">State</Label>
                        <Input
                          id="python-state"
                          value={pythonFormData.state}
                          onChange={(e) => setPythonFormData({ ...pythonFormData, state: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="python-country">Country</Label>
                        <Input
                          id="python-country"
                          value={pythonFormData.country}
                          onChange={(e) => setPythonFormData({ ...pythonFormData, country: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Submit Enquiry</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl mb-4 text-foreground">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground font-medium">Phone</p>
                      <a href="tel:+919877038519" className="text-primary hover:underline text-lg">
                        +91 98770 38519
                      </a>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Email</p>
                      <a href="mailto:guranshsinghinnovations9@gmail.com" className="text-primary hover:underline break-all">
                        guranshsinghinnovations9@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-4 text-foreground">Why Choose Our Training?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Industry-relevant curriculum
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Hands-on project experience
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      Multilingual support
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">GURANSHS INNOVATIONS</h3>
          <p className="text-background/80 mb-4">learn.code.create.innovate.</p>
          <p className="text-sm text-background/60">
            © 2025 Guranshs Innovations. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
