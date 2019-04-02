import React, { Component } from 'react';
import database from '../../database';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    getAllUsers() {
        const query = `query User { users { username } }`;
        database(query).then(res => this.setState({ users: res.data.users }));
    };

    componentDidMount() {
        this.getAllUsers();
    }

    render() {
        return (
            <div style={{ padding: '25px' }}>
                User settings :)
                <br/>

                { this.state.users.length ? this.state.users.map((user, i) => {
                    return <div key={i}>{ user.username }</div>
                }) : 'loading' }
            </div>
        );
    }
}

export default Users;
