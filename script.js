function showCalculator() {
    document.getElementById("Calculator").style.display = "block";
        var cal1=new CalciRender();
}

var CalciRender= function createCalculator()
{
    calculator = document.createElement("div");
    output = document.createElement("div");
    input = document.createElement("div");
    resultTextbox = document.createElement("textbox");

    calculator.setAttribute("class","calculator");
    output.setAttribute("class","output");
    input.setAttribute("class","input");
    resultTextbox.setAttribute("id","answerbox");

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
    output.appendChild(resultTextbox);

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

    one.setAttribute('onclick', 'passInput(1)');
    two.setAttribute('onclick', 'passInput(2)');
    three.setAttribute('onclick', 'passInput(3)');
    four.setAttribute('onclick', 'passInput(4)');
    five.setAttribute('onclick', 'passInput(5)');
    six.setAttribute('onclick', 'passInput(6)');
    seven.setAttribute('onclick', 'passInput(7)');
    eight.setAttribute('onclick', 'passInput(8)');
    nine.setAttribute('onclick', 'passInput(9)');
    zero.setAttribute('onclick', 'passInput(0)');
    equal.setAttribute('onclick', 'Calculate()');
    dot.setAttribute('onclick', 'passInput(".")');
    plus.setAttribute('onclick', 'passInput("+")');
    minus.setAttribute('onclick', 'passInput("-")');
    multiply.setAttribute('onclick', 'passInput("=")');
    divide.setAttribute('onclick', 'passInput("/")');

}

function passInput(value)
{
    resultTextbox.innerHTML+=value;
}

function Calculate()
{
    resultTextbox.innerHTML= eval(resultTextbox.innerHTML);
}
