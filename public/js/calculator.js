// set the dimensions and margins of the graph
const margin = {top: 20, right: 60, bottom: 30, left: 140},
width = 1000 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;
nums = {};
let modal_caption = ""


function nums1(x) {

    y = Math.pow(1.3,(x-13))*0.4+0.14 
    return y 
  }
  
  
  //initial attempt at the function via desmos
  function nums2(x) {
  
    y = Math.pow(1.25,(x-14.5))*0.3+0.7 
    return y 
  }
  let datas = [];
  for (let i=0;i<23;i++) {
    datas.push({"x":i,"y":nums2(23-i)})
  }
  console.log(datas)
  

// const y2 = d3.scaleLinear()
// .domain([2.9339677238464357,0.1606158430208])
//     .range([16,height-29]);
    

const y2 = d3.scaleLinear()
.domain([2.9339677238464357,0.1606158430208])
    .range([16,height-29]);

    
// console.log(y2(nums2(20)))

$("#bought-year").change(function(){
    $(".rateCircle, .boughtCircle, .boughtBox, .soldBox, .rateBox, .rateDot").remove();
    $("#suggested-rate").text(getRate()+"%")
}) 

$("#calculate").click(function(){
    $(".rateCircle, .boughtCircle, .boughtBox, .soldBox, .rateBox, .rateDot").remove();
    calculate();
})


$("#percent").change(function(){
    $(".rateCircle, .boughtCircle, .boughtBox, .soldBox, .rateBox, .rateDot").remove();
    calculate();
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function calculate() {

    


    {

        nums.boughtFor = parseInt($("#bought-for").val().replace("$","").replaceAll(",",""))
        nums.boughtYear = $("#bought-year").val()
        // console.log($("#sold-for").val().replace("$","").replaceAll(",",""))
        nums.soldFor = parseInt($("#sold-for").val().replace("$","").replaceAll(",",""))
        nums.percent = $("#percent").val()*0.01

    
        years = numberWithCommas(2022-nums.boughtYear);
        increment = numberWithCommas((nums.soldFor-nums.boughtFor).toFixed(2));
    
        formula = 25-(2022-$("#bought-year").val());
    
        if (formula > 25) {
            formula = 25;
        } else if (formula < 4) {
            formula = 4;
        }
    
        $("#suggested-rate").val(formula+"%")
    
        a =(nums.soldFor-nums.boughtFor)*(formula/100)
        a = a.toFixed(2)
        a = numberWithCommas(a);
    
    
        b =(nums.soldFor-nums.boughtFor)*nums.percent
        b = b.toFixed(2)
        b = numberWithCommas(b);
      
    //    y=\frac{x^{2}}{20}
    
        $("#output-suggested-rate").html("Tax at suggested rate  $"+a)
        $("#output-your-rate").html("Tax at your proposed rate  <strong>$"+b+"</strong>")

        $("#increment").html(`
        Total amount acrued over <strong>${years}</strong> years: <strong>$${increment}</strong>
        `)
    }




let xPos =  ((nums.boughtYear-2000)/22)*width+"px"
let yPos =  height-(nums.boughtFor/2000000)*height+"px"

let xPos2 = width+"px";
let yPos2 = height-(nums.soldFor/2000000)*height+"px"


// let xPos3 = (nums.boughtYear-2000)/22*width+"px"
let xPos3 = (nums.boughtYear-2000)

let yPos3 = (nums.boughtYear-2000)
// console.log(yPos3)
yPos3 = nums2(23-yPos3)
// console.log(yPos3)
yPos3 = nums2(23-yPos3)
// yPos3 = height-(2.55-nums2(23-yPos3))*height
// console.log(yPos3)


    
    // console.log(2023-nums.boughtYear)


    

    yearsOwned = 23-(nums.boughtYear-2000);


    
 svg2
    .append("circle")
    .attr("class", "dot rateDot")
    .attr("r", 10)
    .attr("cx", x(yearsOwned ))  
    
    .attr("cy", function(){
        return y2(datas[yearsOwned = 23-(nums.boughtYear-2000)
        ].y) 
    })
    // .style("stroke","black")
    .style("fill", "black")
    .style("opacity", 1);



    
//labels for other dot.
txt2 = svg2.append("text")
.attr("x",x(yearsOwned)).attr("y",y2(datas[yearsOwned].y))
.attr("class","rateBox")
.style("transform","translate(-30px,-30px)")
.text("proposed rate: "+((datas[yearsOwned].y)*10).toFixed(1)+"%");






//  // Add the dots
//  svg2.selectAll("circle")
//  .data(datas)
//  .enter().append("circle")
//  .attr("class", "dot")
//  .attr("r", 3.5)
//  .attr("cx", function(d) {
//      return x(d.x);
//  })
//  .attr("cy", function(d) {
//     //  console.log( y2(d.y))
//      return y2(d.y)
//  })
//  .style("stroke","black")
//  .style("fill", "white")
//  .style("opacity", 1);





// var div = d3.select("body").append("div")	
// .attr("class", "tooltip")				
// .style("opacity", 1);






svg
.append("circle")
.attr("class", "boughtCircle")
.attr("r", 10)
.attr("cx", xPos )
.attr("cy",  yPos)
.on("mouseover", function(d) {		



//   div.style("left", (d.pageX) + "px")		
//   .style("top", (d.pageY - 28) + "px");	 
//   div.transition()		
//       .duration(200)		
//       .style("opacity", .9);
          
//   div.html("dddd")	
  
//   })					
// .on("mouseout", function(d) {		
//   div.transition()		
//       .duration(500)		
//       .style("opacity", 0)
      
});


//labels for first dot.
    txt1 = svg.append("text")
              .attr("x",xPos).attr("y",yPos)
              .attr("class","boughtBox")
              .style("transform","translate(-30px,-60px)")
              
    l1 = txt1.append("tspan").attr("x",xPos).text("bought for: $"+formatNumber(nums.boughtFor));
    l2 = txt1.append("tspan").attr("x",xPos).attr("dy", 24).text("in: "+nums.boughtYear);
    
        
        

          
//labels for first dot.
txt2= svg.append("text")
.attr("x",xPos2).attr("y",yPos2)
.attr("class","soldBox")
.style("transform","translate(-230px,-30px)")

l1 = txt2.append("tspan").attr("x",xPos2).text("sold for $"+formatNumber(nums.soldFor));






svg
.append("circle")
.attr("class", "soldCircle")
.attr("r", 10)
.attr("cx", xPos2 )
.attr("cy",  yPos2)

}

function getRate() {
    formula = 25-(2022-$("#bought-year").val());
    
    if (formula > 25) {
        formula = 25;
    } else if (formula < 4) {
        formula = 4;
    }

    return formula
}

// function percentIncrease(year) {
//   /*
//   This function takes in a year and returns the corresponding percentage increase from 7% to 20% over 20 years,
//   with a curve that is flatter as it approaches 20% and steeper as it approaches 7%.
//   */
//   if (year < 20) {
    
//     const x = (year) / 20; // Scale the year to a value between 0 and 1
//     const k = 3; // Controls the steepness of the curve
//     const y = Math.tanh(k * (2 * x - 1)); // Apply the arctanh function to the scaled year
//     const pct = (y + 1) / 2 * 0.13 + 0.07; // Scale and shift the result to the desired range
//     return pct;
//   }
// }


// let all_rates = [];

// for (i=0;i<20;i++) {
//   r = {"x":i,"y":percentIncrease(i)}
//   all_rates.push(r)
// }
// console.log(JSON.stringify(all_rates))

// Jquery Dependency

$("#sold-for, #bought-for").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});


function formatNumber(num) {
  // format number 1000000 to 1,234,567
  v = num.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return v;
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}




//initial attempt at the function via desmos




  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });


  
  
  // append the svg object to the body of the page
  const svg = d3.select("#chart1")
    .append("svg")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
  //Read the data
  d3.csv("base.csv",
  
    // When reading the csv, I must format variables:
    function(d){
      return { date : d3.timeParse("%Y")(d.date), value : d.value }
    }).then(
  
    // Now I can use this dataset:
    function(data) {
  
      // Add X axis --> it is a date format
      const x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .attr("class", "small")
        .call(d3.axisBottom(x));

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, 2000000])
        .range([ height, 0 ]);
      



 
      // Add the line
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#00004B")
        .attr("stroke-width", 5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.value) })
          )


          

          

      //adding dots
        svg.append("g")
        .call(d3.axisLeft(y).tickFormat(y => "$"+y.toLocaleString()));

           // Add the dots
           svg.selectAll("circle")
           .data(data)
           .enter().append("circle")
           .attr("class", "dot")
           .attr("r", 3.5)
           .attr("cx", function(d) {
               return x(d.date);
           })
           .attr("cy", function(d) {
               return y(d.value)
           })
           .style("stroke","black")
           .style("fill", "white")
           .style("opacity", 1);


  
  })

  



/////
// var datas = [{"x":0,"y":0.07032144101036253},{"x":1,"y":0.07058451551092236},{"x":2,"y":0.07106113424991078},{"x":3,"y":0.07192062412012551},{"x":4,"y":0.07345760916499257},{"x":5,"y":0.07616536351308369},{"x":6,"y":0.08081245054420991},{"x":7,"y":0.0884406384370634},{"x":8,"y":0.10009177814512772},{"x":9,"y":0.11606468019064661},{"x":10,"y":0.135},{"x":11,"y":0.15393531980935343},{"x":12,"y":0.1699082218548723},{"x":13,"y":0.18155936156293662},{"x":14,"y":0.1891875494557901},{"x":15,"y":0.19383463648691635},{"x":16,"y":0.19654239083500746},{"x":17,"y":0.1980793758798745},{"x":18,"y":0.19893886575008923},{"x":19,"y":0.19941548448907764}]


var x = d3.scaleLinear()
.domain(d3.extent(datas, function(d) { return d.x; }))
    .range([0, width]);

var y = d3.scaleLinear()
.domain([0, 3])
    .range([height, 0]);

var line = d3.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });

var svg2 = d3.select("#chart2")
.append("svg")
.attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .append("g")
      
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg2.append("path")
    .datum(datas)
    .attr("class", "line")
    .style("stroke","red")
    .style("stroke-width",5)
           .style("fill", "white")
           .style("opacity", 1)
           .style("fill", "none")
      
    .attr("d", line);


    svg2.append("g")
        .attr("transform", `translate(0, ${height})`)
        .attr("class", "small")
        .call(d3.axisBottom(x));

// svg2.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));


    var axisRight = d3.axisRight(y);
    

var g2 = svg2.append("g").attr("transform", "translate("+(width)+",0)").style("color","red").call(axisRight.tickFormat(y => y*10+"%"));

// //LEFT AXIS TITLE
// svg.append("text")
//   .attr("transform", `translate(-173, 10)`)
//   .attr("class","small")
//   .text("Average price")

// //RIGHT AXIS TITLE
// svg2.append("text")
// .attr("class","small")
//   .attr("transform", `translate(${width+10}, 10)`)
//   .text("Amount taxed")

// //BOTTOM AXIS TITLE
// svg.append("text")
//   .attr("transform", `translate(${width+30}, ${height+22})`)
//   .attr("class","small")
//   .text("Year purchased");



// calculate()