document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
  
        let href = this.getAttribute('href').substring(1);
  
        const scrollTarget = document.getElementById(href);
  
        const topOffset = document.querySelector('.header-row').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
  
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('click', function(event) {
    if (event.target.closest('._pop-btn')) {
        let events = event.target.closest('._pop-btn');
        let ID = events.id;
        let data = document.querySelector(`[data-id="#${ID}"]`)
        data.classList.toggle('pop-up-id-actives');
    }
    if (!event.target.closest('.pop-up-form') && event.target.closest('.pop-up')) {
        let popGlobalActive = event.target.closest('.pop-up-global');
        if (popGlobalActive.closest('.pop-up-id-actives')) {
            popGlobalActive.classList.remove('pop-up-id-actives');
        }
    }

    if(event.target.closest('.catalog-item')) {
        let item = event.target.closest('.catalog-item');
        item.classList.toggle('catalog-item-active')
    }

    if(event.target.closest('.cart-text-closed')) {
        let closed = event.target.closest('.cart-text-closed');
        let text = document.querySelector('.cart-text');
        closed.classList.toggle('cart-text-closed-active');
        text.classList.toggle('cart-text-active');
    }
})
window.onscroll = function(){
    var html = document.documentElement, body = document.body;
    let BlkStyle = document.querySelector('.header-right-fix');
    let linkTop = document.querySelector('.navigation');
    if (BlkStyle) {
        if(html.scrollTop>50||body.scrollTop>50) {
            BlkStyle.classList.add('header-right-fix-active');
        } else BlkStyle.classList.remove('header-right-fix-active');
    }
    if (linkTop) {
        if(html.scrollTop>50||body.scrollTop>50) {
            linkTop.classList.add('navigation-active')
        } else linkTop.classList.remove('navigation-active');
    }
}
