.PHONY: push
aws:
	cd /Users/surendrakandel/documents/aws-keys && ssh -i "new-web-server-ec2.pem" ec2-13-52-6-115.us-west-1.compute.amazonaws.com
	cd ../projects/web

deploy:
	rm -rf ./svelte-kit
	rm -rf build
	git stash
	git pull origin main
	npm run build
	npm run preview
push:
	git add .
	git commit -m 'updates'
	git push origin main
