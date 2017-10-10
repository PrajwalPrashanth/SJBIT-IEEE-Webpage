var modal = document.getElementById('myModal');
var btn = document.getElementById('read_more');
var cls = document.getElementById('close');
btn.onclick = function() 
{
   modal.style.display = "block";
}
cls.onclick = function() 
{
    modal.style.display = "none";
}