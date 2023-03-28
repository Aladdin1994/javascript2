"use strict";

// let date=new Date();
// let day=date.getDay();
// // console.log(date.getDay());

// switch(day){
//     case 0:
//         console.log('baaeraewr');
//         break;
//         case 1:
//             console.log('baaerdsafwqeeaewr');
//             break;
//             case 2:
//                 console.log('2');
//                 break;
//                 case 3:
//                     console.log('3');
//                     break;

//                         case 4:console.log('4');
//         break;
//         case 5:
//             console.log('5');
//             break;
//             case 6:
//                 console.log('6');
//                 break;
              
// }

// let x =1;
// while(x<5){
//     console.log(x);
//     x++;
// }

// let username;

// while(!username){
//     username=prompt('sadsda');
//     console.log(username);
// }

// let i=1;
// do{
//     console.log(i);
// }while(i>4)

// for(let i=0;i<5;i++){
//     console.log(i);
// }
// let i=0;

// for(; i<5;i++)

// for(let i=0;i<10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }



// let groupName="<b>21312</b>";

// document.write(groupName);

// let text =document.getElementById('text');

// // console.log(text);
// text.innerHTML=groupName;


// let inp=document.getElementById('inp')
// inp.value='test'


// let num=document.getElementById('num');


// let addinput=document.getElementById('show');

//  for(let i=0;i<=num.value;i++){
//     addinput.innerHTML+=`<input/>`
//  }

// function test(){
//     alert('salam')
// } 

// test();
// let btn=document.getElementById('btn')
// btn.addEventListener('click', test);

// function hesabla(x,y){
//     let num = document.getElementById('num');
//     num.innerHTML=x+y;
//     // console.log(x+y);
// }
 
// hesabla(5,6)

// function hesab(name,surname){
//   return name + " " + surname;


// }

// let num = document.getElementById('num');

// num.innerHTML=hesab('kenan' ,'hesenov');


// let inp=document.getElementById('num');
// let btn=document.getElementById('btn');
// let show =document.getElementById('show');

// function add(){

//     let newInput='';
//     for(let i=1;i<=inp.value;i++){
//             newInput+=`<input placeholder="musteri ${i}"/>`;

//     }
//     show.innerHTML=newInput;

// }
// btn.addEventListener('click', add);
// let btn=document.getElementById('btn');
// let tbl=document.getElementById('tbl');


// function add(){

//     let result='';
//     for(let i=1;i<=3;i++){

//         result+=`<tr>`;
//         for(let j=1;j<=3;j++){
//              result+=`<td></td>`;
//         }
//         result+=`</tr>`;
//     }
//     tbl.innerHTML=result
// }
// btn.addEventListener('click',add)

// task 1.
//  let result;

//  if (a + b < 10) {
//  result = 'Yes';
//  } else { result = 'No';
// }

// let result=(a+b<10)? 'yes': 'no';



// function numPower(num,pow) {           
//             return num*num*num;
     
//     // nəticə return edilməlidir
//     }
//     console.log(numPower(4,3)); 




    function numPower(num,pow) {           
        return num*num;
 
// nəticə return edilməlidir
}

console.log(numPower(16,2));


let tbl=document.getElementById('tbl');
let slc=document.getElementById('slc');

function add(){

    tbl.style.display = 'table';

    
    let result='';
    let color;
    
    for(let i=1;i<=slc.value;i++){
            
        result+=`<tr>`;

        for(let j=1;j<=slc.value;j++){
            color = i==j||i+j==slc.value+1 ? 'black' : '';
            result+=`<td style="background-color:${color};"> ${i}+${j} </td>`;
        }
        result+=`</tr>`;
    }
            debugger
    tbl.innerHTML = result;
}

slc.addEventListener('change', add);

