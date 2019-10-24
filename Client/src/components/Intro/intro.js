import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../splash-06.png';
import './intro.scss';

class intro extends React.Component {
    render() {
        return(
            <>
            <Link to="/race"><img className="background" src={img}></img></Link>
            </>
        )
    }
}

export default intro;