
document.addEventListener 'DOMContentLoaded', ->
    # console.log '* * * działa !! * * *'

#     // BANNER
#
#     // var body = document.querySelector('body');
#     // var fullscreen = document.createElement('div');
#     // fullscreen.classList.add('fullscreen');
#     // var banner = document.createElement('div');
#     // banner.classList.add('banner');
#     // var mainwidth = document.createElement('div');
#     // mainwidth.classList.add('mainwidth');
#     // var sweets = ['CAKE TOOTSIE', 'HALVAH COOKIE', 'GUMMIES CANDY', 'CANDY CANES'];
#     // sweets.forEach(function(i){
#     //     var row = document.createElement('div');
#     //     var index = sweets.indexOf(i);
#     //     row.classList.add('row'+index);
#     //     var text = document.createElement('div');
#     //     text.innerHTML = i;
#     //     text.classList.add('text');
#     //     var image = document.createElement('div');
#     //     image.classList.add('image'+index);
#     //     row.appendChild(text);
#     //     row.appendChild(image);
#     //     mainwidth.appendChild(row);
#     // });
#     //
#     // banner.appendChild(mainwidth);
#     // fullscreen.appendChild(banner);
#     // body.appendChild(fullscreen);
#     //
#     // fullscreen.addEventListener('click', function(){
#     //     body.removeChild(fullscreen);
#     // });
#
#

    # SLIDER
    section1 = document.querySelector '#section1'

    prev = section1.querySelector '.prev'
    next = section1.querySelector '.next'

    index = 0
    images = section1.querySelectorAll 'ul > li'

    prev.addEventListener 'click', ->
        images[ index % images.length ]
        .classList.toggle 'visible'
        index--
        if index == -1
            index = images.length - 1
        images[ index % images.length ]
        .classList.toggle 'visible'

    next.addEventListener 'click', ->
        images[ index % images.length ]
        .classList.toggle 'visible'
        index++
        if index == images.length
            index = 0
        images[ index % images.length ]
        .classList.toggle 'visible'


    # KALKULATOR

    form = document.querySelector '.kalkulator .form'
    dropDownLists = form.querySelectorAll '.drop_down_list'
    # arrows = form.querySelectorAll('.list_arrow');
    # łatwiej kliknąć w listę, niż w samą strzałkę
    summary = document.querySelector '.summary_panel'
    summaryLeft = summary.querySelector '.panel_left'
    summaryRight = summary.querySelector '.panel_right'
    transport = form.querySelector 'input#transport'
    totalSum = summary.querySelector '.sum strong'

    chairView = document.querySelector '.kalkulator figure'

    # zwraca zero, jeśli argument jest pustym stringiem
    num = (str) ->
        if str then return parseInt str else return 0

    # obliczanie ceny całkowitej
    totalPrice = (array) ->
        sum = 0
        array.forEach (i) ->
            # console.log num i.innerHTML
            sum += num i.innerHTML
        return sum

    # obsługa kliknięcia dla każdej listy rozwijanej
    dropDownLists.forEach (i) ->
        i.addEventListener 'click', ->
            panel = i.querySelector('ul.list_panel');
            # na samym początku interpreter js nie widzi stylu display listy,
            # bo nie zagląda do arkusza css, dlatego przy pierwszym kliknięciu
            # trzeba przyjąć, że go nie ma (panel.style.display==false)
            if panel.style.display and panel.style.display == 'block'
                switch panel.style.display
                    when 'none' then panel.style.display = 'block'
                    when 'block' then panel.style.display = 'none'

            else
                # po kliknięciu pojawia się lista, trzeba zatrzymać propagację
                # kliknięcia na końcu tego bloku, aby lista zniknęła
                # przy wyborze opcji z listy, inaczej znowu się pojawi
                panel.style.display = 'block'
                options = Array.from panel.children
                options.forEach (j) ->
                    j.addEventListener 'click', (e) ->
                        # ustalanie kategorii na podstawie kolejności list:
                        # dzięki temu można będzie przypisać element
                        # do właściwej linii w zestawieniu końcowym
                        granny = j.parentElement.parentElement
                        index = Array.from(dropDownLists).indexOf(granny)
                        if index is 0
                            # przy wyborze rodzaju fotela jego zdjęcie
                            # wyświetla się na środku strony
                            img = chairView.firstElementChild
                            img.setAttribute 'src', j.dataset.image
                            # img.style.width = '100%'
                            # chairView.style.width = '40rem'
                            # chairView.style.height = '40rem'

                        # przypisanie wybranej opcji do właściwego miejsca
                        # w zestawieniu dzięki zmiennej index
                        summaryLeft.children[ index ].innerHTML = j.innerHTML
                        summaryRight.children[ index ].innerHTML = j.dataset.price
                        # obliczanie ceny końcowej
                        prices = Array.from summaryRight.children
                        totalSum.innerHTML = totalPrice prices
                        # ukrywanie listy rozwijanej:
                        j.parentElement.style.display = 'none'
                        e.stopPropagation()
                        # dzięki temu zdarzenie nie jest przekazywane do rodzica
                        # i menu znika po kliknięciu w opcję


    # obsługa wyboru opcji Transport, działa podobnie jak opcje rozwijane
    # rózni się od nich jednak tym, że cały czas jest widoczna
    transport.addEventListener 'click', ->
        if transport.checked
            summaryLeft.children[3].innerHTML = 'Transport'
            summaryRight.children[3].innerHTML = transport.dataset.price

        else
            summaryLeft.children[3].innerHTML = ''
            summaryRight.children[3].innerHTML = ''

        prices = Array.from summaryRight.children
        totalSum.innerHTML = totalPrice prices
