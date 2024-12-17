const tickets = [
];

for(let i = 0; i< 100; i++){
    let userType = (i % 5) ? "local" : "tourist";
    tickets.push({ 
        id: i, 
        title: `event --- ${i}`, 
        description: `description ${userType} ${i}`, 
        date: Date(Date.now()),
        location: "location", 
        userType: userType
    })
}

export default tickets;