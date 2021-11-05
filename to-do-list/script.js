$(function () {
    $('button').on('click', function(){
        let task = $('#task').val()
        let complete = '<img src="assets/images/complete.png" id="complete">'

        $('ul').append(`<div class="flex"><li>${task}</li>${complete}</div>`)
        $('img').on('click', function(){
            $(this).parent().fadeOut('fast')
        })
    })
});

