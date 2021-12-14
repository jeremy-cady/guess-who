console.log('in client.js');


console.log('Here are all the available people:', people);

// incantation
$(document).ready(onReady);

function onReady() {
    console.log('so ready');
    
    displayPeople();
}

function displayPeople() {
    console.log('in displayPeople');
    
    for(let i=0; i<people.length; i++) {
        console.log('in for loop');
        
        $('.divsGoHere').append(`
            <div>
                <img src="http://github.com/${people.githubUsername}.png?size=250" 
                    alt="Profile image of ${people.name}"/>
            </div>
        `);
    console.log(`${people.githubUsername}`);
    
    }
}