import { privateRoutes, publicRoutes } from '../router'
import { Routes, Route, Navigate } from 'react-router-dom'
import { RouteNames } from '../router/index'
import { useAppSelector } from '../app/hooks'

const AppRouter = () => {
  const { auth } = useAppSelector((state) => state.auth)
  return (
    <div>
      {auth ? (
        <Routes>
          {privateRoutes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
          <Route
            path='*'
            element={<Navigate to={RouteNames.EVENT} replace={true} />}
          />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
          <Route
            path='*'
            element={<Navigate to={RouteNames.LOGIN} replace={true} />}
          />
        </Routes>
      )}
    </div>
  )
}

export default AppRouter
