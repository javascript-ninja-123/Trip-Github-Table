export const dateConverter = (s) => {
    const date = new Date(s)
    var dd = date.getDate();
  
    var mm = date.getMonth()+1; 
    var yyyy = date.getFullYear();
    var hours =  date.getHours()
    var minutes = date.getMinutes()
    var time = "am"
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    if(hours > 12){
      hours -= 12
      time = "pm"
    }
    if(minutes < 10){
      minutes = "0"+minutes;
    }
    const d = `${mm}-${dd}-${yyyy} ${hours}:${minutes} ${time}`;
    return d
  }