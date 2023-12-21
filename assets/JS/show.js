function show (item, list, cnt) {
  item.addEventListener("click", function () {
    cnt++;
    if (cnt % 2 != 0) {
      list.classList.add("show");
    } else {
      list.classList.remove("show");
    }
  });
};

function exit (item, list) {
  item.forEach((element) => {
    element.addEventListener("click", function () {
      list.classList.remove("show");
    });
  });
};

function kiemTraDangNhap() {
  var tenTaiKhoan = document.querySelector("#email").value;
    var matKhau = document.querySelector("#pass").value;
  
  dangNhap(tenTaiKhoan, matKhau);
}

function  dangNhap ( tenTaiKhoan, matKhau) {
    if (tenTaiKhoan === "user@gmail.com" && matKhau === "123456") {
      
      window.location.href = "https://tkw-tim-kiem-main-rho.vercel.app/";
    } else if (tenTaiKhoan === "admin@gmail.com" && matKhau === "123456") {
       window.location.href = "https://tkw-ad-trang-chu.vercel.app/";
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  ;
};
