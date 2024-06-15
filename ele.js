// function create(){
//    var h1= document.createElement('h1');
//    h1.innerHTML="I am dynamic heading...";
//    h1.style.color="green";
//    var body=document.body;
//    body.append(h1);

//    var p=document.createElement('p');
//    p.innerHTML="I am Dynamically Paragraph...";
//    p.style.color='dodgerblue';
//    var body=document.body;
//    body.append(p);


//    var h2=document.createElement('h2');
//    h2.innerHTML="Hello i am 2nd Heading ";
//    h2.style.color="cyan";
//     var heading=document.getElementById('heading');
//     heading.append(h2);
// }
// function multiple(){

// for(var i=1;i<=10;i++){
//     var h1=document.createElement('h1');
// h1.style.color="red";
//   h1.innerHTML="Hello I am Dynamically Created";
//     var body=document.body;
//     body.append(h1);

// }


// }

function ElementCreator(event){
event.preventDefault();
var form=document.forms['element-form'];
const elementName=form.elements.element.value;
var text=form.elements.text.value;
var tag=document.createElement(elementName);
tag.innerHTML=text;
tag.className="elements";
var result=document.getElementById('result');
result.append(tag);

//select dynamic elements
var elements=document.getElementsByClassName('elements');
var animationCard=document.getElementById('animation-card')
for(var i=0;i<elements.length;i++)
    {
    elements[i].onclick=function(){
        var currentTag=this;
        animationCard.style.display="flex";
        var select=document.getElementById("animator");
select.onchange=function(){
    var clasValue=this.value;
        currentTag.className=clasValue;
      }
    }
  }
}







