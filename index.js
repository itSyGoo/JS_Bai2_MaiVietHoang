// Bài tập: Quản lý tuyển sinh
document.querySelector(".btn-danger").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  var doiTuong = document.getElementById("doiTuong").value;
  var khuVuc = document.getElementById("khuVuc").value;

  var diemDoiTuong = 0;
  if (doiTuong == 1) {
    diemDoiTuong = 2.5;
  } else if (doiTuong == 2) {
    diemDoiTuong = 1.5;
  } else if (doiTuong == 3) {
    diemDoiTuong == 1;
  } else {
    diemDoiTuong = 0;
  }
  console.log(diemDoiTuong);

  var diemKhuVuc = 0;
  if (khuVuc == "A") {
    diemKhuVuc = 2;
  } else if (khuVuc == "B") {
    diemKhuVuc = 1;
  } else if (khuVuc == "C") {
    diemKhuVuc = 0.5;
  } else {
    diemKhuVuc = 0;
  }

  var tongDiem = diem1 + diem2 + diem3 + diemDoiTuong + diemKhuVuc;

  if (tongDiem >= diemChuan) {
    document.getElementById(
      "ketQua"
    ).innerHTML = `Bạn đã đậu và tổng số điểm đạt được là: ${tongDiem} điểm`;
  } else {
    document.getElementById(
      "ketQua"
    ).innerHTML = `Bạn đã rớt với tổng số điểm đạt được là: ${tongDiem} điểm`;
  }
};

//Bài tập tính tiền điện
document.querySelector(".btn-dark").onclick = function () {
  var name = document.getElementById("name").value;
  var soKw = document.getElementById("soKw").value * 1;
  var tongTien = 0;
  if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Tiền điện của tài khỏa ${name} là: ${tongTien} đồng`;
};

//Bài tập tính thuế thu nhập cá nhân
document.querySelector(".btn-light").onclick = function () {
  var hoVaTen = document.getElementById("hoVaTen").value;
  var sumNam = document.getElementById("sumNam").value * 1;
  var soNpt = document.getElementById("soNpt").value * 1;
  var thuNhapChiuThue = sumNam - 4 - soNpt * 1.6;
  var thueXuat = 0;
  if (thuNhapChiuThue < 60) {
    thueXuat = 0;
  } else if (thuNhapChiuThue === 60) {
    thueXuat = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
    thueXuat = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
    thueXuat = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
    thueXuat = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
    thueXuat = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
    thueXuat = thuNhapChiuThue * 0.3;
  } else {
    thueXuat = thuNhapChiuThue * 0.35;
  }
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Thuế thu nhập cá nhân của ${hoVaTen} là: ${thueXuat} triệu`;
};

//Bài tập tính tiền cáp

document.addEventListener("DOMContentLoaded", function () {
  var nhaDan = document.getElementById("nhaDan");
  var doanhNghiep = document.getElementById("doanhNghiep");
  var skn = document.getElementById("skn");
  nhaDan.addEventListener("change", function () {
    if (this.checked) {
      skn.style.display = "none";
    }
  });

  doanhNghiep.addEventListener("change", function () {
    if (this.checked) {
      skn.style.display = "block";
    }
  });
});
const NHADAN = "nhaDan";
const DOANHNGHIEP = "doanhNghiep";
document.querySelector(".btn-secondary").onclick = function () {
  var loaiKhach = document.querySelector(
    ".type input[name='selector']:checked"
  ).value;
  var nhaDan = document.getElementById("nhaDan");
  var doanhNghiep = document.getElementById("doanhNghiep");
  var mkh = document.getElementById("mkh").value;
  var kcc = document.getElementById("kcc").value * 1;
  var skn = document.getElementById("skn").value * 1;
  var dichVu1 = phiDichVuCoBan1(loaiKhach);
  var dichVu2 = phiDichVuCoBan2(loaiKhach);
  function phiDichVuCoBan1(DV) {
    switch (DV) {
      case NHADAN: {
        return 20.5 + 4.5 + 7.5 * kcc;
      }
      case DOANHNGHIEP: {
        return 15 + 75 * skn + 50 * kcc;
      }
    }
  }

  function phiDichVuCoBan2(DV) {
    switch (DV) {
      case NHADAN: {
        return 20.5 + 4.5 + 7.5 * kcc;
      }
      case DOANHNGHIEP: {
        return 15 + 75 * 10 + (skn - 10) * 80 + 50 * kcc;
      }
    }
  }

  tongHoaDon = 0;
  if (skn <= 10) {
    tongHoaDon = dichVu1;
  } else {
    tongHoaDon = dichVu2;
  }
  // tongHoaDon = 0;
  // if (loaiKhach = nhaDan) {
  //   tongHoaDon = 4.5 + 20.5 + 7.5 * kcc;
  // } else {
  //   if (skn <= 10) {
  //     tongHoaDon = 15 + 75 * skn + 50 * kcc;
  //   } else {
  //     tongHoaDon = 15 + 75 * 10 + (skn - 10) * 80 + 50 * kcc;
  //   }
  // }
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Khách hàng ${mkh} có tổng hóa đơn là: ${tongHoaDon}$`;
};
