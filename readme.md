This is a fun personal project. ignore this if you're here from linkedin or something 💀🙏
## Notes
- Integrated Firebase Realtime Database for real-time reviews.
- Review system simplified: only anonymous text reviews, no name or rating. (if needed, revert to 'firebase integration ws' commit)
- Reviews now appear with the newest at the bottom (appendChild).
- User may want to temporarily hide the reviews section via HTML comments. ('Reviews Container')

## Task List
- [x] Add Firebase scripts and initialize with project config
- [x] Replace static reviews with real-time reviews from Firebase
- [x] Remove name and rating fields; make reviews anonymous
- [x] Ensure reviews display in order: oldest at top, newest at bottom
