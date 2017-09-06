# event-machine-graphql-sample

This repository contains some sample code of a basic GraphQL server sitting on top of event machines aggregate-projection.
This code is just a showcase and therefore neither save nor optimized.

## Usage

Clone the repository and run the following command to start it using a docker container.
```
docker run -it --rm --name yarn -v "$PWD":/usr/src/app -w /usr/src/app -p 4000:4000 --network=eventmachineskeleton_default node:latest yarn start
```
You might need to change the `--network=eventmachineskeleton_default`. 
Its usually the folder name of your event-machine application followed by `_default` 
(You can look it up using `docker network ls`).
