$(document).ready(function(){
 $('#action-button').click(function() {
  $.ajax({
       url:"https://api.joind.in/v2.1/talks/10889",
       date: {
        format: 'json'
    },
    dataType: 'json',






    type: 'GET'
  });
 });
});
