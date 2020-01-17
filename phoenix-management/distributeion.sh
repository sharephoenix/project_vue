#!/bin/bash
npm run build
echo "========== 开始打包 docker =========="
docker build -t luanys/blog:1.0.1 .
echo "========== 开始推送 docker 到远端 =========="
docker push luanys/blog:1.0.1
echo "========== end =========="