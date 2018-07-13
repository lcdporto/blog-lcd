#!/bin/bash

DOCKER_REPO=lcdporto/blog
HASHED=$(git log --pretty=format:'%h' -n 1 2>&1)
gatsby build
docker build -t $DOCKER_REPO:$HASHED .
docker push $DOCKER_REPO:$HASHED
