import { Link } from "react-router-dom";
import styles from "./DogCard.module.css";

function DogCard({ data }) {
  return (
    <Link to="/dogdetails" state={{ data: data }}>
      <article className={styles.article}>
        <img className={styles.img} src={data.img} alt="" />
        <section className={styles.nameAgeContainer}>
          <h2>{data.name}</h2>
          <h2>{data.age}yr</h2>
        </section>
        <section className={styles.breedOwnerContainer}>
          <p>{data.breed}</p>
          <p>{data.owner.name}</p>
        </section>
      </article>
    </Link>
  );
}

export default DogCard;
