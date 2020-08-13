var list,len,i,text;
arr = [a,b,c,d];
len = arr.length;
text = "";
for (i = 0; i < len; i++)
{
    text += arr[i] + " ";
}
document.getElementById("test").innerHTML = text;