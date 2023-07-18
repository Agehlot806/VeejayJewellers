import React, { useState, useEffect, useRef } from 'react';
const Demo = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    fetchDataAll();
  }, []);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const fetchDataAll = async () => {
    try {
      const response = await fetch('http://veejayjewels.com/api/v1/auth/state');
      const data = await response.json();
      setStates(data.state);
    } catch (error) {
      console.error('ERROR FOUND---->>>>', error);
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const inputSearch = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true); // Show the dropdown when typing in the input
  };
  const handleOptionClick = (state) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
    setSearchTerm('');
  };
  const filteredStates = states.filter((item) =>
    item.state_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div ref={dropdownRef} className="searchable-select">
      <div className="select-input" onClick={toggleDropdown}>
        <span>{selectedState ? selectedState.state_name : 'Select a state'}</span>
        <input
          type="text"
          value={searchTerm}
          onChange={inputSearch}
          placeholder="Search state..."
        />
      </div>
      {isDropdownOpen && (
        <ul className="select-options">
          {filteredStates.map((state) => (
            <li key={state.id} onClick={() => handleOptionClick(state)}>
              {state.state_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Demo;





