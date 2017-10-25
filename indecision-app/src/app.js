console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ (app.options && app.options.length > 0 ) ? 'Here are your options' : 'No Options'}</p>
    </div>
);

// --------------------------------------------

const user = {
    name: 'Mohammad N',
    age: 33,
    location: 'Plano'
}

function getLocation(location) {

    if (location) {
        return <p>Location: {location}</p>;
    }
}


const templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : undefined}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

// --------------------------------------------

ReactDOM.render(template, document.getElementById('app'));
