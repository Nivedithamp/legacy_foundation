import React, { useState } from 'react';
import axios from 'axios';

const ConversationSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/conversations/search?query=${searchText}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching conversations:', error);
    }
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(result => (
          <li key={result._id}>
            <div>Context: {result.context}</div>
            <div>Response: {result.response}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationSearch;
