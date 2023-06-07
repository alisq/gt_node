

$(".project").click(function(){
    i = $(this).find("img").attr("src")
    c_title = $(this).find("h3").text()
    c_content = $(this).find("div").text()

    caption = c_title+" "+c_content;
    $("#modal").addClass("active")
    $(".modal--image").attr("src",i)
    $(".modal--caption").text(caption)

})


$(".close").click(function(){
    $("#modal").removeClass("active")

})