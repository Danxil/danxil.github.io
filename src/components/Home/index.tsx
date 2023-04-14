import clsx from 'clsx';
import styles from './index.module.css';
import logo from './logo.svg'

export type MenuItemType = {
    title: string,
    onClick: () => void,
    active: boolean
}

function Home({ active, rightSidebarMode, menuItems }: { active: boolean, rightSidebarMode: boolean, menuItems: MenuItemType[] }) {

  return (
    <div className={clsx(styles.home, active && styles.active, rightSidebarMode && styles.rightSidebarMode)}>
        <div className={styles.title}>
            <img src={logo} alt="" />
        </div>
        <ul className={styles.menu}>
            {
                menuItems.map(menuItem => (
                    <li
                        key={menuItem.title}
                        onClick={menuItem.onClick}
                        className={clsx(styles.menuItem, menuItem.active && styles.menuItemActive)}
                    >
                        {menuItem.title}
                    </li>
                ))
            }
        </ul>
    </div>
  );
}

export default Home;
