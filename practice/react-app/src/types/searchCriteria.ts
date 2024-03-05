enum SearchCriteriaName {
  Name = 'name',
  Currency = 'currency',
  Language = 'language',
  Capital = 'capital',
}

export const searchCriteria = [
  { name: SearchCriteriaName.Name, label: 'Name' },
  { name: SearchCriteriaName.Currency, label: 'Currency' },
  { name: SearchCriteriaName.Language, label: 'Language' },
  { name: SearchCriteriaName.Capital, label: 'Capital' }
];
