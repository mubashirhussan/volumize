import Link from "next/link";
import React from "react";

export default function ConfirmationModal(props) {
  const { show, onClose } = props;
  return (
    <div>
      <dialog
        id="my_modal_2"
        className="modal"
        open={show}
        style={{ top: "-250px" }}
      >
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg my-12">
            You are not Eligible for this Treatment
          </h3>
          <Link href="/">
            <button onClick={onClose} className="">
              Close
            </button>
          </Link>
        </div>
      </dialog>
    </div>
  );
}
