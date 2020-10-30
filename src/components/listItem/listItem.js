import React from 'react'

function ListItem(props) {/*функція яка відмальовує список на сторінці*/
    const list = props.list;
    return(
        list.map(item  => <h2 key={item}> {item} </h2>)
    )
}
export default ListItem;
