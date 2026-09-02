# Nearby Events

A polished weekly date-night planner for Brooklyn and Manhattan. The first product slice includes day and borough filters, saveable picks, and an instant plan for each event.

## Run locally

```bash
npm install
npm run dev
```

## Current data status

The site currently uses clearly labeled preview data so the product experience can be designed and tested without presenting invented listings as live events.

The next data milestone is a server-side aggregation layer with provider adapters (for example Ticketmaster Discovery, venue calendars, and manually curated neighborhood sources), normalization, deduplication, freshness timestamps, and outbound source links. No single provider covers every NYC event, so the UI should continue to show provenance and last-checked times once live sources are connected.

## Product direction

- Weekly date-night plans for Brooklyn and Manhattan
- Filters by date and borough
- Saveable shortlist
- Event-to-itinerary pairing
- Responsive, keyboard-friendly interface
