#!/bin/bash
cd /home/ubuntu/rustywager-api-main/client
npm run build
cd /var/www
sudo rm -r rustywager.com
sudo mkdir rustywager.com
cd /home/ubuntu/rustywager-api-main/client
sudo cp -r build/* /var/www/rustywager.com
cd /var/www/rustywager.com/static/css
sudo rm -r *.map
cd /var/www/rustywager.com/static/js
sudo rm -r *.js.map
echo "Build script completed successfully!"
