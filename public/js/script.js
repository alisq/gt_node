


$("#letter_name, #letter_email, #letter_city, #letter_country").keyup(function(){
  if (($("#letter_name").val() !== "") && ($("#letter_email").val().includes("@")) ){
    $('#letter_submit').prop('disabled', false);
  }
})

///SIGN UP FORM
$("#letter_submit").click(function(e){
  e.preventDefault();
  var data = {};
  data.name = $("#letter_name").val();
  data.email = $("#letter_email").val();
  data.city = $("#letter_city").val();
  data.country = $("#letter_country").val();
  
   ($('#letter_updates').is(":checked")) ? data.updates = $("#letter_updates").val() : data.updates = "";
  $("#loading").addClass("active");
  
  $.post("/upload",
  data,
  function(data, status){
      $("#form").fadeOut(200)
      setTimeout(function(){
          $("#form").html(`<h3>${status}</h3>`)
          $("#form").fadeIn(200)
      },201)
  });



})


$("#subscribe_submit").click(function(e){
  e.preventDefault();
  var data2 = {};

  data2.email = $("#footer_email").val();
  console.log(data2)
  
  $.post("/subscribe",
  data2,
  function(data, status){
      $("#form2").fadeOut(200)
      setTimeout(function(){
          $("#form2").html(`<h3>${status}</h3>`)
          $("#form2").fadeIn(200)
      },201)
  });



})



//UI stuff
$(".pics").click(function(){
  modal_contents = `<img src='${$(this).data("href")}' />`
  if ($(this).data("caption") !== undefined)  {modal_caption = "<span class='figure-caption'>"+$(this).data("caption")+"</span>"}
  $(".modal-body").html(modal_contents)
  $(".modal-footer").html(modal_caption)
})


// $("#persistent--sold-for").change(function(){
//     $("#sold-for").val($(this).val())
// })

//y=.8^{\left(x\right)}+3   

 //= y=25-x
 //calculate();


 // THIS IS CLOSE:
 // y=\left(\frac{25}{\sqrt{X}}\right)


 $("#scroll-to-calc").click(function(){
    $(document).scrollTo("#calculator",200)
 })

