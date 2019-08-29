# Stay Informed API!

## Local dev setup

If using user `dunder-mifflin`:

```bash
mv example.env .env
createdb -U dunder-mifflin stay-informed
createdb -U dunder-mifflin stay-informed-test
```

If your `dunder-mifflin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=stay-informed-test npm run migrate
```

And `npm test` should work at this point

## Configuring API Keys

Stay Informed leverages the [Open Secrets API](https://opensecrets.org/open-data/api-documentation), [News API](https://www.npmjs.com/package/newsapi), [Google Civics API](https://developers.google.com/civic-information/), and [ProPublica Congress API](https://www.propublica.org/datastore/api/propublica-congress-api)

Sign up for API keys and save them to your `.env` file using the following variable names so they can be referenced in the `config.js` and other services:

#### Civics API

* `CIVIC_API_KEY`
* `CIVIC_API_URL="https://www.googleapis.com/civicinfo/v2/representatives"`

#### ProPublica

* `PROPUBLICA_API_KEY`

#### News API

* `NEWS_API_KEY`

#### Open Secrets

* `OPEN_SECRETS_API_KEY`


## API Responses

#### Civics API

`GET https://www.googleapis.com/civicinfo/v2/representatives??key=${config.CIVIC_API_KEY}&address=${address}`

This returns a user's state, congressional district, and other data associated with this registered address.

For our needs, we take the state and congressional district data and use them in our request to ProPublica and Open Secrets

```
{
 "kind": "civicinfo#representativeInfoResponse",
 "normalizedInput": {
  "line1": "227 East 2nd Street",
  "city": "New York",
  "state": "NY",
  "zip": "10009"
 },
 "divisions": {
  "ocd-division/country:us": {
   "name": "United States",
   "officeIndices": [
    0,
    1
   ]
  },
  "ocd-division/country:us/state:ny": {
   "name": "New York",
   "officeIndices": [
    2,
    4,
    5,
    14,
    15
   ]
  },
  "ocd-division/country:us/state:ny/cd:12": {
   "name": "New York's 12th congressional district",
   "officeIndices": [
    3
   ]
  },
  "ocd-division/country:us/state:ny/county:new_york": {
   "name": "New York County",
   "alsoKnownAs": [
    "ocd-division/country:us/state:ny/borough:manhattan",
    "ocd-division/country:us/state:ny/place:new_york/county:new_york"
   ],
   "officeIndices": [
    11,
    12
   ]
  },
  "ocd-division/country:us/state:ny/place:new_york": {
   "name": "New York city",
   "officeIndices": [
    8,
    9,
    10
   ]
  },
  "ocd-division/country:us/state:ny/place:new_york/council_district:2": {
   "name": "New York City NY - city council district 2",
   "officeIndices": [
    13
   ]
  },
  "ocd-division/country:us/state:ny/sldl:74": {
   "name": "New York Assembly district 74",
   "officeIndices": [
    7
   ]
  },
  "ocd-division/country:us/state:ny/sldu:26": {
   "name": "New York State Senate district 26",
   "officeIndices": [
    6
   ]
  },
  "ocd-division/country:us/state:ny/supreme_court:1": {
   "name": "NY State Supreme Court - 1st District"
  }
 },
 "offices": [........
```

#### ProPublica API Response

We use the `state` value returned from the Civics API and make two requests

##### Senate

`GET https://api.propublica.org/congress/v1/members/senate/${state}/current.json`

Header must be `x-api-key`: `${process.env.PROPUBLICA_API_KEY}`

Response:

```
{
   "status": "OK",
   "copyright": "Copyright (c) 2019 Pro Publica Inc. All Rights Reserved.",
   "results": [
      {
         "id": "G000555",
         "name": "Kirsten E. Gillibrand",
         "first_name": "Kirsten",
         "middle_name": "E.",
         "last_name": "Gillibrand",
         "suffix": null,
         "role": "Senator, 1st Class",
         "gender": "F",
         "party": "D",
         "times_topics_url": "http://topics.nytimes.com/top/reference/timestopics/people/g/kirsten_gillibrand/index.html",
         "twitter_id": "GillibrandNY",
         "facebook_account": "SenKirstenGillibrand",
         "youtube_id": "KirstenEGillibrand",
         "seniority": "11",
         "next_election": "2024",
         "api_uri": "https://api.propublica.org/congress/v1/members/G000555.json"
      },
      {
         "id": "S000148",
         "name": "Charles E. Schumer",
         "first_name": "Charles",
         "middle_name": "E.",
         "last_name": "Schumer",
         "suffix": null,
         "role": "Senator, 3rd Class",
         "gender": "M",
         "party": "D",
         "times_topics_url": "http://topics.nytimes.com/top/reference/timestopics/people/s/charles_e_schumer/index.html",
         "twitter_id": "SenSchumer",
         "facebook_account": "senschumer",
         "youtube_id": "SenatorSchumer",
         "seniority": "21",
         "next_election": "2022",
         "api_uri": "https://api.propublica.org/congress/v1/members/S000148.json"
      }
   ]
}
```
##### House

`GET https://api.propublica.org/congress/v1/members/house/${state}/${districtCode}/current.json`

Header must be `x-api-key`: `${process.env.PROPUBLICA_API_KEY}`


Response:

```
{
   "status": "OK",
   "copyright": "Copyright (c) 2019 Pro Publica Inc. All Rights Reserved.",
   "results": [
      {
         "id": "K000210",
         "name": "Peter T. King",
         "first_name": "Peter",
         "middle_name": "T.",
         "last_name": "King",
         "suffix": null,
         "role": "Representative",
         "gender": "M",
         "party": "R",
         "times_topics_url": null,
         "twitter_id": "RepPeteKing",
         "facebook_account": "",
         "youtube_id": "RepPeterKing",
         "seniority": "28",
         "next_election": "2020",
         "api_uri": "https://api.propublica.org/congress/v1/members/K000210.json",
         "district": "2",
         "at_large": false
      }
   ]
}
```

#### News API

## Configuring Database

Stay Informed keeps a database of users and addresses to look up and store congressional districts. Use the following settings when configuring a PostgreSQL database.

_Note: Passwords are hashed using [bcrypt](https://www.npmjs.com/package/bcrypt) and base64_

### Table Settings

* After creating a PostreSQL database, create a table with name `user`
* Set the following properties on the table:

```
DROP TABLE IF EXISTS public."user";

CREATE TABLE public."user" (
	id serial NOT NULL,
	username text NOT NULL,
	"password" text NOT NULL,
	"name" text NOT NULL,
	address text NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id),
	CONSTRAINT user_username_key UNIQUE (username)
);

```


### Environmental Variable

In your `.env` file, save the database location as `DB_URL`

## Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```



## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests mode `npm test`

Run the migrations up `npm run migrate`

Run the migrations down `npm run migrate -- 0`
