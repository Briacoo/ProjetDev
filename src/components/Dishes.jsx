import '../Styles/DishesStyles.css'

const IMAGE_URL = 'http://localhost:1337'

function Dishes ({ dish }) {
  const attributes = dish.attributes
  let imageUrl = ''
  if (attributes.image.data) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'http://via.placeholder.com/300x150'
  }

  return (
    <>
      <div className='card-dishes'>
        <div>
          <img className='img-plat' src={imageUrl} alt='Image du plat' />
        </div>
        <div>
          <h1 className='title' key={dish.id}>{dish.attributes.name}</h1>
          <p className='description' key={dish.id}>{dish.attributes.description}</p>
        </div>
      </div>
    </>
  )
}

export default Dishes
