// import React from "react";
// import useUserContext from "../hook/ContextHook";

// const RecoveredModal = () => {
//   const user = useUserContext();
//   const userName = user?.displayName;
//   const userEmail = user?.email;
//   return (
//     <div>
//       <>
//         <button
//           className="btn"
//           onClick={() => document.getElementById("my_modal_1").showModal()}
//         >
//           This Is Mine
//         </button>
//         <dialog id="my_modal_1" className="modal">
//           <div className="modal-box">
//             <div className="">
//               <div className="flex justify-between">
//                 <h1 className="mb-4 font-bold ">Mining Parson information</h1>
//                 <button
//                   onClick={() => {
//                     document.getElementById("my_modal_1").close();
//                   }}
//                   className="btn"
//                 >
//                   x
//                 </button>
//               </div>
//               <div className="avatar">
//                 <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
//                   <img src={user?.photoURL} />
//                 </div>
//               </div>
//               <p>{user?.displayName}</p>
//               <p>{user?.email}</p>
//             </div>

//             <div className="modal-action">
//               <form
//                 onSubmit={(e) =>
//                   handleDataSubmitModal(e, _id, userName, userEmail)
//                 }
//                 method="dialog"
//                 className="w-full "
//               >
//                 <div className="flex flex-col gap-4">
//                   <input
//                     type="text"
//                     name="location"
//                     className="input w-full"
//                     placeholder="location"
//                   ></input>
//                   <input
//                     type="date"
//                     name="date"
//                     className="input w-full"
//                     placeholder="date"
//                   ></input>
//                 </div>
//                 {/* if there is a button in form, it will close the modal */}
//                 <div className="flex justify-end mt-10">
//                   <button type="submit" className="btn ">
//                     Submit recover
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </>
//     </div>
//   );
// };

// export default RecoveredModal;
