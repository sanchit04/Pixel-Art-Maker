function makeGrid(rows,cols) {  
           $('table tr').remove();
           for(var i=1;i<=rows;i++){
           $('table').append('<tr></tr>');
               for(var j=1;j<=cols;j++){
               $('tr:last').append('<td></td>');//
               $('td').attr("class",'cells');
               }
           }
        };
         
              
    
       
       $(document).ready(function(){
        $('#submit-btn').click(function(evt){
          var rows,cols;
            cols=$('#inputWidth').val();
            rows=$('#inputHeight').val();
            evt.preventDefault();
            makeGrid(rows,cols);
       });
       $('#pixel_canvas').click(function(event){
        var paint=$('#colorPicker').val();
        $(event.target).css('background-color',paint);
   });
       });
