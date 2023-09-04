const React = require('react');


    class Index extends React.Component {
      render() {
          const { vegetables } = this.props;
          return (
                  <main>
                    <nav> <a href="/vegetables/new">Create a New Vegetable</a> </nav>
                      <h1>Vegetables Index Page</h1>
                      <ul>
                          {vegetables.map((vegetable, i) => {
                              return (
                                  <li key={vegetables._id}>
                                      The{' '}
                                      <a href={`/vegetables/${vegetable._id}`}>
                                          {vegetable.name}
                                      </a>{' '}
                                      is {vegetable.color} <br></br>
                                      {vegetable.readyToEat
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