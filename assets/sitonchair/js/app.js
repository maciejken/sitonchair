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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsU0FBQTtBQXNDMUMsTUFBQTtFQUFBLFFBQUEsR0FBVyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QjtFQUVYLElBQUEsR0FBTyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QjtFQUNQLElBQUEsR0FBTyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QjtFQUVQLEtBQUEsR0FBUTtFQUNSLE1BQUEsR0FBUyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsU0FBMUI7RUFFVCxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBQTtJQUMzQixNQUFRLENBQUEsS0FBQSxHQUFRLE1BQU0sQ0FBQyxNQUFmLENBQ1IsQ0FBQyxTQUFTLENBQUMsTUFEWCxDQUNrQixTQURsQjtJQUVBLEtBQUE7SUFDQSxJQUFHLEtBQUEsS0FBUyxDQUFDLENBQWI7TUFDSSxLQUFBLEdBQVEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsRUFENUI7O1dBRUEsTUFBUSxDQUFBLEtBQUEsR0FBUSxNQUFNLENBQUMsTUFBZixDQUNSLENBQUMsU0FBUyxDQUFDLE1BRFgsQ0FDa0IsU0FEbEI7RUFOMkIsQ0FBL0I7RUFTQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBQTtJQUMzQixNQUFRLENBQUEsS0FBQSxHQUFRLE1BQU0sQ0FBQyxNQUFmLENBQ1IsQ0FBQyxTQUFTLENBQUMsTUFEWCxDQUNrQixTQURsQjtJQUVBLEtBQUE7SUFDQSxJQUFHLEtBQUEsS0FBUyxNQUFNLENBQUMsTUFBbkI7TUFDSSxLQUFBLEdBQVEsRUFEWjs7V0FFQSxNQUFRLENBQUEsS0FBQSxHQUFRLE1BQU0sQ0FBQyxNQUFmLENBQ1IsQ0FBQyxTQUFTLENBQUMsTUFEWCxDQUNrQixTQURsQjtFQU4yQixDQUEvQjtFQVlBLElBQUEs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U0FBUyxDQUFDLE9BQWI7TUFDSSxXQUFXLENBQUMsUUFBUyxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQXhCLEdBQW9DO01BQ3BDLFlBQVksQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUFFLENBQUMsU0FBekIsR0FBcUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUYzRDtLQUFBLE1BQUE7TUFLSSxXQUFXLENBQUMsUUFBUyxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQXhCLEdBQW9DO01BQ3BDLFlBQVksQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUFFLENBQUMsU0FBekIsR0FBcUMsR0FOekM7O0lBUUEsTUFBQSxHQUFTLEtBQUssQ0FBQyxJQUFOLENBQVcsWUFBWSxDQUFDLFFBQXhCO1dBQ1QsUUFBUSxDQUFDLFNBQVQsR0FBcUIsVUFBQSxDQUFXLE1BQVg7RUFWVyxDQUFwQztBQTVJMEMsQ0FBOUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ0RPTUNvbnRlbnRMb2FkZWQnLCAtPlxuICAgICMgY29uc29sZS5sb2cgJyogKiAqIGR6aWHFgmEgISEgKiAqIConXG5cbiMgICAgIC8vIEJBTk5FUlxuI1xuIyAgICAgLy8gdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4jICAgICAvLyB2YXIgZnVsbHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIyAgICAgLy8gZnVsbHNjcmVlbi5jbGFzc0xpc3QuYWRkKCdmdWxsc2NyZWVuJyk7XG4jICAgICAvLyB2YXIgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4jICAgICAvLyBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG4jICAgICAvLyB2YXIgbWFpbndpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4jICAgICAvLyBtYWlud2lkdGguY2xhc3NMaXN0LmFkZCgnbWFpbndpZHRoJyk7XG4jICAgICAvLyB2YXIgc3dlZXRzID0gWydDQUtFIFRPT1RTSUUnLCAnSEFMVkFIIENPT0tJRScsICdHVU1NSUVTIENBTkRZJywgJ0NBTkRZIENBTkVTJ107XG4jICAgICAvLyBzd2VldHMuZm9yRWFjaChmdW5jdGlvbihpKXtcbiMgICAgIC8vICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4jICAgICAvLyAgICAgdmFyIGluZGV4ID0gc3dlZXRzLmluZGV4T2YoaSk7XG4jICAgICAvLyAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycraW5kZXgpO1xuIyAgICAgLy8gICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4jICAgICAvLyAgICAgdGV4dC5pbm5lckhUTUwgPSBpO1xuIyAgICAgLy8gICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuIyAgICAgLy8gICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIyAgICAgLy8gICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlJytpbmRleCk7XG4jICAgICAvLyAgICAgcm93LmFwcGVuZENoaWxkKHRleHQpO1xuIyAgICAgLy8gICAgIHJvdy5hcHBlbmRDaGlsZChpbWFnZSk7XG4jICAgICAvLyAgICAgbWFpbndpZHRoLmFwcGVuZENoaWxkKHJvdyk7XG4jICAgICAvLyB9KTtcbiMgICAgIC8vXG4jICAgICAvLyBiYW5uZXIuYXBwZW5kQ2hpbGQobWFpbndpZHRoKTtcbiMgICAgIC8vIGZ1bGxzY3JlZW4uYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiMgICAgIC8vIGJvZHkuYXBwZW5kQ2hpbGQoZnVsbHNjcmVlbik7XG4jICAgICAvL1xuIyAgICAgLy8gZnVsbHNjcmVlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4jICAgICAvLyAgICAgYm9keS5yZW1vdmVDaGlsZChmdWxsc2NyZWVuKTtcbiMgICAgIC8vIH0pO1xuI1xuI1xuXG4gICAgIyBTTElERVJcbiAgICBzZWN0aW9uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgJyNzZWN0aW9uMSdcblxuICAgIHByZXYgPSBzZWN0aW9uMS5xdWVyeVNlbGVjdG9yICcucHJldidcbiAgICBuZXh0ID0gc2VjdGlvbjEucXVlcnlTZWxlY3RvciAnLm5leHQnXG5cbiAgICBpbmRleCA9IDBcbiAgICBpbWFnZXMgPSBzZWN0aW9uMS5xdWVyeVNlbGVjdG9yQWxsICd1bCA+IGxpJ1xuXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAgIGltYWdlc1sgaW5kZXggJSBpbWFnZXMubGVuZ3RoIF1cbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUgJ3Zpc2libGUnXG4gICAgICAgIGluZGV4LS1cbiAgICAgICAgaWYgaW5kZXggPT0gLTFcbiAgICAgICAgICAgIGluZGV4ID0gaW1hZ2VzLmxlbmd0aCAtIDFcbiAgICAgICAgaW1hZ2VzWyBpbmRleCAlIGltYWdlcy5sZW5ndGggXVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZSAndmlzaWJsZSdcblxuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAtPlxuICAgICAgICBpbWFnZXNbIGluZGV4ICUgaW1hZ2VzLmxlbmd0aCBdXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlICd2aXNpYmxlJ1xuICAgICAgICBpbmRleCsrXG4gICAgICAgIGlmIGluZGV4ID09IGltYWdlcy5sZW5ndGhcbiAgICAgICAgICAgIGluZGV4ID0gMFxuICAgICAgICBpbWFnZXNbIGluZGV4ICUgaW1hZ2VzLmxlbmd0aCBdXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlICd2aXNpYmxlJ1xuXG5cbiAgICAjIEtBTEtVTEFUT1JcblxuICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICcua2Fsa3VsYXRvciAuZm9ybSdcbiAgICBkcm9wRG93bkxpc3RzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsICcuZHJvcF9kb3duX2xpc3QnXG4gICAgIyBhcnJvd3MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0X2Fycm93Jyk7XG4gICAgIyDFgmF0d2llaiBrbGlrbsSFxIcgdyBsaXN0xJksIG5pxbwgdyBzYW3EhSBzdHJ6YcWCa8SZXG4gICAgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgJy5zdW1tYXJ5X3BhbmVsJ1xuICAgIHN1bW1hcnlMZWZ0ID0gc3VtbWFyeS5xdWVyeVNlbGVjdG9yICcucGFuZWxfbGVmdCdcbiAgICBzdW1tYXJ5UmlnaHQgPSBzdW1tYXJ5LnF1ZXJ5U2VsZWN0b3IgJy5wYW5lbF9yaWdodCdcbiAgICB0cmFuc3BvcnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IgJ2lucHV0I3RyYW5zcG9ydCdcbiAgICB0b3RhbFN1bSA9IHN1bW1hcnkucXVlcnlTZWxlY3RvciAnLnN1bSBzdHJvbmcnXG5cbiAgICBjaGFpclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICcua2Fsa3VsYXRvciBmaWd1cmUnXG5cbiAgICAjIHp3cmFjYSB6ZXJvLCBqZcWbbGkgYXJndW1lbnQgamVzdCBwdXN0eW0gc3RyaW5naWVtXG4gICAgbnVtID0gKHN0cikgLT5cbiAgICAgICAgaWYgc3RyIHRoZW4gcmV0dXJuIHBhcnNlSW50IHN0ciBlbHNlIHJldHVybiAwXG5cbiAgICAjIG9ibGljemFuaWUgY2VueSBjYcWCa293aXRlalxuICAgIHRvdGFsUHJpY2UgPSAoYXJyYXkpIC0+XG4gICAgICAgIHN1bSA9IDBcbiAgICAgICAgYXJyYXkuZm9yRWFjaCAoaSkgLT5cbiAgICAgICAgICAgICMgY29uc29sZS5sb2cgbnVtIGkuaW5uZXJIVE1MXG4gICAgICAgICAgICBzdW0gKz0gbnVtIGkuaW5uZXJIVE1MXG4gICAgICAgIHJldHVybiBzdW1cblxuICAgICMgb2JzxYJ1Z2Ega2xpa25pxJljaWEgZGxhIGthxbxkZWogbGlzdHkgcm96d2lqYW5lalxuICAgIGRyb3BEb3duTGlzdHMuZm9yRWFjaCAoaSkgLT5cbiAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIC0+XG4gICAgICAgICAgICBwYW5lbCA9IGkucXVlcnlTZWxlY3RvcigndWwubGlzdF9wYW5lbCcpO1xuICAgICAgICAgICAgIyBuYSBzYW15bSBwb2N6xIV0a3UgaW50ZXJwcmV0ZXIganMgbmllIHdpZHppIHN0eWx1IGRpc3BsYXkgbGlzdHksXG4gICAgICAgICAgICAjIGJvIG5pZSB6YWdsxIVkYSBkbyBhcmt1c3phIGNzcywgZGxhdGVnbyBwcnp5IHBpZXJ3c3p5bSBrbGlrbmnEmWNpdVxuICAgICAgICAgICAgIyB0cnplYmEgcHJ6eWrEhcSHLCDFvGUgZ28gbmllIG1hIChwYW5lbC5zdHlsZS5kaXNwbGF5PT1mYWxzZSlcbiAgICAgICAgICAgIGlmIHBhbmVsLnN0eWxlLmRpc3BsYXkgYW5kIHBhbmVsLnN0eWxlLmRpc3BsYXkgPT0gJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgIHN3aXRjaCBwYW5lbC5zdHlsZS5kaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgIHdoZW4gJ25vbmUnIHRoZW4gcGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgd2hlbiAnYmxvY2snIHRoZW4gcGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgIyBwbyBrbGlrbmnEmWNpdSBwb2phd2lhIHNpxJkgbGlzdGEsIHRyemViYSB6YXRyenltYcSHIHByb3BhZ2FjasSZXG4gICAgICAgICAgICAgICAgIyBrbGlrbmnEmWNpYSBuYSBrb8WEY3UgdGVnbyBibG9rdSwgYWJ5IGxpc3RhIHpuaWtuxJnFgmFcbiAgICAgICAgICAgICAgICAjIHByenkgd3lib3J6ZSBvcGNqaSB6IGxpc3R5LCBpbmFjemVqIHpub3d1IHNpxJkgcG9qYXdpXG4gICAgICAgICAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gQXJyYXkuZnJvbSBwYW5lbC5jaGlsZHJlblxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCAoaikgLT5cbiAgICAgICAgICAgICAgICAgICAgai5hZGRFdmVudExpc3RlbmVyICdjbGljaycsIChlKSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgIyB1c3RhbGFuaWUga2F0ZWdvcmlpIG5hIHBvZHN0YXdpZSBrb2xlam5vxZtjaSBsaXN0OlxuICAgICAgICAgICAgICAgICAgICAgICAgIyBkemnEmWtpIHRlbXUgbW/FvG5hIGLEmWR6aWUgcHJ6eXBpc2HEhyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAjIGRvIHfFgmHFm2Npd2VqIGxpbmlpIHcgemVzdGF3aWVuaXUga2/FhGNvd3ltXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFubnkgPSBqLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBBcnJheS5mcm9tKGRyb3BEb3duTGlzdHMpLmluZGV4T2YoZ3Jhbm55KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgaW5kZXggaXMgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgcHJ6eSB3eWJvcnplIHJvZHphanUgZm90ZWxhIGplZ28gemRqxJljaWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIHd5xZt3aWV0bGEgc2nEmSBuYSDFm3JvZGt1IHN0cm9ueVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IGNoYWlyVmlldy5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUgJ3NyYycsIGouZGF0YXNldC5pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgaW1nLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBjaGFpclZpZXcuc3R5bGUud2lkdGggPSAnMjZyZW0nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICMgcHJ6eXBpc2FuaWUgd3licmFuZWogb3BjamkgZG8gd8WCYcWbY2l3ZWdvIG1pZWpzY2FcbiAgICAgICAgICAgICAgICAgICAgICAgICMgdyB6ZXN0YXdpZW5pdSBkemnEmWtpIHptaWVubmVqIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5TGVmdC5jaGlsZHJlblsgaW5kZXggXS5pbm5lckhUTUwgPSBqLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeVJpZ2h0LmNoaWxkcmVuWyBpbmRleCBdLmlubmVySFRNTCA9IGouZGF0YXNldC5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgIyBvYmxpY3phbmllIGNlbnkga2/FhGNvd2VqXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMgPSBBcnJheS5mcm9tIHN1bW1hcnlSaWdodC5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTdW0uaW5uZXJIVE1MID0gdG90YWxQcmljZSBwcmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICMgdWtyeXdhbmllIGxpc3R5IHJvendpamFuZWo6XG4gICAgICAgICAgICAgICAgICAgICAgICBqLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgIyBkemnEmWtpIHRlbXUgemRhcnplbmllIG5pZSBqZXN0IHByemVrYXp5d2FuZSBkbyByb2R6aWNhXG4gICAgICAgICAgICAgICAgICAgICAgICAjIGkgbWVudSB6bmlrYSBwbyBrbGlrbmnEmWNpdSB3IG9wY2rEmVxuXG5cbiAgICAjIG9ic8WCdWdhIHd5Ym9ydSBvcGNqaSBUcmFuc3BvcnQsIGR6aWHFgmEgcG9kb2JuaWUgamFrIG9wY2plIHJvendpamFuZVxuICAgICMgcsOzem5pIHNpxJkgb2QgbmljaCBqZWRuYWsgdHltLCDFvGUgY2HFgnkgY3phcyBqZXN0IHdpZG9jem5hXG4gICAgdHJhbnNwb3J0LmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgLT5cbiAgICAgICAgaWYgdHJhbnNwb3J0LmNoZWNrZWRcbiAgICAgICAgICAgIHN1bW1hcnlMZWZ0LmNoaWxkcmVuWzNdLmlubmVySFRNTCA9ICdUcmFuc3BvcnQnXG4gICAgICAgICAgICBzdW1tYXJ5UmlnaHQuY2hpbGRyZW5bM10uaW5uZXJIVE1MID0gdHJhbnNwb3J0LmRhdGFzZXQucHJpY2VcblxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzdW1tYXJ5TGVmdC5jaGlsZHJlblszXS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgc3VtbWFyeVJpZ2h0LmNoaWxkcmVuWzNdLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgcHJpY2VzID0gQXJyYXkuZnJvbSBzdW1tYXJ5UmlnaHQuY2hpbGRyZW5cbiAgICAgICAgdG90YWxTdW0uaW5uZXJIVE1MID0gdG90YWxQcmljZSBwcmljZXNcbiJdfQ==
