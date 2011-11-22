both: server client

server:
	node server.js &

client:
	node client.js &

stop: kill

kill:
	killall node

.PHONY: both server client stop kill
