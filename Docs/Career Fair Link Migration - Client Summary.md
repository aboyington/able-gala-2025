# Career Fair Link Migration – Client Summary

Purpose: keep the previously shared (shortened) link working after the old website was taken offline.

What happened
- The former website ran on Joomla and was compromised. To protect ABLE and visitors, that system was taken offline.
- The old link people received (via a URL shortener) pointed to a Joomla page: https://ableorg.ca/index.php/event-calendar#id=113&cid=1852&wid=801
- Because the Joomla site is no longer active, that exact page cannot be re‑enabled.

What we built instead
- We created a new Events Calendar page in the rebuilt site: /events/index.html
- This page shows the ABLE event calendar (including the 2025 ABLE Career Fair) and is part of the new, secure site.

How we kept the old, shortened link working
- We added a very small “bridge” page at https://ableorg.ca/index.php/event-calendar
- When someone visits the old link, the bridge immediately takes them to the new Events Calendar page on the rebuilt site.
- The bridge also carries over the event details from the link (everything after the “#”), so it lands on the correct Career Fair view without the user doing anything.
- If a browser has JavaScript turned off, the page still forwards after a brief pause, so visitors aren’t stuck.

What this means for you
- You DO NOT need to change the URL shortener that was already sent to the public.
- Visitors using that link will reach the new Events Calendar and see the 2025 ABLE Career Fair as intended.

Future notes
- The new /events/index.html page is now the official place for the calendar.
- In future campaigns, you can shorten and share the new /events/ link directly. The current bridge can remain in place for as long as needed.
