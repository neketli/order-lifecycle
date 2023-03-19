.PHONY: install
install:
	yarn
	cd modules/parser/ &&
	python3 -m venv venv &&
	source  ./venv/bin/activate &&
	pip install -r requirements.txt

.DEFAULT_GOAL := install