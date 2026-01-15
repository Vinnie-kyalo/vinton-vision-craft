-- Add a policy to prevent public reading of contact submissions
-- Only authenticated users with admin role can read submissions
-- For now, we'll restrict all SELECT access since there's no admin system yet

CREATE POLICY "No public read access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);

-- Note: When an admin system is implemented, this policy should be updated to:
-- USING (auth.role() = 'authenticated' AND has_admin_role(auth.uid()))