import { motion } from "framer-motion";

export default function AnimatedPopupContent({
  name,
  description,
  isVisible,
}: {
  name: string;
  description: string;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
      transition={{ type: "spring", stiffness: 150, damping: 40 }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
    </motion.div>
  );
}