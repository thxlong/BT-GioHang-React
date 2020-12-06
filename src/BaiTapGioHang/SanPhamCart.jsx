import React, { Component } from "react";

export default class SanPhamCart extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          height="350"
          alt={sanPham.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button
            className="btn btn-danger"
            onClick={() => themGioHang(sanPham)}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
