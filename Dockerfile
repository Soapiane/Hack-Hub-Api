FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY config/ssl /app/config/ssl

# Install dependencies and NestJS CLI
RUN npm install -g @nestjs/cli
RUN npm install

# Copy source code
COPY . .

EXPOSE 3003

# Add wait-for script to check database availability
ADD https://raw.githubusercontent.com/eficode/wait-for/master/wait-for /wait-for
RUN chmod +x /wait-for

# Start in development mode
CMD ["npm", "run", "start"]