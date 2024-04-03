import { Country } from '../types/country.ts';
import { CountryCard } from './CountryCard.tsx';

export const CountryList = ({ countries }: { countries: Country[] }) => {
  console.log('country list: ', countries, countries.length);
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries && countries.length > 0 ? (


        countries.map((country, index) => (
          <li className="flex flex-col items-center" key={country.ccn3}>
            <CountryCard country={country} />
          </li>
        ))

      ) : (
        <li>Brak krajów do wyświetlenia</li>
      )}
    </ol>
  );
};