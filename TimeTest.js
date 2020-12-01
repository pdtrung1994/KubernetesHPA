console.log('Hello, world!')
var n;
var i;
var start,end;
for (var time =0 ; time <5; time++)
{
    n = Math.floor(Math.random() * Math.floor(99999999));
    i = 0;
    start = Math.floor(Date.now());
//console.log(start);
    for(var z =0;  z < n; z++){
        i++;
    }
    end = Math.floor(Date.now());
//console.log(end);  
    console.log(i);
    console.log(end - start)
}
