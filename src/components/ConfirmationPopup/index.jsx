import React, { useState } from 'react';
import Popup from 'reactjs-popup';
//

const ConfirmationPopup = ({
  confirmBoxTitle,
  confirmBtnText,
  confirmBtnBg,
  confirmFunction
}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="flex flex-col">
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        contentStyle={{
          borderRadius: '10px',
          width: '420px',
          marginLeft: '12px',
          marginRight: '12px',
          paddingBottom: '20px'
        }}
        modal
      >
        <div className="modal bg-white p-4 h-32 rounded-lg text-center">
          <div className="text-black text-md">
            {confirmBoxTitle}
            <div>
              <button
                className={`py-2 px-5 mr-2 mt-5 text-white text-md rounded-lg bg-${confirmBtnBg}`}
                onClick={() => {
                  confirmFunction();
                  setOpen(false);
                }}
              >
                {confirmBtnText}
              </button>
              <button
                className="py-2 px-5 mr-2 mt-5 bg-c500 text-white font-semibold  rounded-lg"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ConfirmationPopup;
