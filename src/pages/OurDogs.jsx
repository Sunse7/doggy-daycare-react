import { useSelector } from "react-redux";
import DogCard from "../Components/DogCard";
import { useCallback, useState } from "react";
import FilterDog from "../Components/FilterDog";
import styles from './Dog.module.css';

function OurDogs() {
    const ourDogs = useSelector((state) => {
        return state.dogs
    });
    
    const [filteredDogs, setFilteredDogs] = useState(ourDogs);
    const present = true;

    const filterDogs = useCallback(() => {
        const result = FilterDog(ourDogs);
        setFilteredDogs(result);
    }, [ourDogs, present])

    return ( 
        <section className={styles.container}>
            <h2>Our Dogs</h2>
            <button className={styles.button} onClick={filterDogs}>Filter Present</button>
            <button className={styles.button} onClick={() => setFilteredDogs(ourDogs)}>All Dogs</button>
            {
                filteredDogs.map((dog, i) => <DogCard key={i} data={dog} />)
            }
        </section>
     );
}

export default OurDogs;