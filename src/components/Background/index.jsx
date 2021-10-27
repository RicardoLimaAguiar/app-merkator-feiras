import React from 'react'

import { ContainerGradiente } from './styles';

const Background = ({ children, ...props }) => {
  return (
    <ContainerGradiente>
      {children}
    </ContainerGradiente>
  )
}

export default Background;


