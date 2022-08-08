import { useState } from "react"
import styles from "./Tabs.module.scss"
import clsx from 'clsx';

const Tabs = ({data}) => {
    const [activeTab, setActiveTab] = useState(0)

    const clickAccordion = (idx) => {
        if(idx !== activeTab) {
            setActiveTab(idx)
        }
        else {
            setActiveTab(-1)
        }
    }

    return (
        <div className={styles.tabs}>
            {/* tab buttons for desktop only */}
            <ul className={styles.nav}>
                {
                    data.map((item, idx) => (
                        <li className={clsx(styles.nav__item, activeTab === idx && styles.nav__item_active)} key={item.title} onClick={() => setActiveTab(idx)}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
            {
                data.map((item, idx) => (
                    <section key={idx} className={styles.tab}>
                        {/* accordion buttons for mobile only */}
                        <div className={clsx(styles.tab__title, idx === activeTab && styles.tab__title_active)} onClick={() => clickAccordion(idx)}>
                            {item.title}
                            {
                              idx === activeTab ?
                                <span>&#8722;</span>
                                :
                                <span>&#43;</span>
                            }
                        </div>
                        <div className={clsx(activeTab === idx && styles.tab__contentWrapper)}>
                            <div dangerouslySetInnerHTML={{__html: item.content}} className={clsx(styles.tab__content, activeTab === idx && styles.tab__content_active)}></div>
                        </div>
                    </section>
                ))
            }
        </div>
    )
}

export default Tabs
