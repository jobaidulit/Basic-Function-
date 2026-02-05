const phones = [
    {name:'samsung', price:20000, camara:'12mp', color:'black'},
     {name:'vivo', price:11000, camara:'12mp', color:'white'},
      {name:'walton', price:22000, camara:'12mp', color:'black'},
       {name:'iphone', price:48000, camara:'12mp', color:'black'},
        {name:'HTC', price:18000, camara:'12mp', color:'black'},
         {name:'oppo', price:500, camara:'10mp', color:'pink'},
]
       function getcheapestPhones(phone){
       let min = phone[0];
       for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
       }
return min;
}
const cheap = getcheapestPhones(phones);
console.log(cheap);