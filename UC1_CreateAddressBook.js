// UC1 => Creating AddressBook having some properties

const prompt = require("prompt-sync")();  //imported the library to take input from user

class AddressBook
{
    constructor(FirstName,LastName,Address,City,State,ZipCode,MobileNo,EmailId)
    {
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Address=Address;
        this.City=City;
        this.State=State;
        this.ZipCode=ZipCode;
        this.MobileNo=MobileNo;
        this.EmailId=EmailId;
    }

    get FirstName(){ return this._FirstName;}
    set FirstName(FirstName){ this._FirstName=FirstName;}

    get LastName(){ return this._LastName;}
    set LastName(LastName){ this._LastName=LastName;}

    get Address(){ return this._Address;}
    set Address(Address){ this._Address=Address;}

    get City(){ return this._City;}
    set City(City){ this._City=City;}

    get State(){ return this._State;}
    set State(State){ this._State=State;}

    get MobileNo(){ return this._MobileNo;}
    set MobileNo(MobileNo){ this._MobileNo=MobileNo;}

    get EmailId(){ return this._EmailId;}
    set EmailId(EmailId){ this._EmailId=EmailId;}

    toString()
    {
        return '\nFirstName :- '+this.FirstName+'\nLastName :- '+this.LastName+'\nAddress :- '+this.Address+'\nCity :- '+this.City+'\nState :- '+this.State+'\nZipCode :- '+this.ZipCode+'\nMobile No'+this.MobileNo+'\nEmailID :- '+this.EmailId;
    }

    createcontact()
    {  
        let addressBook=new AddressBook();
        console.log("Enter FirstName :- ");
        addressBook.FirstName=prompt();
        console.log("Enter LastName :- ");
        addressBook.LastName=prompt();
        console.log("Enter Address :- ");
        addressBook.Address=prompt();
        console.log("Enter City :- ");
        addressBook.City=prompt();
        console.log("Enter State :- ");
        addressBook.State=prompt();
        console.log("Enter Zipcode :- ");
        addressBook.ZipCode=(parseInt)(prompt());
        console.log("Enter MobileNo :- ");
        addressBook.MobileNo=(BigInt)(prompt()); 
        console.log("Enter EmailId :- ");
        addressBook.EmailId=prompt();

        AddressBookContacts.push(
            {
                FirstName :addressBook.FirstName,
                LastName:addressBook.LastName,
                Address:addressBook.Address,
                City:addressBook.City,
                State:addressBook.State,
                ZipCode:addressBook.ZipCode,
                MobileNo:addressBook.MobileNo,
                EmailId:addressBook.EmailId
            }
        );
    }

    DisplayContact() {
        try {
            console.log("\nContact Details Of AddressBook \n");
            if(AddressBookContacts.length !=0)
            {
                let count=0;
                Object.values(AddressBookContacts).forEach(val=>
                    {   count++;
                        console.log("\nContact "+count+" :\n");
                        console.log(val);
                        console.log("-----------------------------");
                    }
                    );  
            }
            else
                console.log("Addressbook is empty")
        } catch (e) {
            console.error(e);
        }
    }

}

console.log("------- Welcome to AddressBook System -------\n");
const AddressBookContacts=new Array();
let addcontact=new AddressBook();
let x=1;
while(x==1)
{
   console.log("\nChoose Operation : \n1.Add Contact to AddressBook \n2.Display AddressBook Data \n3.Exit");
   let option=(parseInt)(prompt("\n> Enter your choice :- "));
    switch(option)
    { 
        case 1: console.log("\n> How many contacts do you want to add :- ");
                let noofcontacts=(parseInt)(prompt("Enter the count = "));
                while(noofcontacts>0)
                {   let addcontact1=new AddressBook();
                    addcontact1.createcontact();
                    noofcontacts--;
                }
                if(AddressBookContacts.length==0)
                {
                  console.log("\nContact saved Unsuccessfull!!");
                }
                else
                {
                  console.log("\nContact saved Successfull...");
                }
                break;
        
        case 2: console.log("\nDetails OF AddressBook :- ");
                addcontact.DisplayContact();
                break;

        case 3: x=0;
                console.log("--- Thank You ---")
                break;

        default: console.log("Enter a valid choice!!");
                 break;
    }
}
