import React from 'react'
import styled from 'styled-components'

const InputSize = styled.input`
    width: ${props => props.size}vw;
`

export default class ChatInput extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      msg: ''
    }
  }

  onChange (event) {
    console.log(event.target.value)
    const { name, value } = event.target
    const state = {}
    state[name] = value
    this.setState(state)
  }

  send (event) {
    event.preventDefault()
    const { send } = this.props
    const { user, msg } = this.state
    send(user, msg)
    this.setState({msg: ''})
  }

  render () {
    const { user, msg } = this.state
    return (
      <form>
        <div className='field has-addons'>
          <p className='control'>
            <InputSize className='input' type='text' placeholder='User' name='user' size='10' value={user} onChange={(event) => this.onChange(event)} />
          </p>
          <p className='control'>
            <InputSize className='input' type='text' placeholder='Message' name='msg' size='60' value={msg} onChange={(event) => this.onChange(event)} />
          </p>
          <p className='control'>
            <button className='button is-success' onClick={(event) => this.send(event)} >Send</button>
          </p>
        </div>
      </form>
    )
  }
}
