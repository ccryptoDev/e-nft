import { ElementType } from 'react'
import { Redirect } from 'react-router'
import { Route } from 'react-router-dom'
import { getAccessToken } from '../../utils'
import { useAppState } from '../../state'

const  PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {

const condition = getAccessToken();
return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
  (<Redirect  to="/login"  />);
};


export { PrivateRoute }
