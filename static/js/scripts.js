$(document).ready(() => {
    // alert(123);
    const data = [
        { 
            ten: "Nike Black",
            gia: "2.000.000₫",
            listImg: ["./static/img/product3/1.jpg", "./static/img/product3/2.jpg", "./static/img/product3/3.jpg", "./static/img/product3/4.jpg"]
        },
        { 
            ten: "Nike White",
            gia: "3.000.000₫",
            giagoc: "4.500.000₫",
            listImg: ["./static/img/product4/1.jpg", "./static/img/product4/2.jpg", "./static/img/product4/3.jpg", "./static/img/product4/5.jpg"]
        },
        { 
            ten: "Nike Red",
            gia: "6.000.000₫",
            giagoc: "10.000.000₫",
            listImg: ["./static/img/product1/1.jpg", "./static/img/product1/2.jpg", "./static/img/product1/3.jpg", "./static/img/product1/4.jpg"]
        },
        { 
            ten: "Nike Green",
            gia: "4.000.000₫",
            listImg: ["./static/img/product2/1.jpg", "./static/img/product2/2.jpg", "./static/img/product2/3.jpg", "./static/img/product2/4.jpg"]
        }
    ]
    $(".show-detail #detail #close i").click((e) => {
        $(".show-detail").addClass("none");
    })
    $(".all-product .mb-5 a").click((e) => {
        const idx = $(e.target).attr("data");
        const currentData = data[parseInt(idx)];  
        $(".show-detail").removeClass("none");
        console.log(currentData);
        $(".show-detail #main-img img").attr("src", currentData.listImg[0]);
        for(var i = 0; i < 4; i+=1){
            $(".show-detail #slide-img #_item"+i).attr("src", currentData.listImg[i]);
        }
        $(".box-detail #detail #info-detail #name").text(currentData.ten)
        $(".box-detail #detail #info-detail #giaban").text(currentData.gia);
        if(currentData.giagoc){
            $(".box-detail #detail #info-detail #giagoc").removeClass("none");
            $(".box-detail #detail #info-detail #giagoc span").text(currentData.giagoc);
        }else{
            $(".box-detail #detail #info-detail #giagoc").addClass("none");
        }
    })
})