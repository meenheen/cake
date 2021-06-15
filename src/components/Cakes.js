import { useState, useEffect } from 'react'

export function Cakes(props) {
    const [cakes, setCakes] = useState()

    useEffect(() => {
        if (cakes === undefined) {
            getData(props.url)
        }
    })

    const getData = (source) => {
        fetch(source)
            .then((response) => response.json())
            .then((data) => {
                setCakes(data)
            })
            .catch((error) => { console.log(error) })
    }

    const Counter = () => {
        if (cakes !== undefined) {
            console.log(cakes)
            return (
                <p>We have {cakes.found} cakes </p>
            )
        }
        else {
            return (<p>Counting cakes ... </p>)
        }
    }

    return (
        <div className="cakes">
            <h2>Cakes</h2>
            <Counter />
        </div>
    )
}

export default Cakes