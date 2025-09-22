import { Redirect, Route, Switch } from 'wouter';

import { MainLayout } from './layouts/main';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';

export function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
        <Route component={Home} path='/home' />
        <Route component={NotFound} path='/404' />
        <Route>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </MainLayout>
  );
}
