function listing(arr)
{
    var i,len,text;
    text = "<ul>"
    len = arr.text
    for(i = 0;i<len;i++)
    {
        text += "<li>" + arr[i] + "</li>"
    }
    text += "<ul>"
    return text
}
function test()
{
    var arr = ["ur","momma","hella","gay"]
    var text = listing(arr)
    document.getElementById("test").innerHTML = text
}