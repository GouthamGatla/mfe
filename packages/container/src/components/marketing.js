import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigation} = mount(ref.current, {onNavigation : ({pathname: nextPathname}) => {
      const { pathname } = history.location;
      if(nextPathname !== pathname){
        history.push(nextPathname);
      }
    }});

    history.listen(onParentNavigation);

  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
