import { motion } from "framer-motion";

const ReusableMotion = ({
  children,
  initialY = "100vh",
  initialOpacity = 0,
  animateY = 0,
  animateOpacity = 1,
  delay = 0,
  duration = 1,
  ease = "easeInOut",
  className = "",
  ...props
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: initialY, opacity: initialOpacity }}
      animate={{ y: animateY, opacity: animateOpacity }}
      transition={{ delay, duration, ease }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ReusableMotion;
