const React = require('react')

function Show(props) {
    const {vegetable} = props; 
    console.log(vegetable);
    return (
        <main>
           The {vegetable.name} is {vegetable.color}
           {vegetable.readyToEat ? ' Its ready to eat' : 
           ' It is not ready to eat... Cant touch this'}
        </main>
    );
}
 module.exports  = Show;