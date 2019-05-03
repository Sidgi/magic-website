// const imgArray = ['../images/photo2.png','../images/photo3.png','../images/photo4.jpg','../images/photo2.jpg','../images/photo1.jpeg'];
// const numIteration = imgArray.length-1;
// let current = 0;

// const slideShow = (num)=>{
//    current+=num;
//    if(current>numIteration){
//    	current = 0;
//    }
//    else if(current<0){
//    	 current = numIteration;
//    }
//    document.getElementById('firstImg').src = imgArray[current];
// }
 // ###################################2nd function
var slideIndex =1;

const showDivs = (n)=> {
   var i=0;
   var x = document.getElementsByClassName('firstImg');
   console.log(x);
      if(n>x.length){
      slideIndex=1;
   }
      if(n<1){
      slideIndex = x.length;
   }

      while(i<x.length){
      x[i].style.display = "none";
      i++;
   }
          x[slideIndex-1].style.display = "block";

 }
          showDivs(slideIndex);
          const plusDivs= (plusIterator)=>{
            debugger;
          showDivs(slideIndex+=plusIterator);
 }


// const showDivsAuto = ()=> {
//    var i=0;
//    let n = 1;
//    var x = document.getElementsByClassName('firstImg');
//       while(i<x.length){
//         for (let n =0; n<x.length-1;n++){
//         x[i].style.display = "none";
//         x[n].style.display = "block";
//       i++;
//       n++
//    }
//    }


//  }

   // let currentNum =0;
 //      while(currentNum <= numIteration){
 //      document.getElementById('firstImg').src = imgArray[currentNum];
 //      console.log(imgArray[currentNum]);
 //      currentNum++;
 //       if (currentNum >= numIteration){
 //        currentNum = 0;
 //       document.getElementById('firstImg').src = imgArray[currentNum];
 //    }

 //   }
 //      if (currentNum >= numIteration){
 //        currentNum = 0;
 //       document.getElementById('firstImg').src = imgArray[currentNum];
 //    }
