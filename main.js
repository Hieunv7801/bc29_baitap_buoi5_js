//! Bài 1: Tính điểm
/**
 * Đầu vào:
 *  + Điểm chuẩn
 *  + Điểm 3 môn
 *  + Khu vực
 *  + Đối tượng
 * Xử lí: 
 *  + Điểm trung bình = (toán + lý +hóa) / 3 + điểm ưu tiên
 *  + Nếu điểm tb > điểm chuẩn => đậu
 *  + Nếu điểm tb < điểm chuẩn => rớt
 * Đầu ra:
 *  + Điểm tổng và kết quả
 */
//Format VND
var currentFormat = new Intl.NumberFormat("vn-VN");


function getMyEle(ele) {
    return document.getElementById(ele);
}
function khuVuc() {
    var kVuc = getMyEle("selectKv").value;
    var diemKhuVuc = 0;
    switch (kVuc) {
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        case "X":
            diemKhuVuc = 0;
            break;
        default:
            break;
    }
    return diemKhuVuc;
}
function doiTuong() {
    var dTuong = getMyEle("selectDt").value * 1;
    var diemDoiTuong = 0;

    switch (dTuong) {
        case 0:
            diemDoiTuong = 0;
            break;
        case 1:
            diemDoiTuong = 2.5;
            break;
        case 2:
            diemDoiTuong = 1.5;
            break;
        case 3:
            diemDoiTuong = 1;
            break;
        default:
            break;
    }
    return diemDoiTuong;
}
function sapXep() {
    var toan = getMyEle("toan").value * 1;
    var ly = getMyEle("ly").value * 1;
    var hoa = getMyEle("hoa").value * 1;
    var xeploai = "";
    var result = getMyEle("diemchuan").value * 1;
    var diemkv = khuVuc();
    var diemdt = doiTuong();
    var diemUuTien = diemkv + diemdt;
    var diemTB = toan + ly + hoa + diemUuTien;
    if (toan == 0 || ly == 0 || hoa == 0) {
        xeploai = "Bạn trượt do đã nằm trong điểm Liệt";
    } else if (diemTB < result) {
        xeploai = "Bạn đã trượt";
    } else {
        xeploai = "Chúc mừng bạn đã đỗ";
    }
    //show man
    getMyEle("sapxep").innerHTML = diemTB + "đ " + xeploai;
}
//! Bài 2: Tính tiền điện
/**
 * Đầu vào:
 *  + Số kw người dùng sử dụng
 *  + Tên khách hàng
 * Xử lí:
 *  50kw đầu => 500đ/kw
 *  50kw kế => 650đ/kw 
 *  100kw kế => 850/kw
 *  150kw kế => 1100/kw
 *  còn lại: 1300đ/kw
 * Đầu ra:
 *  Tổng tiền sử dụng
 */
function inPut() {
    var tongTien = 0;
    var soKw = getMyEle("kw").value * 1;

    if (soKw <= 50) {
        tongTien = soKw * 500;
    } else if (soKw > 50 && soKw < 100) {
        tongTien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw > 100 && soKw < 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw > 200 && soKw < 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    return tongTien;
}
function tinhTienDien() {
    var name = getMyEle("name").value;
    var tienDien = inPut();
    getMyEle("tiendien").innerHTML ="Khách hàng: "+name+" Cần thanh toán "+currentFormat.format(tienDien)+" VNĐ";
}

