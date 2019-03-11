Running code
------------
To test server only: npm run startServerOnly
    go to localhost:3001 and either click on the green box or drag an xlsx file into it and hit submit, check console for response.
to test full-stack: npm start

TODO LIST
----------

Front end:

    MVP:
        * Upload file to server
        * Display list of activitys
        * Create timer
        * Change color of activities as they are passed
    Nice to haves:
        * Rearrange activities
        * Delete (maybe a checkbox to skip it? that way it can be unchecked if they change their mind) activities
        * play ding sound as activity is passed

Back End:

    MVP: 
        * Parse xlsx files - DONE
        * Create api route to upload and parse xlsx files - DONE
    Nice to Haves:
        * Choose which sheet to parse - DONE (pass query parameter sheet with number)


API: 

    POST: "/api/parsexlsx?sheet=SHEETNUM"
        To parse an xlsx file, make a post request to this url with the file in the body and the sheet number to parse. default sheet number is 1.
