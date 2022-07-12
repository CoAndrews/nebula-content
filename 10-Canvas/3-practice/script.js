
function draw() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) { //checking that the method is availible
       var ctx = canvas.getContext('2d');//storing the canvas contect in a variable
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      //.arc parameters: x, y, starting angle, ending angle(360 degrees for a full circle), clockwise or counterclockwise 
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
      ctx.stroke();
    }
  }

  draw();












// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
//making a semi circle    
// ctx.arc(100, 100, 90, 0, Math.PI * 1, false);
// ctx.lineTo(190, 100);
// ctx.fillStyle = '#b668ff';
// ctx.fill();







//for triangle
// function draw() {
//     let canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//       let ctx = canvas.getContext('2d');
  
//       ctx.beginPath();// when drawing a path on the canvas
//       ctx.moveTo(75, 50);//where the line starts
//       ctx.lineTo(100, 75);//draws a straight line from the current drawing position that is set by moveTO()
//       ctx.lineTo(100, 25);//draws another line from the same x starting pointbut ends at a diff y axis point
//       ctx.fill(); // filling the shape in with shading due to the path specified in the drawing commands
//     }
//   }


//   draw()
// const canvas = document.getElementById('canvas')

// const ctx = canvas.getContext('2d');

// //changing the color of our square
// ctx.fillStyle = 'pink'

// //takes in 4 parameters
// ctx.fillRect(25, 25, 50, 50)


