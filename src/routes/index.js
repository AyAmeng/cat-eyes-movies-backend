import MainView from 'views/mainView'
import FooView from 'views/fooView'
import BarView from 'views/barView'
import BackendView from 'views/manager/backendView'

export default [
  {
    path: '/',
    component: MainView,
    childRoutes: [
      {
        path: 'foo',
        component: FooView
      },
      {
        path: 'bar',
        component: BarView
      },
      {
        path: 'backend',
        component: BackendView
      }
    ]
  }
]
