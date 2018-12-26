
    var counter = -1;
    var imagesPaths = ["https://aysesenafeyiz.github.io/ileriProgramlama/Project/images/head.png", "https://aysesenafeyiz.github.io/ileriProgramlama/Project/images/leftArm.png", "https://aysesenafeyiz.github.io/ileriProgramlama/Project/images/body.png", "https://aysesenafeyiz.github.io/ileriProgramlama/Project/images/rightArm.png", "https://aysesenafeyiz.github.io/ileriProgramlama/Project/images/leftLeg.jpg", "https://aysesenafeyiz.github.io/ileriProgramlama/Project/images/rightLeg.jpg"];
    var divNames = ["head", "leftArm", "body", "rightArm", "leftLeg", "rightLeg"]
    var images = [];
    window.onload = function() {
        for (var i = 0; i <= 5; i++) {
            var img = new Image();
            img.src = imagesPaths[i];
            img.setAttribute("height", "75");
            img.setAttribute("width", "75");
            images.push(img);
        }
		
		
		
		
    };  
    
	//const letters= [['a', '0'], ['b', '0'], ['c', '0'], ['d', '0'], ['e', '0'], ['f', '0'], ['g', '0'], ['h', '0'], ['i', '0'], ['j', '0'], ['k', '0'], ['l', '0'], ['m', '0'], ['n', '0'], ['o', '0'], ['p', '0'], ['q', '0'], ['r', '0'], ['s', '0'], ['t', '0'], ['u', '0'], ['v', '0'], ['w', '0'], ['x', '0'], ['y', '0'], ['z', '0']];
	
	
class Category {
    constructor (text) {
    this.text = text; 
    this.words = new Array();  
 }
    toString () {
        return this.text+'';
    }
}

class Word {
    constructor (text) {
      this.text = text;
     }
   toString () {
        return this.text+'';
    }
}

class Database{
    constructor () {
        this.categories = new Map()
		this.hangman=new Hangman()
        this.readData()
           }


readData() {
var url = "https://aysesenafeyiz.github.io/ileriProgramlama/Project/Data.txt"
        fetch(url)
        .then(res => res.text())
        .then(res => [
            this.addData(res)
        ])
        console.log(this.categories)
}

addData(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";

    for (let line of a) {
        let b = line.split("\t");
    	   let c = b[0], w = b[1];

    if(this.categories.has(c.toString())) {
      this.categories.get(c.toString()).push(w.toString())
    }else{
      var text = c.toString();
      const category = new Category(text);
      category.words.push(w.toString());
      this.categories.set(category.text, category.words);
    }
    
 
    }

    const keys = Array.from(this.categories.keys())
    let key = keys[Math.trunc(keys.length * Math.random())];
    this.hangman.category=key;
 
 
   let ct = this.categories.get(key);
   // console.log("Random: "+ct.words);
    let value=ct[Math.trunc(ct.length * Math.random())];
    //console.log("word: "+word);
	this.hangman.word=value;

	
	
	//select a random word from the wordList arrays based on choice of difficulty
		
			for( let i = 0; i < this.hangman.word.length; i++ ) {
				main.innerHTML = main.innerHTML + '<div class="letter">' + '<span id=' + i + ' class="hidden">' + this.hangman.word[i] + '</span>' + '</div>';
				console.log(this.hangman.word[i]);
			}
			
			
		    var wt = document.getElementById("wt");
            wt.innerText=this.hangman.category
	
	        var l = document.getElementById("l");
            l.innerText=6;
	}




}



class Hangman {
	constructor() {

		
		this.category=""
		this.word=""
		this.guesses=new Map();
		this.lives=6;
		this.correct=0;
			
		
		

	}
}






