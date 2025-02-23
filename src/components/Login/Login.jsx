import React from 'react';
import { Button, Form, Input } from 'antd';
import { UserContext } from '../../services/api/userContext';
import { useState, useContext } from 'react';
import Password from 'antd/es/input/Password';
import { useNavigate } from 'react-router-dom';

export default function Login(){


    const navigate = useNavigate();

    const handleNavigation = (event, path) => {
        event.preventDefault(); 
        navigate(path);
        
    };
    

    const [request, setRequest] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRequest({ ...request, [name]: value });
      };


    const {handleLogin} = useContext(UserContext);

    const handleSubmit = () => {

            try{
                let login = handleLogin(request);

                if(login){
                    navigate('/home');
                }
            }catch{
                alert("Login failed");
            }

        }

    return(

        <>
        

        <div className="login-container">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
                >
                <Input  name="email" onChange={handleInputChange} />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password  name="password"  onChange={handleInputChange}/>
                </Form.Item>

                <Form.Item label={null}>
                <Button type="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
        </>

    )

}