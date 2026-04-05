# Makefile for site

.PHONY: build
build: ai.robots.txt
	deno run lume
	cat ai.robots.txt >> _site/robots.txt

.PHONY: serve
serve:
	deno run lume -s

.PHONY: clean
clean:
	rm -rf _site ai.robots.txt

.PHONY: publish
publish: build
	ssh blog rm -rf /var/www/_blog_new /var/www/blog_new
	ssh blog mkdir /var/www/_blog_new
	(cd _site; tar cz .;) | ssh blog 'cd /var/www/_blog_new; tar xvz;'
	ssh blog ln -s /var/www/_blog_new /var/www/blog_new
	ssh blog mv -T /var/www/blog_new /var/www/blog
	ssh blog rm -rf /var/www/_blog
	ssh blog cp -r /var/www/_blog_new /var/www/_blog
	ssh blog ln -s /var/www/_blog /var/www/blog_new
	ssh blog mv -T /var/www/blog_new /var/www/blog
	ssh blog rm -rf /var/www/_blog_new

.PHONY: ai.robots.txt
ai.robots.txt:
	curl -L https://github.com/ai-robots-txt/ai.robots.txt/raw/refs/heads/main/robots.txt -o ai.robots.txt
	echo >> ai.robots.txt
