//the thing below represents # of rows & columns in your puzzle
const scramble_rows = 80;
const scramble_columns = 20;

//the thing below represents hovering color (color you get if u hover over the tile with another tile)
const scramble_hovertint = '#1E9E1E';

//variables to reference previous claimed definitions so that u don't have that write entire thing over again
var canvas;
var stage;
var img;
var pieces;
var pictureWidth;
var pictureHeight;
var pieceWidth;
var pieceHeight;
var currentPiece;
var currentDropPiece;
var mouse;



//this function defines image loading (initilizes the entire image)
//put file name into img.src
function init() {
    img = new Image();
    img.addEventListener('load',onImage,false); //so you can do something when something (an event) has happened
    img.src = "body.jpg";
}

//division calculates size of each piece, multiplication calculates total width & height of entire image.
//carries out the event (e)
function onImage(e) {
    pieceWidth = Math.floor(img.width / scramble_columns);
    pieceHeight = Math.floor(img.height / scramble_rows);
    pictureHeight = pieceHeight * scramble_rows;
    pictureWidth = pieceWidth * scramble_columns;
    //below functions
    setCanvas(); 
    initScramble();
}
    
//this defines canvas, sets the perimeter of scramble image
function setCanvas() {
    canvas = document.getElementById('canvas'); //using document to use entire document
    stage = canvas.getContext('2d');
    canvas.position = "relative";
    canvas.width = pictureWidth;
    canvas.height = pictureHeight;
    canvas.style.border = "2px solid yellow";
}

//this function creates an array and sets the pieces into a grid 
function initScramble() {
    pieces = [];
    mouse = {x:0, y:0};
    
    //when mouse is not doing anything, it leaves the pieces alone
    currentPiece = null; 
    currentDropPiece = null;
    
    stage.drawImage(img, 0, 0, pictureWidth, pictureHeight, 0, 0, pictureWidth, pictureHeight);
    buildPieces(); //to slice up the tiles
}

//this function does not actually render the images, but holds values to direct where the pieces are drawn//
function buildPieces() {
    
    var a;
    var piece;
    var xPos = 0;
    var yPos = 0;
    
    //this loop sets all the pieces into place in the grid
    for(a = 0; a < scramble_rows * scramble_rows; a++) {
        piece = {};
            piece.sx = xPos;
            piece.sy = yPos;
        
        pieces.push(piece);
        
        xPos += pieceWidth;
        
        //this loop checks once the width is over pictureWidth, xPos goes to 0 and yPos increase by pieceHeight//
        if(xPos >= pictureWidth) {
            xPos = 0;
            yPos += pieceHeight;
        }
    }
    //when mouse is clicked over image, it scrambles into tiles
    document.onmousedown = shuffleScramble;
}

//the function that shuffles the image pieces
function shuffleScramble() {
    pieces = shuffleArray(pieces);
    stage.clearRect(0, 0, pictureWidth, pictureHeight); //clears background canvas
    
    var a;
    var piece;
    var xPos = 0;
    var yPos = 0;
    
    for(a = 0; a < pieces.length; a++) {
        piece = pieces[a];
            piece.xPos = xPos;
            piece.yPos = yPos;
        
        stage.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, xPos, yPos, pieceWidth, pieceHeight);
        //draws the piece in place
        stage.strokeRect(xPos, yPos, pieceWidth, pieceHeight);
        
        xPos += pieceWidth;
        
        if(xPos >= pictureWidth) {
            xPos = 0;
            yPos += pieceHeight;
        }
    }
    
    document.onmousedown = onScrambleClick;
}

//randomizes the shuffle and allows you to shuffle
function shuffleArray(o) {
    for(var b, x, a=o.length; a; b = parseInt(Math.random() * a), x = o[--a], o[a] = o[b], o[b] = x);
    //didnt set radix perimeter because it won't shuffle with it
    return o;
}

function onScrambleClick(e) {
    pieces = shuffleArray(pieces);
    
//can't find substitute for layerX and offsetX
//the mouse position and the triggers
    if(e.layerX || e.layerX == 0) {
        mouse.x = e.layerX - canvas.offsetLeft;
        mouse.y = e.layerY - canvas.offsetTop;
    } else if(e.offsetX || e.offsetX == 0) {
        mouse.x = e.offsetX - canvas.offsetLeft;
        mouse.y = e.offsetY - canvas.offsetTop;
    }
    
    currentPiece = checkPieceClicked();
    if(currentPiece != null) {
        stage.clearRect(currentPiece.xPos, currentPiece.yPos, pieceWidth, pieceHeight);
        stage.fillStyle = scramble_hovertint;
        stage.fillRect(currentPiece.xPos, currentPiece.yPos, pieceWidth, pieceHeight);
        stage.save();
        stage.globalAlpha = .5; 
        stage.restore();    
    } 

}

function checkPieceClicked() {
    
    document.onmouseup = shuffleScramble();
    var a;
    var b;
    var piece;
    
    for(a=0; a<pieces.length; a++) {
        piece = pieces[a];
        pieces.length = pieces.length -1;
        
        if(pieces.length <= 0) {
            initScramble();
        }
        
    }
   
}