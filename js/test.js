function listing(arr)
{
    arr = [a,b,c,d];
    var i,len,text;
    text = "<ul>";
    len = arr.text;
    for(i = 0;i<len;i++)
    {
        text += "<li>" + arr[i] + "</li>";
    }
    text += "<ul>";
    document.getElementById("test").innerHTML = text;
}
function test()
{
    
    var text = listing(arr);
    
}