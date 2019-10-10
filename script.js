function showCalculator() {
    document.getElementById("Calculator").style.display = "block";
    num1=0,num2=0;
    flag=0;
   var cal1=new CalciRender();
}

var CalciRender=function createCalculator()
{
    calculator = document.createElement("div");
    output = document.createElement("div");
    input = document.createElement("div");

    calculator.setAttribute("class","calculator");
    output.setAttribute("class","output");
    input.setAttribute("class","input");

    one = document.createElement("button");
    two = document.createElement("button");
    three = document.createElement("button");
    four = document.createElement("button");
    five = document.createElement("button");
    six = document.createElement("button");
    seven = document.createElement("button");
    eight = document.createElement("button");
    nine = document.createElement("button");
    zero = document.createElement("button");
    dot = document.createElement("button");
    equal = document.createElement("button");
    plus = document.createElement("button");
    minus = document.createElement("button");
    substract = document.createElement("button");
    multiply = document.createElement("button");
    divide = document.createElement("button");
    
    one.innerHTML=1;
    two.innerHTML=2;
    three.innerHTML=3;
    four.innerHTML=4;
    five.innerHTML=5;
    six.innerHTML=6;
    seven.innerHTML=7;
    eight.innerHTML=8;
    nine.innerHTML="9";
    zero.innerHTML="0";
    dot.innerHTML=".";
    equal.innerHTML="=";
    plus.innerHTML="+";
    minus.innerHTML="-";
    divide.innerHTML="/";
    multiply.innerHTML="*";


    document.body.appendChild(calculator); 
    calculator.appendChild(output);
    calculator.appendChild(input);

    input.appendChild(seven);
    input.appendChild(eight);
    input.appendChild(nine);
    input.appendChild(divide);

    input.appendChild(four);
    input.appendChild(five);
    input.appendChild(six);
    input.appendChild(multiply);

    input.appendChild(one);
    input.appendChild(two);
    input.appendChild(three);
    input.appendChild(minus);

    input.appendChild(zero);
    input.appendChild(dot);
    input.appendChild(equal);
    input.appendChild(plus);

    one.setAttribute('onclick', 'Calculate(1)');
    two.setAttribute('onclick', 'Calculate(2)');
    three.setAttribute('onclick', 'Calculate(3)');
    four.setAttribute('onclick', 'Calculate(4)');
    five.setAttribute('onclick', 'Calculate(5)');
    six.setAttribute('onclick', 'Calculate(6)');
    seven.setAttribute('onclick', 'Calculate(7)');
    eight.setAttribute('onclick', 'Calculate(8)');
    nine.setAttribute('onclick', 'Calculate(9)');
    zero.setAttribute('onclick', 'Calculate(0)');
    equal.setAttribute('onclick', 'Calculate("=")');
    dot.setAttribute('onclick', 'Calculate(".")');
    plus.setAttribute('onclick', 'Calculate("+")');
    minus.setAttribute('onclick', 'Calculate("-")');
    multiply.setAttribute('onclick', 'Calculate("=")');
    divide.setAttribute('onclick', 'Calculate("/")');
}

var num1=0,num2=0;
var flag=0;

function Calculate(value)
{
    if(value=="+" || value=="*" || value=="-" || value=="/")
    {
        flag=1;
        switch (value)
        {
            case "+":           
                    operator1 = document.createElement("textbox");
                    operator1.innerHTML = value;
                    output.appendChild(operator1); 
                    operator = value;
            break;
            case "-":
                    operator1 = document.createElement("textbox");
                    operator1.innerHTML = value;
                    output.appendChild(operator1); 
                    operator = value;
            break;
            case "*":
                    operator1 = document.createElement("textbox");
                    operator1.innerHTML = value;
                    output.appendChild(operator1); 
                    operator = value;
            break;
            case "/":
                    operator1 = document.createElement("textbox");
                    operator1.innerHTML = value;
                    output.appendChild(operator1); 
                    operator = value;
            break;    
        }
    }
    else if(value=="=")
    {
        result = document.createElement("textbox");
        operatorShow = document.createElement("textbox");
        operatorShow.innerHTML =value
        output.appendChild(operatorShow);

        switch (operator)
        {
            case "+":
               
                    result.innerHTML = num1 + num2;
                    output.appendChild(result); 
            break;
            case "-":
                    result.innerHTML = num1-num2;
                    output.appendChild(result); 
            break;
            case "*":
                    result.innerHTML = num1*num2;
                    output.appendChild(result); 
            break;
            case "/":
                    result.innerHTML = num1/num2;
                    output.appendChild(result); 
            break;    
        }
       
    }
    else
    {
        p = document.createElement("textbox");
        p.innerHTML = value;
        output.appendChild(p); 
        if(flag==0)
        {   
            num1 = num1*10 + value;
        }
        else
        {      
            num2 = num2*10 + value;
        }
    }
}