// Component Code Goes Here
import React from 'react'

class ToggleButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEnabled: false
    }
  }

  render() {
    return (
      <button className="toggle-button">
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }


}

export default ToggleButton
