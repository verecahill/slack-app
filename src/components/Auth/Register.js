import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';


class Register extends React.Component {
    state = {}
    handleChange = () => {

    }

    render() {
        return (
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="puzzle piece" color="orange" />
                        Register for DevChat
                    </Header>
                <Form size="large">
                    <Segment stacked>
                        <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" onChange={this.handleChange} type="text" />

                        <Form.Input fluid name="email" icon="email" iconPosition="left" placeholder="Email Address" onChange={this.handleChange} type="email" />

                        <Form.Input fluid name="password" icon="password" iconPosition="left" placeholder="Password" onChange={this.handleChange} type="password" />

                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
        )   
    }
}

export default Register;