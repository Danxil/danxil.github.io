import { PortableText } from "@portabletext/react";
import { ExperienceType, MetaType, SkillsType } from "../../types";
import styles from "./index.module.css";

const CV = ({ experience, skills, meta }: { experience: ExperienceType[], skills: SkillsType, meta: MetaType }) => {
    return <div className={styles.bg}>
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Vadym Bondarenko</h1>
                <p className={styles.summary}>
                    <PortableText value={meta.summary} />
                </p>
            </div>
            <div className={styles.right}>
                <div>
                    <p>Tulsa, USA</p>
                    <p>Phone: +1 (539) 292-3558</p>
                    <p>Email: vadym.bondarenko.ggggaa@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
};

export default CV