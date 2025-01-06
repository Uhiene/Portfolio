import { motion } from 'framer-motion';
import { styled } from '@emotion/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const StaggeredAnimation = () => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.07,
          delayChildren: 0.05,
        }
      }
    };
  
    const childVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
  
    return (
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i} 
              variants={childVariants}
              initial="hidden" 
              animate="visible"
              className="bg-yellow-500 rounded-full w-20 h-20"
            />
          ))}
        </motion.div>
      </Container>
    );
  };

export default StaggeredAnimation