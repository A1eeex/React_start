import React from 'react';

class ProfileStatus extends React.Component {
  state= {
      editeMode: false
  }
  activateEditMode = () => {
    this.state.editeMode = true
    this.forceUpdate()
  }
  deActivateEditMode = () => {
    this.state.editeMode = false
    this.forceUpdate()
  }
  
  render() {
    return (
      <div>
        {!this.state.editeMode &&
        <h3>
          <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
        </h3>
        }
  
        {this.state.editeMode &&
        <div>
          <input autoFocus onBlur={this.deActivateEditMode} value={this.props.status}/>
        </div>
        }
      </div>
    )
  };
};

export default ProfileStatus;