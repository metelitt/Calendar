import { Layout,Row} from 'antd'
import React from 'react'
import { LoginForm } from '../components/LoginForm'

export const Login: React.FC = () => {
  return (
      <Row justify='center' align="middle" className='h100'>
          <LoginForm/>
      </Row>
  )
}
