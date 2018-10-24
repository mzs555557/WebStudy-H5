import React, {Component} from 'react';

import '../../font/iconfont.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="iconfont icon-jijiubaojingzhongxindianhua" style={styles.size}>Home</h1>
            </div>
        );
    }
}

export default Home;

const  styles = {
    size:{
        fontSize: '30px'
    }
};
