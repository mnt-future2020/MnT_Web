import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Users, Rocket, Award, MapPin } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to transform digital experiences for businesses.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Expansion to Madurai",
    description: "Established our headquarters in Tamil Nadu to better serve our growing clientele.",
    icon: MapPin,
  },
  {
    year: "2024",
    title: "Team Growth",
    description: "Expanded to a team of skilled developers, designers, and project managers.",
    icon: Users,
  },
  {
    year: "Present",
    title: "Industry Recognition",
    description: "Recognized for delivering 200+ successful projects with 5.0 client rating.",
    icon: Award,
  },
];

const team = [
  {
    name: "Udhayaseelan Renganathan",
    role: "Founder",
    description: "Visionary leader driving digital transformation",
  },
  {
    name: "Rahavi Udhayaseelan",
    role: "CEO & Managing Director",
    description: "Strategic direction and business growth",
  },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="about" className="relative py-20 md:py-24 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Building the <span className="text-gradient">Future</span> Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Magizh NexGen Technologies (MNT Future) is committed to helping businesses
            transform their ideas into digital reality through innovation and expertise.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto mb-32">
          {/* Animated Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="absolute inset-0 bg-border" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-secondary"
            />
          </div>

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${isLeft ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                    <div className="glass-card p-6 rounded-2xl inline-block">
                      <span className="text-4xl font-display font-bold text-gradient mb-2 block">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-display font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </motion.div>

                  {/* Empty Side */}
                  <div className="w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet Our <span className="text-gradient">Leadership</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visionary leaders driving innovation and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="glass-card p-8 rounded-3xl text-center hover:border-primary/30 transition-all duration-300">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <h4 className="text-xl font-display font-bold mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 text-center"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To empower businesses with innovative, scalable, and user-centric
              digital solutions that drive growth and transform industries."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
