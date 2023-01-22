const {ipcRenderer} = require('electron')
const $ = require('jquery');
$(document).ready(function(){
    
    let body = $("body,html");
    let innerWidget = $("#main-div");
    let musicBars = $("#canvasElmId");
    let upperDiv =  $("#upper_div");
    let lowerDiv =  $("#below_div");

    let playMusicButton = $("#play_icon");
    let prevMusicButton = $("#prev_icon");
    let nextMusicButton = $("#next_icon");

    let allMusics = [];
    let currentMusic = "";
    let musicCounter = -1;

    $.getJSON("./config.json", function(json) {
    console.log(json['mainWidgetWidth'])

    body.css("width",json['mainWidgetWidth'] -10)
    body.css("height",json['mainWidgetHeight'] -15)

    innerWidget.css("margin",json['marginOfInnerWidget'])
    

    lowerDiv.css("min-width",json['mainWidgetWidth']-json['marginOfInnerWidget']-20);
    // lowerDiv.css("min-height",json['mainWidgetHeight']-json['marginOfInnerWidget']-10);

    upperDiv.css("min-width",json['mainWidgetWidth']-json['marginOfInnerWidget']-20);
    upperDiv.css("min-height",json['mainWidgetHeight']-json['marginOfInnerWidget']-10);


    musicBars.css("max-width",json['mainWidgetWidth']-json['marginOfInnerWidget']-30)



    });


    
    ipcRenderer.on('async-musiclist', (event, arg) => {
        allMusics = JSON.parse(arg);
        console.log(allMusics[0]['dir']);
        musicCounter = 0;

        playNext();
    })
    ipcRenderer.send('need-musiclist', 'D://Music/Music')


    // body.css(mainWidgetLength);

    let select_folder = $("#select_folder");
    let audioElement = document.querySelector("#audioElmId");
    let canvasElement = document.querySelector("#canvasElmId");
    let wave = new Wave(audioElement, canvasElement);
    let playing = false;
    audioElement.volume = 0.7;

    

    

    select_folder.on("click",function(){
        ipcRenderer.send('select-dirs', 'D://Music/Music')
    });

    playMusicButton.on("click",function(){
        if(currentMusic.length > 3){
            if(playing){
                playing = false;
                audioElement.pause();
                playMusicButton.css("background-image","url('./image/play_icon.png')");
                
            }else{
                playing = true;
                audioElement.play();
                playMusicButton.css("background-image","url('./image/pause_icon.png')");
            }
        }
    });

    prevMusicButton.on("click",function(){
        playPrev();
    });

    nextMusicButton.on("click",function(){
        playNext();
    });

    ipcRenderer.on('directories-selected',(event,arg) =>{
        ipcRenderer.send('need-musiclist', 'aa')
    });

    
    
    // Expert example: add multiple animations with options
    wave.addAnimation(new wave.animations.Lines({
    count:15,
    lineWidth:2,
    frequencyBand:"mids",
    rounded:true,
    glow:{strength:10,color:"#a442f5"},
    lineColor: {gradient:["#fc2833","#a442f5"]}
    }));



    function playNext(){

        
        musicCounter++;
        if(musicCounter >= allMusics.length){
            musicCounter = 0;
        }
        currentMusic = allMusics[musicCounter]['dir'] + '/' + allMusics[musicCounter]['name'];
        setAndPlayAudioPlayer();
    }

    function playPrev(){
        musicCounter--;
        if(musicCounter < allMusics.length){
            musicCounter = 0;
        }
        currentMusic = allMusics[musicCounter]['dir'] + '/' + allMusics[musicCounter]['name'];
        
        setAndPlayAudioPlayer();
    }

    function setAndPlayAudioPlayer(){
        audioElement.src = currentMusic;
        audioElement.play();
        console.log();
    }

    

    
}); 