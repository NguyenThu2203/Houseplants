
 
  
    function check(){
        var data = new Array(); 
        data[0] = document.getElementById('ho').value; 
        data[1] = document.getElementById('ten').value; 
        data[2] = document.getElementById('tinh').value; 
        data[3] = document.getElementById('phuong').value; 
        data[4] = document.getElementById('diachi').value; 
        data[5] = document.getElementById('sodienthoai').value;

        // var myerror = new Array();
        // myerror[0] = "<span style = 'color: red, font-weight: bold'>Không được bỏ trống họ </span>"; 
        // myerror[1] = "<span style = 'color: red, font-weight: bold'>Không được bỏ trống tên </span>"; 
        // myerror[0] = "<span style = 'color: red, font-weight: bold'>Không được bỏ trống tỉnh </span>"; 
        // myerror[0] = "<span style = 'color: red, font-weight: bold'>Không được bỏ trống phường </span>"; 
        // myerror[0] = "<span style = 'color: red, font-weight: bold'>KKhông được bỏ trống địa chỉ chi tiết </span>"; 
        // myerror[0] = "<span style = 'color: red, font-weight: bold'>KKhông được bỏ trống số điện thoại </span>"; 

        var insert = new Array(); 
        insert[0] = document.getElementById("error-ho"); 
        insert[1] = document.getElementById("error-ten"); 
        insert[2] = document.getElementById("error-tinh"); 
        insert[3] = document.getElementById("error-phuong"); 
        insert[4] = document.getElementById("error-diachi"); 
        insert[5] = document.getElementById("error-sodienthoai"); 

        for (i in data){
            // var error = myerror[i]; 
            var insert = insert[i]; 
            if(data[i] == ""){
                alert("không được bỏ trống");
            }
            return false; 
        }
    }
