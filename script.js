n = prompt('how many color in your flag?', )-1
document.addEventListener('keydown', function(event){
    main.innerHTML=''
    if (event.code=='Space'){
        for (let i=0; i<=n; i++){
            let div = document.createElement('div');
            main.appendChild(div);
            color = (Math.floor(Math.random()*256)).toString(16) + (Math.floor(Math.random()*256)).toString(16)  + (Math.floor(Math.random()*256)).toString(16) ;
            while (color.length<6){
                    color+='0';
                };
            div.style.backgroundColor=`#${color}`
            div.style.height=`${100}px`;
            div.style.width='100%';
            div.innerHTML=color
            div.style.color="white"
        }
    }
})