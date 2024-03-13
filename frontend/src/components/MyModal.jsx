/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import gravatarUrl from "gravatar-url";
import { useGetAllUserQuery } from "../fetures/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import { startChat } from "../fetures/chatPartner/chatPartnerSlice";

export default function MyModal({ isOpen, setIsOpen }) {
  const { data: users, isLoading, isError, error } = useGetAllUserQuery();
  const { activeFriends } = useSelector((state) => state.activeFriends);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredUsers = users?.data?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleClick = () => {
    setSearch("");
    closeModal();
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md  transform overflow-hidden rounded-2xl bg-gray-800  py-3 text-left align-middle shadow-xl transition-all text-white">
                  <div>
                    <h1 className="text-xl font-semibold text-center pb-3">
                      New Message
                    </h1>
                    <form className="">
                      <div className="flex gap-2 border-t border-b border-gray-700 py-2 px-5">
                        <label htmlFor="to">To:</label>
                        <input
                          type="text"
                          name="sentTo"
                          id="sentTo"
                          onChange={handleChange}
                          className="w-full bg-transparent focus:outline-none"
                          placeholder="Search new friend"
                        />
                      </div>
                    </form>
                    <div className="space-y-2 h-56 overflow-hidden overflow-y-scroll">
                      {search &&
                        filteredUsers?.map((user) => {
                          const { _id, email, name, profileImage } = user;
                          const onlineUser = activeFriends?.find(
                            (u) => u?.userId === _id
                          );
                          const isActive = onlineUser ? true : false;
                          return (
                            <div
                              key={_id}
                              onClick={() => [
                                dispatch(
                                  startChat({
                                    participants: user,
                                    isActive,
                                  })
                                ),
                                handleClick(),
                              ]}
                              className="flex items-center gap-2 hover:bg-gray-900 px-3 py-2 cursor-pointer "
                            >
                              <div className="relative">
                                <img
                                  className="w-12 h-12 rounded-full"
                                  src={
                                    profileImage ||
                                    gravatarUrl(email, {
                                      size: 200,
                                    })
                                  }
                                  alt=""
                                />
                                {onlineUser && (
                                  <div className=" absolute w-3 h-3 rounded-full right-1 bottom-0 bg-green-500"></div>
                                )}
                              </div>
                              <div>
                                <h1 className="font-semibold">{name}</h1>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
