let firstpara=0;
let c= 0;                                        // initialising c as a 0 
let op;
let out = 0;
let outputs =  document.querySelector(".output"); // calling the output display to the JS
let buttons = document.querySelector('.arrange'); // calling all the nodelist of nodes within arrange class. 
function operate (op)                             // function to run arithmetic operation. 
{   
    if (op === "+")    
    return Number(firstpara) + Number(c) ;
    else if( op ==="X")
    return Number(firstpara) * Number(c);
    else if (op==="-")
    return Number(firstpara) - Number(c) ;
    else if ( op ==="/")
    return Number(firstpara)/Number(c) ;
}
let child = buttons.childNodes;                 //selecting child elements of arrange

child.forEach((div)=>{
 div.addEventListener('click',function show(e) {            // When click happens on any of the div elements, function runs. 
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
    if(out==="")
    {
    out=" ";
    outputs.innerHTML = " ";
    return;
    }
    if((c)&&(firstpara)&&(!out))
    {
      outputs.innerHTML = operate(op);
      out= operate(op);
      console.log("andi")
      return;
    }
    if((c==0)&&(firstpara==0))
    {
      outputs.innerHTML = " ";
      return;
    }
    else if(!out)
    {
    outputs.innerHTML = `${firstpara}`;
    outputs.innerHTML = operate(op);
    firstpara = operate(op);
    console.log(firstpara);
    c = 0;
    return;
    }
    else
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
  else if(div.innerText===".")
  {
    if((c!==0)&&(firstpara!==0)&&(out!==0))
    {
      if(Number.isInteger(out))
      {
        out = out + div.innerHTML;
        outputs.innerHTML = out;
        return;
      }
      else if(out.includes("."))
      {
      return;
      }
      else
      out = out + div.innerHTML;
      outputs.innerHTML = out;
      return;
    }
    else if(c.includes("."))
    {
      return;
    }
      else  
      c = c + div.innerHTML;
      outputs.innerHTML = c;
      return;

  }
  else if(div.innerHTML==="CE")
  {
    if((c!==0)&&(firstpara!==0)&&(out!==0))
    {
      out = out.toString();
      out = out.substring(0, out.length - 1);
      outputs.innerHTML = out;
      return;
    }
    else
    {
      c=c.toString();
      c = c.substring(0, c.length - 1);
      outputs.innerHTML = c;
      console.log(c);
      return;
    }
  }
  if((c!==0)&&(firstpara!==0)&&(out!==0))
  {
    out = out + div.innerHTML;
    outputs.innerHTML = out;
  }
  else                                    // where the numbers are entered into Calculator
  {
  c = c + div.innerHTML;
  outputs.innerHTML =  (c);
  console.log(c);
  }
});
});

document.addEventListener('keydown', function (e)   //keyboard support 
{
    let keyy = document.querySelector(`div[data-key="${e.keyCode}`);  // keyy is assigned which Selects the div from the entire document, who has data-key attribute already defined 
    if(!keyy)                                                          // if the keycode matches as the specified date-key( of the key which is pressed down (e)) ,its selected and assigned
    {
      return;
    }    
    else
    keyy.click();                                 // if key exists, a fake click is created at the key. 
});

