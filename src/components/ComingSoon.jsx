import { motion } from "framer-motion";
import ShootingStars from "./ShootingStars";
import cabin from "../assets/cabin.png";

export default function ComingSoon() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-[#071019] flex items-center">
      <div className="absolute inset-0">
        <img
          src={cabin}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#071019] via-[#071019]/70 to-[#071019]/90" />
        <ShootingStars />
      </div>
      <div className="relative max-w-6xl mx-auto px-8 py-24 w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: .8
          }}
        >
          <div className="flex items-center justify-center gap-4 text-gray-300 uppercase tracking-[6px] text-xs">
            <div className="w-12 h-px bg-gray-400" />
              Coming Soon
            <div className="w-12 h-px bg-gray-400" />
          </div>
          <h2
            className="
            mt-8
            text-4xl
            md:text-6xl
            font-serif
            text-white
            leading-tight
            max-w-4xl
            mx-auto"
          >
            A members club for private aviation.
            Membership is by application.
          </h2>

          <p
            className="
            mt-8
            text-lg
            text-gray-400
            max-w-xl
            mx-auto"
          >
            Travel platforms and Part-135 operators,
            together in one exclusive network.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
