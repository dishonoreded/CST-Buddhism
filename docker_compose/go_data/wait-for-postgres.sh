#!/bin/sh
# wait-for-postgres.sh
#!/bin/sh
# wait-for-postgres.sh

set -e

cmd="$@"

until [ $(./containerdata/test) == 1 ]  ;do
  >&2 echo "Postgres is unavailable - sleeping"
  echo "$(./containerdata/test)"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd
