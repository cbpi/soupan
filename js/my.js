$('#go').on('click', function () {
  var link = $('input').val()
  window.open('http://norefer.mimixiaoke.com/api/jump?target=' + link, '_blank')
})
