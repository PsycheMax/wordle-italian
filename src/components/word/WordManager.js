import React, { Component } from 'react';

class WordManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guessedWord: "TEST",
            won: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static defaultProps = {
        wordToGuess: "ANELO"
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.guessedWord === this.props.wordToGuess) {
            this.setState({ won: true });
        }
    }



    render() {
        return (
            <div className='grid place-items-center '>

                <div>
                    Word is {this.props.wordToGuess}
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.guessedWord} name="guessedWord" id="guessedWord" type="text" onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                    {this.state.won ?
                        <div>YES</div>
                        : <div></div>
                    }

                </div>

            </div>
        )
    }

}

export default WordManager;