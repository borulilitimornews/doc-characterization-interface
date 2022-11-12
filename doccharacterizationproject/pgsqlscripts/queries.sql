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

/*
update doccharacterizationapp_news
set id = id - 1
where id = 3097

update doccharacterizationapp_news
set docno = 'BTN02-' || id 	-- concatenate
where length(docno) = 0

update doccharacterizationapp_news
set url = 'https://www.timornews.tl/notisia/' || url
where length(docno) = 0

update 
	doccharacterizationapp_news 
set 
	url = replace(url, 'https://www.timornews.tl/notisia/', '') 	-- replace
where length(docno) = 0


delete from doccharacterizationapp_news  -- delete (from TN Old) duplicate news
where title in
(
select title from doccharacterizationapp_news
group by title
having count(*) > 1
) and url like 'http://www.old.timornews.tl/TL/Notisia%'

*/