import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{
    
    //This is a lifecycyle hook component that will be called every time the component is inserted into the DOM.
    //In the lifecycle hook, a http get method will be called which will
    //return the json data from the link inside the get method
    //after that it gets assigned to the state of the component
    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then(
            (response)=>{
                this.setState({
                    books:response.data
                })
            }
        )
        .catch((error)=> {
            console.log(error);
        })
    }

    //This state struct includes an array of books
    state = {
        books:[]
    }
    
    //Draws out onto the screen whatever is returned
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}