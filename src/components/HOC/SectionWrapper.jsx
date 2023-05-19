import styles from './HOC.module.scss';

const SectionWrapper = (Component, Title) => function HOC() {
  return (
    <section
      className={Title ? styles.SectionWrapperWithTitle : styles.SectionWrapper}
    >
      <div className={styles.Container}>
        {Title && <h2 className={styles.SectionWrapperTitle}>{Title}</h2>}
        <Component />
      </div>
    </section>
  );
};

export default SectionWrapper;
