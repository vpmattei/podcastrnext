import styles from './styles.module.scss';

export function Player() {
    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>En train d'écouter</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Selectionne un podcast à écouter</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progressBar}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider}></div>
                    </div>
                    <span>00:00</span>
                </div>

                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Shuffle"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="Retourner"/>
                    </button>
                    <button type="button" className={styles.playButton}>
                        <img src="/play.svg" alt="Play"/>
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="Play Next"/>
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="Repeat"/>
                    </button>
                </div>
            </footer>
        </div>
    )
}