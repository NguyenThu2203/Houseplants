

// hiển thị sản phẩm theo lựa chọn
var thapdencao = document.getElementById('thapdencao');
var caodenthap = document.getElementById('caodenthap');
var danhgiacao = document.getElementById('danhgiacao');
var price = new Array(); 
price = document.getElementsByClassName("gia");

 thapdencao.addEventListener('click', function() {
   for (var i = 0; i < price.length -1 ; i ++){
    for(var j = i + 1; j < price.length; j ++){
        if(price[i] > price[j]){
            hienThiKhoi('ban'); 
        }else{
            hienThiKhoi('moi');
        }
    }
   }

});
spMoiRadioButton.addEventListener('click', function() {
    hienThiKhoi('moi');
}); 
banchayradio.addEventListener('click', function() {
    hienThiKhoi('ban');
});
suutapradio.addEventListener('click', function() {
    hienThiKhoi('bosuutap');
});
function hienThiKhoi(name) {
    var moiBanBlocks = document.querySelectorAll('.col.' + name);
    var otherBlocks = document.querySelectorAll('.col:not(.' + name + ')');

    moiBanBlocks.forEach(function(block) {
        block.style.display = 'block';
    });

    otherBlocks.forEach(function(block) {
        block.style.display = 'none';
    });
}