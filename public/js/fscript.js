

            $("#letter_submit").click(function(e){
                e.preventDefault();
                var data = {};
                data.name = document.forms['uploadForm']['name'].value;
                data.email = document.forms['uploadForm']['email'].value;
                data.city = document.forms['uploadForm']['city'].value;
                data.country = document.forms['uploadForm']['country'].value;

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
