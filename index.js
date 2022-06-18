var Products = [
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",
    Rating:"Math.random()",
    name:"Dove Intense Repair Shampoo 650ml",
    Allprice:"₹500.00",
    Price:"350.00",
    offpercent:"30% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png",
    Rating:"Math.random()",
    name:"Organic Harvest Cleansing Milk",
    Allprice:"₹545.00",
    Price:"491.00",
    offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",
    Rating:"Math.random()",
    name:"Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20",
    Allprice:"₹475.00",
    Price:"428.00",
    offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg",
    Rating:"Math.random()",
    name:"WOW Skin Science Caffeine Face Serum",
    Allprice:"₹599.00",
    Price:"515.00",
    offpercent:"14% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904304651284_1.jpg",
    Rating:"Math.random()",
    name:"WOW Skin Science Activated Charcole Face Scrub",
    Allprice:"",
    Price:"357.00",
    offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/c/activated_charcoal_face_mask2.jpg",
    Rating:"Math.random()",
    name:"WOW Skin Science Activated Charcole Face Scrub",
    Allprice:"₹499.00",
    Price:"435.00",
    offpercent:"13% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/0/f0c4f25lotus00000014.jpg",
    Rating:"Math.random()",
    name:"Lotur Organics + Bakuchiol",
    Allprice:"₹995.00",
    Price:"896.00",
    offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/3/53f7f568906080030383_rvn1.jpg",
    Rating:"Math.random()",name:"Organic Harvest Masseuscious Damage Control Cleanser With Acai",
    Allprice:"₹1495.00",
    Price:"1420.00",
    offpercent:"5% Off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901495_1_1_.jpg",
    Rating:"Math.random()",
    name:"WOW Skin Sciesnce AM2PM Sunscreen SPF 50 Lotion",
    Allprice:"",
    Price:"385.00",
    offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/f/efbafe2nywow000083__1_.jpg",
    Rating:"Math.random()",
    name:"WOW Skin Science 10 In 1 Miracle Hair Oil",
    Allprice:"₹599.00",
    Price:"515.00",
    offpercent:"14% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/d/fd794d08904304373124.jpg",
    Rating:"Math.random()",
    name:"WOW Skin Science Activated Charcole Peel Off Face Mask",
    Allprice:"",
    Price:"399.00",
    offpercent:""},
  
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/2/92_1_2.jpg",
    Rating:"Math.random()",
    name:"Olay Total Effects 7 In One Touch Of Foundation BB Cream Day SPF 15",
    Allprice:"₹849.00",
    Price:"781.00",
    offpercent:"8 % off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/0/10_26_4.jpg",
    Rating:"Math.random()",
    name:"NYX Professional Makeup Born To Glow Liquid Illuminator - Sunbeam",
    Allprice:"₹850.00",
    Price:"782",
    offpercent:"8 % off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/8/58_1.jpg",
    Rating:"Math.random()",
    name:"Olay Total Effects 7 In One Light Weight Cream Day SPF 15",
    Allprice:"₹399.00",
    Price:"359.00",
    offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_121.jpg",
    Rating:"Math.random()",
    name:"Olay White Radiance Brightening Intensive Day Cream SPF24 UVA",
    Allprice:"₹999.00",
    Price:"859.00",
    offpercent:"10% off"},
   
 
  
]


let Data=JSON.parse(localStorage.getItem("Data"))||[];
let item=document.getElementById("item")
// apendData(array)
let apendData=(data)=>{
    item.innerHTML=null
    data.forEach(element => {
      let  div1=document.createElement("div")

      let image=document.createElement("img")
      image.src=element.img;

      let title=document.createElement("p")
      title.innerText=element.name;

      let div2=document.createElement("div")

      let str=document.createElement("strike")
      str.innerHTML=element.Allprice;

      let price=document.createElement("p")
      price.innerText="₹"+element.Price;

      let dis=document.createElement("p")
      dis.innerHTML=element. offpercent;

      let button=document.createElement("button")
      button.innerHTML="Add to Cart";
      button.addEventListener("click",function(){
        addTocart(element)
      })
      
      div2.append(str,price,dis)
      div1.append(image,title,div2,button)
      item.append(div1)

    });
}

apendData(Products)

function handleNameSort(){
    let selected=document.getElementById("shortList").value;
    console.log(selected)
    if(selected=="defualt"){
        apendData(Products)
        console.log(Products)
    }
    if(selected=="HTL"){
        Products.sort(function(a,b){
            return b.Price  -  a.Price;
        });
        apendData(Products)
        console.log(Products)
    }
    if(selected=="LTH"){
        Products.sort(function(a,b){
            return a.Price - b.Price;
        });
        apendData(Products)
        console.log(Products)
    }
    if(selected=="asc"){
        Products.sort(function (a,b){
            let x=a.title.join().toUpperCase();
            let y=b.title.join().toUpperCase();
            if(x>y){
                return 1;
            }
            if(x<y){
                return -1;
            }
            return 0;
        })
        apendData(Products)
        console.log(Products)
    }
}


function addTocart(element){
    Data.push(element)
    localStorage.setItem("Data",JSON.stringify(Data))

}