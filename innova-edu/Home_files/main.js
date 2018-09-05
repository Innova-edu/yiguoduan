;(function(){

    banner();
    function banner() {
        var arr = ['images/banner1.jpg','images/banner2.jpg','images/banner3.jpg','images/banner4.jpg'];
        var bannersWrap = document.querySelector('.banner');
        var ul = bannersWrap.querySelector('ul');
        var banners = Array.prototype.slice.call(document.querySelector('.banner ul').children);
        var img = ul.querySelectorAll('img');
        var onOff = false;
        if(document.querySelector('.icon')){
            var icons = Array.prototype.slice.call(document.querySelector('.icon').children);
            onOff = true;
        }
        var bannerWrap = document.querySelector('.banner-wrap');
        var _W = document.documentElement.clientWidth;

        var nub = 0;
        var timer = null;
        timer = setInterval(function () {
           /* if( onOff) {
                icons.forEach(function (el, i) {
                    icons[i].className = '';
                });

                // icons[nub].className = 'active';
            }*/
            nub++;
            if(nub>3)nub=0;
            move(_W,'left');
        },5000);

        function move(end,attr){
            img[1].src = arr[nub];
            banners[1].style[attr] = end+'px';

            ul.style.transition = '.3s';
            ul.style[attr] = -end + 'px';
            setTimeout(function(){
                ul.style.transition = 'none';
                img[0].src = arr[nub];
                ul.style[attr] = '0';
            },10)
        }
        if(onOff){
            icons.forEach(function(el,i){
                el.addEventListener('click',function () {
                    icons.forEach(function (el,index) {
                        icons[index].className = '';
                    });
                    nub = i;
                    move(_W,'left');
                    this.className = 'active';
                })
            })
        }

    }
})();
