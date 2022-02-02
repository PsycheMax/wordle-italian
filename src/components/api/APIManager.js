import React, { Component } from 'react';

let listOfWords = "";
class APIManager extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static defaultProps = {

    }


    componentDidMount() {
        // listOfWords;
        fetch('../../words/ITALIANO.a')
            .then((r) => {
                console.log(r);
                console.log(typeof (r))
                r.text()
                    .then(text => {
                        console.log(text);

                        console.log(typeof (text));
                        listOfWords = text;
                    }
                    )
            })
    }

    render() {
        return (
            <div >
                {listOfWords}
            </div>
        )
    }

}

export default APIManager;