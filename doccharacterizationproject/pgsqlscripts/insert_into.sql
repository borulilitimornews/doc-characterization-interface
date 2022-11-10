-- Create a sequence, then used it in insert
/*
CREATE SEQUENCE newsid_sequence
  start 3097
  increment 1;
  */


-- Insert from timornews_news table
/*
insert into doccharacterizationapp_news(id, slug, title, content, status_id, lead)
select (nextval('newsid_sequence')), slug, title, content, cast(1 as bigint), lead from timornews_news
*/


select * from doccharacterizationapp_news
order by id desc