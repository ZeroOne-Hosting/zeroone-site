# Makefile — simple helpers to run the `site/` directory with nginx in Docker
# Usage:
#   make run     # start container (http://localhost:8080)
#   make stop    # stop and remove container
#   make logs    # follow container logs
#   make status  # show container status

CONTAINER_NAME := zeroone-site
PORT := 8080
IMAGE := nginx:stable-alpine

# Convert Make's CURDIR (which uses backslashes on Windows) to forward-slash form
# so Docker receives a usable path when running on Windows hosts.
HOST_SITE := $(subst \\,/,$(CURDIR))/site
HOST_SITE2 := $(subst \\,/,$(CURDIR))/site2


.PHONY: run stop logs status clean
.DEFAULT_GOAL := run

run: stop
	@echo "Starting $(CONTAINER_NAME) -> http://localhost:$(PORT)"
	@docker run -d --name $(CONTAINER_NAME) -p $(PORT):80 \
		--mount type=bind,source="$(HOST_SITE)",target=/usr/share/nginx/html,readonly $(IMAGE)


stop:
	@docker rm -f $(CONTAINER_NAME) >/dev/null 2>&1 || true

logs:
	@docker logs -f $(CONTAINER_NAME)

status:
	@docker ps --filter "name=$(CONTAINER_NAME)" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

clean: stop
