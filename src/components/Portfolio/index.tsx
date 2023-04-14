import { useEffect, useState } from 'react';

import { CaseType } from '../../types';
import Case from './components/Case';
import styles from './index.module.css';

function Portfolio({ open = false, data }: { open: boolean, data: CaseType[] }) {
  const [activeId, setActiveId] = useState<string>(open ? data[0]._id : '');


  useEffect(() => {
    if (open && data?.length) setActiveId(data[0]._id)

    if (!open) setActiveId('')
  }, [open]);

  return (
    <div className={styles.portfolio}>
      <div className={styles.casesList}>
        {
          data.map((caseItem) => <Case {...caseItem} key={caseItem._id} active={caseItem._id === activeId} onPress={setActiveId} />)
        }
      </div>
    </div>
  );
}

export default Portfolio;
