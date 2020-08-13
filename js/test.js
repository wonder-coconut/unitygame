var arr = [a,b,c,d];
var len = arr.length;
var i,text;
text = "";
for (i = 0; i < len; i++)
{
    text += arr[i] + " ";
}
document.getElementById("test").innerHTML = text;