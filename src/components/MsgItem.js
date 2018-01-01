// @flow

import React from 'react'
import styled from 'styled-components'

const UserTitle = styled.span`
    font-weight: bold;
`

const MsgBox = styled.div`
    margin: 10px;
`

type Props = {
  user: string,
  msg: string
}

export default (props: Props) => (
  <MsgBox className='card'>
    <div className='card-content'>
      <p><UserTitle>{props.user}</UserTitle>: {props.msg}</p>
    </div>
  </MsgBox>
)
