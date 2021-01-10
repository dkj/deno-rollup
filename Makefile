.PHONY: build ci fmt fmt-check lint typedoc

FILES_TO_FORMAT = ./example/src ./example/rollup.build.ts ./example/rollup.config.ts ./mod.ts ./rollup-plugin-deno-resolver.ts

build:
	@deno run --unstable --reload mod.ts

ci:
	@make fmt-check
	@make lint
	@make build

fmt:
	@deno fmt $(FILES_TO_FORMAT)

fmt-check:
	@deno fmt --check $(FILES_TO_FORMAT)

lint:
	@deno lint --unstable $(FILES_TO_FORMAT)
