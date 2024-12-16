/* eslint-disable react/prop-types */
const Tabel = ({ ...props }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center rtl:text-right text-gray-700">
        <thead className="text-sm text-white uppercase bg-blue-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              {"Room Type"}
            </th>
            <th scope="col" className="px-6 py-3">
              {"No. of Guests"}
            </th>
            <th scope="col" className="px-6 py-3">
              {"Price"}
            </th>
            <th scope="col" className="px-6 py-3">
              {"Your Choices"}
            </th>
            <th scope="col" className="px-6 py-3">
              {"Select Rooms"}
            </th>
            <th scope="col" className="px-8 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item) => (
              <tr
                className="bg-white border-b hover:bg-gray-50 text-center"
                key={item.id}
              >
                <th
                  scope="row"
                  className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.roomType}
                </th>
                <td className="px-6 py-4">{item.noOfGuests}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">
                  {item.yourChoices.map((choice) => (
                    <p key={choice} className="">
                      {" "}
                      *{choice}
                    </p>
                  ))}
                </td>
                <td className="px-6 py-4">{item.selectRooms}</td>
                <td className="px-8 py-4 text-right">
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                      props.handleOnClickNavigate(item);
                    }}
                  >
                    Select & Continue
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
