import React from 'react';
import {Form,Button} from 'react-bootstrap';

//loginタグのコンポーネント
class login extends React.Component{
    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>パスワード</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    ログイン
                </Button>
            </Form>
        );
    }    
}

export default login;