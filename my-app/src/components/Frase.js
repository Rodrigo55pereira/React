import styles from './Frase.module.css'

function Frase() {
    return (
        // JSX
        <div className={styles.fraseContainer}>
            <h3 className={styles.fraseContent}>A melhor forma de prever o futuro é criá-lo</h3>
        </div>
    )
}

export default Frase
