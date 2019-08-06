import React, { Component } from 'react';
import './Loader.scss'
import pubSub from '../../utilities/pubSub';
import { SHOW_LOADER } from '../../constants/constants';

class Loader extends Component {
    constructor(props){
        super(props);
        this.state={
            showLoader : true
        }
    }
    componentDidMount(){
        this.pubSubRef = pubSub.subscribe(SHOW_LOADER,(isShow) =>{
            this.setState({showLoader : isShow});
        });
    }

    componentWillUnmount(){
        this.pubSubRef.remove();
    }
    render() { 
        if (this.state.showLoader) {
          return ( 
            <div className="loaderBox">
                <div className="loader-inner ball-pulse">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
         );  
        } else {
            return null;
        }
        
    }
}


export default Loader;