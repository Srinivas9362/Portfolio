import { motion } from "framer-motion";

export function ExperienceCard({ title, company, date, data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
      whileHover={{ scale: 1.01 }}
      className="relative bg-white dark:bg-[#171717] p-6 md:p-8 rounded-xl border-l-8 border-blue-500 shadow-md hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Highlight badge/ribbon */}
      <div className="absolute -left-8 top-6 bg-blue-500 text-white px-3 py-1 rounded-r-lg shadow-md text-sm font-semibold">
        {title}
      </div>

      <div className="ml-2">
        <h6 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{company}</h6>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</p>

        <ul className="list-disc pl-5 space-y-3 leading-relaxed text-gray-700 dark:text-gray-300 text-base">
          {data.map((item, index) => (
            <motion.li
              key={index}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="transition-all duration-300 hover:pl-2 hover:text-blue-600 dark:hover:text-blue-400"
              dangerouslySetInnerHTML={{ __html: highlightKeywords(item) }}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ✅ Helper function to bold or highlight key tech terms
function highlightKeywords(text) {
  const keywords = [
    "Apache Airflow",
    "NiFi",
    "Snowflake",
    "S3",
    "SCD type-2",
    "SCD1",
    "SnowSQL",
    "PII",
    "HDFS",
    "Hive",
    "HBase",
    "Spark",
  ];
  let result = text;
  keywords.forEach((kw) => {
    const regex = new RegExp(`(${kw})`, "gi");
    result = result.replace(
      regex,
      `<span class="font-semibold text-blue-600 dark:text-blue-400">$1</span>`
    );
  });
  return result;
}
