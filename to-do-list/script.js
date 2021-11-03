
$(function () {

    $('button').on('click', function(){
        let value = $('#task').val()
        console.log(value)
    
        $('ul').append(`<li>${value}</li>`)
    })
});

