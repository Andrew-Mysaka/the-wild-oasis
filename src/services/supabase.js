import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eczlrzibstkthjfgjxej.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjemxyemlic3RrdGhqZmdqeGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5Mjg3NDEsImV4cCI6MjAxNjUwNDc0MX0.2F38-Jm2vwN6DNYazsJ4sxuXwndEHjdRGr0YRl7mXtY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

