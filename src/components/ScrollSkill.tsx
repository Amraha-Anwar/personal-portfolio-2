import { motion } from 'framer-motion';
import SkillProgressBar from '@/components/SkillProgressBar';
import styles from '@/styles/SkillProgressBar.module.css'

const skills = [
    { skill: 'HTML5', percentage: 95 },
        { skill: 'CSS3', percentage: 85 },
        { skill: 'TypeScript', percentage: 70 },
        { skill: 'TailwindCSS', percentage: 92 },
        { skill: 'Nextjs', percentage: 74 },
        { skill: 'Figma' , percentage: 65 }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, width: '0%' },
  visible: (percentage: number) => ({
    opacity: 1,
    width: `${percentage}%`,
    transition: { duration: 0.8 },
  }),
};

const SkillSection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      >
         <div className={styles.skill_section}>
        <p className={styles.skill}>SKILLS</p>
        <h2 className={styles.skill_heading}>My Skills</h2>
        </div>
        {skills.map(({ skill, percentage }) => (
          <motion.div
            key={skill}
            variants={childVariants}
            custom={percentage} // Passing the percentage dynamically
          >
            <SkillProgressBar skill={skill} percentage={percentage} />
          </motion.div>
        ))}
      </motion.section>
    );
  };
  
  export default SkillSection;
