--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-08-08 00:25:49.963668'::timestamp without time zone NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-08-08 00:25:49.963668'::timestamp without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "userId", url, "shortUrl", "visitCount", "createdAt") FROM stdin;
5       34      jorge.coms      Znj8T3Om        0       2022-08-08 00:25:49.963668
10      34      jorge.cosms     5BbBSL7G        0       2022-08-08 00:25:49.963668
13      34      teste.com       XCFIXGXU        0       2022-08-08 00:25:49.963668
14      34      teste2.com      ESOPcAQj        0       2022-08-08 00:25:49.963668
15      34      teste3.com      wT2KqAc0        0       2022-08-08 00:25:49.963668
17      34      teste4.com      mK-T2muM        0       2022-08-08 00:25:49.963668
18      34      teste5.com      P0UdeowR        0       2022-08-08 00:25:49.963668
26      34      teste6.com      7bS0hWwy        0       2022-08-08 00:25:49.963668
30      34      Jorge   _2irguuL        0       2022-08-08 00:25:49.963668
31      34      https://www.google.com  dVGNOPkM        13      2022-08-08 00:25:49.963668
29      34      google.com      dD6SMEUq        1       2022-08-08 00:25:49.963668
28      34      teste67.com     mw8mHjKX        1       2022-08-08 00:25:49.963668
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1       Lucas P B S Palharini   lucas@lu.com    $2b$10$N1c.m.UUaiQtZK7P34Ct3OITmk9Nsi3fJb7XmoDEQWNFKPfHcRRN6    2022-08-08 00:25:49.963668
4       Lucas Pedro     lucas@lucas.com $2b$10$2fiRuYNZ8xbroQu2a.tQ/e1ynDzhQpIsWCv9y6wOWn2UQNh.ZkTGi    2022-08-08 00:25:49.963668
14      Jujuca Pedro    pedro@lucas.com $2b$10$60pOgf2hISPLu7yFG3K3kOtOJYn0kmGiD9YMiHW1Rj1Jx1XS.Okqm    2022-08-08 00:25:49.963668
16      Cajuca Jucaju   pedro@pedro.com $2b$10$nR65bebxkY0AP0p5O.X8geB3XYApj03pf42vGkae8oqVPpVxKrWi6    2022-08-08 00:25:49.963668
17      Nelson  nel@son.com     $2b$10$2wX4S4.O26C8D1LMpR3MMuTRsonm7InxiC0nTLvJ7IhoPLdk5s8um   2022-08-08 00:25:49.963668
34      Jorge   Hard@core.com   $2b$10$N/B2OSfsvfz5iwmD1JtN4u/yFjj7qF5XiafxyK4CQzm.rlXDtYG1a   2022-08-08 00:25:49.963668
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 33, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 36, true);


--
-- Name: urls urls_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pk PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: urls urls_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--