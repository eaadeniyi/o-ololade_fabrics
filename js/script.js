function qtyItems(ids){
    var itemValue = document.getElementById(ids).value;

    if(itemValue == "-"){
        var itemCount = document.getElementById("value").innerHTML;

            if (itemCount == 1){
                document.getElementById("value").innerHTML= 1;
            }else{
                var itemCountCompute = Number(itemCount) - Number(1);
                var newItemCount = eval(itemCountCompute);
                var newValue = newItemCount;
                document.getElementById("value").innerHTML=newValue;
            }

        
    }

    if(itemValue == "+"){
        var itemCount = document.getElementById("value").innerHTML;
        var itemCountCompute = Number(itemCount) + Number(1) ;
        var newItemCount = eval(itemCountCompute);
        var newValue = newItemCount;
        document.getElementById("value").innerHTML=newValue;
    }
}

// function productInfo(){
//     var Image_Id = document.getElementById('product-display');
//     if (Image_Id.src.match("images/jean2.jpg")) {
//         Image_Id.src = "images/jean2.jpg";
//     }
//     else {
//         Image_Id.src = "images/blue-handbag1.jpg";
//     }
// }

var image =  document.getElementById("imageOne");

 function productInfo()
    {
        if (image.getAttribute('src') == "images/jeaan3.jpg")
            {
                document.getElementById("product-item").src = "images/jeaan3.jpg";
            }

            if (image.getAttribute('src') == "images/jeaan1.jpg")
            {
                document.getElementById("product-item").src = "images/jeaan1.jpg";
            }

            if (image.getAttribute('src') == "images/jean2.jpg")
            {
                document.getElementById("product-item").src = "images/jean2.jpg";
            }

    }

