import React from 'react'

class Nav extends React.Component { 

    state = {
        increaseMoneyBy: ''
    }

    updateIncreaseMoneyBy = event => {
        this.setState({increaseMoneyBy: event.target.value})
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.addMoreMoney(parseInt(this.state.increaseMoneyBy, 10))
        this.setState({increaseMoneyBy: ''})
    }

    render() {
        return (
            <div className='nav-bar'>
                <form onSubmit={this.handleSubmit} className='form'>
                <label>Add Money To Wallet </label>
                <input type="search" value={this.state.increaseMoneyBy} onChange={this.updateIncreaseMoneyBy}/>
                </form>
            </div>
        )
    }
}



export default Nav