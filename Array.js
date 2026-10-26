// Array
var stdname =["Ali" , "Rahul", "Haniya", "Alina", "Moiz" , "zain"];
// console.log (stdname);

// for (var i=0 ; i <stdname.length ; i++ )
// {
//     console.log( stdname[i]);
// }
// for
// for(var v of stdname ){
//     console .log( v)
// }
// in
// for( var e in stdname){
//     console .log(e,stdname[e])
// }

// var stdData={ "name":"Haniya" ,"age" : 18 , "city": "karachi"  }
// console.log(stdData.name)
// console.log(stdData.age)
// console.log(stdData.city)

// Array of Object
var data=[
    {"name":"Headphone" ,"Description":"lorem is the opurt hdbv fjfh jfytn hfutgn" , "price":"Rs:5000" ,"imgurl" : "boost img.jfif" } ,
    {"name":"Earbuds" ,  "Description":"lorem is the opurt hdbv fjfh jfytn hfutgn", "price":"Rs:2000","imgurl":"earbuds img.jfif" } ,
    {"name":"Mobile" , "Description":"lorem is the opurt hdbv fjfh jfytn hfutgn", "price":"Rs:504,999" , "imgurl":"mobile img.jfif"  },
    {"name":"Shoes" , "Description":"lorem is the opurt hdbv fjfh jfytn hfutgn", "price":"Rs:6000", "imgurl" : "shoes img.jfif" }
]
for (var v of data){
    // console.log(v["name"], v["Age"])
    document.getElementById("stddata1").innerHTML+=`
    <div class="cont">
     <img class="img" src="${v["imgurl"]}"/>
     <p class="child1">${v["name"]}</p>
     <p class="child3">${v["Description"]}</p>
     <p class="child2"> ${v["price"]} </p>
     
     </div>
     `
}

