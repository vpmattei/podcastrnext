import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR';
import fr from 'date-fns/locale/fr';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEE, d MMMM', {
        locale: fr,
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>

            <p>O melhor para voce ouvir, :) </p>

            <span>{currentDate}</span>
        </header>
    );
}