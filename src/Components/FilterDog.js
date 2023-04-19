function FilterDog(state) {
    return state.filter(dog => dog.present === true)
}

export default FilterDog;