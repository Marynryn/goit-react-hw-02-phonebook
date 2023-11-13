import React from "react"
import Form from "../components/Form/Form"
import Filter from "./Filter/Filter";
import ListContacts from "./ListContacts/ListContacts";
export class App extends React.Component {
 
  state = {
    contacts: [],
    filter: ''
  }

changeFilter =(event)=>{
  this.setState({filter:event.target.value})
}
handleSubmit = (newContact, filter) =>{
 const{contacts}= this.state;
 const isContactExists = contacts.some((contact) =>contact.name === newContact.name);
 if(isContactExists) {
alert(`${newContact.name} is already in contacts.`) }
  this.setState((prevState)=>({contacts:[...prevState.contacts,newContact], filter: filter,}));
  }
  handleDelete= (contactId) =>{
    this.setState((prevState) =>({contacts: prevState.contacts.filter((contact)=> contact.id !== contactId),}));
  }
  render(){
   
    
    const contactsToLower = this.state.filter.toLowerCase();
    const visualContacts = this.state.contacts ? this.state.contacts.filter((contact) =>contact.name && contact.name.toLowerCase().includes(contactsToLower)):[];
  return (
    <div
      style={{
        padding:50,
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <h1 style ={{fontSize: 48}}>Phonebook</h1>
      <Form  onSubmit={this.handleSubmit} filter ={this.state.filter}/>

<h2 style ={{fontSize: 46}}>Contacts</h2>
<Filter filter={this.state.filter} onChange={this.changeFilter}/>
<ListContacts props={this.state}  myContacts={visualContacts} onDelete={this.handleDelete}/>
    </div>
  );}
};
