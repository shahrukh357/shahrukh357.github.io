//define class.
class Youtube_TaylorSwift1{
    constructor(protected subscribe : string){
        this.subscribe=subscribe;
    }
    //getter called
    getdata=()=>{//using getter property to get data 
        return this.subscribe;
    }
    
    }//end of class

    //class instance 
    let TaylorSwift1=new Youtube_TaylorSwift1('26,675,897');
    console.log("TaylorSwift channel Subscribers =" ,TaylorSwift1.getdata());
    //Extending The Class
    class Look_what_u_made_me_do1 extends Youtube_TaylorSwift1{
        VideoName:string
        likes:string;
        views:string;
        published:string;
        constructor(subscribe :string,VideoName:string,likes:string,views:string,published:string,){
            super(subscribe);
            this.VideoName=VideoName;
            this.likes=likes;
            this.views=views;
            this.published=published;
        }
        getSub=()=>
        {
            return this.subscribe;
        }
    
    }//extended class end
    //instance is created
        let Song_Lookwhtmedo1= new Look_what_u_made_me_do1("11,444,600","Look what u made me do","2.5M","20M","May 2017");
        let Song_Delicate1 = new Look_what_u_made_me_do1("13,345,200","Delicate","90M","600M","May 2015");
        console.log("Look what u made me do Subscribers = " ,Song_Lookwhtmedo1.getSub());
        console.log("Song Name = " ,Song_Lookwhtmedo1.VideoName);
       console.log("Likes= " ,Song_Lookwhtmedo1.likes);
       console.log("Views=" ,Song_Lookwhtmedo1.views);
       console.log("Published On =" ,Song_Lookwhtmedo1.published);
    
       console.log("Song Name = " ,Song_Delicate1.VideoName);
       console.log("Likes= " ,Song_Delicate1.likes);
       console.log("Views=" ,Song_Delicate1.views);
       console.log("Published On =" ,Song_Delicate1.published);
    
    //ExtendngG the CLASS:
        class Sugarland1 extends Youtube_TaylorSwift1{
            public artist:any="ED SHEERAN";
            VideoName:string;
            likes:string;
            views:string;
            published:string;
            constructor(subscribe:string,VideoName:string,likes:string,views:string,published:string,){
                super(subscribe);
                this.VideoName=VideoName;
                this.likes=likes;
                this.views=views;
                this.published=published;
            }
             //getter is called
            getvalue=()=>{
                return this.subscribe;
            }
        
        }
        let  Song_Babe1 = new Sugarland1("123,768","Babe","4.M","60M","March 2015")
        let Song_EndGame1 = new Sugarland1("345,345","End_game","11M","1B","Dec 2016")
       console.log("Sugarland Subscribers : " ,Song_Babe1.getvalue());
       console.log("Song Name= " ,Song_Babe1.VideoName);
       console.log("Likes=" ,Song_Babe1.likes);
       console.log("Views=" ,Song_Babe1.views);
       console.log("Published On=" ,Song_Babe1.published);
    
       console.log("Song Name = " ,Song_EndGame1.VideoName);
       console.log("Likes= " ,Song_EndGame1.likes);
       console.log("Views=" ,Song_EndGame1.views);
       console.log("Published On =" ,Song_EndGame1.published);
    