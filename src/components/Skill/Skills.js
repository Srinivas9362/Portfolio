import { SkillCard } from "./SkillCard";
import {
  SiSnowflake,
  SiPython,
  SiMysql,
  SiApacheairflow,
  SiApachehadoop,
  SiApachespark,
} from "react-icons/si";
import { FaDatabase, FaTools } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { motion } from "framer-motion";

// 🧠 Core Skills
const coreSkills = [
  { icon: <SiPython />, title: "Python" },
  { icon: <FaDatabase />, title: "SQL" },
  { icon: <SiMysql />, title: "MySQL" },
  { icon: <SiSnowflake />, title: "Snowflake" },
  { icon: <SiApachespark />, title: "PySpark" },
  { icon: <SiApachehadoop />, title: "Hadoop" },
];

// ☁️ Cloud Skills (with separate icons)
const cloudSkills = [
  { icon: <FaTools />, title: "AWS Glue" },
  { icon: <FaDatabase />, title: "AWS Redshift" },
  { icon: <HiOutlineChartBar />, title: "AWS Athena" },
];

// 🛠️ Other Tools
const otherSkills = [
  { icon: <SiApacheairflow />, title: "Apache Airflow" },
  {
    icon: (
      <img
        src="/Nifi_icon.png"
        alt="Apache NiFi"
        className="w-10 h-10"
        style={{ objectFit: "contain", borderRadius: "0.25rem" }}
      />
    ),
    title: "Apache NiFi",
  },
];

// 🔄 Reusable Skill Section
const SkillSection = ({ title, skills }) => (
  <div className="mb-12 w-full">
    <h2 className="text-xl font-bold mb-4 text-[#0f172a] dark:text-white">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={skill.icon} title={skill.title} />
        </motion.div>
      ))}
    </div>
  </div>
);

// 📦 Main Exported Component
export default function Skills() {
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col items-center m-8 md:m-16">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      >
        <p className="text-3xl font-semibold mb-12">Skills</p>
      </motion.div>

      <div className="w-full md:w-4/5">
        <SkillSection title="🧠 Core Skills" skills={coreSkills} />
        <SkillSection title="☁️ Cloud Skills" skills={cloudSkills} />
        <SkillSection title="🛠️ Other Tools" skills={otherSkills} />
      </div>
    </div>
  );
}
