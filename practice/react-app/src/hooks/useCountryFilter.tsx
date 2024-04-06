import { Country } from '../types/country.ts';
import { useEffect, useState } from 'react';

export const useCountryFilter = (searchTerm: string) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setCountries(data || []))
      .catch((error) => console.error('Error fetching data:', error));
  }, [searchTerm]);

  return countries;
};
