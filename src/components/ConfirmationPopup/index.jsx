import React, { useState } from 'react';
import Popup from 'reactjs-popup';
//

const ConfirmationPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="flex flex-col">
      <button type="button" className="button" onClick={() => setOpen(o => !o)}>
        Controlled Popup
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal bg-c700 p-4">
          <div>
            Are you sure you want to delete post ?
            <div>
              <button className="py-2 px-5 mr-2 mt-5 bg-c1100 text-white">
                Yes
              </button>
              <button
                className="py-2 px-5 mr-2 mt-5 bg-c1100 text-white"
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
