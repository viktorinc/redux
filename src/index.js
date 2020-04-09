import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";
import uuid from 'react-uuid';
import AddContact from './Components/AddContact/AddContact';

class App extends Component {

    state = {
        List: [
            {
                id: uuid(),
                name: "Bohdan Kuchkovskyi",
                phone: "+38 (098) 96 36 224",
                email: "bohdan20020808@gmail.com",
                address: "Andriy Melnuk 16",
                gender: "men",
                avatar: 5,
                isFavorite: false
            },
            {
                id: uuid(),
                name: "Svitlana Riaba",
                phone: "+38 (095) 41 66 765",
                email: "oksanariabii@gmail.com",
                address: "Big Omelyana 69",
                gender: "women",
                avatar: 12,
                isFavorite: true 
            },
            {
                id: uuid(),
                name: "Viktor Kubrrak",
                phone: "+38 (098) 69 63 422",
                email: "viktorkubrakpl@gmail.com",
                address: "Roman Shukhevuch 8",
                gender: "men",
                avatar: 10,
                isFavorite: false
            }
        ]
    };

    setFavorite = id => {
        const index = this.state.List.findIndex(t => t.id === id);
        let tempList = this.state.List.slice();
        tempList[index].isFavorite = !tempList[index].isFavorite;
    
        this.setState(state => {
            return{
                isFavorite: !this.tempList
            }
        })
    }

    addContact = (name, phone, email, address, avatar, gender) => {
        const newContact = {
            id: uuid(),
            name: name,
            phone: phone,
            email: email,
            address: address,
            avatar: avatar,
            gender: gender,
            isFavorite: false
        }

        this.setState(state => {
            let tempList = this.state.List.slice();
            tempList.push(newContact);
            
            return {
                List: tempList
            }

        });
    }

    render() {
        return (
            <Fragment>

                <header className="hat">
                    <h2 className="title">Contact book</h2>
                </header>

                <main>
                    <ContactList Data={this.state.List} setFavorite={this.setFavorite}></ContactList>
                    <AddContact addContact={this.addContact}></AddContact>
                </main>

            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
