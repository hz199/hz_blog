#!/usr/bin/env sh

# 终止一个错误
set -e
# 构建
npm run build

# 复制CNAME文件
cp ./CNAME docs/.vuepress/dist

# 进入生成的构建文件夹
cd docs/.vuepress/dist

# echo -n "输入commit消息:"
# read name

git init
git add -A
git commit -m "init project"

git push -f git@github.com:hz199/relearningFE.git master

cd -