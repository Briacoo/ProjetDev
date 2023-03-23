import axios from 'axios'
import CardInfo from '../components/CardRestaurant'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurants] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurants(data)
      }
    }
    return loadData
  }, [])

  return restaurant && (
    <>
      <h1>Fiche d'un Restaurant : {id}</h1>
      <div>
        <CardInfo restaurant={restaurant} />
      </div>
      <pre>{JSON.stringify(restaurant, null, 2)}</pre>
    </>
  )
}

export default Restaurant
