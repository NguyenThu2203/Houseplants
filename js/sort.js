

// hiển thị sản phẩm theo lựa chọn
        var spMoiRadioButton = document.getElementById('spmoi');
        var saleradio = document.getElementById('sale');
        var banchayradio = document.getElementById('banchay');
        var suutapradio = document.getElementById('suutap')
         saleradio.addEventListener('click', function() {
            hienThiKhoi('giam');
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