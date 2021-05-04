import About from './About';
import Contact from './Contact'
import {Route,Switch} from 'react-router-dom';
import Error from './Error';
import Menu from './Menu';
// import browserRouter from 'react-router-dom';

function Funn(){
  return(
    <>
<Menu/>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Error} />
    </Switch>
 


    </>
  )
}
export default Funn;