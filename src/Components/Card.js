import React from 'react';

const Card = ({name, email, id}) => {
  return(
    <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?100x100`} alt='robots dp'/>
      <h2>{name}</h2>
      <h4>{email}</h4>
    </div>
  );
}
export default Card;
