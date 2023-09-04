const React = require('react');



function New() {
    return (
        <main>
            <h1>New Page</h1>

            <form action="/fruits" method="POST">
                 Name: <input type="text" name="name" />
                 <br/>
                 
                 Color: <input type="text" name="color" />
                 <br/>
                 
                 Is Ready To Eat: <input type="checkbox" name="readyToEat" />
                 <br/>
                 <input type="submit" name="" value="Create Fruit"/>
            </form>

        </main>
    );
}

module.exports = New;