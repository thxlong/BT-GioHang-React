import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import phoneData from "../data/productList.json";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        {
          maSP: 1,
          tenSP: "VinSmart Live",
          donGia: 5700000,
          hinhAnh: "./img/vsphone.jpg",
          soLuong: 1,
        },
      ],
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

    // console.log("spClicked:", sanPhamClicked);
    // this.setState({
    //   gioHang: [...this.state.gioHang, sanPhamClicked],
    // });
  };
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div>
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <ModalGioHang gioHang={this.state.gioHang} />

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
