export enum HealthStatus {
  Healthy = "Healthy",
  Infected = "Infected",
  Recovered = "Recovered",
  Deceased = "Died",
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  address: string;
  healthStatus: HealthStatus;
}

interface ICovidData {
  [date: string]: number;
}

export interface IHistoricalCovidData {
  cases: ICovidData;
  deaths: ICovidData;
  recovered: ICovidData;
}

export interface IGlobalCovidStats {
  updated: number; // Час останнього оновлення даних у мілісекундах
  cases: number; // Загальна кількість випадків захворювання
  todayCases: number; // Кількість випадків захворювання за сьогодні
  deaths: number; // Загальна кількість смертей
  todayDeaths: number; // Кількість смертей за сьогодні
  recovered: number; // Загальна кількість одужань
  todayRecovered: number; // Кількість одужань за сьогодні
  active: number; // Кількість активних випадків захворювання
  critical: number; // Кількість критичних випадків
  casesPerOneMillion: number; // Кількість випадків на мільйон населення
  deathsPerOneMillion: number; // Кількість смертей на мільйон населення
  tests: number; // Загальна кількість проведених тестів
  testsPerOneMillion: number; // Кількість тестів на мільйон населення
  population: number; // Населення світу
  oneCasePerPeople: number; // Одна справа на людину (необхідна кількість людей для одного випадку)
  oneDeathPerPeople: number; // Одна смерть на людину (необхідна кількість людей для однієї смерті)
  oneTestPerPeople: number; // Один тест на людину (необхідна кількість людей для одного тесту)
  activePerOneMillion: number; // Активні випадки на мільйон населення
  recoveredPerOneMillion: number; // Одужання на мільйон населення
  criticalPerOneMillion: number; // Критичні випадки на мільйон населення
  affectedCountries: number; // Кількість уражених країн
}

export interface ICountryCovidStats {
  updated: number; // Час останнього оновлення даних у мілісекундах
  country: string; // Назва країни
  countryInfo: {
    _id: number; // Унікальний ідентифікатор країни
    iso2: string; // ISO код країни (2-символьний)
    iso3: string; // ISO код країни (3-символьний)
    lat: number; // Географічна широта
    long: number; // Географічна довгота
    flag: string; // URL прапора країни
  };
  cases: number; // Загальна кількість випадків захворювання
  todayCases: number; // Кількість випадків захворювання за сьогодні
  deaths: number; // Загальна кількість смертей
  todayDeaths: number; // Кількість смертей за сьогодні
  recovered: number; // Загальна кількість одужань
  todayRecovered: number; // Кількість одужань за сьогодні
  active: number; // Кількість активних випадків захворювання
  critical: number; // Кількість критичних випадків
  casesPerOneMillion: number; // Кількість випадків на мільйон населення
  deathsPerOneMillion: number; // Кількість смертей на мільйон населення
  tests: number; // Загальна кількість проведених тестів
  testsPerOneMillion: number; // Кількість тестів на мільйон населення
  population: number; // Населення країни
  continent: string; // Континент, де знаходиться країна
  oneCasePerPeople: number; // Одна справа на людину (необхідна кількість людей для одного випадку)
  oneDeathPerPeople: number; // Одна смерть на людину (необхідна кількість людей для однієї смерті)
  oneTestPerPeople: number; // Один тест на людину (необхідна кількість людей для одного тесту)
  activePerOneMillion: number; // Активні випадки на мільйон населення
  recoveredPerOneMillion: number; // Одужання на мільйон населення
  criticalPerOneMillion: number; // Критичні випадки на мільйон населення
}
