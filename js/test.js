function test()
{
    var a = " never \r gonna \r give \r you \r up \n"
    var b = " what the fcuk is \f form feed"
    document.getElementById("test").innerHTML = a + " " + b
}