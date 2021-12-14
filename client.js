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
        let personNumber = randomNumber(1, 7);

        if(personNumber===1 && person.name==='Dev') {
            $('.name').append(person.name);
        }
        if(personNumber===2 && person.name==='Dane') {
            $('.name').append(person.name);
        }
        if(personNumber===3 && person.name==='Matt') {
            $('.name').append(person.name);
        }
        if(personNumber===4 && person.name==='Kris') {
            $('.name').append(person.name);
        }
        if(personNumber===5 && person.name==='Edan') {
            $('.name').append(person.name);
        }
        if(personNumber===6 && person.name==='Liz') {
            $('.name').append(person.name);
        }
        if(personNumber===7 && person.name==='Chris') {
            $('.name').append(person.name);
        }
        console.log('this person is:', person.name);
        console.log('this person\'s number is:', personNumber);
    }
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
