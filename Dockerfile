# 指定构建的基础镜像，版本根据项目需要更换
FROM node:16.20.2 AS builder

# 设置工作目录
WORKDIR /app

# 安装 Git
RUN apk add --no-cache git

# 从 Git 拉取前端代码
RUN git clone https://github.com/ccccchar/micro-demo.git /app && \
    cd /app && \
    git checkout main

# 安装依赖并编译前端代码
RUN npm install --production --registry=https://registry.npm.taobao.org && \
    lerna run build

# 构建 Nginx 镜像，版本根据项目需要更换
FROM nginx:latest

# 复制编译后的前端代码到 Nginx 静态资源目录
COPY --from=builder /app/packages/main-app/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]