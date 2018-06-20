//define a class
class ProfilePage_AboutMe{
    constructor(public Lives  : string,public hometown ?:string){
        this.Lives=Lives;
        this.hometown=hometown;
    }
    //getter method called.
    getdata=()=>{
        return this.Lives;
    }
    
    }//end class
    // instance define
    let City=new ProfilePage_AboutMe('Mumbai','Delhi');
    
    //Extending The Class
    class Basic_info extends ProfilePage_AboutMe{
        Gender:string
        Languages:string;
        Birthday:string;
        Religion:string;
        Name:string;
        constructor(Lives :string,Name:string,Gender:string,Languages:string,Birthday:string,Religion:string,){
            super(Lives,);
            this.Gender=Gender;
            this.Languages=Languages;
            this.Birthday=Birthday;
            this.Name=Name;
            this.Religion=Religion;
        }//getter method called.
        getAge=()=>
        {
            return this.Birthday;
        }
    
    }//end class
    //define instance
        let Tony_Stark = new Basic_info("Mumbai","Tony Stark","Male","English,French","4th,April 1965","Christian");
        let Sherlock_Holmes = new Basic_info("London","Sherlock holmes","Male","English,spanish","6th,January 1976","Jews");
       
    
    
    
    //ExtendiNG tHE cLASS:
        class Relationship extends ProfilePage_AboutMe{
            public Status:any;
            Interested:string;
            constructor(Lives :string,Status :any,Interested:string,){
                super(Lives);
                this.Status=Status;
                this.Interested=Interested;
            
            }
             //getter method called.        
            getStatus=()=>{
                return this.Status;
            }
        
        }//end class
        //define instance
        let Tonyadd = new Relationship("Mumbai","Complicated","Women",)
        let Sherlockadd = new Relationship("London","Single","Women",)
        
        
        
        
        console.log("Name:",Tony_Stark.Name); 
        console.log("Lives in =" ,City.getdata());
        console.log("Hometown:",City.hometown)
        console.log("Tony_Stark Birthday " ,Tony_Stark.getAge());
        console.log("Gender = " ,Tony_Stark.Gender);
        console.log("Languages known= " ,Tony_Stark.Languages);
        console.log("Religious View=" ,Tony_Stark.Religion);
        console.log("Tony_stark Relationship : " ,Tonyadd.getStatus());
        console.log("Interested In: " ,Tonyadd.Interested);
 
        console.log("Name:",Sherlock_Holmes.Name);
        console.log("Lives in =" ,City.getdata());
        console.log("Hometown:",City.hometown)
        console.log("Sherlock_Holmes Birthday " ,Sherlock_Holmes.getAge());
        console.log("Gender = " ,Sherlock_Holmes.Gender);
        console.log("Languages known= " ,Sherlock_Holmes.Languages);
        console.log("Religious View=" ,Sherlock_Holmes.Religion);
        console.log(" Sherlock_Holmes Relationship : " ,Sherlockadd.getStatus());
        console.log("Interested In: " ,Sherlockadd.Interested);
    
       
    
    
    
    