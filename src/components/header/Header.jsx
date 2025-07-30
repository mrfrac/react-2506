import { LoginButton } from '../login-button/LoginButton.jsx';
import { ToggleThemeButton } from '../toggle-theme-button/ToggleThemeButton.jsx';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Рестораны</h1>

      <div className={styles.menu}>
        <ToggleThemeButton />
        <LoginButton />
      </div>
    </header>
  );
};
