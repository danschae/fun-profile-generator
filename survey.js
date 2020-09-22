const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('What\'s your name? ', (name) => {
        console.log(`Thank you for your valuable feedback: ${name}`);

        rl.question('What\'s an activity you like doing? ', (activity) => {
            console.log(`Thank you for your valuable feedback: ${activity}`);

            rl.question('What do you listen to while doing that? ', (listen) => {
                console.log(`Thank you for your valuable feedback: ${listen}`);

                rl.question('Which meal is your favourite (eg.breakfast, dinner, lunch)? ', (meal) => {
                    console.log(`Thank you for your valuable feedback: ${meal}`);

                    rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
                        console.log(`Thank you for your valuable feedback: ${food}`);

                        rl.question('Which sport is your absolute favourite? ', (sport) => {
                            console.log(`Thank you for your valuable feedback: ${sport}`);

                            rl.question('What is your superpower? ', (power) => {
                                console.log(`Thank you for your valuable feedback: ${power}`);

                                console.log(" ************* this is your profile")
                                let aboutMe = `${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}.`

                                console.log(aboutMe)

                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
  });