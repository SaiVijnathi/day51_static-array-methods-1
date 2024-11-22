class TenthStudent{
    static passMarks = 35;
    static aboutTenth=()=>{
        console.log("Tenth exams are important");
    }
    telMarks: number;
    hinMarks: number;
    engMarks: number;
    matMarks: number;
    sciMarks: number;
    socMarks: number;
    total: number;
    perc: number;
    
        constructor(){
            console.log("Inside the constructor");
            this.telMarks=0;
            this.hinMarks=0;
            this.engMarks=0;
            this.matMarks=0;
            this.sciMarks=0;
            this.socMarks=0;
            this.total=0;
            this.perc=0;
        }
    
        calculateTotal=()=>{
            this.total = this.telMarks+this.hinMarks+   this.engMarks+   this.matMarks+    this.sciMarks+ this.socMarks;
            console.log(`Total Marks - ${this.total}`);
            this.perc= (this.total/600)*100;
            console.log(`Percentage - ${this.perc}%`);
        }
    
        calculateResult=()=>{
            if(this.telMarks >= TenthStudent.passMarks && 
                this.hinMarks >= TenthStudent.passMarks && 
                this.engMarks >= TenthStudent.passMarks && 
                this.matMarks >= TenthStudent.passMarks && 
                this.sciMarks >= TenthStudent.passMarks && 
                this.socMarks >= TenthStudent.passMarks ){
                console.log("Student has passed");
            }else{
                console.log("Student has failed");
            }
        }
    }
    
    export default TenthStudent;