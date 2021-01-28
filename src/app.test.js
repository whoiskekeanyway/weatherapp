
// Testing the Api fetch_response

test('the data is Lagos', async () => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=lagos&appid=b7fb8b4b5634af484393a5dcab940f40')
    
    const response = await api_call.json();
    expect(response.name).toBe('Lagos');
})


// Written by Ogundele Olalekan
// Hyperion Task 15 Level 2