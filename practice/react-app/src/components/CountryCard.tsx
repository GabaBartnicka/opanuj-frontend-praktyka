import { Country } from '../types/country.ts';
import { Card, CardFooter, CardHeader, Divider } from '@nextui-org/react';

export const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Card className="max-w-[400px] min-w-[300px]">
      <CardHeader className="flex gap-3">
        {/*<Image*/}
        {/*  alt="nextui logo"*/}
        {/*  height={40}*/}
        {/*  radius="sm"*/}
        {/*  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"*/}
        {/*  width={40}*/}
        {/*/>*/}
        <div className="flex flex-col">
          <p className="text-md">{country.flag} {country.name.common}</p>
          {/*<p className="text-small text-default-500">nextui.org</p>*/}
        </div>
      </CardHeader>
      <Divider />
      {/*<CardBody>*/}
      {/*  <p>Make beautiful websites regardless of your design experience.</p>*/}
      {/*</CardBody>*/}
      <Divider />
      <CardFooter>
        {/*<Link*/}
        {/*  isExternal*/}
        {/*  showAnchorIcon*/}
        {/*  href="https://github.com/nextui-org/nextui"*/}
        {/*>*/}
        {/*  Visit source code on GitHub.*/}
        {/*</Link>*/}
      </CardFooter>
    </Card>
  );
};