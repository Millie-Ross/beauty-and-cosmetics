import React, { useState } from 'react';


const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchTerm(searchWord);

    // Filter logic
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search-container">
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 10).map((value, key) => (
            <div key={key} className="data-item">
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;