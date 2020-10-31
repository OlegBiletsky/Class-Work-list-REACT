import React from 'react';
import './list.css';
import AdvancedList from '../advancedList/advancedList'
import ListItem from '../listItem/listItem';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "I want...",
            list: ["Drink coffee", "Clean PC", "Write a letter"],
            flag: true,
            advancedList: [
                {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"},]
        }
        this.handleChange = this.handleChange.bind(this) 
        // this.handleList = this.handleList.bind(this)
        this.handleAddItemToTheList = this.handleAddItemToTheList.bind(this) 
        this.handleFlagChange = this.handleFlagChange.bind(this) 
        this.handleResetList = this.handleResetList.bind(this); 
    }
    handleChange(e) {/*функція яка змінює інпут онлайн*/
        this.setState({
            name: e.target.value,
        })
    }
    handleAddItemToTheList(e) {/*функція яка при кліці на кнопку ДОДАТИ, додає нове завдання (яке сидить вже в стейті) до нашого списку завдань у стейті*/
        e.preventDefault();
        this.setState(
            state => { 
                const list = [...this.state.list, state.name]
                return {
                    list,
                    name: "...",
                };
            }
        )
    }
    handleResetList(e) {/*функція яка очищає ліст з справами*/
        e.preventDefault();
        this.setState({
            list: []
        })
    }
    // handleList() {/*функція яка відмальовує список на сторінці*///!перенесли в інший файл
    //     const list = this.state.list;
    //     return(
    //         list.map(item  => <h2 key={item}> {item} </h2>)
    //     )
    // }
    handleFlagChange() {/*функція що міняє флаг, фактично ховає/показує ліст*/
        this.setState({
            flag: !this.state.flag,
        })
    }
    // handleAdvancedList() {/*функція яка відмальовує колекцію на сторінці*///!перенесли в інший файл
    //     const advancedList = this.state.advancedList;
    //     return(
    //         advancedList.map(item  => (
    //             <div key={item.id}> 
    //                 <h4>{item.name}</h4>    
    //                 <div>{item.age}</div>      
    //                 <div>{item.type}</div>     
    //                 <em>UsersHobby:</em>
    //                 <ul>{item.hobby.map(
    //                     i => <li>{i}</li>
    //                 )}</ul>       
    //             </div>
    //             )
    //         )
    //     )
    // }

    

    render() {
        return(
            <div className='list'>
                
                <form>
                    <input 
                        type='text'
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <div><em>{this.state.name}</em></div>

                    <button onClick={this.handleAddItemToTheList}>Додати</button>
                    <button onClick={this.handleResetList}>Очистити list</button>
                </form>
                

                {/* {this.state.flag &&      
                    <div>
                    <ul> {this.handleList()} </ul> 
                    </div>
                } */}
                {this.state.flag &&      
                    <div>
                    <ul> <ListItem list={this.state.list}/> </ul> 
                    </div>
                }
                
                <div>
                    <button onClick={this.handleFlagChange}>Show/Hide list</button>
                </div>
                <hr color="black"/>
                {/* <div>{this.handleAdvancedList()}</div> */}
                <div><AdvancedList advancedList={this.state.advancedList}/></div>
                
            </div>
        ) 
    }
}
export default List;