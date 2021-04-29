export const SearchInput = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)} />
    </div>
  );
};
