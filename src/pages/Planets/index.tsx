import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import Planet from 'src/components/Planet'

const Planets: NextPage = () => {
    const [data, setData] = useState<Provider[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
 
    const handleData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://swapi.dev/api/planets');
            const data = await response.json();
            setIsLoading(false);
            return setData(data.results);
        } catch(err) {
            setIsLoading(false);
            setErrorMessage("Unable to fetch planets data");
            throw new Error(`HTTP error! status: ${err}`);
        } 
    }
    
    interface Provider {
        name: string;
        created: string;
    }

    useEffect(() => {
        handleData()
    }, []);

    const renderPlanets = (
        data.length > 0 && data.map((planet: Provider) => {
            return (<Planet 
                key={`${planet.name}+${planet.created}`}
                name={planet.name}
            />)
        })        
    )

  return (
    <>
    <Layout>
        {isLoading ? <Loading /> : renderPlanets}
        {errorMessage && <p>{errorMessage}</p>}
    </Layout>
    </>
  )
}

export default Planets
