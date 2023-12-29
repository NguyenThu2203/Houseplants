
/*
var spMoiRadioButton = document.getElementById('spmoi');
        spMoiRadioButton.addEventListener('click', function() {
            // Lấy tất cả các khối có class "moi"
            var moiBlocks = document.querySelectorAll('.col:not(.moi)');
            if (spMoiRadioButton.checked) {
                // Nếu được chọn, ẩn các khối có class "moi"
                moiBlocks.forEach(function (block) {
                    block.style.display = 'none';
                });
            }
        });*/

// hiển thị sản phẩm theo lựa chọn
        var spMoiRadioButton = document.getElementById('spmoi');
        var saleradio = document.getElementById('sale');
        var banchayradio = document.getElementById('banchay');
         saleradio.addEventListener('click', function() {
            hienThiKhoi('giam');
        });
        spMoiRadioButton.addEventListener('click', function() {
            hienThiKhoi('moi');
        }); 
        banchayradio.addEventListener('click', function() {
            hienThiKhoi('ban');
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