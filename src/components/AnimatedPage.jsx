import { motion } from "framer-motion";

export default function AnimatedPage({ children, animation }) {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
