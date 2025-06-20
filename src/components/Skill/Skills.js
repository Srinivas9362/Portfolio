import { SkillCard } from "./SkillCard";
import {
  SiSnowflake,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiApacheairflow,
  SiApachenifi,
  SiApachehadoop,
  SiApachespark,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="text-[#11181C] dark:text-white flex flex-col md:flex-row justify-center m-16">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      >
        <p className="mr-56 text-xl font-semibold">Skills</p>
      </motion.div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0 text-[#171717] dark:text-white text-xl grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
        <SkillCard icon={<SiSnowflake />} title="Snowflake" />
        <SkillCard icon={<SiPython />} title="Python" />
        <SkillCard icon={<FaDatabase />} title="SQL" />
        <SkillCard icon={<SiMysql />} title="MySQL" />
        <SkillCard icon={<SiAmazonaws />} title="AWS Glue" />
        <SkillCard icon={<SiAmazonaws />} title="AWS Redshift" />
        <SkillCard icon={<SiAmazonaws />} title="AWS Athena" />
        <SkillCard icon={<SiApachespark />} title="PySpark" />
        <SkillCard icon={<SiApachehadoop />} title="Hadoop" />
        <SkillCard icon={<SiApacheairflow />} title="Apache Airflow" />
        <SkillCard icon={<SiApachenifi />} title="Apache NiFi" />
      </div>
    </div>
  );
}
