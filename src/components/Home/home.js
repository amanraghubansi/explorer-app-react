import React, { Component } from 'react'
import { getContinents, getContinentDetailsByCode } from '../../Service/rest-service';
import "./home.scss";
import continentDataManager from '../../Service/data-service';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {continents: []  }
    }

    componentDidMount() {
        getContinents().then(
            (data) => { 
                this.setState({continents: data && data.data && data.data.continents || []})
            }
        )
    }

    continentClicked = (code) => {
        getContinentDetailsByCode(code).then((data)=>{
            if(data){
                continentDataManager.setContinentData(code,data);
                this.props.history.push('/continent/'+code);
            }
            
        })
        
    } 
    render() { 
        return ( 
            <React.Fragment>
                {
                    this.state.continents.length
                    ?
                    <div className="continent-list"> 
                        {
                            this.state.continents.map((continent)=>{
                            return <div className = "continent" key = {continent.code} onClick = {() => {this.continentClicked(continent.code)}}>
                                    <span>{continent.name}</span>
                                    <img src="./assets/images/arrow.png" />
                                </div>
                            })
                        }
                    </div>
                    :
                    <div className="text-center">
                        <p>No continents received</p>    
                    </div>
                }
                
            </React.Fragment>
         );
    }
}
 
export default Home;