let result=document.getElementById("input_text");
function display(number)
    {
        result.value=result.value+number;
    }
function calculate()
//let calculate = () =>
    {
        try{
            result.value = eval(result.value);
        }
        catch{
            alert("Enter an invalid expression")
        }
    }
function clr()        
    {
        result.value = '0'
    }
function del()
    {
            result.value = result.value.slice(0,-1)
    }

