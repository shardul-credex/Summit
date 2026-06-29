import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center bg-[#F7F3EB]">
      <div className="absolute inset-0 z-10">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />

        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-[#F7F3EB] via-[#F7F3EB]/80 to-transparent" />

        <div className="md:hidden absolute inset-0 bg-linear-to-b from-[#F7F3EB]/95 via-[#F7F3EB]/75 to-[#F7F3EB]/30" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#F7F3EB] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <h2 className="text-xl font-bold tracking-[8px] uppercase">
            FLYATLAS
          </h2>

          <div className="w-14 h-0.5 bg-[#C97A55] my-10" />

          <AnimatedHeading />

          <motion.p
            className="mt-8 max-w-xl text-xl leading-relaxed text-neutral-700 md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          >
            We discovered something big.
            <br />
            Summit is evolving.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col gap-5 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 0.6,
            }}
          >
            <button className="rounded-full bg-black px-10 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Learn More
            </button>

            <button className="text-black transition-colors duration-300 hover:text-[#C97A55]">
              Follow for Updates →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
