class Saludar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {name: "Guiadev"};
    }
  
    render() {
      return (
        <div>
          <h1>Hola, {this.state.name}!</h1>
        </div>
      );
    }
  }