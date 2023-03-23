import '../Styles/CardRestaurantStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function CardInfo ({ restaurant }) {
  const attributes = restaurant.attributes
  console.log(attributes)
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
      <div className='info-card'>
        <div className='info-name'>
          <h1> {attributes.name} </h1>
        </div>
        <div className='info-description'>
          <p> {attributes.description} </p>
        </div>
        <div className='info-address'>
          <h2>Infos :</h2>
          <a href=''>{attributes.address.phone}</a>
          <p>{attributes.address.street}, {attributes.address.postcode} {attributes.address.city}</p>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
