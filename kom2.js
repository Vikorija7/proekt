let add1 = () => {
    let name1 = document.querySelector('.container #name1'); 
    let comment1 = document.querySelector('.container #comment1'); 
     
    if (name1.value !== "" && comment1.value != "") { 
     
    let list1 = document.querySelector('.list1'); 
    let time1 = new Date();
    let d = time1.getDate();
    let mo = time1.getMonth();
    let y = time1.getFullYear();
    let h = time1.getHours(); 
    let m = time1.getMinutes(); 
    let s = time1.getSeconds(); 
    let b = d + "." + mo + "." + y;
    let now = h + " : " + m + " : " + s;
    let list_item = document.createElement ("l1"); 
     
    list_item.innerHTML = `
    <span>
    <p>
    <div style="text-align: left;">
    <span style="float:right;">
    ${b} <br>
    ${now} <br>
    </span>
    ${name1.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment1.value}</p>
    `;
    list1.append(list_item); 
    }
     
    if (name1.value == "" || comment1.value == "") {
    let list1 = document.querySelector('.list1'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list1.append(list_item); 
     }
    name1.value=comment1.value = "";
    }