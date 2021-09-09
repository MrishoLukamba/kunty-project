import React ,{useState, useEffect}from 'react'
;
import app from './home'

export const AuthContext = React.createContext(false);

function Context({children}) {
    const [user, setUser] = useState(false)

    useEffect(() => {

        app.auth().onAuthChanged(setUser);

    },[])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default Context
