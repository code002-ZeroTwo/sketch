

function CreateDiv(number){
    const div = document.querySelector('.container');
    for(let i=0; i<number ; i++){
        let div1 = document.createElement('div');
        div1.setAttribute('class','sections');
        div1.style.height = 600/number + 'px';
        div1.style.width = 600/number + 'px';
        div.appendChild(div1);
        for(let j=0; j<number; j++){
            let div2 = document.createElement('div');
            div2.setAttribute('class','sections2');
            div2.style.width = 600/number + 'px';
            div2.style.height = 600/number + 'px';
            div1.append(div2);
        }
    }

    //hover('sections','sections2','new','new2');
    
}

CreateDiv(Number(40));

const input = document.querySelector('#input');
let value = 0;

function assignGrid(){
    if(input.value == 0){
        value = 40;
    }
    else{
        value = input.value;
    }
}

assignGrid();


function createNew(){
    const div = document.querySelector('.container','new','new2');

    let i =0;
    console.log('createNew clicked');
    
    if(div.hasChildNodes() && input.value != 0) {
        while(div.hasChildNodes()){
            div.removeChild(div.children[i]);
        }
    }
    CreateDiv(Number(value));
}

const button = document.querySelector('#button');


button.addEventListener('click',()=>{

    assignGrid();
    createNew();
});


const clear1 = document.querySelector('#clear');
const div = document.querySelector('.container');

clear1.addEventListener('click',()=>{
    if(div.hasChildNodes()){
        let i =0;
        while(div.hasChildNodes()){
            div.removeChild(div.children[i]);
        }
    }
    CreateDiv(Number(value));
});


var drawing = document.querySelector('#draw');

drawing.addEventListener('click',()=>hover(drawing.value));

var reset = document.querySelector('#reset');

reset.addEventListener('click',()=>hover(reset.value));




function hover(classname1){
    const divs = document.querySelectorAll('.sections','new');
    const divs2 = document.querySelectorAll('.sections2','new2');
    console.log(classname1);
    if(classname1 == 'draw'){
        divs.forEach(function(div){
            div.addEventListener('mouseover', ()=>{
                div.classList.add('new');
            });
        });

        divs2.forEach(function(div){
            div.addEventListener('mouseover',()=>{
                div.classList.add('new2');
            });
        });
        
    }
    else if(classname1 == 'erase'){
        divs.forEach(function(div){
            div.addEventListener('mouseover', ()=>{
                div.classList.remove('new');
            });
        });

        divs2.forEach(function(div){
            div.addEventListener('mouseover',()=>{
                div.classList.remove('new2');
            });
        });


    }
}

