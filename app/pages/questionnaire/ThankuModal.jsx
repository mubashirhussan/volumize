import Link from "next/link";
import React from "react";

export default function ThankuModal(props) {
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
          <h3 className="font-bold text-4xl my-12">Thanku</h3>
          <Link href="/pages/treatment">
            <button onClick={onClose} className="">
              Close
            </button>
          </Link>
        </div>
      </dialog>
    </div>
  );
}
