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

We have integrated the newsapi node package as part of this project. It uses the names of each returned
representative to query a wide array of news sources

For example:
Top headlines about Kamala Harris

`GET https://newsapi.org/v2/top-headlines?q=Kamala%20Harris&apiKey=${API_KEY}`


Response: 
```
{
    "status": "ok",
    "totalResults": 6600,
    "articles": [
        {
            "source": {
                "id": "the-new-york-times",
                "name": "The New York Times"
            },
            "author": null,
            "title": "What Does Kamala Harris Stand For?",
            "description": "As the Democratic senator emerges as a leading presidential contender, her vision for the country has remained difficult to define.",
            "url": "https://www.nytimes.com/2019/07/31/podcasts/the-daily/kamala-harris.html",
            "urlToImage": "https://static01.nyt.com/images/2019/07/31/business/31DAILY/31DAILY-facebookJumbo.jpg",
            "publishedAt": "2019-07-31T10:11:53Z",
            "content": "Alexander Burns contributed reporting.\r\nThe Daily is made by Theo Balcomb, Andy Mills, Lisa Tobin, Rachel Quester, Lynsea Garrison, Annie Brown, Clare Toeniskoetter, Paige Cowett, Michael Simon Johnson, Brad Fisher, Larissa Anderson, Wendy Dorr, Chris Wood, J… [+338 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Josh Ocampo",
            "title": "How to Watch the Presidential Democratic Debates Tonight",
            "description": "Tonight, the second round of Presidential Democratic debates kicks off in Detroit, with top-polling candidates including Vermont Senator Bernie Sanders, South Bend Mayor Pete Buttigieg, and Massachusetts Senator Elizabeth Warren taking the stage. Meanwhile, f…",
            "url": "https://lifehacker.com/how-to-watch-the-presidential-democratic-debates-tonigh-1836733018",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--Ra0OVDbn--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/x6bibug0bw0i4o6pie8w.jpg",
            "publishedAt": "2019-07-30T13:00:00Z",
            "content": "Tonight, the second round of Presidential Democratic debates kicks off in Detroit, with top-polling candidates including Vermont Senator Bernie Sanders, South Bend Mayor Pete Buttigieg, and Massachusetts Senator Elizabeth Warren taking the stage. Meanwhile, f… [+1827 chars]"
        },
        {
            "source": {
                "id": "the-new-york-times",
                "name": "The New York Times"
            },
            "author": "Inyoung Kang",
            "title": "Sausalito Marin City Schools to Desegregate After State Inquiry",
            "description": "Monday: Also, Kamala Harris pivots to Iowa, and a former inmate runs to put San Quentin behind him.",
            "url": "https://www.nytimes.com/2019/08/12/us/sausalito-marin-school-segregation.html",
            "urlToImage": "https://static01.nyt.com/images/2019/08/09/us/12caltoday-sausalito/merlin_153657105_c2c3830d-0274-4d8a-98a0-e37e4c6bdd00-facebookJumbo.jpg",
            "publishedAt": "2019-08-12T12:47:23Z",
            "content": "Depriving a child of a fair chance to learn is wicked, its warped, its morally bankrupt, and its corrupt, Attorney General Xavier Becerra said on Friday. Your skin color or ZIP code should not determine winners and losers.\r\n[See our correspondents full story … [+1449 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Kamala Harris reacts to Biden's remark",
            "description": "Senator Kamala Harris (D-CA) reacts to former Vice President Joe Biden telling her \"Go easy on me, kid\" during the CNN Democratic debate.",
            "url": "https://www.cnn.com/videos/politics/2019/07/31/kamala-harris-reacts-to-biden-go-easy-on-me-kid-cnn-democratic-debate-vpx.cnn",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190801000438-kamala-harris-post-debate-super-tease.jpg",
            "publishedAt": "2019-08-01T04:17:07Z",
            "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds."
        }
	]
}
```

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
