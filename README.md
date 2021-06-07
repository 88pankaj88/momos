Its not a production ready code from all angles. I have assumed it as design problem rather than finishing complete code.
The implementation of model depend on which primary database is chosen. So I have left the code blank in model files.
Assuming we are using Redis for session storage
Test cases and Comments over functions are not written,though they should be part of prod ready code.

Refer route/index.js  to see relevant routes
To run the code locally:
npm install
ENV=local npm app


Dockerfile is part of codebase. so docker container images can be made and run on other environments. This will run multiple instances of application managed by pm2.
