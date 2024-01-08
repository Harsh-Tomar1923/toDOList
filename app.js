$('#inp').keypress(function(e){
    const data=$(this).val();
    if(e.which===13 && data!==""){
        const x=$(this).val();
        $('#list').append(`<li><span><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt=""></span> ${x}</li>`);
        $('#inp').val("")
    }
})
$('ul').on( 'click','li',function(){
    $(this).toggleClass('completed');
});
$('ul').on('click','span',function(e){
    $(this).parent().fadeOut(400,function(){
        $(this).remove();
    })
    e.stopPropagation();
})