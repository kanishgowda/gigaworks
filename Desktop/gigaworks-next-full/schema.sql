create extension if not exists "uuid-ossp";

create table if not exists gigs (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text,
  location text,
  pay text,
  description text,
  contact_email text not null,
  created_at timestamptz default now()
);

alter table gigs enable row level security;

create policy "Enable read access for all" on gigs for select using (true);
create policy "Enable insert for all" on gigs for insert with check (true);

-- Seed sample gigs
insert into gigs (title, category, location, pay, description, contact_email) values
('Poster Design for College Fest', 'Design', 'Remote', '₹1500 - ₹3000', 'Create a vibrant A3 poster for the upcoming college fest. Deliver in PNG + editable file.', 'fest@gigaworks.in'),
('Data Entry for Local Business', 'Operations', 'Bengaluru', '₹200/hour', 'Enter 500 customer records from receipts into Google Sheets. 1-2 days of work.', 'ops@gigaworks.in'),
('Event Photography (3 hrs)', 'Photography', 'Mumbai', '₹2500 fixed', 'Shoot a small community event. Need basic color correction and 20 best shots.', 'events@gigaworks.in')
on conflict do nothing;
