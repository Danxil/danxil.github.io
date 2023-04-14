import styles from './index.module.css';
import { PositioningProps } from './types';
import clsx from 'clsx';

function Positioning({ elements }: PositioningProps) {
  return (
    <div className={styles.container}>
        {
            elements.map(({ node, className, id }) => (
                <div
                    className={clsx(styles.element, className)}
                    key={id}
                >
                    {node}
                </div>
            ))
        }
    </div>
  );
}

export default Positioning;
