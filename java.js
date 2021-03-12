$(document).ready(function() {
    
    
    var color;
    var userTrackId = [];
    var userTrackColor = [];
    
    
     $('#Btn-1').prop('disabled', true);
    $('td').click(function addColor() {
        var id =  parseInt($(this).attr("id").slice(3));
        console.log(id)
        userTrackId.push(id);
        color = $('#colorBtn-1').val();
        userTrackColor.push(color);
        if($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }


     console.log(userTrackId, idArray ,userTrackColor, randomColors);

        
    }); 


     function checkWinner() {
        var ut = JSON.stringify(userTrackId.sort()); // user track
        var rt = JSON.stringify(idArray.sort()); // random track 
        // console.log(ut === rt);
        var rc = JSON.stringify(randomColors.sort()).replace(/\s+/g, '');
        var uc = JSON.stringify(userTrackColor.sort()).replace(/\s+/g, '');
       var winningStatus = false;
        if((uc === rc ) && (ut == rt)) {
            //console.log('greatGoob!!!');
            clear();
            winningStatus = true;
            coloring(winningStatus);
            

        }

            else {
                $('#tab-2').effect( "shake" );
                clear();
                coloring(winningStatus);
                


                //$('.item1').show();

                


                
            }
            
     }

    $('#Btn-1').click(function () {
     
       checkWinner();
       setTimeout(clear,5000);
    //    setTimeout(countDown,5000);
    
       
       
  
    });
     

    
       //'#ff0000', '#008000', '#ffff00', ' #0000ff ', '#ff8000'
     
    var colorArray=['#ffffff'];
    var idArray =[];
    var randomColors = [];
    var counter;
    var $tds = $('td') // array that holds all the tds from the index page, and converts it to array 
    var tdCounter = 1; //global variable 
    
    

    function coloring(winningStatus){ // add second param to check winning status and based on that you increase the tds
        // access the id's of the elements and changing its colors.
       if(winningStatus) { // if winning status === true 
            clear();
            tdCounter+=1;
            $("item-2").html();
            console.log("TD counter",tdCounter);
            
       } 

     
        

        var $tds = $('td') // array that holds all the tds from the index page, and converts it to array 
        console.log($tds); // logging the tds 
        var color1 = [];
        
        for(var j =0; j <colorArray.length; j++){
            
            var randomIndexColor = Math.floor(Math.random(colorArray) * colorArray.length);
            color1.push(randomIndexColor);
        }
        console.log("our random generated color array:", color1);
        
        for(var i = 0; i<tdCounter; i++){
            var indexColor1 = Math.floor(Math.random(color1) * color1.length);

            var randomTD = Math.floor(Math.random($tds) * $tds.length)
            console.log("Random TD",$tds[randomTD])
            $($tds[randomTD]).css('background-color',colorArray[color1[indexColor1]]);
            idArray.push(randomTD);
            console.log("Array of Td to compare",idArray);
            randomColors.push(colorArray[color1[indexColor1]]);
            // function to check redundancy within the random array 
        }
    
         console.log(randomColors);
         
         
    };


    function clear() {
        $('td').css('background-color',"");
        
    } 

    




$(".item1").click
(function()  {
    
    $('#Btn-1').prop('disabled', false);
    $('.item1').hide();
    console.log("start");
    coloring();
    setTimeout(clear,5000); 
    $(".item-2").text(counter);
    
    setTimeout(function() {
        
        console.log("counter *** ",counter)
        // $(".item-2").show();
        
        var countDown = setInterval (function() {
            counter = parseInt($('.item-2').html()); 
             if (counter > 0 ) {
                 $('.item-2').html(counter -1);
                 console.log("counter",counter);  
             }
             
            else { 
                
                clearInterval(countDown);
                clearTimeout();
                counter = 0;

             console.log( counter);
                 
                  
                  $('.item-1 h3').html('Time is up');
                  $('#tab-2').effect( "shake" );
                  clear();
                  setTimeout(function() {
                     location.reload();
                  }, 3000);
                  
             }
          


        }, 1000);
  
     },5000);

     setTimeout(function(){
         $(".item-2").css('visibility' , 'visible');
     },5000)



    });


      function calculateTimeForNextLevel() {

          console.log('inside calculateTime function');
          var initialTime = 100;

          if (level == 1) {
             return initialTime;
            
         }

          else {

           return (initialTime + (level*level+1 ));   

          }  

        

    

    

    

    











}}); 

