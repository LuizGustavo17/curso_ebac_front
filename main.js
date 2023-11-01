$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const NovaTarefa=$('#tarefa').val();
        const elemento = $(`<li><span>${NovaTarefa}<span></li>`);
        elemento.appendTo('ul');
        $('#tarefa').val('');
    });
    $('ul').on('click', 'li', function() {
        $(this).find('span').css('text-decoration', 'line-through');
    });
});