-- Fix security warnings

-- 1. Restrict EXECUTE on has_role function to authenticated users only
REVOKE ALL ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated;

-- 2. Fix storage policy to prevent listing all files
DROP POLICY IF EXISTS "Anyone can view report images" ON storage.objects;
CREATE POLICY "Anyone can view report images"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'report-images' AND (storage.foldername(name))[1] = auth.uid()::text OR public.has_role(auth.uid(), 'agent'));

-- 3. Allow anon to execute has_role but only for authenticated context
REVOKE ALL ON FUNCTION public.has_role(UUID, public.app_role) FROM anon;