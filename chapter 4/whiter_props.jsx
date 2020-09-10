const buttonColor = "red";
// const button = <MaterialButton color={buttonColor + Alt}
const button = <MaterialButton color={buttonColor}
  onClick="alert('clicked');">
    Click me 
  </MaterialButton>


const props = { color : "red", enabled : true };
const button2 = <MaterialButton {...props} />