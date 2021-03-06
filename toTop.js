var styles = `
.to_top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9999;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #f5f5f5;
    color: #444;
    cursor: pointer;
    border-radius: 2px;
    display: none;
  }
  
  .to_top:hover {
    background: #e9ebec;
  }
  
  .to_top-show {
    display: block;
  }
  
  .rotated {
      -webkit-transform : rotate(180deg); 
      -moz-transform : rotate(180deg); 
      -ms-transform : rotate(180deg); 
      -o-transform : rotate(180deg); 
      transform : rotate(180deg); 
  }
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet);
    
document.querySelector('footer').innerHTML = "<a class='to_top' onclick='toTop();'>&#x25B2;</a>"
      
function toTop() {
        
        document.querySelector('body').classList.add('rotated');
        window.scrollTo(0,document.body.scrollHeight);
      }
   
    (function() {
      'use strict';
    
      function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
    
        if (scrolled > coords) {
          toTop.classList.add('to_top-show');
        }
        if (scrolled < coords) {
          toTop.classList.remove('to_top-show');
        }
      }

      var toTop = document.querySelector('.to_top');
    
      window.addEventListener('scroll', trackScroll);
      toTop.addEventListener('click', toTop);
    })();