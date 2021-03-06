import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import { PageNotFound } from 'components'
import { Filters, Main, Result } from 'pages'
import ROUTES from 'constants/routesPath'

function Routes() {
  const location = useLocation()
  const transitions = useTransition(location, ({ pathname }) => pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  return (
    <>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} className="absolute w-full" style={props}>
          <Switch location={location}>
            <Route exact path={ROUTES.MAIN} component={Main} />
            <Route path={ROUTES.RESULT} component={Result} />
            <Route path={ROUTES.FILTERS} component={Filters} />
            <Route component={PageNotFound} />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}
export default Routes
