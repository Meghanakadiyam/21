class Car
{
    constructor(brand,model)
    {
        this.brand=brand;
        this.model=model;
        this.speed=0;
    }
    accelerate(s)
    {
        let newspeed=this.speed+s;
        if(newspeed>140)
            console.log("OverSpeed Can't Increase!");
        else
            this.speed=newspeed;
    }
    decelerate(s)
    {
        let newspeed=this.speed-s;
        if(newspeed<0)
        {
            this.speed=0;
            console.log("Car Stopped");
        }
        else
         this.speed=newspeed;
    }
    brake()
    {
        console.log("Car is stopped after brake");
        this.speed=0;
    }
    status()
    {
        console.log("Brand: "+this.brand+"\nModel: "+this.model+"\nCurrentSpeed: "+this.speed);
        if(this.speed!=0)
        console.log("Status: Running\n");
        else
        console.log("Status: Stopped\n");
    }
}
let c1=new Car('Hyundai','i10');
c1.status();
console.log("After Acceleration of 40kmph");
c1.accelerate(40);
c1.status();
console.log("After Deceleration of 20kmph");
c1.decelerate(20);
c1.status();
console.log("After Break");
c1.brake();
c1.status();