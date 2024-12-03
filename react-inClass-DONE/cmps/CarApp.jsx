import { carService } from "../services/car.service.js"

const { useState, useEffect } = React

export function CarApp() {

    const [cars, setCars] = useState(null)

    useEffect(() => {
        loadCars()
    }, [])

    function loadCars() {
        carService.query().then(setCars)
    }

    function onRemove(carId) {
        carService.remove(carId)
            .then(() => {
                setCars(cars => cars.filter(car => car.id !== carId))
            })
            .catch(err => {
                console.log('Cannot remove car', err);
            })
    }

    if (!cars) return <div>Loading...</div>
    return (
        <section className="car-app">
            <h2>List of Cars</h2>
            <ul>
                {cars.map(car =>
                    <li key={car.id}>
                        {car.vendor}
                        <button onClick={() => onRemove(car.id)} >X</button>
                    </li>
                )}
            </ul>
        </section>
    )
}