import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import variables from './Styles/variables.css';
import {useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  const [restaurants, setRestaurants] = useState()
useEffect(() => {
  const loadData = async() => {
    const response = await axios.get('http://localhost:1337/api/restaurants?populate=*')
    if (response.status === 200) {
      const data =  response.data.data
      setRestaurants(data)
    }
  }
  loadData()
}, [])

  return (
    <div className="App">
      <main className="content">
        <Header />
        <Clock />
        {
          restaurants && restaurants.map(restaurant => {
            return (
              <Card restaurant={restaurant} />
            )
          })
        }
      <Footer />
      </main>
    </div>
  );
}

export default App;
