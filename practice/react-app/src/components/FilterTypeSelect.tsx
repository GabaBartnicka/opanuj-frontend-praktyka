export const FilterTypeSelect = () => {
  return (
    <>
      <label className="flex flex-col">
        Type:
        <select
          // value={gender}
          // onChange={(e) => setGender(e.target.value)}
          className="border h-7 mt-1"
        >
          <option value="">-</option>
          <option value="name">Name</option>
          <option value="currency">Currency</option>
          <option value="language">Language</option>
          <option value="capital">Capital</option>
        </select>
      </label>
    </>
  );
};