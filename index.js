// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
document.querySelector('#save_lincoln').addEventListener('click', saveLincoln2)

//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

function saveLincoln2() {
  let interval = document.querySelector('#interval').value
  if(isNaN(interval)) {
    interval = 10000
  } else {

  let element = document.querySelector('#foreground')
  element.style.opacity = 0;
  element.style.transition = `opacity ${interval}ms`
    }
  }
