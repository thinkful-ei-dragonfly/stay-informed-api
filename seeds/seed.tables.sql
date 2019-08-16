BEGIN;

TRUNCATE
  "user";

INSERT INTO "user" ("id", "username", "name", "password", "address")
VALUES
  (
    1,
    'admin',
    'Dunder Mifflin Admin',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG',
    '400 Fayetteville Street, Raleigh, NC, 27601'
  );

-- because we explicitly set the id fields
-- update the sequencer for future automatic id setting
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;