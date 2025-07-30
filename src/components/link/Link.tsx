import classNames from 'classnames';
import type { FC } from 'react';
import { NavLink, type NavLinkProps } from 'react-router';
import styles from './link.module.css';

type LinkProps = NavLinkProps & { label: string };

export const Link: FC<LinkProps> = (props) => (
  <NavLink {...props} className={styles.navLink}>
    {({ isActive }) => (
      <span className={classNames({ [styles.active]: isActive })}>
        {props.label}
      </span>
    )}
  </NavLink>
);
