-------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION npt_delete_node (IN nid integer)
  RETURNS void LANGUAGE plpgsql VOLATILE AS
$BODY$
 BEGIN
DELETE
  FROM node_path npt
 WHERE npt.node_id = nid;
   END
$BODY$;

ALTER FUNCTION public.npt_delete_node (IN bid integer)
  OWNER TO webed;

-------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION npt_delete_base (IN bid integer)
  RETURNS void LANGUAGE plpgsql VOLATILE AS
$BODY$
 BEGIN
DELETE
  FROM node_path npt
 WHERE npt.base_id = bid;
   END
$BODY$;

ALTER FUNCTION public.npt_delete_base (IN bid integer)
  OWNER TO webed;

-------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION npt_delete_full ()
  RETURNS void LANGUAGE plpgsql VOLATILE AS
$BODY$
 BEGIN
DELETE
  FROM node_path npt;
   END
$BODY$;

ALTER FUNCTION public.npt_delete_full ()
  OWNER TO webed;

-------------------------------------------------------------------------------