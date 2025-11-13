import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Brain, Trophy, Clock, Users, Target, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world AI and software development experience.",
    },
    {
      icon: Trophy,
      title: "Real Projects",
      description: "Build practical projects and create a portfolio that showcases your skills.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Monday to Friday classes with weekends off, perfect for working professionals.",
    },
    {
      icon: Target,
      title: "Career Focused",
      description: "Industry-relevant curriculum designed to make you job-ready in AI and Python.",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn certificates upon course completion to boost your career prospects.",
    },
    {
      icon: Zap,
      title: "Multilingual",
      description: "Learn in English, Hindi, or Punjabi - choose what's comfortable for you.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Promotional Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-destructive via-destructive/90 to-destructive/80 text-destructive-foreground py-3 px-4 text-center font-semibold"
      >
        🎉 Special Offer: 50% OFF on all courses till 12/12/2025! 🎉
      </motion.div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent py-20 md:py-32 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
              Master AI & Python
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">with Expert Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light max-w-3xl mx-auto">
              Transform your career with industry-leading courses in Python, Machine Learning, and Deep Learning
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Available in English, Hindi, and Punjabi • Monday to Friday Classes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Why Choose GURANSH INNOVATIONS?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their careers with our expert-led training programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Course Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Popular Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive course offerings designed to take you from beginner to expert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/50 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <Brain className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Complete AI Mastery</h3>
                  <p className="text-muted-foreground mb-4">
                    12-month comprehensive program covering Python, Math for AI, Machine Learning, and Deep Learning
                  </p>
                  <Link to="/courses">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-accent/50 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <Code className="w-16 h-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Python Mastery</h3>
                  <p className="text-muted-foreground mb-4">
                    3-month intensive course covering Python fundamentals, OOP, data structures, and real-world projects
                  </p>
                  <Link to="/courses">
                    <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-accent">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our next batch and become an AI expert in 12 months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Enroll Now
              </Button>
            </Link>
            <a href="https://wa.me/919877038519" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;