const React = require('react');


    class Index extends React.Component {
      render() {
          const { fruits } = this.props;
          return (
                  <main>
                    <nav> <a href="/fruits/new">Create a New Fruit</a> </nav>
                      <h1>Fruits Index Page</h1>
                      <ul>
                          {fruits.map((fruit, i) => {
                              return (
                                  <li key={fruits._id}>
                                      The{' '}
                                      <a href={`/fruits/${fruit._id}`}>
                                          {fruit.name}
                                      </a>{' '}
                                      is {fruit.color} <br></br>
                                      {fruit.readyToEat
                                          ? `It is ready to eat`
                                          : `It is not ready to eat`}
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                  </main>
          );
      }
    }
    module.exports = Index;