# Pre-assignment for Solita Dev Academy

The idea of this pre-assignment exercise was to create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.

The exercise uses data that is owned by City Bike Finland.

- License and information: https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902

# Functional requirements

## Station list

- List all stations
- Link to single station views

## Single station view

- Station name
- Station address
- Total number of journeys starting from the station
- Total number of journeys ending at the station
- Average distance of journeys starting from the station
- Avarage duration of journeys starting from the station

# Instructions for running the database

1. Install Docker Desktop on your computer (https://docs.docker.com/desktop/)
2. Clone this repository
3. On command line under this folder run:

```
docker compose up --build --renew-anon-volumes -d
```

Please note that running that might take couple of minutes

4. Docker setup also comes with Adminer UI, where you can check your database contents at http://localhost:8080/
5. Log into Adminer with following information (password: academy):

![alt text](login.png)

Database is running at postgres://localhost:5432/citybike and the database name is citybike. Database comes with user academy (password: academy).

# Database structure

Database consists of two tables: station and journey.

## Station table

| Column          | Description                 | Type                          |
| --------------- | --------------------------- | ----------------------------- |
| id              | id, primary key             | integer                       |
| station_name    | Name of the station         | character varying(100) _NULL_ |
| station_address | Address of the station      | character varying(100) _NULL_ |
| coordinate_x    | X coordinate of the station | character varying(100) _NULL_ |
| coordinate_y    | Y coordinate of the station | character varying(100) _NULL_ |

## Journey table

| Column               | Description                    | Type                               |
| -------------------- | ------------------------------ | ---------------------------------- |
| id                   | id, primary key                | integer                            |
| departure_date_time  | Journey start timestamp        | timestamp _NULL_                   |
| return_date_time     | Journey end timestamp          | timestamp _NULL_                   |
| departure_station_id | Journey start station          | integer, references to station(id) |
| return_station_id    | Journey end station            | integer, references to station(id) |
| distance             | Distance of journey in meters  | integer _NULL_                     |
| duration             | Duration of journey in seconds | integer _NULL_                     |

# Instructions for running the backend

1. Install Node on your computer (https://nodejs.org/en/download)
2. Clone this repository (if you didn't already)
3. Change directory to backend folder and install the dependencies with:

```
cd backend/ && npm install
```

4. Database needs a connection string to work. You need to pass it via the CONNECTION_STRING environment variable. You can also change the default port (which is 4000). Environment variables can be defined for example in .env file at the root of the backend folder (normally this example wouldn't be added to github):

```
CONNECTION_STRING=postgresql://academy:academy@localhost:5432/citybike
PORT=4000
```

5. Start the backend in development mode with:

```
npm run dev
```

# Instructions for running the frontend

1. Install Node on your computer (if you didn't already) (https://nodejs.org/en/download)
2. Clone this repository (if you didn't already)
3. Change directory to frontend folder and install the dependencies with:

```
cd frontend/ && npm install
```

4. Start the frontend in development mode with:

```
npm run dev
```

5. If you followed all the steps, the app should be up and running now on: http://localhost:5173/
