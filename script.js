let firstpara=0;
let c= 0;                                        // initialising c as a 0 
let op;
let out = 0;
let outputs =  document.querySelector(".output"); // calling the output display to the JS
let buttons = document.querySelector('.arrange'); // calling all the nodelist of nodes within arrange class. 
function operate (op)                             // function to run arithmetic operation. 
{   
    if (op === "+")    
    return firstpara + c ;
    else if( op ==="X")
    return firstpara * c;
    else if (op==="-")
    return firstpara - c ;
    else if ( op ==="/")
    return firstpara/c ;
}
let child = buttons.childNodes;                 //selecting child elements of arrange
child.forEach((div)=>{
 div.addEventListener('click',(e)=>{            // When click happens on any of the div elements, fuction runs. 
  if((div.innerText==="+")||(div.innerText==="X")||(div.innerText==="/")||(div.innerText==="-")) // to check and save operator to be used
  {     
      if(!firstpara)
      {
      firstpara = c;
      }
      else if ((firstpara!==0)&&(c!==0)&&(op!==" ")&&(!out))
      {
        outputs.innerHTML = `${firstpara} ${op}`;
        outputs.innerHTML = operate(op);
        firstpara = operate(op);
        c=0;
        op = div.innerText;   
        return;
      }
      if ((firstpara!==0)&&(c!==0)&&(out!==0)&&(op!==" "))
      {
        outputs.innerHTML = out;
        firstpara = Number(out);
        op = div.innerText;   
        c=0;
        out=0;
        return;
      }
      op = div.innerText;    
      outputs.innerHTML = `${firstpara} `;
      c = 0;
      return;
  }
  else if(div.innerText === "=")              // when the equal to operator is clicked
  { 
    if((c!=0)&&(firstpara==0))
    {
      outputs.innerHTML = `${c}`;
      return;
    }
    if((c)&&(firstpara))
    {
      outputs.innerHTML = operate(op);
      out= operate(op);
      return;
    }
    if((c==0)&&(firstpara==0))
    {
      outputs.innerHTML = " ";
      return;
    }
    outputs.innerHTML = `${firstpara}`;
    outputs.innerHTML = operate(op);
    firstpara = operate(op);
    console.log(firstpara);
    c = 0;
    return;
  } 
  else if (div.innerText==="C")           // when clear button is run 
  {
    outputs.innerHTML =" ";
    c= 0;
    firstpara =0;
    op= " ";
    out= 0;
    return;
  } 
  if((c!==0)&&(firstpara!==0)&&(out!==0))
  {
    out = out + div.innerHTML;
    outputs.innerHTML = out;
  }
  else                                    // where the numbers are entered into Calculator
  {
  c = c + div.innerHTML;
  c = Number(c);
  outputs.innerHTML = (c);
  console.log(c);
  }
});
});