import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="section-description mt-5">
            Feel free to connect with me for internship opportunities,
            collaborations, project discussions, or learning guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=refaiii03@gmail.com" target="_blank" rel="noopener noreferrer" className="clean-card text-center">
            <Mail className="text-primary mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-muted-foreground mt-2">refaiii03@gmail.com</p>
          </a>

          <a href="tel:+918848904913" className="clean-card text-center">
            <Phone className="text-primary mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-muted-foreground mt-2">+91 884 890 4913</p>
          </a>

          <a
            href="https://wa.me/918848904913"
            target="_blank"
            rel="noopener noreferrer"
            className="clean-card text-center"
          >
            <MessageCircle className="text-primary mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="text-muted-foreground mt-2">+91 884 890 4913</p>
          </a>

          <div className="clean-card text-center">
            <MapPin className="text-primary mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-muted-foreground mt-2">Palakkad, Kerala, India</p>
          </div>

          <a
            href="https://github.com/Refaiii"
            target="_blank"
            rel="noopener noreferrer"
            className="clean-card text-center"
          >
            <Github className="text-primary mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-muted-foreground mt-2">github.com/Refaiii</p>
          </a>

          <a
            href="https://www.linkedin.com/in/muhammed-refaidy-834b34323"
            target="_blank"
            rel="noopener noreferrer"
            className="clean-card text-center"
          >
            <Linkedin className="text-primary mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-muted-foreground mt-2">linkedin.com/in/muhammed-refaidy-834b34323</p>
          </a>
        </div>
      </div>
    </section>
  );
};
