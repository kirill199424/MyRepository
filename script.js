var Game_Interval;

function RunMatrix(){
            speed = 100 - document.getElementById("speed").value;
            fontSize = document.getElementById("fontSize").value;
            frequency = 0.3 - document.getElementById("frequency").value;
            document.getElementById("music").volume = fontSize / 20 - 0.5; 
            

            var scr=window.screen;
            var width = canvas.width=scr.width;
            var height = canvas.height;
            var yPositions = Array(300).join(0).split('');
            var ctx=canvas.getContext('2d');
 
            var draw = function () {

                ctx.fillStyle='rgba(0,0,0,'+ frequency +')';
                ctx.fillRect(0, 0, width, height);
                ctx.fillStyle='#00FF7F';
                ctx.font = fontSize + 'pt Georgia';
  
                yPositions.map(function(y, index){
                text = String.fromCharCode(Math.random() * (12585 - 12353) + 12353);
                x = index * 10 + 10;
                canvas.getContext('2d').fillText(text, x, y);
                    
                if(y > 100 + Math.random()*1e4)
                {
                    yPositions[index]=0; 
                }
                else
                {
                    yPositions[index] = y + 15;
                }
            });
                
        };
    
    Game_Interval = setInterval(draw, speed);
    }

 function stopMatrix() {
    clearInterval(Game_Interval);
    RunMatrix();
};

function updateOutputSpeed(value) {
  document.querySelector('#speedOut').value = value;
  stopMatrix();
};

function updateOutputFont(value) {
  document.querySelector('#fontSizeOut').value = value;     
  stopMatrix();
};

function updateOutputFrequency(value) {
  document.querySelector('#frequencyOut').value = value;
  stopMatrix();
};





        
    