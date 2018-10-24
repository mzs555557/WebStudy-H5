import React, {Component} from 'react';

class Content extends Component {

    render() {
        console.log(this.props.match);
        return (
            <div>
                这是内容的内容
                这是内容的内容这是内容的内容这是内容的内容这是内容的内容这是内容的内容
            </div>
        );
    }
}

export default Content;
