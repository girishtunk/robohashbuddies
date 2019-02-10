import React from 'react';
import Card from './Card';

const CardList = ({robos}) => {
  return(
    robos.map((user,i) => {
      return (<Card
        key={robos[i].id}
        id={robos[i].id}
        name={robos[i].name}
        email={robos[i].email}/>);
    })
  );
}

export default CardList;
