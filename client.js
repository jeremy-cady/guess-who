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
    
    for(person of people) {
        console.log('in for loop');
        
        $('.divsGoHere').append(`
            <div data-myusername="${person.githubUsername}">
            <img src="http://github.com/${person.githubUsername}.png?size=250" 
                    alt="Profile image of ${person.name}"/>

            </div>
        `);
    }
}