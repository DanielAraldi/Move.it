import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src='https://avatars.githubusercontent.com/u/50931267?v=4'
        alt='Daniel Sansão Araldi'
        title='Daniel Sansão Araldi'
      />
      <div>
        <strong>Daniel Sansão Araldi</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
