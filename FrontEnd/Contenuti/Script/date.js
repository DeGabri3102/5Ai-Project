 var inizio = [];
 var fine = [];
 var getDateArray = [];
 var flag = true;
 var dateNoleggi = new Array();

 var getDates = function(startDate, endDate) {
     //alert(startDate);
     var dates = [];
    for (let index = 0; index < startDate.length; index++) {  
      
     currentDate = startDate[index],
     addDays = function(days) {
       var date = new Date(this.valueOf());
       date.setDate(date.getDate() + days);
       return date;
     };
      while (currentDate <= endDate[index]) {
        //alert(currentDate);
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
   
 }
    }
     

    //sistemazione data
    var arrString = new Array();
    dates.forEach(function(data){
        if(data.getMonth() < 10 ) 
        {
          var mese = "0" + (data.getMonth()+1).toString();
        }

        if(data.getDate() < 10 ) 
        {
          var g = data.getDate().toString();
        } else
        var g = data.getDate().toString();

        
        var d = g + "/" + mese + "/" +data.getFullYear().toString() ;
        arrString.push(d);
        //alert(d);
    });
     
    return arrString;
  };


 function DisableDates(date) {
    
      
        getDateArray = getDates(inizio,fine);
  
    
     //alert(getDateArray);
     var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
     return [getDateArray.indexOf(string) == -1];
 };

function Aggiorna(rangeDate){
  inizio = [];
  fine = [];
    if(rangeDate != "NO"){
    dateNoleggi = rangeDate.split("@");
    dateNoleggi.length = (dateNoleggi.length-1);
    var indice = 0;
    dateNoleggi.forEach(function(date){
      //date = date.slice(0,-1);
      var spittatore = [];
      spittatore = date.split(":");
      var i = spittatore[0];
      var f = spittatore[1];
      i = i.replaceAll("-","/");
      i = new Date(i);
      f = f.replaceAll("-","/");
      f = new Date(f);
      inizio.push(i);
      fine.push(f);
    });

 $(function() {
    $("#dataFine").datepicker({
     beforeShowDay: DisableDates
    });

   
 });

 $(function() {
    $("#dataInizio").datepicker({
     beforeShowDay: DisableDates
    });
 });
}
else
{
  $(function() {
    $("#dataFine").datepicker({
    });
 });

 $(function() {
    $("#dataInizio").datepicker({
    });
 });
}
var d = new Date();
DisableDates(d);
};



  