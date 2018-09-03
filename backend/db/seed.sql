DROP DATABASE IF EXISTS sourcey;
CREATE DATABASE sourcey;

\c sourcey;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(12) UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  image_url VARCHAR
);

CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  description TEXT
);

CREATE TABLE modules (
  id SERIAL PRIMARY KEY,
  title VARCHAR(40) NOT NULL,
  group_id INTEGER REFERENCES groups(id) NOT NULL,
  description TEXT,
  is_private BOOLEAN NOT NULL
);

CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  title VARCHAR(60) NOT NULL,
  module_id INTEGER REFERENCES modules(id) NOT NULL,
  description TEXT
);

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(60) NOT NULL,
  topic_id INTEGER REFERENCES topics(id) NOT NULL
);

CREATE TABLE sections (
  id SERIAL PRIMARY KEY,
  title VARCHAR(60) NOT NULL,
  article_id INTEGER REFERENCES articles(id) NOT NULL,
  section_text TEXT NOT NULL,
  video_url VARCHAR
);

CREATE TABLE collaborations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  group_id INTEGER REFERENCES groups(id) NOT NULL,
  approved BOOLEAN NOT NULL,
  is_admin BOOLEAN NOT NULL
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  tag VARCHAR NOT NULL
);

CREATE TABLE taggings (
  id SERIAL PRIMARY KEY,
  tag_id INTEGER REFERENCES tags(id) NOT NULL,
  module_id INTEGER REFERENCES modules(id) NOT NULL
);

INSERT INTO users (username, password_digest)
  VALUES ('Reed', 'password'), ('Joe', 'password');
