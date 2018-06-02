
$(document).ready(function(){
    $("main section p").hide();
    $("main section a").hover(function(){
        $(this).css("text-decoration","underline");
    },function(){
        $(this).css("text-decoration","none");
    }).click(function(a){
        a.preventDefault();
        $("main section p").hide();
        
        $(this).next('p').toggle();
        
    });
    
    
});