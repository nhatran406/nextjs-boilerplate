#!/bin/bash

set -eu

ENV_JSON=$(env | grep '^NEXT_*' | jq -c '. | split("\n") | map(select(. != "")) | map(split("=") | { (.[0]) : .[1] }) | reduce .[] as $item ({}; . * $item)' -R -s)
ESCAPED_ENV_JSON=$(echo $ENV_JSON | sed 's/\"/\\\"/g' | sed 's/\//\\\//g' | tr -d '\n' | tr -d '[[:blank:]]')

for i in *.html; do
   sed -i 's/%NEXT_ENV%/'"$ESCAPED_ENV_JSON"'/g' '/app/build/'$i
done

exec "$@"
