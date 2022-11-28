let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)//Aynı ürünü aldığımızda onun alıdnığını shadow ile gösterdiğimiz js kodu
                }
            })
            if(checkIsset == false){/*Eğer aynı ürünü almak isterse kabul etmiyor*/
                document.querySelector('.listCart').appendChild(itemNew);
            }

            
        }
    })
})

function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item =>{
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}
