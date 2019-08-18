import React, {Component} from 'react';

class LifeCycleMount extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: this.props.number
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.number !== nextProps.number){
            return {number: nextProps.number}
        }
        return null;
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.state.number}
            </div>
        );
    }
}

export default LifeCycleMount;