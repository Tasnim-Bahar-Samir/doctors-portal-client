import React from "react";

const ConfirmationModal = ({closemodal,title,desc, modalAction, modalData}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
           {desc}
          </p>
          <div className="modal-action">
            <label className="btn"
                onClick={closemodal}
            >
              Cancel
            </label>
            <label onClick={()=> modalAction(modalData)} htmlFor="confirmation-modal" className="btn">
              Confirm
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
