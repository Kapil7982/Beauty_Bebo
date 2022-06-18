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

export {prodNav};