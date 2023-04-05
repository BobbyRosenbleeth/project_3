// // get the data endpoints
//const jan23 = "https://nuforc.org/webreports/ndxe202301.html"
// const feb23 = "https://nuforc.org/webreports/ndxe202302.html"
// const mar23 = "https://nuforc.org/webreports/ndxe202303.html"

//get the data from the site for january 2023
$.get('https://nuforc.org/webreports/ndxe202301.html', function(jan23) {
      //create an array to store the table data
         const tableData1 = [];
    //iterate through the table data by each row and separate out the td 
         $(jan23).find('tr').each(function(row, tr) {
           
          tableData1[row] = {
            "Date": $(tr).find('TD:eq(0)').text(),
            "City": $(tr).find('TD:eq(1)').text(),
            "State": $(tr).find('TD:eq(2)').text(),
            "County": $(tr).find('TD:eq(3)').text(),
            "Shape": $(tr).find('TD:eq(4)').text(),
            "Duration": $(tr).find('TD:eq(5)').text(),
            "Summary": $(tr).find('TD:eq(6)').text(),
            "Posted": $(tr).find('TD:eq(7)').text(),
            "Images": $(tr).find('TD:eq(8)').text(),
          }
        });
        //Convert the tableData array to a JSON object
        const janData = JSON.stringify(tableData1);
        //janData is our table turned into a JSON object
        // log janData to confirm output
        console.log(janData);
    
      });

//get the data from the site for february 2023
$.get('https://nuforc.org/webreports/ndxe202302.html', function(feb23) {
      //create an array to store the table data
         const tableData2 = [];
    //iterate through the table data by each row and separate out the td 
         $(feb23).find('tr').each(function(row, tr) {
           
          tableData2[row] = {
            "Date": $(tr).find('TD:eq(0)').text(),
            "City": $(tr).find('TD:eq(1)').text(),
            "State": $(tr).find('TD:eq(2)').text(),
            "County": $(tr).find('TD:eq(3)').text(),
            "Shape": $(tr).find('TD:eq(4)').text(),
            "Duration": $(tr).find('TD:eq(5)').text(),
            "Summary": $(tr).find('TD:eq(6)').text(),
            "Posted": $(tr).find('TD:eq(7)').text(),
            "Images": $(tr).find('TD:eq(8)').text(),
          }
        });
        //Convert the tableData array to a JSON object
        const febData = JSON.stringify(tableData2);
        //febData is our table turned into a JSON object
        // log febData to confirm output
        console.log(febData);
    
      });

      //get the data from the site for march 2023
$.get('https://nuforc.org/webreports/ndxe202303.html', function(mar23) {
      //create an array to store the table data
         const tableData3 = [];
    //iterate through the table data by each row and separate out the td 
         $(mar23).find('tr').each(function(row, tr) {
           
          tableData3[row] = {
            "Date": $(tr).find('TD:eq(0)').text(),
            "City": $(tr).find('TD:eq(1)').text(),
            "State": $(tr).find('TD:eq(2)').text(),
            "County": $(tr).find('TD:eq(3)').text(),
            "Shape": $(tr).find('TD:eq(4)').text(),
            "Duration": $(tr).find('TD:eq(5)').text(),
            "Summary": $(tr).find('TD:eq(6)').text(),
            "Posted": $(tr).find('TD:eq(7)').text(),
            "Images": $(tr).find('TD:eq(8)').text(),
          }
        });
        //Convert the tableData array to a JSON object
        const marData = JSON.stringify(tableData3);
        //marData is our table turned into a JSON object
        // log marData to confirm output
        console.log(marData);
    
      });
 
     
 








