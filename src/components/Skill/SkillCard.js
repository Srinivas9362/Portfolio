import { motion } from "framer-motion";

export function SkillCard({ icon, title }) {
  return (
    <motion.div
      initial={{ x: 300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      whileHover={{ scale: 1.1 }}
      className="dark:bg-[#171717] bg-white text-7xl p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex justify-center items-center"
      title={title}
    >
      {icon}
    </motion.div>
  );
}
