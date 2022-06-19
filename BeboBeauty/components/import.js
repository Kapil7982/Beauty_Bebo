let prodNav = function prodNav(){
    return `
    
    <select id="shortList" onChange="handleNameSort()">
        <option value="defualt">Sort:  Position</option>
        <option value="asc">Product Name</option>
        <option value="">New Arrivals</option>
        <option value="LTH">Price: Low To High</option>
        <option value="HTL">Price: High To Low</option>
    </select>`;
}


let sidebar= function sidebar(){
    return `
    <p>SHOP BY⬇️</p>
    <hr>
    <select name="" id="">
        <option value="">SKIN TYPE</option>
        <option value="">Combination</option>
        <option value="">Dry</option>
        <option value="">Normal</option>
        <option value="">Qily</option>
        <option value="">Sensitive</option>
        <option value="">All skin type</option>
    </select><br>
    <select name="" id="">
        <option value="">PRICE</option>
        <option value="">Below RS:1000.00</option>
        <option value="">RS:1000.00 and above</option>
    </select><br>
    <select name="" id="">
        <option value="">BRAND</option>
        <option value="">Garnier</option>
        <option value="">L'Oreal Paries</option>
        <option value="">Maybelline</option>
        <option value="">Olay</option>
        <option value="">Pond's</option>
        <option value="">Faces Canada</option>
        <option value="">NYX</option>
        <option value="">O3+</option>
        <option value="">Swiss Beauty</option>
        <option value="">Colorbar</option>
    </select><br>
    <select name="" id="">
        <option value="">SHADES</option>
    </select><br>
    <select name="" id="">
        <option value="">FORMULATION</option>
        <option value="">Balm</option>
        <option value="">Cleansing</option>
        <option value="">Liquid</option>
        <option value="">Lotion/body butter</option>
        <option value=""></option>
    </select>
   <div id="sidebarlogo">
    <img src="https://www.beautybebo.com/pub/media/free-delivery.jpg" alt="Free Delivery Logo">
   </div>
`
};




function navbar() {
    return `
      <div id="first">
      <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg">
     </div>
     <div id="third">
         <div id="third1"><a href="../index.html"><img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"></a></div>
         <div id="third2">
               <select class="cat" name="cat">
                 <option id="all_cat" value="">All Categories</option>
                 <option value="3">- - Makeup</option>
                 <option value="8">- - - - Face</option>
                 <option value="123">
                   - - - - - - Foundation
                 </option>
                 <option value="124">- - - - - - Blush</option>
                 <option value="125">
                   - - - - - - Highlighters
                 </option>
                 <option value="126">- - - - - - Concealer</option>
                 <option value="127">
                   - - - - - - Compact &amp; Powder
                 </option>
                 <option value="128">
                   - - - - - - Face Primer
                 </option>
                 <option value="129">
                   - - - - - - Makeup Remover
                 </option>
                 <option value="130">- - - - - - Contour</option>
                 <option value="131">- - - - - - Bronzer</option>
                  <option value="132"><a id="bbcream" href="../prod.html">- - - - - - BB Cream</a></option>
                 <option value="133">
                   - - - - - - Loose Powder
                 </option>
                 <option value="134">
                   - - - - - - Setting Spray
                 </option>
                 <option value="172">
                   - - - - - - Makeup Kits
                 </option>
                 <option value="175">- - - - - - CC Cream</option>
                 <option value="9">- - - - Eye</option>
                 <option value="135">
                   - - - - - - Eye Shadow
                 </option>
                 <option value="136">- - - - - - Eyeliner</option>
                 <option value="137">
                   - - - - - - False Eyelashes
                 </option>
                 <option value="138">- - - - - - Mascara</option>
                 <option value="139">
                   - - - - - - Eye Brow Enhancers
                 </option>
                 <option value="140">- - - - - - Kajal</option>
                 <option value="141">
                   - - - - - - Under Eye Concealer
                 </option>
                 <option value="142">
                   - - - - - - Eye Makeup Remover
                 </option>
                 <option value="143">
                   - - - - - - Contact Lenses
                 </option>
                 <option value="144">
                   - - - - - - Eye Primer
                 </option>
                 <option value="145">
                   - - - - - - Eye-Palettes
                 </option>
                 <option value="173">- - - - - - Eye Kit</option>
                 <option value="10">- - - - Lips</option>
                 <option value="146">- - - - - - Lipstick</option>
                 <option value="147">
                   - - - - - - Liquid Lipstick
                 </option>
                 <option value="148">- - - - - - Lip Liner</option>
                 <option value="149">- - - - - - Lip Gloss</option>
                 <option value="150">- - - - - - Lip Balm</option>
                 <option value="151">
                   - - - - - - Lip Crayon
                 </option>
                 <option value="152">- - - - - - Lip Stain</option>
                 <option value="153">
                   - - - - - - Lip Plumper
                 </option>
                 <option value="11">- - - - Nails</option>
                 <option value="154">
                   - - - - - - Nail Polish
                 </option>
                 <option value="155">
                   - - - - - - Manicure &amp; Pedicure Kits
                 </option>
                 <option value="156">- - - - - - Nail Care</option>
                 <option value="157">
                   - - - - - - Nail Polish Sets
                 </option>
                 <option value="158">
                   - - - - - - Nail Art Kits
                 </option>
                 <option value="159">
                   - - - - - - Nail Polish Remover
                 </option>
                 <option value="12">- - - - Tools brushes</option>
                 <option value="161">
                   - - - - - - Face Brush
                 </option>
                 <option value="162">
                   - - - - - - Makeup Pouches
                 </option>
                 <option value="163">
                   - - - - - - Sponges &amp; Applicators
                 </option>
                 <option value="164">- - - - - - Eye Brush</option>
                 <option value="166">
                   - - - - - - Blush&nbsp;Brush
                 </option>
                 <option value="167">- - - - - - Tweezers</option>
                 <option value="168">- - - - - - Lip Brush</option>
                 <option value="169">
                   - - - - - - Eyelash Curlers
                 </option>
                 <option value="165">
                   - - - - - - - - Brush Sets
                 </option>
                 <option value="170">
                   - - - - - - Sharpeners
                 </option>
                 <option value="171">- - - - - - Mirrors</option>
                 <option value="4">- - Skin</option>
                 <option value="13">- - - - Body care</option>
                 <option value="77">
                   - - - - - - Body Moisturizers
                 </option>
                 <option value="79">
                   - - - - - - Kits &amp; Combos
                 </option>
                 <option value="81">
                   - - - - - - Body Sun Care
                 </option>
                 <option value="82">
                   - - - - - - Hand Creams
                 </option>
                 <option value="83">
                   - - - - - - Body Toners
                 </option>
                 <option value="84">
                   - - - - - - Hands &amp; Feet
                 </option>
                 <option value="85">
                   - - - - - - Dark Circles &amp; Wrinkles
                 </option>
                 <option value="86">
                   - - - - - - Neck Creams
                 </option>
                 <option value="87">
                   - - - - - - Brightening Lotion
                 </option>
                 <option value="88">- - - - - - Foot Cream</option>
                 <option value="90">
                   - - - - - - Night Cream
                 </option>
                 <option value="92">
                   - - - - - - Hair Remover Cream
                 </option>
                 <option value="95">- - - - - - All Cream</option>
                 <option value="179">- - - - - - Day Cream</option>
                 <option value="14">- - - - Face care</option>
                 <option value="93">
                   - - - - - - Facial Kits
                 </option>
                 <option value="96">
                   - - - - - - Moisturizer
                 </option>
                 <option value="97">- - - - - - Face Wash</option>
                 <option value="98">
                   - - - - - - Facial Wipes
                 </option>
                 <option value="99">
                   - - - - - - Brightening Cream
                 </option>
                 <option value="101">
                   - - - - - - Face Cleansers
                 </option>
                 <option value="102">- - - - - - Face Oil</option>
                 <option value="103">
                   - - - - - - Mask &amp; Peels
                 </option>
                 <option value="105">
                   - - - - - - Toner &amp; Astringents
                 </option>
                 <option value="106">
                   - - - - - - Bleach Creams
                 </option>
                 <option value="107">
                   - - - - - - Anti- Ageing Creams
                 </option>
                 <option value="108">
                   - - - - - - Face Tools
                 </option>
                 <option value="178">- - - - - - Serum</option>
                 <option value="15">- - - - Eye Care</option>
                 <option value="112">
                   - - - - - - Dark Circles
                 </option>
                 <option value="113">
                   - - - - - - Eye Contour Care
                 </option>
                 <option value="114">- - - - - - Eye Cream</option>
                 <option value="115">- - - - - - Eye Masks</option>
                 <option value="116">
                   - - - - - - Eye Serums
                 </option>
                 <option value="117">
                   - - - - - - Under Eye Creams
                 </option>
                 <option value="118">
                   - - - - - - Under Eye Wrinkles
                 </option>
                 <option value="119">- - - - - - Puffiness</option>
                 <option value="5">- - Hair</option>
                 <option value="17">- - - - Hair Care</option>
                 <option value="58">
                   - - - - - - Hair Color/ Dye
                 </option>
                 <option value="59">
                   - - - - - - Gels &amp; Waxes
                 </option>
                 <option value="60">- - - - - - Hair Spray</option>
                 <option value="61">
                   - - - - - - Hairfall &amp; Thinning&nbsp;
                 </option>
                 <option value="62">- - - - - - Dandruff</option>
                 <option value="63">
                   - - - - - - Color Protection
                 </option>
                 <option value="67">
                   - - - - - - Hair Creams &amp; Masks&nbsp;
                 </option>
                 <option value="69">
                   - - - - - - Dry Shampoo
                 </option>
                 <option value="70">
                   - - - - - - Hair Styling
                 </option>
                 <option value="71">
                   - - - - - - Straighteners&nbsp;
                 </option>
                 <option value="18">- - - - Hair Loss</option>
                 <option value="64">- - - - - - Shampoo</option>
                 <option value="66">- - - - - - Hair Oil</option>
                 <option value="68">- - - - - - Hair Serum</option>
                 <option value="72">
                   - - - - - - Conditioner
                 </option>
                 <option value="76">
                   - - - - - - Hair Growth solutions
                 </option>
                 <option value="6">- - Personal Care</option>
                 <option value="19">
                   - - - - Bath &amp; Body
                 </option>
                 <option value="45">
                   - - - - - - Essential Oils
                 </option>
                 <option value="46">
                   - - - - - - Ubtan &amp; Face Packs
                 </option>
                 <option value="51">- - - - - - Creams</option>
                 <option value="52">- - - - - - Foot Cream</option>
                 <option value="78">
                   - - - - - - Body Cleansers
                 </option>
                 <option value="80">
                   - - - - - - Body Massage Oil
                 </option>
                 <option value="89">- - - - - - Body Wash</option>
                 <option value="100">
                   - - - - - - Scrubs &amp; Exfoliants
                 </option>
                 <option value="20">
                   - - - - Bath &amp; Shower
                 </option>
                 <option value="48">- - - - - - Shower Gel</option>
                 <option value="49">- - - - - - Body Soaps</option>
                 <option value="21">
                   - - - - Bathing Accessories
                 </option>
                 <option value="53">
                   - - - - - - Bath Brushes
                 </option>
                 <option value="54">
                   - - - - - - Shower Caps
                 </option>
                 <option value="55">- - - - - - Sponges</option>
                 <option value="56">- - - - - - Loofahs</option>
                 <option value="7">- - Mom &amp; Baby Care</option>
                 <option value="22">- - - - Baby Care</option>
                 <option value="24">
                   - - - - - - Lotions &amp; Creams
                 </option>
                 <option value="25">- - - - - - Oils</option>
                 <option value="26">- - - - - - Shampoo</option>
                 <option value="27">- - - - - - Soaps</option>
                 <option value="28">- - - - - - Wipes</option>
                 <option value="29">
                   - - - - - - Sterilizer &amp; Cleaners
                 </option>
                 <option value="30">- - - - - - Powder</option>
                 <option value="31">- - - - - - Diapers</option>
                 <option value="32">- - - - - - Bath time</option>
                 <option value="33">- - - - - - Rash Cream</option>
                 <option value="23">- - - - Mom Care</option>
                 <option value="34">
                   - - - - - - Lotions &amp; Creams
                 </option>
                 <option value="35">
                   - - - - - - personal Care
                 </option>
                 <option value="174">- - Fragrance</option>
                 <option value="94">- - - - Perfumes</option>
                 <option value="180">
                   - - - - Deodorants-roll-ons
                 </option>
                 <option value="181">
                   - - - - Body Mist /Spray
                 </option>
                 <option value="177">- - Ayurveda</option>
                 <option value="182">
                   - - - - Natural Skin Care
                 </option>
                 <option value="185">- - - - - - Body Wash</option>
                 <option value="186">
                   - - - - - - Body Lotion
                 </option>
                 <option value="187">
                   - - - - - - Sun Protection
                 </option>
                 <option value="188">- - - - - - Face Wash</option>
                 <option value="189">- - - - - - Mask</option>
                 <option value="190">- - - - - - Eye Care</option>
                 <option value="191">- - - - - - Scrub</option>
                 <option value="198">- - - - - - Lip Care</option>
                 <option value="202">- - - - - - Cream</option>
                 <option value="203">- - - - - - Cleansers</option>
                 <option value="204">- - - - - - Gel</option>
                 <option value="205">- - - - - - Pack</option>
                 <option value="183">
                   - - - - Natural Hair Care
                 </option>
                 <option value="192">- - - - - - Hair Oils</option>
                 <option value="193">
                   - - - - - - Hair Serum
                 </option>
                 <option value="196">- - - - - - Hair Gel</option>
                 <option value="197">- - - - - - Shampoo</option>
                 <option value="201">
                   - - - - - - Conditioner
                 </option>
                 <option value="206">- - Latest Offer</option>
               </select>
             <input id="inputProd" type="text" placeholder="Search Products...">
             <button  onclick="searchprods()" id="search">Search</button></div>
  
         <div id="third3">
        
         <img src="https://th.bing.com/th/id/R.1f728febb073eb55a30ea4e8ade393f8?rik=PynTfRdhcipzkA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f1%2ff%2f7%2f2%2f13086666141038626861black-heart.png&ehk=FKfhda6Ws9uwEaW3qCdhrJ1mviD7Aa5Tza7syoly7X4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="">&nbsp;<img src="https://clipground.com/images/clipart-profile-6.jpg" alt="">&nbsp;
         <div> <a href="../login/signup.html"><p>My Account</p></a></div>
         
         </div>
  
         <p id="MyAcc"></p>
  
     </div>
     <div id="items"></div>
     <div id="menu">
       <div id="menu1">
         <ul id="main_menu">
           
           <li class="main_list"><b><a id="makeup" href="../prod.html">MAKEUP</a></b>
           <ul>
           <ol>
           <li>FACE</li>
           <li><a href="../prod.html">BB Cream</a></li>
           <li>Bronzer</li>
           <li>CC Cream</li>
           <li>Contour</li>
           <li>Concenaler</li>
           <li>Compact & Powder</li>
           <li>Face Primer</li>
           <li>Foundation</li>
           <li>Highlighters</li>
           <li>Loose Poweder</li>
           <li>Makeup Kits</li>
           <li> Makeup Remover</li>
           <li>Setting Spray</li>
           </ol>
           <ol>
           <li>EYE</li>
           <a
           class="sm_megamenu_nodrop"
           href="https://www.beautybebo.com/makeup/eye/contact-lenses.html"
           > <li>Contact Lensen</li></a>
           <li> Eye Kit</li>
           <li>Eye Shadow</li>
           <li> Eey-Palettes</li>
           <li>Eye Makeup Remover</li>
           <li> Eye Brow Enhancers</li>
           <li>False Eyelashes</li>
           <li>Kajal</li>
           <li>Mascara</li>
           <li>Under Eye Concealer</li>
           </ol>
           
           <ol>
          <li>LIPS</li>
          <li>Lipstick</li>
          <li>Liquid Lipstick</li>
          <li>Lip Liner</li>
          <li>Lip Gloss</li>
          <li>Lip Balm</li>
          <li>Lip Crayon </li>
          <li>Lip Stain</li>
          <li>Lip Plumer</li>
           </ol>
           
           <ol>
           <li>NAILS</li>
           <li>Manicure & Pedicure Kits</li>
           <li>Nail Polish</li>
           <li>Nail Car</li>
           <li>NAil PolishSets</li>
           <li>Nail Art Kits</li>
           <li>Nail Polish Remover</li>
           </ol>
           <ol>
             <li>TOLLS BRUSHES</li>
             <li>Blush Brush</li>
             <li>Eyelash Curlers</li>
             <li>Eye Brush</li>
             <li>Face Brush</li>
             <li>Lip Brush</li>
             <li>Makeup Pouches</li>
             <li>Mirrors</li>
             <li>Sponges & Applicators</li>
             <li> Sharpeners</li>
             <li> Tweezers</li>
          </ol>
           </ul>
           </li>
           
           <li class="main1_list"><b><a id="skin" href="../data.html">SKIN</a></b>
             <ul>
             <ol>
             <li>EYE CARE</li>
             <li>Dark Circles</li>
             <li>Eye Contour Care</li>
             <li>Eye Cream</li>
             <li>Eye Masks</li>
             <li>Eye Serums</li>
             <li>Puffiness</li>
             <li>Under Eye Creams</li>
             <li>Under Eye Wrinkles</li>
             </ol>
             
             <ol>
            <li>FACEE CARE</li>
            <li>Anti-Ageing Creams</li>
            <li>Bleach Creames</li>
            <li>Brightening Crem</li>
            <li>Face Wash</li>
            <li>Facial Wipes</li>
            <li>Face Oil</li>
            <li>Face Cleansers</li>
            <li>Facial Kits</li>
            <li>Face Tools</li>
            <li>Moisturizer</li>
            <li>Mask & Peels</li>
            <li>Serum</li>
            <li>Toner & Astringents</li>
             </ol>
             
             <ol>
            <li>BODY CARE</li>
            <li>All Cream</li>
            <li>Body Moisturizers</li>
            <li>Body Toners</li>
            <li>Body Sun Care</li>
            <li>Brightening Lotion</li>
            <li>Dark Circles & Wrinkles</li>
            <li>Day Cream</li>
            <li>Foot Cream</li>
            <li>Hair Remover Cream</li>
            <li>Hand Creams</li>
            <li>Hands & Feet</li>
            <li>Kits & Combos</li>
            <li>Night Cream</li>
            <li>Neck Cream</li>
             </ol>
             <ol>
            <li><img src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"></li>
             </ol>
             </ul>
             </li>
             
             <li class="main2_list"><b><a id="hair" href="../hair.html">HAIR</a></b>
               <ul>
               <ol>
                 <li>HAIR CARE</li>
                 <li>Color Protection</li>
                 <li>Dandruff</li>
                 <li>Dry Shampoo</li>
                 <li>Gels & Waxes</li>
                 <li>Hair Spray</li>
                 <li>Hair Color/ Day</li>
                 <li>Hair Creams & Masks</li>
                 <li>Hair Styling</li>
                 <li>Hairfall & Thinning</li>
                 <li>Straighteners</li>
                 </ol>
                 
                 <ol>
                 <li>HAIR LOSS</li>
                 <li>Conditioner</li>
                 <li>Hair Oil</li>
                 <li>Hair Serum</li>
                 <li>Hair Growth Solutions</li>
                 <li>Shampoo</li>
                 </ol>
                 
                 <ol>
                  <li><img src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"></li>
                   </ol>
                   </ul>
                   </li>
               
               <li class="main3_list"><b>PERSONAL CARE</b>
               <ul>
               <ol>
               <li>BATH & BODY</li>
               <li>Body Cleansers</li>
               <li>Body Massage Oil</li>
               <li>Body Wash</li>
               <li>Creams</li>
               <li>Essential Oils</li>
               <li>Foot Cream </li>
               <li>Scrubs & Exfoliants</li>
               <li>Ubtan & Face Packs</li>
               </ol>
               
               <ol>
              <li>BATHING ACCESSORIES</li>
              <li>Bath Brushes</li>
              <li>Loofahs</li>
              <li>Shower Caps</li>
              <li>Sponges</li>
               </ol>
               
               <ol>
              <li>BATH & SHOWER</li>
              <li>Body Soaps</li>
              <li>Shower Gel</li>
               </ol>
               
               <ol>
               <li><img src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"></li>
               </ol>
               </ul>
               </li>
               
               <li class="main4_list"><b>MORE & BABY CARE</b>
               <ul>
               <ol>
               <li>BABY CARE</li>
               <li>Bath Time</li>
               <li>Diapers</li>
               <li>Lotions & Creams</li>
               <li>Oils</li>
               <li>Power</li>
               <li>Shampoo</li>
               <li>Soaps</li>
               <li>Sterilizer & Cleaners</li>
               <li>Rash Cream</li>
               <li>Wipes</li>
               </ol>
               
               <ol>
              <li>MOM CARE</li>
              <li>Lotions & Creams</li>
              <li>Personal Care</li>
               </ol>
               
               <ol>
               <li> <img src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"></li>
               </ol>
               </ul>
               </li>
               
               <li class="main5_list"><b>FRAGRANCE</b>
                 <ul>                
                 <ol>
                 <li>Perfumes</li>
                 <li>Deodorants roll ons</li>
                 <li>Body Mist/Spray</li>
                 </ol>
                 </ul></li>
                 
               
                 <li class="main6_list"><b>AYURVEDA</b>
                   <ul>
                   <ol>
                   <li>NATURAL SKIN CARE</li>
                   <li>Body Wash</li>
                   <li>Body Lotion</li>
                   <li>Cleanser</li>
                   <li>Cream</li>
                   <li>Eye Care</li>
                   <li>Face Wash</li>
                   <li>Gel</li>
                   <li>Lip Care</li>
                   <li>Mask</li>
                   <li>Pack</li>
                   <li>Scrub</li>
                   <li>Sun Protection</li>
                   </ol>
                   
                   <ol>
                  <li>NATURAL HAIR CARE</li>
                  <li>Conditioner</li>
                  <li>Hair Oils</li>
                  <li>Hair Serum</li>
                  <li>Hair Gel</li>
                  <li>Shampoo</li>
                   </ol>
                   <ol>
                   <li><img src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg"> </li>
                   </ol>
                   </ul>
                  </li>
                   <li class="main7_list"><b>BRANDS</b>
                     <ul>
                     <ol>
                     <li><input type="text" placeholder="Top Brands"><button id="view">View All</button></li>
                     <li><button>LAKME</button>
                         <button>L-OREAL-PARLS</button>
                         <button>JOY</button>
                         <button>AROMA MAGIC</button>
                         <button>LOTUS HERBALS</button>
                         <button>BIOTIQUE</button></li>
                     <li><button>VLCC</button>
                         <button>VEGA</button>
                         <button>MAYBELLINE</button>
                         <button>MAMAEARTH</button>
                         <button>CHICCO</button>
                         <button>NEUTROGENA</button>
                     </li>
                     </ol>
                     </ul>
                     </li>        
                 </div>
         <div id="cart"><a href="../cart/cart1.html"><img src="https://th.bing.com/th/id/R.3c6701e58b2f09740563e9699b059f8c?rik=F2240ONFT3LuEA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_211129.png&ehk=kN7gJVrQjvRXgQaMdcOOW4BQkOEiSLiaTRjAu2Oakcc%3d&risl=&pid=ImgRaw&r=0">&nbsp;  MY CART &nbsp; <p id="cart_amount"></p></a></div>
     </div>
     <div id="off">Home | Offers</div>`;
  }
  


  function footer(){
    return `
    <div id="forcontQU">
    <div>
        <h3>
            CONTACT INFO
        </h3>
        <p style="color:#dd0285;">- - - - - - -</p>
        <P style="margin-top:20px; margin-bottom: 20px;">(+91)8120337567</P>
        <p>support@beautybebo.com</p>
        <p>sales@beautybebo.com</p>
        <p style="margin-top:20px; margin-bottom: 20px;">Open time 10:00AM - 7:00PM</p>
        <div id="footersocials">
            <a href="https://www.facebook.com/BeautyBeboOfficial/"><img id="fb" src="https://mpng.subpng.com/20200705/xu/transparent-facebook-pink-logo-5f018b55c2f9e9.1342468815939367257986.jpg" alt=""></a>
            <a href="https://www.instagram.com/beautybeboofficial/"><img id="insta" src="https://png.pngtree.com/png-vector/20200925/ourlarge/pngtree-instagram-icon-with-gradient-pink-color-and-papercut-style-png-image_2351908.jpg" alt=""></a>
            
        </div>
    </div>
    <div>
        <h3>
            QUICK LINKS
        </h3>
        <p style="color:#dd0285;">- - - - - - -</p>
        <ul class="forfoolist" >
            <li>About us</li>
            <li>contact Us</li>
            <li>Terms & Conditions</li>
            <li>Pricacy Policy</li>
            <li>Return and Refund Policy</li>
            <li>Shipping Policy</li>
        </ul>
    </div>
    <div>
        <h3>
            CUSTOMER INFO
        </h3>
        <p style="color:#dd0285;">- - - - - - -</p>
        <ol class="forfoolist" >
            <li>My Account</li>
            <li>Track your Order</li>
            <li>Order Returns</li>
            <li>Wishlist</li>
            <li>News & Events</li>
            <li>FAQ</li>
        </ol>
    </div>
    <div>
        <h3>
            CATEGORIES
        </h3>
        <p style="color:#dd0285;">- - - - - - -</p>
        <ol class="forfoolist">
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Personal Care</li>
            <li>Mom & Baby Care</li>
            <li>Fragrance</li>
            <li>Ayurveda</li>
        </ol>
    </div>
</div>
<div style="width:1200px; background-color: white; height: .5px; margin-left: auto; margin-right: auto; margin-bottom: 7px;"></div>
<div style="display:flex; justify-content: space-between; width: 1200px; margin: auto;">
    <div id="footerimgdiv">
        <img id="footerimg" src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="">
    </div>
    <div id="SignUPpartfooter" style="display:flex; align-items: center;">
        <h3></h3>
        &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <input type="text" placeholder="Signup for Newsletter">
        <button id="sub">Subscribe</button>
    </div>
</div>
<div id="ARR">
   <p>© 2020 All Rights Reserved.</p>
</div>
</div>`
}

export {prodNav,sidebar,navbar,footer};
 
  