import styles from './styles/App.module.scss';
import cards from "./data/cards.json"
import tabs from "./data/tabsData.json"
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <>
      <div className={styles.hero}>
        <h1>Hello Developer!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className={styles.cards_section}>
        <div className={styles.cards}>
          {
            cards.map((card,idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.card__content}>
                  <div className={styles.card__content__image}>
                    <img src={card.image} alt={card.imageAlt}/>
                  </div>
                  <div className={styles.card__content__description}>
                    <p>{card.content}</p>
                  </div>
                </div>
                <div className={styles.card__cta}>
                  <button>READ MORE</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.tabs__section}>
          <Tabs data={tabs} />
      </div>
    </>
  );
}

export default App;
