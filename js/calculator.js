function insertTextbox(value){
    document.getElementById("screen").value += value;
}
function result(){
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}
function reset(){
    document.getElementById("screen").value = '';
}
function dividedByOne(){

    var a = 1/document.getElementById("screen").value;
    if(a){
        document.getElementById("screen").value=eval(a);
    }
}