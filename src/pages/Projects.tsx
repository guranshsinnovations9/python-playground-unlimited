import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Bot, ImageIcon, LineChart, MessageSquare, ShieldCheck, FileText, Camera } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "AI Chatbot with NLP",
      description: "Built an intelligent chatbot using natural language processing to understand and respond to user queries contextually.",
      technologies: ["Python", "TensorFlow", "NLTK"],
      category: "Deep Learning",
    },
    {
      icon: ImageIcon,
      title: "Image Classification System",
      description: "Developed a CNN-based image classifier that can identify and categorize images with 95% accuracy.",
      technologies: ["Python", "Keras", "OpenCV"],
      category: "Computer Vision",
    },
    {
      icon: LineChart,
      title: "Stock Price Predictor",
      description: "Created a machine learning model to predict stock prices using historical data and technical indicators.",
      technologies: ["Python", "scikit-learn", "pandas"],
      category: "Machine Learning",
    },
    {
      icon: Bot,
      title: "Sentiment Analysis Tool",
      description: "Built a tool to analyze social media posts and determine sentiment (positive, negative, neutral) using ML algorithms.",
      technologies: ["Python", "NLTK", "Transformers"],
      category: "NLP",
    },
    {
      icon: MessageSquare,
      title: "Voice Assistant",
      description: "Developed a voice-controlled assistant capable of understanding commands and performing various tasks.",
      technologies: ["Python", "Speech Recognition", "TensorFlow"],
      category: "AI Application",
    },
    {
      icon: ShieldCheck,
      title: "Fraud Detection System",
      description: "Implemented a machine learning model to detect fraudulent transactions in financial data with high precision.",
      technologies: ["Python", "Random Forest", "XGBoost"],
      category: "Machine Learning",
    },
    {
      icon: FileText,
      title: "Text Summarization App",
      description: "Created an application that automatically generates concise summaries of long documents using NLP techniques.",
      technologies: ["Python", "Transformers", "BERT"],
      category: "NLP",
    },
    {
      icon: Camera,
      title: "Object Detection System",
      description: "Built a real-time object detection system using YOLO algorithm for identifying multiple objects in images and videos.",
      technologies: ["Python", "YOLO", "OpenCV"],
      category: "Computer Vision",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Student Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects completed by our students during their training. These showcase the
            practical skills and expertise gained through our comprehensive courses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 bg-secondary p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">What You'll Build</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            During your training at GURANSH INNOVATIONS, you'll work on similar real-world projects
            that demonstrate your skills to potential employers. Every project is designed to solve
            actual problems and give you hands-on experience with industry-standard tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-secondary text-xs rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-primary to-accent p-12 rounded-lg"
        >
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Start Building Your Portfolio Today
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
            Join our courses and create impressive projects that will make you stand out to employers.
            Every course includes multiple hands-on projects designed to build your skills progressively.
          </p>
          <a href="https://wa.me/919877038519" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"
            >
              Chat with Us on WhatsApp
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;