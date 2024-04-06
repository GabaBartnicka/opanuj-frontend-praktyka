import { CountrySearchTitle } from '../components/CountrySearchTitle.tsx';
import { CountryNameInbox } from '../components/CountryNameInbox.tsx';
import { FilterTypeSelect } from '../components/FilterTypeSelect.tsx';
import { useCountryFilter } from '../hooks/useCountryFilter.tsx';
import { useState } from 'react';
import { CountryList } from '../components/CountryList.tsx';

export const CountrySearchContainer = () => {
  const [name, setName] = useState('');
  const countries = useCountryFilter(name);

  return (
    <>
      <CountrySearchTitle />
      <CountryNameInbox name={name} setName={setName} />
      <FilterTypeSelect />
      <CountryList countries={countries} />
    </>);
};