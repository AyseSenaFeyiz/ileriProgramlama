
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
    this.words = new Set()  
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
        this.categories = new Set()
       // this.words = new Set()
        this.readData()
        
        

           }


readData() {
var url = "https://aysesenafeyiz.github.io/ileriProgramlama/Project/Data.txt"
        fetch(url)
        .then(res => res.text())
        .then(res => [
            this.addData(res)
        ])
}

addData(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";

    for (let line of a) {
        let b = line.split("\t");
    	   let c = b[0], w = b[1];
    
    const category= new Category(c);
    this.categories.add(c)
    const word= new Word (w);
    console.log("category:  "+ c)
    console.log("word:  "+ w)
    (this.categories[(this.categories.indexof(c))]).words.add(word)
    

    }
      
	 
      
}
    

}



function tryChange() {
    counter++;
    document.getElementById(divNames[counter]).appendChild(images[counter]);

return (5-counter);
}
