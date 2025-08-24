# Makefile — simple helpers to run the `site/` directory with nginx in Docker
# Usage:
#   make run     # start container (http://localhost:8080)
#   make stop    # stop and remove container
#   make logs    # follow container logs
#   make status  # show container status

CONTAINER_NAME := zeroone-site
PORT := 8080
IMAGE := nginx:stable-alpine


.PHONY: run stop logs status clean
.DEFAULT_GOAL := run

run:
	@echo "Starting $(CONTAINER_NAME) -> http://localhost:$(PORT)"
	-@docker rm -f $(CONTAINER_NAME) >/dev/null 2>&1 || true
	@docker run -d --name $(CONTAINER_NAME) -p $(PORT):80 \
		-v "$(PWD)/site:/usr/share/nginx/html:ro" $(IMAGE)

stop:
	@docker rm -f $(CONTAINER_NAME) >/dev/null 2>&1 || true

logs:
	@docker logs -f $(CONTAINER_NAME)

status:
	@docker ps --filter "name=$(CONTAINER_NAME)" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

clean: stop
