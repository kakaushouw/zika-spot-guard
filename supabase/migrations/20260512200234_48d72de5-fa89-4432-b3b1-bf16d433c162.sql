-- Fix search_path on update_updated_at_column trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = public;

-- Mark has_role as intentionally public for RLS use via security memory
-- The has_role function MUST remain SECURITY DEFINER to prevent RLS recursion
-- when checking roles within RLS policies themselves