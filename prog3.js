const buttons = document.getElementsByTagName("input");
let R=document.getElementById('result');
let result=R.innerHTML;
let E=document.getElementById('equation');
let equation=E.innerHTML;
let clicks;
console.log('clicks= ',clicks)

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        const buttonValue = this.value;
        
        switch (buttonValue){
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '.':
                    console.log(result)
                    if(result=='0'){
                        result=buttonValue;
                    }else{
                        result+=buttonValue;
                    }
                    break;
                
                case 'C':
                    result='';
                    equation='';
                    clicks=undefined;
                    break;
                case '%':
                case '+':
                case '-':
                case '/':
                case '*':
                
                    let array11=result.split('');
                    const operators=['+','-','*','/','%']
                    if(equation==''){
                       equation=result+buttonValue;
                       result='';
                       console.log(100)
                    }else if(result=='' && equation!==''){
                        let myArray=equation.split('');
                        myArray[myArray.length-1]=buttonValue;
                        equation=myArray.join('');
                        console.log(200)
                    }else if(array11[0]=='-'){
                       
                        array11.unshift('(');
                        array11.push(')')
                        console.log('array11:******** ',array11);
                        equation+=array11.join('')+buttonValue;
                        result='';
                    }else if(isNaN(clicks)){
                        equation+=result+buttonValue;
                        result='';
                        console.log(3000)
                        break;
                    }
                    else{
                        equation+=result+buttonValue;
                        result='';
                        console.log(300)
                    }
                    break;
                
                

                case '+/-':       
                
                    let array1=result.split('');
                    let array2=equation.split('');
                    console.log('array1: ',array1);
                    console.log('array2: ',array2);
                    
                    if(array1.length!==0 && array1[0]!=='-'){
                        array1.unshift('-');
                        result=array1.join('');
                    }else if(array1.length===null && array2.length!==null && array2[0]!=='-'){
                        array2.unshift('-');
                        equation=array2.join('');
                    }else if(array1.length==0){
                        array1.unshift('-');
                        result=array1.join('');
                    }else if(array1[0]==='-'){
                        array1.shift('-');
                        result=array1.join('');
                    }
                    break;
                
                case '=':
                    console.log('equal sign')
                    console.log('clicks= ',clicks)
                    console.log('equation= ',equation)
                    if(result!='' && clicks==undefined){
                        clicks ++;
                        equation+=result;
                        result=eval(equation);
                        console.log(111111111111);    
                        break;
                    }else if(isNaN(clicks)){
                        equation+=result;
                        result=eval(equation);
                        console.log(22222222222);
                        break;
                    }
                    break;
                
                         
        }
        R.innerHTML = result;
        E.innerHTML = equation;
    })}
