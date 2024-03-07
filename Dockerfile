# 使用 Node.js 官方镜像作为构建环境
FROM node:14 as build

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json（或 yarn.lock）
COPY package*.json ./
COPY yarn.lock ./

# 安装项目依赖
RUN yarn install

# 复制项目文件和文件夹到工作目录
COPY . .

# 构建应用
RUN yarn run build

# 使用 Node.js 镜像运行应用
FROM node:14

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

# 应用运行在 3000 端口
EXPOSE 3000

CMD ["node", "dist/main"]
