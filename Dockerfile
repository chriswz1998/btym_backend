FROM node:18-alpine AS builder

# 创建应用目录
WORKDIR /app

# 复制 package.json 和 yarn.lock 文件
COPY package.json ./
COPY yarn.lock ./

# 如果您使用 Prisma，并且在构建过程中需要执行数据库迁移
COPY prisma ./prisma/

# 安装应用依赖
RUN yarn install --frozen-lockfile

# 复制项目文件
COPY . .

# 构建应用
RUN yarn run build

# 生产环境
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制构建产物和 node_modules 到生产镜像
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

# 暴露应用的端口
EXPOSE 3100

# 定义环境变量，如果有的话
# ENV ...

# 启动应用
CMD [ "yarn", "start:prod" ]
