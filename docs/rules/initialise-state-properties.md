# All uses on state properties must be in initialised (initialise-state-properties)

A React component's state has been edited with a property that wasn't in the state object in the component's constructor.


## Rule details

The rule aims to ensure there is a one 'source of truth' in a component where you can see what properties can change.

Examples of **incorrect** code for this rule:

```js
class MyClass extends Component {
    constructor() {
        this.state = {
            isFetchingData: true
        };
    }
    
    myMethod() {
        this.setState({
            isFetchingData: false,
            isPostingData: true
        });
    }
    
    render() {
        <p>Hello world</p>
    }
}

```

Examples of **correct** code for this rule:

```js

class MyClass extends Component {
    constructor() {
        this.state = {
            isFetchingData: true,
            isPostingData: false
        };
    }
    
    myMethod() {
        this.setState({
            isFetchingData: false,
            isPostingData: true
        });
    }
    
    render() {
        return <p>Hello world</p>;
    }
}

```