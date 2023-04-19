import { useLocation } from "react-router-dom";
import styles from './DogDetails.module.css';

function DogDetails() {

    const location = useLocation();
    const dog = location.state.data;

  return (
    <section className={styles.container}>
        <img className={styles.img} src={dog.img} alt="Picture of a dog" />
        <h2>{dog.name}</h2>
        <h2>Age: {dog.age}yr</h2>
        <p>Gender: {dog.sex}</p>
        <p>Breed: {dog.breed}</p>
        <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
        <p>Chip number: {dog.chipNumber}</p>
        <p>Phone number: {dog.owner.phoneNumber}</p>
    </section>
  )
}

export default DogDetails