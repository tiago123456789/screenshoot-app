ABOUT PROJECT:
===============
- The project to understand how to work feature the screenshot after deploy in vercel.

INSTRUCTIONS RUNNING PROJECT:
=============================
- Clone project
- Execute command: **npm i** this command install packages necessaries project running.
- Create file **.env** based file **.env.example**
- Execute command: **npm run start:dev** this command running application
- After run command above is avalibility route **localhost:3000/api/screenshoots**
    - Example: 
    ```

    curl -d '{"domain": "https://www.youtube.com/watch?v=ejIEawwx2DQ" }' -H "Content-Type: application/json" -X POST localhost:3000/api/screenshoots

    ```    
