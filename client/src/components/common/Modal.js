import React from 'react'
import * as R from 'ramda'
import Modal from 'antd/es/modal'
import 'antd/es/modal/style/css'

const CustomModal = ({ children, style, ...rest }) => (
  <Modal style={R.merge({}, style)} {...rest}>{children}</Modal>
)

export default CustomModal