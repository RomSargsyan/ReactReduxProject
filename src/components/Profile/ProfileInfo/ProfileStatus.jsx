import React, { useState, useEffect } from 'react';

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: true,
//     status: this.props.status
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.status != prevProps.status) {
//       this.setState({
//         status: this.props.status
//       })
//     }
//   }
//
//   onEditMode = () => {
//     this.setState({
//       editMode: false
//     })
//   }
//
//   offEditMode = (event) => {
//     this.setState({
//       editMode: true
//     })
//     this.props.updateUsersProfileStatus(this.state.status);
//   }
//
//   onChangeStatus = (event) => {
//     this.setState({
//       status: event.target.value
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         {
//           this.state.editMode
//           ? <div onDoubleClick={this.onEditMode}>{ this.state.status || '-----' }</div>
//           : (
//             <div>
//               <input
//                 type="text"
//                 autoFocus={true}
//                 onBlur={this.offEditMode}
//                 onChange={this.onChangeStatus}
//                 value={this.state.status}
//               />
//             </div>)
//         }
//       </div>
//     )
//   }
// }

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const onEditMode = () => {
    if(!props.isOwner) {
      setEditMode(true);
    }
  }
  const offEditMode = () => {
    setEditMode(false);
    props.updateUsersProfileStatus(status);
  }
  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  }

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  return (
          <div>
            {
              !editMode
              ? <div onDoubleClick={onEditMode}>{ status || '-----' }</div>
              : (
                <div>
                  <input
                    type="text"
                    autoFocus={true}
                    onBlur={offEditMode}
                    onChange={onChangeStatus}
                    value={status}
                  />
                </div>)
            }
          </div>
  )
}

export default ProfileStatus;
