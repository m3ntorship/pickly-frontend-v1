import React from 'react';
import Popup from 'reactjs-popup';

const ConfirmationPopup = ({
  confirmBoxTitle,
  confirmBtnText,
  confirmBtnBg,
  confirmFunction,
  // popupModal,
  theRef,
  trigger,
  parentRef
}) => {
  return (
    <div>
      <Popup
        trigger={trigger}
        // open={popupModal}
        ref={theRef}
        contentStyle={{
          borderRadius: '10px',
          paddingBottom: '20px',
          width: '93%',
          maxWidth: '500px'
        }}
        modal
      >
        <div className="modal bg-white p-4 h-32 rounded-lg text-center">
          <div className="text-black text-md">{confirmBoxTitle}</div>
          <div>
            <button
              className={`py-2 px-5 mr-2 mt-5 text-white text-md rounded-lg bg-${confirmBtnBg}`}
              onClick={() => {
                confirmFunction();
                theRef.current.close();
                parentRef.current.close();
              }}
            >
              {confirmBtnText}
            </button>
            <button
              className="py-2 px-5 mr-2 mt-5 text-white text-md rounded-lg bg-c500"
              onClick={() => {
                theRef.current.close();
                parentRef.current.close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ConfirmationPopup;
