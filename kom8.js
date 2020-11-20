let add7 = () => {
    let name7 = document.querySelector('.container #name7'); 
    let comment7 = document.querySelector('.container #comment7'); 
     
    if (name7.value !== "" && comment7.value != "") { 
     
    let list7 = document.querySelector('.list7'); 
    let time7 = new Date();
    let d = time7.getDate();
    let mo = time7.getMonth();
    let y = time7.getFullYear();
    let h = time7.getHours(); 
    let m = time7.getMinutes(); 
    let s = time7.getSeconds(); 
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
    ${name7.value} :<br />
     <br />
    
</div>
    </p> 
    </span>
    <p>${comment7.value}</p>
    `;
    list7.append(list_item); 
    }
     
    if (name7.value == "" || comment7.value == "") {
    let list7 = document.querySelector('.list7'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list7.append(list_item); 
     }
    name7.value=comment7.value = "";
    }