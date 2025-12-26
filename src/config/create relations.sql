CREATE TABLE admin_users (
	id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	username varchar(31) NOT NULL UNIQUE,
	password_hash text NOT NULL,
	created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
	is_active boolean DEFAULT true NOT NULL
);

CREATE TABLE books (
	id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	isbn varchar(31) NOT NULL UNIQUE,
	created_by_admin_id integer NOT NULL
		REFERENCES admin_users(id),
	language varchar(31),
	publisher varchar(63),
	title varchar(63) NOT NULL,
	subtitle varchar(127),
	summary text,
	edition smallint,
	year smallint,
	created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
	updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE book_images (
	id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	book_id integer NOT NULL
		REFERENCES books(id)
		ON DELETE CASCADE,
	file_code varchar(63) NOT NULL UNIQUE,
	sort_order smallint NOT NULL,
	UNIQUE (book_id, sort_order)
);

CREATE TABLE authors (
	id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name varchar(63) NOT NULL,
	birth_year smallint,
	death_year smallint,
	country varchar(31),
	wikipedia_url varchar(127)
);

CREATE TABLE book_authors (
	author_id integer NOT NULL
		REFERENCES authors(id)
		ON DELETE CASCADE,
	book_id integer NOT NULL
		REFERENCES books(id)
		ON DELETE CASCADE,
	PRIMARY KEY (author_id, book_id)
);

CREATE TABLE categories (
	id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name varchar(31) NOT NULL UNIQUE
);

CREATE TABLE book_categories (
	book_id integer NOT NULL
		REFERENCES books(id)
		ON DELETE CASCADE,
	category_id integer NOT NULL
		REFERENCES categories(id)
		ON DELETE CASCADE,
	PRIMARY KEY (book_id, category_id)
);

CREATE INDEX idx_books_created_by ON books(created_by_admin_id);
CREATE INDEX idx_book_images_book ON book_images(book_id);
CREATE INDEX idx_book_authors_book ON book_authors(book_id);
CREATE INDEX idx_book_authors_author ON book_authors(author_id);
CREATE INDEX idx_book_categories_book ON book_categories(book_id);
CREATE INDEX idx_book_categories_category ON book_categories(category_id);
