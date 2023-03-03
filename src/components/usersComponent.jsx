import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UsersComponent(props) {

    useEffect(() => {
        props.fetchUsers();
    }, [])

    return (
        <div>
            {props.users.isLoading ?
                <h3>Loading users...</h3> :
                props.users.error.length > 0 ?
                    <h3>Error in fetching {props.users.error}</h3> :
                    <div>
                        {props.users.users.map((user) => {
                            return <h5 key={user.id}>{user.name}</h5>
                        })}
                    </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => { dispatch(fetchUsers()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);