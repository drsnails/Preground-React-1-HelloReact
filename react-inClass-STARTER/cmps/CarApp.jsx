import { carService } from "../services/car.service.js"

const { useState, useEffect } = React

export function CarApp() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.query().then(setCars)
    }, [])

    function onRemove(carId) {
        console.log('Removing car', carId);
    }

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