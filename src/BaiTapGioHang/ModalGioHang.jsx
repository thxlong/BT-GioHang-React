import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang } = this.props; // Lấy dữ liệu giỏ hàng từ BaiTapGioHang.jsx
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ maxWidth: "800px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã SP</td>
                    <td>Hình ảnh</td>
                    <td>Tên SP</td>
                    <td>Số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img
                            src={spGH.hinhAnh}
                            height="50"
                            alt={spGH.hinhAnh}
                          />
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>{spGH.soLuong}</td>
                        <td>{spGH.donGia.toLocaleString()}</td>
                        <td>{(spGH.donGia * spGH.soLuong).toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
