// import '../Styles/CardRestaurantHeaderStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function CardRestaurantHeader ({ restaurant }) {
  const attributes = restaurant.attributes
  let imageUrl = ''
  if (attributes.image.data) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'http://via.placeholder.com/300x150'
  }

  return (
    <div className='card'>
      <div className='img-restaurant'>
        <img src={imageUrl} alt='Image du restaurant' />
      </div>
    </div>
  )
}

export default CardRestaurantHeader
