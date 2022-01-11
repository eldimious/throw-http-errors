BIN = ./node_modules/.bin
TESTS = tests/**/*.test.ts
MOCHA_OPTS = -b --timeout 15000 --reporter spec

test: lint
	@echo "Testing..."
	@NODE_ENV=test $(BIN)/ts-mocha $(TESTS)
test-cov: lint
	@echo "Testing..."
	@NODE_ENV=test $(BIN)/istanbul cover $(BIN)/ts-mocha -- $(MOCHA_OPTS) $(TESTS)
test-coveralls: test-cov
	@cat ./coverage/lcov.info | $(BIN)/coveralls --verbose
.PHONY: lint test test-cov test-coveralls
