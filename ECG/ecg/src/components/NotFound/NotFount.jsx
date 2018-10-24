import React, {Component} from 'react';

const backgroundImage = require('./imgs/notfound.jpg');
class NotFound extends Component {
    render() {
        return (
            <div style={{
                width:"100vw",
                height:'100vw',
                backgroundImage:`url(${backgroundImage})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'100% 100%'
            }}>
                
            </div>
        );
    }
}

export default NotFound;

