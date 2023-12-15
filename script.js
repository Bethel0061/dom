function changeColor() {
    //input color value
      let color = prompt("Enter color!"); //grey
  
    //select element
    let elements = document.getElementsByClassName("para");
  
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      element.style.backgroundColor = color;
    }
  
    //change the color of the element
    //   element.style.backgroundColor = color;
  }