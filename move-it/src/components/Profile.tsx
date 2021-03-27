import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/50931267?v=4"
        alt="Daniel Sansão Araldi"
        title="Daniel Sansão Araldi"
      />
      <div>
        <strong>Daniel Sansão Araldi</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
