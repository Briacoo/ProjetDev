import Dishes from './Dishes'
import '../Styles/DishesStyles.css'

function DishesList ({ dishes }) {
  console.log(dishes)
  // filtrer les plats en fonction de leur type
  const dish = dishes.data.filter(dish => dish.attributes.type === 'dish')
  const desserts = dishes.data.filter(dish => dish.attributes.type === 'dessert')
  const starters = dishes.data.filter(dish => dish.attributes.type === 'starter')

  return (
    <>
      <div>
        <div className='starter'>
          <h1>starter</h1>
          <br />
          {
          // afficher les plats de type starter
          starters.map(dish => {
            return (
              <Dishes key={dish.id} dish={dish} />
            )
          })
          }
        </div>
        <div className='dish'>
          <h1>dish</h1>
          <br />
          {
            dish.map(dish => {
              return (
                <Dishes key={dish.id} dish={dish} />
              )
            })
          }
        </div>
        <div className='dessert'>
          <h1>dessert</h1>
          <br />
          {
            // afficher les plats de type dessert
            desserts.map(dish => {
              return (
                <Dishes key={dish.id} dish={dish} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default DishesList
