// Your code goes here

// mouseover , background color change to lightgray 
// for all the paragraph 
//mouseout, background color back to white

const paragraph=document.getElementsByTagName('p');

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].addEventListener('mouseover', (event)=> {

        paragraph[i].style.backgroundColor="lightgray";
    }
    )
}

for (let i = 0; i < paragraph.length; i++) {

    paragraph[i].addEventListener('mouseout', (event)=> {

        paragraph[i].style.backgroundColor="white";
    }
    )
}



//keydown
//if press esc key, the funbus logo color turns red
//and rotate 180 degrees


const logo=document.querySelector('h1');

document.addEventListener('keydown', (event)=>{
  if(event.key === 'Escape') {
      logo.style.color="red";
      logo.style.transform="rotate(180deg)";
  }
})


//wheel
//zoom in the logo 3 times, zoomm out the logo .5 times
let scale=1;
const zoom = (event) => {
    event.preventDefault();

    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.5, scale), 3);
  
    logo.style.transform = `scale(${scale})`;
  }

  logo.addEventListener('wheel',zoom);

  //drag / drop
// drag and drop the bus image under the welcome section

const img1=document.querySelector(".image-content dragImg1")
const img2=document.querySelector(".image-content dragImg2")
console.log(img1);
console.log(img2);
/*
/*
const drag=(event)=>{

    event.dataTransfer.setData(headerImage);
}

const drop=(event)=>{
    ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
    event.preventDefault();
}

*/

//load

function loadFunction() {
    alert("Page is loaded");
  }

  window.addEventListener('load',loadFunction);

 // focus 
 //focus the input destination area to back ground pink.
 const focusArea=document.querySelector("#inputDestination");

  focusArea.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';    
  });
//blur remove the background color when it is not focused.
  focusArea.addEventListener('blur', (event) => {
    event.target.style.background = '';    
  });

// resize
//resize changes the body's text color to black;

window.addEventListener('resize',(event)=>{
    document.querySelector('body').style.color="black";
    
})


 //scroll
//scroll the window, all text in the body changes to blue


function scrollFunction() {
  document.querySelector('body').style.color="blue";
}
window.addEventListener("scroll", scrollFunction);



//select
//select the textarea of pick your destination
//hight the paragraph below
const selectArea=document.querySelector("#pick");

selectArea.addEventListener('select',(event)=>{

    document.querySelector("#pickParagraph").style.backgroundColor="#39FF14"
})



//dblclick
//double click all the h2 header , the size of text become
//5 rems
const h2Header=document.querySelectorAll('h2');

for (let i = 0; i < h2Header.length; i++) {

    h2Header[i].addEventListener("dblclick", (event)=> {

        h2Header[i].style.fontSize="6rem";
    }
    )
}