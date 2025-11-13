import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm"; // adjust path if needed

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our courses? Want to enroll? We're here to help!
            Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+919877038519" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98770 38519
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:guranshsinghinnovations9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      guranshsinghinnovations9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#25D366]/10 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919877038519" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors">
                      Chat with us instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Class Schedule</h3>
                    <p className="text-muted-foreground">
                      Monday to Friday
                      <br />
                      Weekends Off
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Patiala, Punjab, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Use the new full-fledged EnquiryForm */}
                <EnquiryForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">Ready to Enroll?</h3>
              <p className="mb-4 text-primary-foreground/90">
                Call us now to reserve your spot in the next batch!
              </p>
              <a href="tel:+919877038519">
                <Button size="lg" variant="secondary" className="w-full md:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#25D366] text-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">Have a Quick Question?</h3>
              <p className="mb-4 text-white/90">
                Chat with us on WhatsApp for instant responses!
              </p>
              <a href="https://wa.me/919877038519" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="w-full md:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;