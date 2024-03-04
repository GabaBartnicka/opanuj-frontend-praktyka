import { Country } from '../types/country.ts';
import { useState } from 'react';

export const useCountryFilter = (countryProps: Country) => {
  const [countries, setCountries] = useState<Country[]>([]);



 // TODO
}