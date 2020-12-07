import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import phoneData from "../data/productList.json";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  // Lấy dữ liệu tại componentBaiTapGioHang
  themGioHang = (sanPhamClicked) => {
    let spGioHang = {
      maSP: sanPhamClicked.maSP,
      tenSP: sanPhamClicked.tenSP,
      donGia: sanPhamClicked.donGia,
      hinhAnh: sanPhamClicked.hinhAnh,
      soLuong: 1,
    };

    // check spClicked in cart?
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    // console.log("timSpCoTrongGioHang", index);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }

    // Set lại state để component render lại
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Đặt sự kiện xóa giỏ hàng tại BTGioHang
  xoaGioHang = (maSP) => {
    // Tìm trong giỏ hàng có sp chứa maSP được click thì xoá
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    // Cập nhật lại state giỏ hàng và render giao diện
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Hàm tăng giảm số lượng
  tangGiamSoLuong = (maSP, tangGiam) => {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);

    // Xử lý tăng giảm số lượng
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }

    //cập nhật giá trị và render giỏ hàng
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div>
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <ModalGioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />

        <div className="text-right">
          <span
            className="m-2 p-1 text-success"
            style={{ cursor: "pointer", fontSize: "17", fontWeight: "bold" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang
          themGioHang={this.themGioHang}
          mangSanPham={phoneData}
        />
      </div>
    );
  }
}
