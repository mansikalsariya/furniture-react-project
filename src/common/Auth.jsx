import React, { useContext } from 'react'
import BlogForm from './BlogForm'
import Login from './Login'
import { myContext } from './Context'

export default function Auth() {
    const state = useContext(myContext)
    return (
        <div>
            {
                state.isLogged ? <BlogForm /> : <Login />
            }
        </div>
    )
}
