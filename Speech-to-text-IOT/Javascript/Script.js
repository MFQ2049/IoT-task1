

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

function recording(){
    
    const Reconginzer = new window.SpeechRecognition();

    Reconginzer.interimResults = false;
    Reconginzer.continuous = false;
    
    if (document.getElementById("LANG").value=='English'){
        Reconginzer.lang= 'en-EN';
    }
    else if (document.getElementById("LANG").value=='Arabic'){
        Reconginzer.lang= 'ar-AR';
    }


    
    document.getElementById('btn').innerHTML= "Listening...";
    document.getElementById('Message').innerHTML= "Listening, please speak...";
    Reconginzer.addEventListener('result', (event) =>{

       
        const text = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
        console.log(event.result);
        
        var paragraph = document.getElementById("p");
        paragraph.textContent = text ;
      
        text.onended(document.getElementById('Message').innerHTML= "Stopped listening, click start to listen again",
        document.getElementById('btn').innerHTML= "Start");
    }
    
    );
    


    Reconginzer.start();

    }

