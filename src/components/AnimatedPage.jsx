import { motion } from "framer-motion";

export default function AnimatedPage({ children, animation }) {
  return (
    <motion.div
  style={{ overflowX: "hidden" }}
  variants={animation}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.35, ease: "easeInOut" }}
>

      {children}
    </motion.div>
  );
}
