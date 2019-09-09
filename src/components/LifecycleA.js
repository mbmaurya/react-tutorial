import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Mukesh'
        }
        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDrivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Mukesh Maurya'
        })
    }
 
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                Lifecycle A
                <LifecycleB />
                <button onClick={this.changeState}>Change State</button>
            </div>
        );
    }
}

export default LifecycleA;