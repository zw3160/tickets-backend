const tickets = [
];

for(let i = 0; i< 100; i++){
    let userType = (i % 5) ? "local" : "tourist";
    tickets.push({ 
        id: i, 
        title: `event --- ${i}`, 
        description: `description ${userType} ${i}`, 
        date: new Date(),
        location: "location", 
        userType: userType,
        img: 'logo192.png'
    })
}

export default tickets;