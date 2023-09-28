# ZjedzJedzonko.pl

Strona internetowa napisana w HTML, SASS (SCSS) i JavaScript, która korzysta z narzędzia Parcel do budowy projektu. Ta
strona składa się z landing page oraz aplikacji do tworzenia przepisów i układania planów żywnieniowych.

## Autor

Tomasz Goldmann - https://github.com/TomaszGoldmann

## Wymagania wstępne

Przed uruchomieniem projektu upewnij się, że na Twoim komputerze zainstalowane są następujące narzędzia:

- [Node.js](https://nodejs.org/) - służy do uruchamiania JavaScript na serwerze.
- [npm](https://www.npmjs.com/) (Node Package Manager) - do zarządzania zależnościami projektu.

## Instalacja

1. Sklonuj repozytorium na swój komputer, używając Git:

   ```bash
   git clone <adres-repozytorium.git>

2. Przejdź do katalogu projektu:

   ```bash
   cd nazwa-projektu

3. Zainstaluj wszystkie zależności projektu, używając npm:

   ```bash
   npm install

## Uruchamianie

Po zakończeniu instalacji możesz uruchomić projekt. Parcel zostanie użyty do automatycznej kompilacji i uruchomienia serwera deweloperskiego.

1. Uruchom projekt, używając polecenia:

   ```bash
   npm start

2. Projekt zostanie uruchomiony na lokalnym serwerze deweloperskim. Otwórz przeglądarkę internetową i przejdź pod adres:

   ```bash
   http://localhost:1234

## Struktura katalogów

  ```bash
   /
├── src/                  # Źródłowy katalog projektu
│   ├── index.html        # Główny plik HTML
│   ├── js/               # Pliki JavaScript
│   ├── scss/             # Pliki SASS/SCSS
│   └── images/           # Obrazy i multimedia
├── package.json          # Informacje o projekcie i zależnościach
├── README.md             # Ten plik README
└── .gitignore            # Pliki i katalogi ignorowane przez Git