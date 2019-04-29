#!/bin/bash
source artifacts
export OS_AUTH_TOKEN=`curl -s -k -D - -L -H "Content-Type: application/json" -d '{ "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "name": "'$OS_PROJECT_DOMAIN_NAME'" }, "password": "'$OS_PASSWORD'" } } } } }' ${OS_AUTH_URL}/auth/tokens  | grep X-Subject-Token | sed 's/X-Subject-Token:\s*//'`
export openstack_token=${OS_AUTH_TOKEN}
echo export openstack_token=${OS_AUTH_TOKEN}
