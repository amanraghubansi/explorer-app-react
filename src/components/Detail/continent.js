import React, { Component } from 'react';
import { getContinentDetailsByCode } from '../../Service/rest-service';
import  './continent.scss';
import continentDataManager from '../../Service/data-service';


class ContinentDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {details: {}  }
    }
    componentDidMount() {
        const code = this.props.match.params.code;
        let data = continentDataManager.getContinentData(code);
        if(!data){
            getContinentDetailsByCode(code).then((data)=>{
                this.setState({
                    details: data.data.continent
                })
            })
        }else{
            this.setState({
                details: data.data.continent
            })
        }
    }
    
    render() { 
        const { details } = this.state;
        return ( 
            <div className="continent-detail">
                <div className = "header">{details.name && details.name} countries list :</div>
                <div className ="listWrapper">
                    { details.countries &&
                        details.countries.map((cnt) => {
                            return (
                            <div className="card" key={cnt.code}>
                                <p> <label>Name :  </label>{cnt.name}</p>
                                <p className="margin-top5"> <label>Flag : </label> <span dangerouslySetInnerHTML = {{__html: cnt.emoji}}></span></p>
                                <p className="margin-bottom-zero"><label>Phone : </label> {cnt.phone}</p>
                                <p className="margin-bottom-zero"><label>Currency : </label> {cnt.currency}</p>
                            </div>
                            )
                        })
                    }
                </div>
                
            </div>
         );
    }
}
 
export default ContinentDetail;