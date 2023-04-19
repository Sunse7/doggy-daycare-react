import { useNavigate } from "react-router-dom";
import styles from './StartPage.module.css';

function StartPage() {
    const navigate = useNavigate();


    return ( 
        <main className={styles.mainContainer}>
            <h1>Welcome to Doggy Daycare</h1>
            <img className={styles.img} src="https://images.unsplash.com/photo-1556866261-8763a7662333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Dogs on a log" />
            <button className={styles.button} onClick={() => navigate('/ourdogs')}>Our Dogs</button>
        </main>
     );
}

export default StartPage;