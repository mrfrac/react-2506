import classNames from 'classnames';
import { NavLink } from 'react-router';
import styles from './link.module.css';

export const Link = ({ label, to }) => (
  <NavLink to={to} className={styles.navLink}>
    {({ isActive }) => (
      <span className={classNames({ [styles.active]: isActive })}>{label}</span>
    )}
  </NavLink>
);
