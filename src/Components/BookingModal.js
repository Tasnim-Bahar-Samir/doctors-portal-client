import { format } from "date-fns";
import React from "react";

const BookingModal = ({ booking, selected }) => {
    const {name,slots} = booking
  const date = format(selected, "PP");
  return (
    <div>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid grid-cols-1 gap-5 mt-11">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select className="select select-bordered w-full" required>
              
              {
                slots?.map((slot,index) =><option key={index} value={slot}/> )
              }
            </select>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent input-bordered text-white w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
