function listing()
{
    var arr = ["jai","hanuman","gyan","gun","sagar"];
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