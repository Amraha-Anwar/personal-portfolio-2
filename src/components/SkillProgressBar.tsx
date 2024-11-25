import styles from '@/styles/SkillProgressBar.module.css';

interface SkillProgressBarProps {
  skill: string;
  percentage: number;
}

let SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skill, percentage }) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillHeader}>
        <span>{skill}</span>
        <span className={styles.percent}>{percentage}%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
