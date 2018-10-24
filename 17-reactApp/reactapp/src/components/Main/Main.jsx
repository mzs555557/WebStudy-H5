import React, {Component} from 'react';

import './index.css';
class Main extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div id="part1" className="part">
                        <div className="title">
                            <p className="p1">兰途移动校园</p>
                            <p className="p2">—— 我们做的不仅仅是APP</p>
                        </div>
                        <div className="bot">梳理、提升、准备，我们为您提供一站式全生命周期的呵护
                            <p className="btn"/>
                        </div>
                    </div>
                    <div className="bg1 bg"/>
                    <div id="part2" className="part">
                        <div className="wrap">
                            <div className="left">
                                <p className="p1">兰途移动校园</p>
                                <p className="p2">国内最有粘性的定制化移动校园</p>
                                <p className="p3">不只是APP，更是新的校园生态系统</p>
                            </div>
                            <div className="right">
                                <p className="p1"><img src="img/campus/m3.png" alt="" /></p>
                                <p className="p2"><img src="img/campus/ct3_out.png" alt="" /></p>
                            </div>
                        </div>
                        <p className="btn"/>
                    </div>
                    <div className="bg2 bg"/>
                </div>
            </div>
        );
    }
}

export default Main;
