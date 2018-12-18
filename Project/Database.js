
    var counter = -1;
    var imagesPaths = ["images/head.png", "images/leftArm.png", "images/body.png", "images/rightArm.png", "images/leftLeg.jpg", "images/rightLeg.jpg"];
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
    


   /*if(this.categories.includes(category)){
    
   	for (let i=0; i<this.categories.length; i++){


		console.log("categories[i].text: "+this.categories[i].toString());
    if (this.categories[i].text==category.text){
    		const word= new Word (w);
            console.log(this.categories[i]);
          	this.categories[i].words.push(word)
        	  	}
      } 
    }else{
       this.categories.push(c);
	 for (let i=0; i<this.categories.length; i++){

           
		if (this.categories[i].text==category.text){
		const word= new Word (w);
           
      	this.categories[i].words.push(word)
      	}
	 }
 	}   */
    }   
	}





randomCategory() {
const category = this.categories[Math.trunc(this.categories.length * Math.random())];
let word='';

	for (let i=0; i<this.categories.length; i++){
           console.log("+++ "+ this.categories[i])
		if (this.categories[i].text==category.text){
	       word = this.categories[i].words[Math.trunc(this.categories[i].words.length * Math.random())];


	 	}

	}
 return word;
}



}

function tryChange() {
    counter++;
    document.getElementById(divNames[counter]).appendChild(images[counter]);

return (5-counter);
}
