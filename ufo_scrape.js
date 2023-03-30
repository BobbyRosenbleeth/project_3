// // get the data endpoints
 //const jan23 = "https://nuforc.org/webreports/ndxe202301.html"
// const feb23 = "https://nuforc.org/webreports/ndxe202302.html"
// const mar23 = "https://nuforc.org/webreports/ndxe202303.html"


$.get('https://nuforc.org/webreports/ndxe202301.html', function(jan23) {
    // const parser = new DOMParser();
    // const parsedjan = parser.parseFromString(jan23, 'text/html');
    // var allText = parsedjan.all[0].textContent;
    // console.log(allText);
    var myRows = { myRows: [] };

    var $th = $(jan23,'table th');
    $(jan23,'table tbody tr').each(function(i, tr){
        var obj = {}, $tds = $(tr).find('td');
        $th.each(function(index, th){
        obj[$(th).text()] = $tds.eq(index).text();
    });
    myRows.myRows.push(obj);
});
    alert(JSON.stringify(myRows));
    $('#out-put').html(JSON.stringify(myRows));
       
});
// tests for pulling the data
// $.get('https://nuforc.org/webreports/ndxe202302.html', function(feb23) {
//     console.log(feb23);
// });
// $.get('https://nuforc.org/webreports/ndxe202303.html', function(mar23) {
//     console.log(mar23);
// });

// var AoA = $('table tr').map(function(){
//     return [
//         $('td',this).map(function(){
//             return $(this).text();
//         }).get()
//     ];
// }).get();
// var json = JSON.stringify(AoA);







