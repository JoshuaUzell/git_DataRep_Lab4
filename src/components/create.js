import React from "react";

export class Create extends React.Component {

    //This will initilize values of class
    constructor() {
        super(); //call the parents constructor
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookURL = this.onChangeBookURL.bind(this);

        //Initilize the different states to empty strings
        this.state = {
            title: '',
            cover: '',
            author: '',
            url: ''
        }
    }

    //These methods will be called upon 
    //activating the onSubmit event 
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);
        console.log(`${this.state.url}`);

        //Sets the states back to empty string
        this.setState({
            title: '',
            cover: '',
            author: '',
            url: ''
        })

    }

    //When this method is called, the title of the book will 
    //change based on what was typed in
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    //When this method is called, the cover of the book will 
    //change based on what was typed in
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }
    //When this method is called, the author of the book will 
    //change based on what was typed in
    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    //When this method is called, the url of the book will 
    //change based on what was typed in
    onChangeBookURL(e) {
        this.setState({
            url: e.target.value
        })
    }

    //Draws onto the screen
    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                {/**The onSubmit event calls this instance of the handle submit method*/}
                <form onSubmit={this.handleSubmit}>
                    {/**Creates a new div Add book title*/}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    {/**Creates a new div Add book cover*/}
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    {/**Creates a new div Add book author*/}
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    {/**Creates a new div Add book url*/}
                    <div className="form-group">
                        <label>Add Book URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.url}
                            onChange={this.onChangeBookURL}
                        />
                    </div>

                    {/**This is the input box that the user can type into*/}
                    <input type="submit" value="Add Book"></input>
                </form>
            </div>
        );
    }
}