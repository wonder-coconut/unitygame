function listing(arr)
{
    arr.sort(function(a,b){return a-b})
    var len = arr.length;
    var i = 0;
    var text="<ul>";
    for(i=0;i<len;i++)
    {
        text += "<li>" + arr[i];
    }
    text = text + "<ul>"
    document.getElementById("test").innerHTML=text;
}