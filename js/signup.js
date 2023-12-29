function validateForm(){
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value; 
    var confirm = document.getElementById('confirm').value; 

    var errorMessageUser = document.getElementById("errorMessageUser");
    var errorMessagePassword= document.getElementById("errorMessagePassword");
    var errorMessageConfirm = document.getElementById('errorMessageConfirm');

    if(username.trim().length < 4){
        errorMessageUser.innerText = 'Tên đăng nhập phải dài hơn 4 kí tự'; 
        return false; 
    }
    else if(password.length < 6){
        errorMessagePassword.innerText = "Mật khẩu phải dài 6 kí tự"; 
        return false; 
    }
    else if(password != confirm ){
        errorMessageConfirm.innerText = "Mật khẩu xác nhận không trùng với mật khẩu đã đặt"; 
        return false; 
    }else{
        errorMessageUser.innerText = ""; 
        errorMessageConfirm.innerText = ""; 
        errorMessagePassword.innerText = ""; 
        alert("Đăng kí tài khoản thành công"); 
        return true; 
    }
}