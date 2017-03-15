
document.addEventListener('DOMContentLoaded', function(){
    // console.log('* * * działa !! * * *');

    // BANNER

    // var body = document.querySelector('body');
    // var fullscreen = document.createElement('div');
    // fullscreen.classList.add('fullscreen');
    // var banner = document.createElement('div');
    // banner.classList.add('banner');
    // var mainwidth = document.createElement('div');
    // mainwidth.classList.add('mainwidth');
    // var sweets = ['CAKE TOOTSIE', 'HALVAH COOKIE', 'GUMMIES CANDY', 'CANDY CANES'];
    // sweets.forEach(function(i){
    //     var row = document.createElement('div');
    //     var index = sweets.indexOf(i);
    //     row.classList.add('row'+index);
    //     var text = document.createElement('div');
    //     text.innerHTML = i;
    //     text.classList.add('text');
    //     var image = document.createElement('div');
    //     image.classList.add('image'+index);
    //     row.appendChild(text);
    //     row.appendChild(image);
    //     mainwidth.appendChild(row);
    // });
    //
    // banner.appendChild(mainwidth);
    // fullscreen.appendChild(banner);
    // body.appendChild(fullscreen);
    //
    // fullscreen.addEventListener('click', function(){
    //     body.removeChild(fullscreen);
    // });


    // SLIDER

    var section1 = document.querySelector('#section1');

    var prev = section1.querySelector('.prev');
    var next = section1.querySelector('.next');

    var index = 0;
    var images = section1.querySelectorAll('ul>li');

    prev.addEventListener('click', function(){
        images[index%images.length].classList.toggle('visible');
        index--;
        if(index == -1){index = images.length-1;}
        images[index%images.length].classList.toggle('visible');
    });

    next.addEventListener('click', function(){
        images[index%images.length].classList.toggle('visible');
        index++;
        if(index == images.length){index = 0;}
        images[index%images.length].classList.toggle('visible');
    });

    // KALKULATOR

    var form = document.querySelector('.application .form');
    var dropDownLists = form.querySelectorAll('.drop_down_list');
    // var arrows = form.querySelectorAll('.list_arrow');
    // łatwiej kliknąć w listę, niż w samą strzałkę
    var summary = document.querySelector('.summary_panel');
    var summaryLeft = summary.querySelector('.panel_left');
    var summaryRight = summary.querySelector('.panel_right');
    var transport = form.querySelector('input#transport');
    var sum = summary.querySelector('.sum strong');

    var chairView = document.querySelector('.application figure');

    // zwraca zero, jeśli argument jest pustym stringiem
    function num(str){
        if(str){return parseInt(str);}
        else{return 0;}
    }

    // obliczanie ceny całkowitej
    function totalPrice(array) {
        var sum = 0;
        array.forEach(function(i){
            sum += num(i.innerHTML);
        });
        return sum;
    }

    // obsługa kliknięcia dla każdej listy rozwijanej
    dropDownLists.forEach(function(i){
        i.addEventListener('click', function(){
            var panel = i.querySelector('ul.list_panel');
            // na samym początku interpreter js nie widzi stylu display listy,
            // bo nie zagląda do arkusza css, dlatego przy pierwszym kliknięciu
            // trzeba przyjąć, że go nie ma (panel.style.display==false)
            if(panel.style.display || panel.style.display=='block'){
                switch(panel.style.display){
                    case 'none':
                        panel.style.display = 'block';
                        break;
                    case 'block':
                        panel.style.display = 'none';
                        break;
                }
            }
            else{
                // po kliknięciu pojawia się lista, trzeba zatrzymać propagację
                // kliknięcia na końcu tego bloku, aby lista zniknęła
                // przy wyborze opcji z listy, inaczej znowu się pojawi
                panel.style.display = 'block';
                var options = Array.from(panel.children);
                options.forEach(function(j){
                    j.addEventListener('click', function(e){
                        // ustalanie kategorii na podstawie kolejności list:
                        // dzięki temu można będzie przypisać element
                        // do właściwej linii w zestawieniu końcowym
                        var granny = j.parentElement.parentElement;
                        var index = Array.from(dropDownLists).indexOf(granny);
                        if(index===0){
                            // przy wyborze rodzaju fotela jego zdjęcie
                            // wyświetla się na środku strony
                            var img = chairView.firstElementChild;
                            img.setAttribute('src', j.dataset.image);
                            img.style.width = '100%';
                            chairView.style.width = '330px';
                            chairView.style.margin = '-20px 0 0 -55px';
                        }
                        // przypisanie wybranej opcji do właściwego miejsca
                        // w zestawieniu dzięki zmiennej index
                        summaryLeft.children[index].innerHTML = j.innerHTML;
                        summaryRight.children[index].innerHTML = j.dataset.price;
                        // obliczanie ceny końcowej
                        var prices = Array.from(summaryRight.children);
                        sum.innerHTML = totalPrice(prices);
                        // ukrywanie listy rozwijanej:
                        j.parentElement.style.display = 'none';
                        e.stopPropagation();
                        // dzięki temu zdarzenie nie jest przekazywane do rodzica
                        // i menu znika po kliknięciu w opcję
                    });
                });
            }
        });
    });

    // obsługa wyboru opcji Transport, działa podobnie jak opcje rozwijane
    // rózni się od nich jednak tym, że cały czas jest widoczna
    transport.addEventListener('click', function(){
        if(transport.checked){
            summaryLeft.children[3].innerHTML = 'Transport';
            summaryRight.children[3].innerHTML = transport.dataset.price;
        }
        else{
            summaryLeft.children[3].innerHTML = '';
            summaryRight.children[3].innerHTML = '';
        }
        var prices = Array.from(summaryRight.children);
        sum.innerHTML = totalPrice(prices);
    });

});
