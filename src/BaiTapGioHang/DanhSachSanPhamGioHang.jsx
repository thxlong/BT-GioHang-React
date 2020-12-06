import React, { Component } from "react";
import SanPhamCart from "./SanPhamCart";

export default class DanhSachSanPhamGioHang extends Component {
  render() {
    const { mangSanPham, themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {
            return (
              <div className="col-4 mt-4" key={index}>
                <SanPhamCart themGioHang={themGioHang} sanPham={sanPham} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
