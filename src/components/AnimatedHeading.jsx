import { motion } from "framer-motion";

const words = [
  { text: "Something", italic: false },
  { text: "new", italic: true },
  { text: "is taking shape.", italic: false },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AnimatedHeading() {
  return (
    <motion.h1
      className="max-w-4xl text-5xl leading-none md:text-7xl lg:text-8xl"
      style={{ fontFamily: '"Cormorant Garamond", serif' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block mr-4 ${
            word.italic ? "italic" : ""
          }`}
        >
          {word.text}
        </motion.span>
      ))}
    </motion.h1>
  );
}
