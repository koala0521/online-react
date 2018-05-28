import React from "react";
import {  Route , Switch , Redirect  } from "react-router-dom";
import Home from './views';
import List from './views/list';
import Detail from './views/detail';

// 路由配置文件

export default()=>{
    return (
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/list" component={ List } />
            <Route path="/detail" component={ Detail } />
            // 重定向组件 Redirect
            <Route path="*" render={()=>( <Redirect to="/" /> )  } />
        </Switch>
    )
};
