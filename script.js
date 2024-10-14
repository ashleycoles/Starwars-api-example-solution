// Don't be alarmed if it takes quite a while for all the data to display. The starwars JSON can be a little slow
// at times

// We start by fetching the list of characters
fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(characterData => {
        // Selec the div ready to display the data
        const characters = document.querySelector('#characters')

        // Loop through each character
        characterData.results.forEach(character => {
            // Now we need to get their homeworld name. The name is not included in the JSON we fetched, instead
            // they provide a link that we need to fetch in order to get the data about their homeworld.
            const homeworldLink = character.homeworld // Save the homeworld link in a const

            // Now fetch the characters homeworld - inside the original fetch!
            fetch(homeworldLink)
                .then(res => res.json())
                .then(homeworldData => {
                    // Now within here, we have both the character info, and the homeworld info
                    characters.innerHTML += `
                        <div>
                            <h3>${character.name}</h3>
                            <ul>
                                <li>Height: ${character.height}</li>
                                <li>Mass: ${character.mass}</li>
                                <li>Hair colour: ${character.hair_color}</li>
                                <li>Homeworld: ${homeworldData.name}</li>
                            </ul>                    
                        </div>
                    `    
                })
            
        })
    })

