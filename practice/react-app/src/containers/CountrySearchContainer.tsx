import { CountrySearchTitle } from '../components/CountrySearchTitle.tsx';
import { CountryNameInbox } from '../components/CountryNameInbox.tsx';
import { useCountryFilter } from '../hooks/useCountryFilter.tsx';
import { useState } from 'react';
import { CountryList } from '../components/CountryList.tsx';

export const CountrySearchContainer = () => {
  const [name, setName] = useState('');
  const countries = useCountryFilter(name);

  return (
    <>
      <div className="pt-24" />
      <CountrySearchTitle />
      <CountryNameInbox name={name} setName={setName} />
      <CountryList countries={countries} />
      {/*<FilterTypeSelect />*/}
    </>);
};