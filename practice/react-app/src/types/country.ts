export interface Name {
  common: string,
}

export interface Country {
  id: number,
  currency: string,
  language: string,
  capital: string,
  ccn3: string

  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
}