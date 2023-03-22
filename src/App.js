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
  //On déclare une variable (restaurant ) qui va contenir nos restaurants
  //On obtient une méthode (setRestaurants) perettant de mettre a jour les restaurant et de rafraichir l'affichage
  const [restaurants, setRestaurants] = useState()

  //méthode du cycle de vie d'un composant React permettant d'effectuer une action au montage du composant
  // le montage c'est l'apparition du composant a l'ércan
useEffect(() => {
  //On créé une méthode pour récuperer les données provenant du backend (strapi)
  const loadData = async() => {
    // On récupère les données du backend avec la librairie Axios (C'est un appel HTTP)
    const response = await axios.get('http://localhost:1337/api/restaurants?populate=*') // populate=* = permet de récupérer toute les données
    //On vérifie que l'appell- d'API s'est bien passé (Status = 200 = "ok")
    if (response.status === 200) {
      // Si l'appel d'API est OK, on enregistre les restaurant dand la variable "restaurant"
      const data =  response.data.data
      setRestaurants(data)
    }
  }
  // On appel la méthode créée précédament 
  loadData()
}, [])

  return (
    <div className="App">
      <main className="content">
        <Header />
        <Clock />
        {
          // On vérifie qu'on as bien récupérer les restaurants
          // On créer une boucle sur le tableau de restaurant grâce à la fonction "map()"
          // On retourne pour chaque restaurant une Card oiur afficher son contenu
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
