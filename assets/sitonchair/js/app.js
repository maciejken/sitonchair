document.addEventListener('DOMContentLoaded', function() {
  var chairView, dropDownLists, form, images, index, next, num, prev, section1, summary, summaryLeft, summaryRight, totalPrice, totalSum, transport;
  section1 = document.querySelector('#section1');
  prev = section1.querySelector('.prev');
  next = section1.querySelector('.next');
  index = 0;
  images = section1.querySelectorAll('ul > li');
  prev.addEventListener('click', function() {
    images[index % images.length].classList.toggle('visible');
    index--;
    if (index === -1) {
      index = images.length - 1;
    }
    return images[index % images.length].classList.toggle('visible');
  });
  next.addEventListener('click', function() {
    images[index % images.length].classList.toggle('visible');
    index++;
    if (index === images.length) {
      index = 0;
    }
    return images[index % images.length].classList.toggle('visible');
  });
  form = document.querySelector('.kalkulator .form');
  dropDownLists = form.querySelectorAll('.drop_down_list');
  summary = document.querySelector('.summary_panel');
  summaryLeft = summary.querySelector('.panel_left');
  summaryRight = summary.querySelector('.panel_right');
  transport = form.querySelector('input#transport');
  totalSum = summary.querySelector('.sum strong');
  chairView = document.querySelector('.kalkulator figure');
  num = function(str) {
    if (str) {
      return parseInt(str);
    } else {
      return 0;
    }
  };
  totalPrice = function(array) {
    var sum;
    sum = 0;
    array.forEach(function(i) {
      return sum += num(i.innerHTML);
    });
    return sum;
  };
  dropDownLists.forEach(function(i) {
    return i.addEventListener('click', function() {
      var options, panel;
      panel = i.querySelector('ul.list_panel');
      if (panel.style.display && panel.style.display === 'block') {
        switch (panel.style.display) {
          case 'none':
            return panel.style.display = 'block';
          case 'block':
            return panel.style.display = 'none';
        }
      } else {
        panel.style.display = 'block';
        options = Array.from(panel.children);
        return options.forEach(function(j) {
          return j.addEventListener('click', function(e) {
            var granny, img, prices;
            granny = j.parentElement.parentElement;
            index = Array.from(dropDownLists).indexOf(granny);
            if (index === 0) {
              img = chairView.firstElementChild;
              img.setAttribute('src', j.dataset.image);
            }
            summaryLeft.children[index].innerHTML = j.innerHTML;
            summaryRight.children[index].innerHTML = j.dataset.price;
            prices = Array.from(summaryRight.children);
            totalSum.innerHTML = totalPrice(prices);
            j.parentElement.style.display = 'none';
            return e.stopPropagation();
          });
        });
      }
    });
  });
  return transport.addEventListener('click', function() {
    var prices;
    if (transport.checked) {
      summaryLeft.children[3].innerHTML = 'Transport';
      summaryRight.children[3].innerHTML = transport.dataset.price;
    } else {
      summaryLeft.children[3].innerHTML = '';
      summaryRight.children[3].innerHTML = '';
    }
    prices = Array.from(summaryRight.children);
    return totalSum.innerHTML = totalPrice(prices);
  });
});

//# sourceMappingURL=app.js.map
