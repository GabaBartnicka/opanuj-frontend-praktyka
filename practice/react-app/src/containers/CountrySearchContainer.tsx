import { CountrySearchTitle } from '../components/CountrySearchTitle.tsx';
import { CountryNameInbox } from '../components/CountryNameInbox.tsx';
import { FilterTypeSelect } from '../components/FilterTypeSelect.tsx';

export const CountrySearchContainer = () => {
  return (
    <>
      <div className="pt-24" />
      <CountrySearchTitle />
      <CountryNameInbox />
      <FilterTypeSelect />
    </>);
};