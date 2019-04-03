Running code
------------
First, make a .env with a variable called TIMEDIFF. The excel-to-json package seems to parse date objects differently on different platforms. So far, on windows and mac it seems that the dates being returned are off by 23 hours, and on linux 24. For the purposes of our timetrackers that means that an activity of 00:12 would be parsed as 23:12 on windows and mac and 24:12 on linux. So for windows/mac set TIMEDIFF to 23 and linux set it to 24. 

To test server only: npm run startServerOnly
    go to localhost:3001 and either click on the green box or drag an xlsx file into it and hit submit, check console for response.

To test full-stack: npm start


Using the app
-------------
1) Either drag/drop a timetracker xlsx file into the box on the page, or click on it to bring up the file selector. 
2) Hit submit to get a list of possible sheets.
3) Select a sheet and click Go!
4) The buttons on the right of the activities can be used to either mark an activity to be skipped, or move them up or down to rearrange as your class is needed. 
5) The buttons at the top can be used to start the timer (play button), stop a running timer (stop button), or move on to the next activity if you finish early (skip button). 
6) To the left of the control bar is the time remaining in the activity, and to the right will be the expected end of class.

API
--------------
    POST: "/api/parsexlsx"
        To parse an xlsx file, make a post request to this url with the file in the body.

TODO LIST
----------

Front end:

    MVP:
        * Upload file to server - DONE
        * Pass data from upload page to timetracker page - DONE
        * Display list of activitys - DONE
        * Create timer - DONE
        * Change color of activities as they are passed - DONE
        * Update uploader to reflect a chosen file - DONE
        * Add a landing page with instructions.
        * Find a nicer theme. Current color scheme = ugh.
    Nice to haves:
        * Rearrange activities - DONE
        * Delete (maybe a checkbox to skip it? that way it can be unchecked if they change their mind) activities - DONE
        * play ding sound as activity is passed DONE
        * Skip activity button in controlbar - DONE
        * Nicer navbar
        * ETA to end of class - DONE

Back End:

    MVP: 
        * Parse xlsx files - DONE
        * Create api route to upload and parse xlsx files - DONE
    Nice to Haves:
        * Choose which sheet to parse - DONE 
