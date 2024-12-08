export default function FilterSection() {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div>
          <label className="block text-gray-700 mb-2">Pick-Up</label>
          <input
            type="text"
            placeholder="Location"
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Date</label>
          <input type="date" className="w-full border rounded-md p-2" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Time</label>
          <input type="time" className="w-full border rounded-md p-2" />
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
        🔄
      </button>
    </div>
  );
}