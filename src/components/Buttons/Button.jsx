import React, {Component} from 'react';
import './Button.css'

export default class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            display:true
        }
    }
    render() {

        let newblog;
        if(this.state.display){
            newblog =  (
                <div className='main'>
                    <h3>Новости</h3>
                    <p>Lorem ipsum dolor sit amet, nsectetur adipisicing elit. Ad exercitationem laboriosam libero nostrum omnis quos rem vel voluptatem. Harum, quaerat!</p>
                    <p>Lorem ipsum dolor sit amet, nsectetur adipisicing elit. Ad exercitationem laboriosam libero nostrum omnis quos rem vel voluptatem. Harum, quaerat!</p>
                </div>
            )
        }

        return (
            <div>
                <h2 onCopy={() => {
                    this.setState({display:!this.state.display})
                    console.log(this.state.display)
                }}>Скрыть / Показать блог</h2>
                {newblog}
            </div>
        );
    }
}

