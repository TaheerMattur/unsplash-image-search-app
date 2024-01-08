import {Component} from 'react'
import '../App.css'

class Item extends Component{
    render(){
        return(
            <div id="item">
                <img src={this.props.src} alt="../imgNotFound" width="250" height="160"/>
            </div>
        );
    }
}

export default Item;