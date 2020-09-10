class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    console.log("Bookmark component created")
  }
  static defaultProps = { description : "Unknown"};
  title = this.props.title;
  titleStyle = { color : "red" }
  render() {
    return(
      <li>
        <h2 style={this.titleStyle}>{this.title}</h2>
        <a href={this.props.href}>
          {this.props.description}
        </a>
        <button onClick={() => {
          this.title = this.title + "-Changed";
          this.setState({});
        }}>
          Click me
        </button>
      </li>
    );
  }
}