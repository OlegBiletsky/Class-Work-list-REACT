import React from 'react'

function AdvancedList(props) {
    const advancedList = props.advancedList;
    return(
        advancedList.map(item  => (
            <div key={item.id}> 
                <h4>{item.name}</h4>    
                <div>{item.age}</div>      
                <div>{item.type}</div>     
                <em>UsersHobby:</em>
                <ul>{item.hobby.map(
                    i => <li>{i}</li>)}</ul>       
            </div>
        ))
    )
}
export default AdvancedList;
