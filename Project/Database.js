class Category {
    constructor (id, text) {
        this.id= id;
        this.text = text;   
 }
    toString () {
        return this.text+'';
    }
}
class Word {
    constructor (id, text) {
        this.id = id;
        this.text = text;
     }
   toString () {
        return this.text+'';
    }
}

class Database{
    constructor () {
        this.categories = new Map()
        this.words = new Map()
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
    	   let id = b[0], name = b[1], gpa = b[2];
    	   let list = [];
    	   for (let i=3; i<b.length; i++){ 
       	list.push(b[i]);
        }
    const std = new Student (id, name, gpa, list);
    this.students.set(std.id, std);
    }
      
	 console.log("size:  "+ this.students.size)
      
}




}