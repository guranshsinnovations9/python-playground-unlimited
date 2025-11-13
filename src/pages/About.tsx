import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About GURANSH INNOVATIONS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of AI and Python developers through quality education
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GURANSH INNOVATIONS was founded with a clear vision: to make quality AI and Python education
                accessible to everyone, regardless of their background or location. We believe that the future
                belongs to those who can code, create, and innovate using artificial intelligence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our journey began with a simple observation - while AI and Machine Learning are transforming
                every industry, quality education in these fields remains out of reach for many aspiring
                learners. We set out to change that by creating comprehensive, hands-on courses that are both
                affordable and effective.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to offer industry-leading training programs in English, Hindi, and Punjabi,
                making cutting-edge technology education accessible to students from diverse linguistic backgrounds.
                Our students don't just learn - they build real projects, gain practical experience, and emerge
                as job-ready professionals.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower youth with world-class AI and Python education, enabling them to build
                    innovative solutions and launch successful careers in technology. We're committed to
                    bridging the gap between academic learning and industry requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Lightbulb className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading institute for AI and Python education, recognized for producing
                    skilled professionals who drive innovation in their fields. We envision a future where
                    every student has the opportunity to master these transformative technologies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-6 text-center">What Sets Us Apart</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Personalized Attention</h4>
                    <p className="text-sm text-muted-foreground">
                      Small batch sizes ensure every student gets individual guidance and support
                    </p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Practical Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-world projects and hands-on experience, not just theoretical knowledge
                    </p>
                  </div>
                  <div className="text-center">
                    <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Industry-Ready</h4>
                    <p className="text-sm text-muted-foreground">
                      Curriculum designed to match current industry standards and requirements
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center bg-secondary p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Our Tagline Says It All</h3>
          <p className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider">
            Learn. Code. Create. Innovate.
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            These four words encapsulate our approach to education - continuous learning, practical coding,
            creative problem-solving, and innovative thinking.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;