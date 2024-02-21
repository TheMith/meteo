function Search({
    cities,
    inputValue,
    handleInputChange,
    handleChosenCity
}) {
  // Comparação entre o inputValue e city.local
  const filteredCities = cities.filter((city) => {
    return city.local.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className="search">
      <input
        type="text"
        placeholder="ex. Lisboa"
        value={inputValue}
        onChange={handleInputChange}
      />

      {inputValue.length > 0 && (
        <div className="cities-list">
          {filteredCities.map((city) => {
            return (
              <div key={city.globalIdLocal}>
                <button onClick={() => handleChosenCity(
                    city.globalIdLocal,
                    city.local
                )}>{city.local}</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
