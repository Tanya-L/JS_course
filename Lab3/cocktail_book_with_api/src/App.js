import React, {useEffect, useState} from 'react';
import { Routing } from './routes/Routing'
import { NavBar } from './components/NavBar'
import { UserProvider } from './utils/UserContext'


const App = () => {

    const [recipes, setRecipes] = useState(null);
    useEffect( () => {
        if (recipes == null) {
            let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
            // let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setRecipes(data);
                });
        } else {
            console.log(recipes);
        }
    }, [recipes]);

    return (
        <UserProvider>
            <Routing>
                <NavBar />
            </Routing>
        </UserProvider>
    );
}

export default App;
