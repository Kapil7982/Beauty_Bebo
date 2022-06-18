var array = [
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",Rating:"Math.rendom()",name:"Dove Intense Repair Shampoo 650ml",Allprice:"₹500.00",Price:"₹350.00",offpercent:"30% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png",Rating:"Math.rendom()",name:"Organic Harvest Cleansing Milk",Allprice:"₹545.00",Price:"₹491.00",offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",Rating:"Math.rendom()",name:"Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20",Allprice:"₹475.00",Price:"₹428.00",offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg",Rating:"Math.rendom()",name:"WOW Skin Science Caffeine Face Serum",Allprice:"₹599.00",Price:"₹515.00",offpercent:"14% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904304651284_1.jpg",Rating:"Math.rendom()",name:"WOW Skin Science Activated Charcole Face Scrub",Allprice:"",Price:"₹357.00",offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/c/activated_charcoal_face_mask2.jpg",Rating:"Math.rendom()",name:"WOW Skin Science Activated Charcole Face Scrub",Allprice:"₹499.00",Price:"₹435.00",offpercent:"13% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/0/f0c4f25lotus00000014.jpg",Rating:"Math.rendom()",name:"Lotur Organics + Bakuchiol",Allprice:"₹995.00",Price:"₹896.00",offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/3/53f7f568906080030383_rvn1.jpg",Rating:"Math.rendom()",name:"Organic Harvest Masseuscious Damage Control Cleanser With Acai",Allprice:"₹1495.00",Price:"₹1420.00",offpercent:"5% Off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901495_1_1_.jpg",Rating:"Math.rendom()",name:"WOW Skin Sciesnce AM2PM Sunscreen SPF 50 Lotion",Allprice:"",Price:"₹385.00",offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/f/efbafe2nywow000083__1_.jpg",Rating:"Math.rendom()",name:"WOW Skin Science 10 In 1 Miracle Hair Oil",Allprice:"₹599.00",Price:"₹515.00",offpercent:"14% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/d/fd794d08904304373124.jpg",Rating:"Math.rendom()",name:"WOW Skin Science Activated Charcole Peel Off Face Mask",Allprice:"",Price:"₹399.00",offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/l/flowers-of-youth-essence-serum_2_1.jpg",Rating:"Math.rendom()",name:"MaMaearth Flowers Of Youth Essence Serum With Hyaluronic",Allprice:"",Price:"₹599.00",offpercent:""},
]
forNEWARRIVALS(array)
function forNEWARRIVALS(NEWARRIVALSData){
    NEWARRIVALSData.forEach(function(ele){
        var divent = document.createElement("div");
            divent.setAttribute("class","divent")

            var forarrimg = document.createElement("img");
                forarrimg.setAttribute("src",ele.img)
                forarrimg.setAttribute("class","forarrimg")

            var forname = document.createElement("p");
                forname.innerText = ele.name;
                forname.setAttribute("class","forname")

            var  divforPrice = document.createElement("div");
                divforPrice.setAttribute("class","divforprice");
                
                var forAllprice = document.createElement("p")
                    forAllprice.innerText = ele.Allprice;
                    forAllprice.setAttribute("class","forallprice")

                var forMainprice = document.createElement("div");
                    forMainprice.innerText = ele.Price;
                    // console.log(ele.Price)
                    forMainprice.setAttribute("class","forMainprce")

                var forOff = document.createElement("p");
                    forOff.innerText = ele.offpercent;
                    forOff.setAttribute("class","foroff")
                
        var buttonAdd = document.createElement("button");
            buttonAdd.innerText = " 🧺️ ADD CART";
            buttonAdd.setAttribute("class","buttonAdd");
            buttonAdd.addEventListener("click",function(){
                forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
            })
                
                divforPrice.append(forAllprice,forMainprice,forOff);
        divent.append(forarrimg,forname,divforPrice,buttonAdd);
    document.querySelector("#NewArrivals").append(divent)
    })
}
var array = []
function forlocalstorage(A,B,C,D,E){
  var obj={}
  obj.image = A;
  obj.Name = B;
  obj.TOtalprice = C;
  obj.Price = D;
  obj.Off = E;
  array.push(obj);
  console.log(array)
  localStorage.setItem("Data",JSON.stringify(array))
}


let array2 = [
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",name:"Miss Claire Eyelash Glue -Clear Tone",Rating:"",Allprice:"₹350.00",Price:"₹322.00",offpercent:"8% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/b/5b990e16902395773146_3.jpg",name:"Maybelline New York Fit Me Primer-Dewy+Smooth",Rating:"",Allprice:"₹549.00",Price:"₹521.00",offpercent:"5% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/9/6902395735908_0.jpg",name:"L'Oreal Paris Infallible Full Wear Concealer",Rating:"",Allprice:"₹799.00",Price:"₹735.00",offpercent:"8% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51c18ra5qzs._sl1500_.jpg",name:"Faces Canada Ultime Pro Matte Play Eyeliner",Rating:"",Allprice:"₹649.00",Price:"₹604.00",offpercent:"7% off"}
]
forClickProducts1(array2)
function forClickProducts1(NEWARRIVALSData){
    NEWARRIVALSData.forEach(function(ele){
        var divent = document.createElement("div");
            divent.setAttribute("class","divent")

            var forarrimg = document.createElement("img");
                forarrimg.setAttribute("src",ele.img)
                forarrimg.setAttribute("class","forarrimg")

            var forname = document.createElement("p");
                forname.innerText = ele.name;
                forname.setAttribute("class","forname")

            var  divforPrice = document.createElement("div");
                divforPrice.setAttribute("class","divforprice");
                
                var forAllprice = document.createElement("p")
                    forAllprice.innerText = ele.Allprice;
                    forAllprice.setAttribute("class","forallprice")

                var forMainprice = document.createElement("div");
                    forMainprice.innerText = ele.Price;
                    // console.log(ele.Price)
                    forMainprice.setAttribute("class","forMainprce")

                var forOff = document.createElement("p");
                    forOff.innerText = ele.offpercent;
                    forOff.setAttribute("class","foroff")
                
        var buttonAdd = document.createElement("button");
            buttonAdd.innerText = " 🧺️ ADD CART";
            buttonAdd.setAttribute("class","buttonAdd");
            buttonAdd.addEventListener("click",function(){
                forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
            })
                
                divforPrice.append(forAllprice,forMainprice,forOff);
        divent.append(forarrimg,forname,divforPrice,buttonAdd);
    document.querySelector("#MSHPCM").append(divent)
    })
}
function forlocalstorage(A,B,C,D,E){
  var obj={}
  obj.image = A;
  obj.Name = B;
  obj.TOtalprice = C;
  obj.Price = D;
  obj.Off = E;

  array.push(obj);
  console.log(array)
  localStorage.setItem("Data",JSON.stringify(array))
}
// ------------------Function 1----------------------
function HarvestMakeup(){
    var divantlla = document.querySelector("#MSHPCM");
        divantlla.innerHTML = null
        // BGcolor.style.backgorundColor = "blue"
    let array2 = [
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",name:"Miss Claire Eyelash Glue -Clear Tone",Rating:"",Allprice:"₹350.00",Price:"₹322.00",offpercent:"8% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/b/5b990e16902395773146_3.jpg",name:"Maybelline New York Fit Me Primer-Dewy+Smooth",Rating:"",Allprice:"₹549.00",Price:"₹521.00",offpercent:"5% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/9/6902395735908_0.jpg",name:"L'Oreal Paris Infallible Full Wear Concealer",Rating:"",Allprice:"₹799.00",Price:"₹735.00",offpercent:"8% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51c18ra5qzs._sl1500_.jpg",name:"Faces Canada Ultime Pro Matte Play Eyeliner",Rating:"",Allprice:"₹649.00",Price:"₹604.00",offpercent:"7% off"}
    ]
    forClickProducts1(array2)
    function forClickProducts1(NEWARRIVALSData){
        NEWARRIVALSData.forEach(function(ele){
            var divent = document.createElement("div");
                divent.setAttribute("class","divent")
    
                var forarrimg = document.createElement("img");
                    forarrimg.setAttribute("src",ele.img)
                    forarrimg.setAttribute("class","forarrimg")
    
                var forname = document.createElement("p");
                    forname.innerText = ele.name;
                    forname.setAttribute("class","forname")
    
                var  divforPrice = document.createElement("div");
                    divforPrice.setAttribute("class","divforprice");
                    
                    var forAllprice = document.createElement("p")
                        forAllprice.innerText = ele.Allprice;
                        forAllprice.setAttribute("class","forallprice")
    
                    var forMainprice = document.createElement("div");
                        forMainprice.innerText = ele.Price;
                        // console.log(ele.Price)
                        forMainprice.setAttribute("class","forMainprce")
    
                    var forOff = document.createElement("p");
                        forOff.innerText = ele.offpercent;
                        forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
                })
                    
                    divforPrice.append(forAllprice,forMainprice,forOff);
            divent.append(forarrimg,forname,divforPrice,buttonAdd);
        document.querySelector("#MSHPCM").append(divent)
        })
    }
    function forlocalstorage(A,B,C,D,E){
      var obj={}
      obj.image = A;
      obj.Name = B;
      obj.TOtalprice = C;
      obj.Price = D;
      obj.Off = E;
    
      array.push(obj);
      console.log(array)
      localStorage.setItem("Data",JSON.stringify(array))
    }
}
// ------------------Function 2----------------------
function HarvestSkin(){
    var divantlla = document.querySelector("#MSHPCM");
        divantlla.innerHTML = null
    let array3 = [
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",name:"Lotus Herbals Whiteglaw Vitamin C Radiance Cream Spf 20",Rating:"",Allprice:"₹475.00",Price:"₹428.00",offpercent:"10% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/6/3699c478906105612174-2.jpg",name:"WoW Skin Science Caffeine Face Serum",Rating:"",Allprice:"₹599.00",Price:"₹515.00",offpercent:"14% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904304651284_1.jpg",name:"WOW Skin Science Activated Charcoal Face Scrub",Rating:"",Allprice:"",Price:"₹375.00",offpercent:""},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/c/activated_charcoal_face_mask2.jpg",name:"WOW Skin Science Activated Charcoal Face Mask",Rating:"",Allprice:"₹499.00",Price:"₹435.00",offpercent:"13% off"}
    ]
    
    forClickProducts2(array3)
        function forClickProducts2(NEWARRIVALSData){
            NEWARRIVALSData.forEach(function(ele){
                var divent = document.createElement("div");
                    divent.setAttribute("class","divent")

                    var forarrimg = document.createElement("img");
                        forarrimg.setAttribute("src",ele.img)
                        forarrimg.setAttribute("class","forarrimg")

                    var forname = document.createElement("p");
                        forname.innerText = ele.name;
                        forname.setAttribute("class","forname")

                    var  divforPrice = document.createElement("div");
                        divforPrice.setAttribute("class","divforprice");
                        
                        var forAllprice = document.createElement("p")
                            forAllprice.innerText = ele.Allprice;
                            forAllprice.setAttribute("class","forallprice")

                        var forMainprice = document.createElement("div");
                            forMainprice.innerText = ele.Price;
                            // console.log(ele.Price)
                            forMainprice.setAttribute("class","forMainprce")

                        var forOff = document.createElement("p");
                            forOff.innerText = ele.offpercent;
                            forOff.setAttribute("class","foroff")
                        
                var buttonAdd = document.createElement("button");
                    buttonAdd.innerText = " 🧺️ ADD CART";
                    buttonAdd.setAttribute("class","buttonAdd");
                    buttonAdd.addEventListener("click",function(){
                        forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
                    })
                        
                        divforPrice.append(forAllprice,forMainprice,forOff);
                divent.append(forarrimg,forname,divforPrice,buttonAdd);
            document.querySelector("#MSHPCM").append(divent)
            })
        }
        function forlocalstorage(A,B,C,D,E){
        var obj={}
        obj.image = A;
        obj.Name = B;
        obj.TOtalprice = C;
        obj.Price = D;
        obj.Off = E;

        array.push(obj);
        console.log(array)
        localStorage.setItem("Data",JSON.stringify(array))
        }

}

// ------------------Function 3----------------------
function HarvestHair(){
    var divantlla = document.querySelector("#MSHPCM");
        divantlla.innerHTML = null
    let array4 = [
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",name:"Dove Intense Repair Shampoo 650ml",Rating:"",Allprice:"₹500.00",Price:"₹350.00",offpercent:"30% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/e/f/efbafe2nywow000083__1_.jpg",name:"WOW Skin Science 10 in 1 Miracle Hair Oil",Rating:"",Allprice:"₹599.00",Price:"₹515.00",offpercent:"14% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/8/88b239c8904311904281__1_.jpg",name:"WOW Skin Science Himalayan Rose Conditioner",Rating:"",Allprice:"₹449.00",Price:"₹395.00",offpercent:"12% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/4/d4fb39c8904311904267__1_.jpg",name:"WOW Skin Science Moroccan Argan Hair Oil - WITH COMB APPLICATOR - ",Rating:"",Allprice:"",Price:"₹349.00",offpercent:""}
    ]
    forClickProducts3(array4)
    function forClickProducts3(NEWARRIVALSData){
        NEWARRIVALSData.forEach(function(ele){
            var divent = document.createElement("div");
                divent.setAttribute("class","divent")

                var forarrimg = document.createElement("img");
                    forarrimg.setAttribute("src",ele.img)
                    forarrimg.setAttribute("class","forarrimg")

                var forname = document.createElement("p");
                    forname.innerText = ele.name;
                    forname.setAttribute("class","forname")

                var  divforPrice = document.createElement("div");
                    divforPrice.setAttribute("class","divforprice");
                    
                    var forAllprice = document.createElement("p")
                        forAllprice.innerText = ele.Allprice;
                        forAllprice.setAttribute("class","forallprice")

                    var forMainprice = document.createElement("div");
                        forMainprice.innerText = ele.Price;
                        // console.log(ele.Price)
                        forMainprice.setAttribute("class","forMainprce")

                    var forOff = document.createElement("p");
                        forOff.innerText = ele.offpercent;
                        forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
                })
                    
                    divforPrice.append(forAllprice,forMainprice,forOff);
            divent.append(forarrimg,forname,divforPrice,buttonAdd);
        document.querySelector("#MSHPCM").append(divent)
        })
    }
    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }

}

// ------------------Function 4----------------------

function HarvestPersonal(){
    var divantlla = document.querySelector("#MSHPCM");
        divantlla.innerHTML = null
    let array5 = [
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png",name:"Orgainc Harvest Cleansing Milk With Essentaail Oils",Rating:"",Allprice:"₹545.00",Price:"₹491.00",offpercent:"10% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/8/680c9508904311903031__1_.jpg",name:"WOW Skin Science Thai Body Massage Oil",Rating:"",Allprice:"₹599.00",Price:"₹540.00",offpercent:"10% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/c/cca52498904311901341_1.jpg",name:"WOW Skin Science Maroccan Rose Otto Foaming Body Wash",Rating:"",Allprice:"",Price:"₹339.00",offpercent:""},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/4/0/407c3408908003416601_1.jpg",name:"Organic Harvest Lavender Essentail Oil",Rating:"",Allprice:"₹450.00",Price:"₹405.00",offpercent:"10% off"}
    ]
    forClickProducts4(array5)
    function forClickProducts4(NEWARRIVALSData){
        NEWARRIVALSData.forEach(function(ele){
            var divent = document.createElement("div");
                divent.setAttribute("class","divent")

                var forarrimg = document.createElement("img");
                    forarrimg.setAttribute("src",ele.img)
                    forarrimg.setAttribute("class","forarrimg")

                var forname = document.createElement("p");
                    forname.innerText = ele.name;
                    forname.setAttribute("class","forname")

                var  divforPrice = document.createElement("div");
                    divforPrice.setAttribute("class","divforprice");
                    
                    var forAllprice = document.createElement("p")
                        forAllprice.innerText = ele.Allprice;
                        forAllprice.setAttribute("class","forallprice")

                    var forMainprice = document.createElement("div");
                        forMainprice.innerText = ele.Price;
                        // console.log(ele.Price)
                        forMainprice.setAttribute("class","forMainprce")

                    var forOff = document.createElement("p");
                        forOff.innerText = ele.offpercent;
                        forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
                })
                    
                    divforPrice.append(forAllprice,forMainprice,forOff);
            divent.append(forarrimg,forname,divforPrice,buttonAdd);
        document.querySelector("#MSHPCM").append(divent)
        })
    }
    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }

}

// ------------------Function 5----------------------
function HarvestMOM(){
    var divantlla = document.querySelector("#MSHPCM");
        divantlla.innerHTML = null
    let array6 = [
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/1/31_7_4.jpg",name:"Mamaearth Agent Apple Body Lotion For Kids Width Apple & Oat Milk",Rating:"",Allprice:"₹399.00",Price:"₹351.00",offpercent:"12% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/0/30_6_4.jpg",name:"Mamaearth Brave Bluebetty Body Lotion For Kids With Blueberry And",Rating:"",Allprice:"₹399.00",Price:"₹351.00",offpercent:"12% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/8/28_8_4.jpg",name:"Mamaearth Major Mango Body Lotion For Kids With Mango Butter & Milk",Rating:"",Allprice:"₹399.00",Price:"₹351.00",offpercent:"12% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/5/25_13_1.jpg",name:"Mamaearth Original Orange Body Lotion For Kids With Orange & Shea",Rating:"",Allprice:"₹399.00",Price:"₹351.00",offpercent:"12% off"}
    ]
    forClickProducts5(array6)
    function forClickProducts5(NEWARRIVALSData){
        NEWARRIVALSData.forEach(function(ele){
            var divent = document.createElement("div");
                divent.setAttribute("class","divent")

                var forarrimg = document.createElement("img");
                    forarrimg.setAttribute("src",ele.img)
                    forarrimg.setAttribute("class","forarrimg")

                var forname = document.createElement("p");
                    forname.innerText = ele.name;
                    forname.setAttribute("class","forname")

                var  divforPrice = document.createElement("div");
                    divforPrice.setAttribute("class","divforprice");
                    
                    var forAllprice = document.createElement("p")
                        forAllprice.innerText = ele.Allprice;
                        forAllprice.setAttribute("class","forallprice")

                    var forMainprice = document.createElement("div");
                        forMainprice.innerText = ele.Price;
                        // console.log(ele.Price)
                        forMainprice.setAttribute("class","forMainprce")

                    var forOff = document.createElement("p");
                        forOff.innerText = ele.offpercent;
                        forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
                })
                    
                    divforPrice.append(forAllprice,forMainprice,forOff);
            divent.append(forarrimg,forname,divforPrice,buttonAdd);
        document.querySelector("#MSHPCM").append(divent)
        })
    }
    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }
}

// ------------------Function 6----------------------
function HarvestEye(){
    var divantlla = document.querySelector("#MSHPCM");
        divantlla.innerHTML = null
    let array7 = [
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",name:"Miss Claire Eyelash Glue -Clear Tone",Rating:"",Allprice:"₹350.00",Price:"₹322.00",offpercent:"8% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51c18ra5qzs._sl1500_.jpg",name:"Faces Canada Ultime Pro Matte Play Elyeliner",Rating:"",Allprice:"₹649.00",Price:"₹604.00",offpercent:"7% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/c/bcf6c6c8904052434726__2_.jpg",name:"Colorbar Intensify Liquid Gel Eyeliner Arabian Nights",Rating:"",Allprice:"₹750.00",Price:"₹699.00",offpercent:"7% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904052409748-2.jpg",name:"Colorbar Infinite 24Hrs Eyeliner",Rating:"",Allprice:"₹700.00",Price:"₹651.00",offpercent:"7% off"}
    ]
    forClickProducts6(array7)
    function forClickProducts6(NEWARRIVALSData){
        NEWARRIVALSData.forEach(function(ele){
            var divent = document.createElement("div");
                divent.setAttribute("class","divent")

                var forarrimg = document.createElement("img");
                    forarrimg.setAttribute("src",ele.img)
                    forarrimg.setAttribute("class","forarrimg")

                var forname = document.createElement("p");
                    forname.innerText = ele.name;
                    forname.setAttribute("class","forname")

                var  divforPrice = document.createElement("div");
                    divforPrice.setAttribute("class","divforprice");
                    
                    var forAllprice = document.createElement("p")
                        forAllprice.innerText = ele.Allprice;
                        forAllprice.setAttribute("class","forallprice")

                    var forMainprice = document.createElement("div");
                        forMainprice.innerText = ele.Price;
                        // console.log(ele.Price)
                        forMainprice.setAttribute("class","forMainprce")

                    var forOff = document.createElement("p");
                        forOff.innerText = ele.offpercent;
                        forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
                })
                    
                    divforPrice.append(forAllprice,forMainprice,forOff);
            divent.append(forarrimg,forname,divforPrice,buttonAdd);
        document.querySelector("#MSHPCM").append(divent)
        })
    }
    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }

}
// / ------------------Function 7----------------------
function HarvestAgrance(){
    var divantlla = document.querySelector("#MSHPCM");
        divantlla.innerHTML = null
    let array8 = [
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/s/8/s8.jpg",name:"Calvin Kliein Eternity For Men Eau De Perfum",Rating:"",Allprice:"₹3650.00",Price:"₹3468.00",offpercent:"5% off"},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo21.jpg",name:"Fogg Bleu Series Island Fragrance Body Spray",Rating:"",Allprice:"",Price:"₹255.00",offpercent:""},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo20.jpg",name:"Fogg Force Fragrance Body Spray",Rating:"",Allprice:"",Price:"₹230.00",offpercent:""},
        {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/o/fo19.jpg",name:"Fogg Punch Fragance Body Spray",Rating:"",Allprice:"",Price:"₹230.00",offpercent:""}
    ]
    forClickProducts7(array8)
    function forClickProducts7(NEWARRIVALSData){
        NEWARRIVALSData.forEach(function(ele){
            var divent = document.createElement("div");
                divent.setAttribute("class","divent")

                var forarrimg = document.createElement("img");
                    forarrimg.setAttribute("src",ele.img)
                    forarrimg.setAttribute("class","forarrimg")

                var forname = document.createElement("p");
                    forname.innerText = ele.name;
                    forname.setAttribute("class","forname")

                var  divforPrice = document.createElement("div");
                    divforPrice.setAttribute("class","divforprice");
                    
                    var forAllprice = document.createElement("p")
                        forAllprice.innerText = ele.Allprice;
                        forAllprice.setAttribute("class","forallprice")

                    var forMainprice = document.createElement("div");
                        forMainprice.innerText = ele.Price;
                        // console.log(ele.Price)
                        forMainprice.setAttribute("class","forMainprce")

                    var forOff = document.createElement("p");
                        forOff.innerText = ele.offpercent;
                        forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(ele.img,ele.name,ele.Allprice,ele.Price,ele.offpercent)
                })
                    
                    divforPrice.append(forAllprice,forMainprice,forOff);
            divent.append(forarrimg,forname,divforPrice,buttonAdd);
            // console.log(divent)
        document.querySelector("#MSHPCM").append(divent)
        })
    }
    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }
}

var array9 = [
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/o/ponds_super_light_gel_oil_free_moisturiser_with_hyaluronic_acid_vitamin_e2.jpg",name:"Ponds Super Light Gel Oil Free Moisturiser With Hyalurinic Acid+Vitamin E",Rating:"",Allprice:"",Price:"₹299.00",offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/l/cl-08_strawberry_love-min_2.png",name:"Blue Heaven Candy Matte Lip Color",Rating:"",Allprice:"",Price:"Out of Stock",offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/s/dsfsdafsdfsd.jpg",name:"Ponds Pimple Clear Face Wash - Pack Of 2",Rating:"",Allprice:"",Price:"Out of stock",offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",Rating:"Math.rendom()",name:"Dove Intense Repair Shampoo 650ml",Allprice:"₹500.00",Price:"₹350.00",offpercent:"30% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png",Rating:"Math.rendom()",name:"Organic Harvest Cleansing Milk",Allprice:"₹545.00",Price:"₹491.00",offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",Rating:"Math.rendom()",name:"Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20",Allprice:"₹475.00",Price:"₹428.00",offpercent:"10% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/5/o5_1_1.jpg",name:"O3+ Whitening Facial Kit With Brightening & Whitening Peel Off Mask",Rating:"",Allprice:"₹510.00",Price:"₹499.00",offpercent:"2% off"},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/x/z/xzxzxzxzxz.jpeg",name:"Ponds White Beauty Anti Spot Fairness Day Cream SPF 15 PA++",Rating:"",Allprice:"₹",Price:"₹240.00",offpercent:""},
    {img:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/g/v/gvhjgvyjhv.jpg",name:"Vaseline Body Lotion 400ml + Pond's Moisturising Cold Cream 55ml Free",Rating:"",Allprice:"₹",Price:"₹310.00",offpercent:""},
]

for(let i=0;i<3;i++){
    // console.log(array9[i].img)
    var divent = document.createElement("div");
        divent.setAttribute("class","diventala")

        var forarrimg = document.createElement("img");
            forarrimg.setAttribute("src",array9[i].img)
            forarrimg.setAttribute("class","forarrimgtela")

            
        var  divforPrice = document.createElement("div");
             divforPrice.setAttribute("class","divforpriceorname");

            var forname = document.createElement("p");
                forname.innerText = array9[i].name;
                forname.setAttribute("class","fornameT")

        var divja = document.createElement("div")
            divja.setAttribute("class","divja")        
        
            var forAllprice = document.createElement("p")
                forAllprice.innerText =array9[i].Allprice;
                forAllprice.setAttribute("class","forallprice")
                
            var forMainprice = document.createElement("p");
                forMainprice.setAttribute("class","forMainprce")
                forMainprice.innerText = array9[i].Price;

            var forOff = document.createElement("p");
                forOff.innerText = array9[i].offpercent;
                forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(array9[i].img,array9[i].name,array9[i].Allprice,array9[i].Price,array9[i].offpercent)
                })
            divja.append(forAllprice,forMainprice,forOff)
            divforPrice.append(forname,divja,buttonAdd);
    divent.append(forarrimg,divforPrice);
document.querySelector("#bestseller").append(divent)

    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }
}

for(let i=3;i<6;i++){
    // console.log(array9[i].img)
    var divent = document.createElement("div");
        divent.setAttribute("class","diventala")

        var forarrimg = document.createElement("img");
            forarrimg.setAttribute("src",array9[i].img)
            forarrimg.setAttribute("class","forarrimgtela")

            
        var  divforPrice = document.createElement("div");
             divforPrice.setAttribute("class","divforpriceorname");

            var forname = document.createElement("p");
                forname.innerText = array9[i].name;
                forname.setAttribute("class","fornameT")

        var divja = document.createElement("div")
            divja.setAttribute("class","divja")        
        
            var forAllprice = document.createElement("p")
                forAllprice.innerText =array9[i].Allprice;
                forAllprice.setAttribute("class","forallprice")
                
            var forMainprice = document.createElement("p");
                forMainprice.setAttribute("class","forMainprce")
                forMainprice.innerText = array9[i].Price;

            var forOff = document.createElement("p");
                forOff.innerText = array9[i].offpercent;
                forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(array9[i].img,array9[i].name,array9[i].Allprice,array9[i].Price,array9[i].offpercent)
                })
            divja.append(forAllprice,forMainprice,forOff)
            divforPrice.append(forname,divja,buttonAdd);
    divent.append(forarrimg,divforPrice);
document.querySelector("#Latestproducts").append(divent)

    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }
}

for(let i=6;i<array9.length;i++){
    // console.log(array9[i].img)
    var divent = document.createElement("div");
        divent.setAttribute("class","diventala")

        var forarrimg = document.createElement("img");
            forarrimg.setAttribute("src",array9[i].img)
            forarrimg.setAttribute("class","forarrimgtela")

            
        var  divforPrice = document.createElement("div");
             divforPrice.setAttribute("class","divforpriceorname");

            var forname = document.createElement("p");
                forname.innerText = array9[i].name;
                forname.setAttribute("class","fornameT")

        var divja = document.createElement("div")
            divja.setAttribute("class","divja")        
        
            var forAllprice = document.createElement("p")
                forAllprice.innerText =array9[i].Allprice;
                forAllprice.setAttribute("class","forallprice")
                
            var forMainprice = document.createElement("p");
                forMainprice.setAttribute("class","forMainprce")
                forMainprice.innerText = array9[i].Price;

            var forOff = document.createElement("p");
                forOff.innerText = array9[i].offpercent;
                forOff.setAttribute("class","foroff")
                    
            var buttonAdd = document.createElement("button");
                buttonAdd.innerText = " 🧺️ ADD CART";
                buttonAdd.setAttribute("class","buttonAdd");
                buttonAdd.addEventListener("click",function(){
                    forlocalstorage(array9[i].img,array9[i].name,array9[i].Allprice,array9[i].Price,array9[i].offpercent)
                })
            divja.append(forAllprice,forMainprice,forOff)
            divforPrice.append(forname,divja,buttonAdd);
    divent.append(forarrimg,divforPrice);
document.querySelector("#mostviewd").append(divent)

    function forlocalstorage(A,B,C,D,E){
    var obj={}
    obj.image = A;
    obj.Name = B;
    obj.TOtalprice = C;
    obj.Price = D;
    obj.Off = E;

    array.push(obj);
    console.log(array)
    localStorage.setItem("Data",JSON.stringify(array))
    }
}