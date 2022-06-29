const spain = document.querySelector('#spain')
const spainCaption = document.querySelector('#spain-caption')

console.log('spainCaption: ', spainCaption)

spain.addEventListener('mouseover', () => {
  if (!spainCaption.classList.contains('active'))
    spainCaption.classList.add('active')
})

spain.addEventListener('mouseout', () => {
  if (spainCaption.classList.contains('active'))
    spainCaption.classList.remove('active')
})