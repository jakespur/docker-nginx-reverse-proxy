# Overview

  Docker NGINX reverse proxy that removes the top level path (/au or /nz) and passes the remaining uri to the underlying node express server

  It also passes a special header "Distribution-Channel" with either au or nz as the value depending on where you have come in from

  E.g.

  /au -> maps to the index in express

  /nz -> maps to the index in express

  /nz/about-you -> maps to /about-you

# Prerequisites

docker installed

# To run

    npm i
    npm start

# To test

   curl http://localhost:8080/nz

   You should see Hello your distribution channel is au

   curl http://localhost:8080/nz

   You should see Hello your distribution channel is nz
