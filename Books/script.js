

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  
  const value = document.getElementById("weatherInput").value;
  
  const url = "https://bible-api.com/" + value;
/*global fetch*/
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      
      
       if (value === "")
    return;
  let results = "";
  let verse ="";
  /*global json*/
      
      
      results += '<h2>" ' + json.text +  '"</h2>';
       
      
      
   
      
        results += "</p>";
       
       document.getElementById("weatherResults").innerHTML = results;
       console.log(json);
        
      
    });
    
    
 
    
    
    /*Between Here*/
    
    
    
    
   
    
    
    /*Between Here*/
    
      
 
    });

/*global value*/










