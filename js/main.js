var images = document.getElementsByTagName('img');
var index = 0 ;


// function carousel() {
//
//
//   if (index<2 ) {
//     index++;
//
//      images[index].style.display="block";
//   }
//   //  images[index].style.display="none";
//   console.log(index);
//   if (index==2) {
//     index= 0;
//
// images[index].style.display="block";
//   }
// console.log(images);
// }

//variables


//function
setInterval(suivant, 2000);

function suivant(){
  console.log(index);
  images[index].style.display="none";
  if (index==2) {
    index=0;
  } else {
    index++;
  }



    images[index].style.display="block";

}


function precedent() {
   images[index].style.display="none";
   if (index==0) {
     index=2;
   } else {
    index--;
    images[index].style.display="block";
  }




}

//script
