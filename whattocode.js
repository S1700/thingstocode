function randCode(){
    var text = ["A Calculator",
    "The Snake Game",
    "A Clone To This Website",
    "A Text Editor",
    "A Todo List Program",
    "A Discord Bot", 
    "A Programming Language", 
    "A Chat App", 
    "A Cryptocurrency", 
    "A Weather API", 
    "A Encryption Program", 
    "A Minecraft Mod",
    "A Network Traffic Analyser", 
    "A Online Text Editor", 
    "A Personal Website", 
    "A Linux File Server", 
    "A Python Web Scraper", 
    "Rock Paper Scissors Game", 
    "A Random Password Generator", 
    "A Music Player", 
    "Automatize your computer",
    "A Memory Game",
    "A Social Media Website",
    "The Tic Tac Toe Game",
    "Face Detector",
    "Artificial Intelligence"];
    var randtext = Math.floor(Math.random()*26);
    document.getElementById("coder").innerHTML = text[randtext];
}

randCode()

