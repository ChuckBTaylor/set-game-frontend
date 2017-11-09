import React from 'react';

const Card = (props) => {
  const handleClick = () => {
    props.onCardClick(props.card)
  }
  const imgSrc = `${props.card.color}-${props.card.shape}-${props.card.fill}-${props.card.count}`
  const imgBorder = props.card.clicked ? props.card.color : "none"
  return (
  <div onClick={handleClick} >
    <img style={{border: `5px solid ${props.card.clicked ? props.card.color : 'white'}`}} src={require(`../../cardImages/${imgSrc}.jpg`)} />

  </div>
  )
}

Card.defaultProps = {

}

export default Card
//
// {props.number} -
// {props.card.color}
// {props.card.shape}
// {props.card.fill}
// {props.card.count}
