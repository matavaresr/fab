# fab
Floating Action Button Library for Javascript whit JQuery 

var fab = new Fab({
  selector: "#cont",
  button: {
    style: "large teal",
    html: ""
  },
  icon:{
    style: "amazon icon",
    html: ""
  },
  // "top-left" || "top-right" || "bottom-left" || "bottom-right"
  position: "bottom-lef",
  // "horizontal" || "vertical"
  direction: "vertical",
  buttons:[
    {
      button: {
        style: "small yellow",
        html: ""
      },
      icon:{
        style: "hdd icon",
        html: ""
      },
      onClick: function(){
        console.log("fire");
      }
    },
    {
      button: {
        style: "small red",
        html: ""
      },
      icon:{
        style: "book icon",
        html: ""
      },
      onClick: function(){
        console.log("ice");
      }
    }
  ],
  onOpen: function(){

  },
  onClose: function(){

  }
});
