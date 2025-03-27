const UserPrompt = () => {
  return (
    <div className="flex w-[60%] items-center h-13 border-2 border-white rounded-xl p-3">
      <input
        className="p-2 outline-none h-full flex-2/3"
        placeholder="e.g. Paris"
      />
      <button className="border border-white size-[30px] p-2 rounded-full text-white cursor-pointer hover:border-gray-200 flex justify-center items-center flex-1/3 hover:bg-white hover:text-gray-500 font-bold text-xl">
        &#x279C;
      </button>
    </div>
  );
};

export default UserPrompt;
