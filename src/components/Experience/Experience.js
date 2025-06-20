import { ExperienceCard } from "./ExperienceCard";
import { motion } from "framer-motion";

export default function Experience() {
  const data = {
    lti: [
      "Designed and implemented end-to-end data pipelines using Apache Airflow and NiFi, optimizing data movement from source S3 to Snowflake for real-time and batch data ingestion.",
      "Developed custom Airflow DAGs to automate data orchestration and workflow scheduling, ensuring high data quality and reliability across the pipeline.",
      "Configured NiFi workflows to handle data extraction, transformation, and integration from APIs and external sources into Snowflake, improving data processing efficiency.",
      "Conducted tokenization for PII data and created final views with SCD type-2 versioning, enhancing data security and compliance.",
      "Developed stored procedures and SnowSQL scripts for SCD1 and SCD2 strategies, effectively managing historical data in a data warehouse.",
      "Enhanced data accessibility for analysis and visualization teams in Snowflake, reducing operational costs through optimized data storage and retrieval.",
      "Integrated data from multiple sources into Snowflake with automated monitoring and logging in Airflow, facilitating troubleshooting and error resolution.",
      "Proficient in Big Data technologies, including HDFS and the Hadoop ecosystem (Hive, HBase, Spark).",
    ],
  };

  return (
    <div className="text-[#11181C] dark:text-white flex flex-col items-center justify-center m-8 md:m-16">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      >
        <p className="text-3xl font-semibold mb-12">Experience</p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-4/5"
      >
        <ExperienceCard
          title="Data Engineer"
          company="LTIMindtree, Bengaluru, India"
          date="Oct 2022 – Present"
          data={data.lti}
        />
      </motion.section>
    </div>
  );
}
