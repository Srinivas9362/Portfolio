import { motion } from "framer-motion";

export function ExperienceCard({ title, company, date, data }) {
  return (
    <motion.div
      initial={{ x: 300 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      whileHover={{ scale: 1.01 }}
      className="bg-[#FFFFFF] dark:bg-[#171717] p-6 rounded-lg border-2 dark:border-0 text-[#495057] dark:text-[#889096] shadow-md"
    >
      <h6 className="text-[#11181C] dark:text-white font-semibold text-xl mb-1">
        {title}
      </h6>
      <p className="text-lg font-medium">{company}</p>
      <p className="text-base text-gray-500 dark:text-gray-400 mb-4">{date}</p>

      <ul className="list-disc pl-5 space-y-2 leading-relaxed">
        {data.map((item, index) => (
          <motion.li
            key={index}
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
