class TV
{
   constructor(brand)
   {
       this.brand=brand;
       this.channel=80;
       this.volume=20;
   }
//    set channel(c)
//    {
//        this.channel=c;
//    }
   reset()
   {
       this.channel=80;
       this.volume=20;
   }
   changechannel(c)
   {
       if(c>=1 && c<=100)
       this.channel=c;
       else
       console.log("Invalid Channel No");
   }
   increaseVol(v)
   {
       let newvol=this.volume+v;
       if(newvol<=100)
       this.volume=newvol;
       else
       console.log("Volume cannot be beyond 100");
   }
   decreaseVol(v)
   {
       let newvol=this.volume-v;
       if(newvol>=0)
       this.volume=newvol;
       else
       console.log("Volume cannot be below 0");
   }
   status()
   {
       console.log("Brand: "+this.brand+"\nCurrent Channel No: "+this.channel+"\nCurrent Volume: "+this.volume);
   }
}
let tv1=new TV('Samsung');
tv1.status();
tv1.changechannel(50);
tv1.channel=10;
console.log("\nAfter increasing volume\n");
tv1.increaseVol(20);
tv1.status();
console.log("\nAfter decreasing volume")
tv1.decreaseVol(50);
tv1.status();
console.log("After Reset");
tv1.reset();