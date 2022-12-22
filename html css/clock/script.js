const deg = 6;

        const fullScreen = document.querySelector('body')

        fullScreen.addEventListener("click", function() {
            var
                  el = document.documentElement
                , rfs =
                       el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
            ;
            rfs.call(el);
        });

        const hr=document.querySelector('#hr');
        const mn=document.querySelector('#mn');
        const sc=document.querySelector('#sc');

        setInterval(() => {
           
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() *deg;
            let ss = day.getSeconds() *deg;

           
            hr.style.transform =`rotateZ(${(hh)+(mm/12)}deg)`;
            mn.style.transform =`rotateZ(${mm}deg)`; 
            sc.style.transform =`rotateZ(${ss}deg)`; 
            
             
        })
        
        let day1 = new Date();
        let minute = day1.getMinutes();
        console.log(minute); 