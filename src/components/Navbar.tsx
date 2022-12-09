import { FC } from 'react'
import { Layout } from 'antd'
import { Row } from 'antd/es/grid'
import Menu, { MenuProps } from 'antd/es/menu/menu'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const Navbar: FC = () => {
  let navigate = useNavigate()
  const { auth } = useAppSelector((state) => state.auth)

  const items1: MenuProps['items'] = ['Логин'].map((key) => ({
    key,
    label: `${key}`,
  }))

  const items2: MenuProps['items'] = ['Кирилл', 'Выйти'].map((key) => ({
    key,
    label: `${key}`,
  }))

  return (
    <Layout.Header>
      <Row justify='end'>
        {auth ? (
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            selectable={false}
            items={items2}
            onClick={() => console.log('выхожу')}
          />
        ) : (
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            selectable={false}
            items={items1}
            onClick={() => navigate('/login')}
          />
        )}
      </Row>
    </Layout.Header>
  )
}

export default Navbar
