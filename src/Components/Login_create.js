import React from 'react';
import {Tabs,Tab,} from 'react-bootstrap';

//ログイン画面&新規登録画面タグのコンポーネント
class Login_create extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //login state
            login_mail: null,
            login_pass: null,
            //create user state
            create_mail: null,
            create_pass: null,
        };
    }
    render(){
        return(
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="ログイン">
                    <login></login>
                </Tab>
                <Tab eventKey="create" title="新規登録">
                    
                </Tab>
            </Tabs>
        );
    }
} 

export default Login_create;
