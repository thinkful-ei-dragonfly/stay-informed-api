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
