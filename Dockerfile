# 使用兼容 @prisma/client 要求的 Node.js 版本
FROM node:latest as build

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 yarn.lock 文件
COPY package.json ./
COPY yarn.lock ./

# 安装依赖
RUN yarn install

# 复制项目文件
COPY . .

# 构建应用
RUN yarn build

# 运行阶段，也使用兼容的 Node.js 版本
FROM node:latest

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

EXPOSE 1998

CMD ["node", "dist/main"]
