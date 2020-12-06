import React, { Component } from "react";

export default class SinhVien extends Component {
  // Thuộc tính (property) hoTen, lop thuộc class sinhVien
  hoTen = "Nguyễn Văn A";
  lop = "11A11";
  tenTrungTam = "CYBERSOFT";

  renderThongTinSinhVien = () => {
    return (
      <ul>
        <li>Họ tên: {this.hoTen}</li>
        <li>Lớp: {this.lop}</li>
        <li>Trung tâm: {this.tenTrungTam}</li>
      </ul>
    );
  };

  //   render là phương thức thuộc class SinhVien
  render() {
    // Biến của hàm render
    return <div className="container">{this.renderThongTinSinhVien()}</div>;
  }
}
