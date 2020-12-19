
      var like1 = document.getElementById("like1");
      var like2 = document.getElementById("like2");
      var like3 = document.getElementById("like3");
      var like4 = document.getElementById("like4");
      var like5 = document.getElementById("like5");
      var like6 = document.getElementById("like6");
      var like7 = document.getElementById("like7");
      var like8 = document.getElementById("like8");
      var like9 = document.getElementById("like9");
      var like10 = document.getElementById("like10");


      var counter1 = document.getElementById("counter1");
      var counter2 = document.getElementById("counter2");
      var counter3 = document.getElementById("counter3");
      var counter4 = document.getElementById("counter4");
      var counter5 = document.getElementById("counter5");
      var counter6 = document.getElementById("counter6");
      var counter7 = document.getElementById("counter7");
      var counter8 = document.getElementById("counter8");
      var counter9 = document.getElementById("counter9");
      var counter10 = document.getElementById("counter10");
     

      i1 = window.localStorage.getItem("like1");
      i2 = window.localStorage.getItem("like2");
      i3 = window.localStorage.getItem("like3");
      i4 = window.localStorage.getItem("like4");
      i5 = window.localStorage.getItem("like5");
      i6 = window.localStorage.getItem("like6");
      i7 = window.localStorage.getItem("like7");
      i8 = window.localStorage.getItem("like8");
      i9 = window.localStorage.getItem("like9");
      i10 = window.localStorage.getItem("like10");
      

      function incerementLikes1(event) {
        i1++;
        counter1.innerHTML = i1;
        window.localStorage.setItem("like1", i1);
       
      }

      function incerementLikes2(event) {
        i2++;
        counter2.innerHTML = i2;
        window.localStorage.setItem("like2", i2);
       
      }

      function incerementLikes3(event) {
        i3++;
        counter3.innerHTML = i3;
        window.localStorage.setItem("like3", i3);
        
      }
      function incerementLikes4(event) {
        i4++;
        counter4.innerHTML = i4;
        window.localStorage.setItem("like4", i4);
        
      }
      function incerementLikes5(event) {
        i5++;
        counter5.innerHTML = i5;
        window.localStorage.setItem("like5", i5);
        
      }
      function incerementLikes6(event) {
        i6++;
        counter6.innerHTML = i6;
        window.localStorage.setItem("like6", i6);
        
      }
      function incerementLikes7(event) {
        i7++;
        counter7.innerHTML = i7;
        window.localStorage.setItem("like7", i7);
        
      }
      function incerementLikes8(event) {
        i8++;
        counter8.innerHTML = i8;
        window.localStorage.setItem("like8", i8);
        
      }
      function incerementLikes9(event) {
        i9++;
        counter9.innerHTML = i9;
        window.localStorage.setItem("like9", i9);
        
      }
      function incerementLikes10(event) {
        i10++;
        counter10.innerHTML = i10;
        window.localStorage.setItem("like10", i10);
        
      }

     function load() {
       
        counter1.innerHTML = window.localStorage.getItem("like1");
        counter2.innerHTML = window.localStorage.getItem("like2");
        counter3.innerHTML = window.localStorage.getItem("like3");
        counter4.innerHTML = window.localStorage.getItem("like4");
        counter5.innerHTML = window.localStorage.getItem("like5");
        counter6.innerHTML = window.localStorage.getItem("like6");
        counter7.innerHTML = window.localStorage.getItem("like7");
        counter8.innerHTML = window.localStorage.getItem("like8");
        counter9.innerHTML = window.localStorage.getItem("like9");
        counter10.innerHTML = window.localStorage.getItem("like10");

      }
      
