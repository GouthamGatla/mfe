import React from "react";
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App'

const mount = (el, {onNavigation, defaultNavigation, initialpath}) => {
    const history = defaultNavigation || createMemoryHistory({
        initialEntries : [initialpath]
    });
    if(onNavigation){
        history.listen(onNavigation);
    }

    ReactDOM.render(
        <App history={history}/>,
        el
    )

    return {
        onParentNavigation : ({pathname: nextPathname}) => {
            const {pathname} = history.location;
            if(pathname !== nextPathname){
                history.push(nextPathname);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_auth-dev-root");
    if(devRoot){
        mount(devRoot, {defaultNavigation: createBrowserHistory()});
    }
}

export {mount}