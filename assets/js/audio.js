window.audio = {
    
    // Instance to the AudioContext
    // Because of https://code.google.com/p/chromium/issues/detail?id=308784
    audioCtx : null,
    
    
    
    
    
    // Initialize global stuff
    init : function() {
        // Set the available AudioContext
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        
        // Create an instance of AudioContext
        audio.audioCtx = new AudioContext();
    },
    
    
    
    
    createSound : function(frequency, delay) {
        var oscillator = audio.audioCtx.createOscillator();
        oscillator.frequency.value = frequency;
        
        oscillator.connect(audio.audioCtx.destination);

        var currentTime = audio.audioCtx.currentTime;

        oscillator.start(currentTime);
        oscillator.stop(currentTime + delay);
            
        return audio;
    },
    
    
    
    
    
    // Player dies
    die : function() {
        audio.createSound(200, .25).createSound(300, .25);
    },
    

    // Collect a default power-up
    collectPowerUp : function() {
        audio.createSound(500, .25).createSound(600, .5).createSound(700, .75);
    },
    
    // Collect a bomb
    collectBomb : function() {
        audio.createSound(100, .1).createSound(150, .2).createSound(300, .3);
    }

    
}





// Initialize
window.audio.init();