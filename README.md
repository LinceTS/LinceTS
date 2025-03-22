# LinceTS
![](assets/Logo.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/CoderAnchel/Beehive.TS)

Lince is a modern TypeScript-based backend framework built on top of Node.js, inspired by the best features of NestJS and Spring Boot. Designed specifically for microservices and distributed systems, it aims to provide a scalable, efficient, and developer-friendly foundation for building cloud-native applications.

## 🚀 Features

- **Automatic Controller Conversion** 🔄 - Convert any class into a controller by simply adding decorators, with built-in JSON to class instance conversion using `class-validator`
- - **Comprehensive HTTP Method Support** 🌐 - Support for GET, POST, PUT, PATCH, DELETE, and dynamic handling of parameters and queries
- **First-Class ORM Support** 🗂️ - Built-in, opinionated ORM for TypeScript - [Lince BeeORM]((https://github.com/LinceTS/BeeORM))
<!-- 
- **Reactive & Event-Driven Architecture** 💨 - Seamless integration of RxJS-like features
- **Simplified Dependency Injection** 💉 - Intuitive and automatic DI for large-scale apps
- **Built-in Background Jobs & Task Scheduling** 🗓️ - Native support for workers and scheduling
- **Advanced Caching & Rate Limiting** ⏲️ - First-class support for Redis, Memcached
- **Enhanced Security Defaults** 🔐 - JWT, OAuth, CSRF protection out of the box
- **Zero-Config Scaffolding** ✅ - CLI-based automation for project generation
-->
- **Observability & Logging Built-in** 👀 - OpenTelemetry-based logging and tracing
- ****

## Working On ⚠️‼️

- **RPC Module with Reactive Features** 📡 - Robust RPC module with integrated reactive features for seamless communication
- **Discovery Service for Microservices** 🔍 - Advanced service discovery mechanism for microservices architecture

## 📋 Prerequisites

- Node.js (v16.x or higher)
- TypeScript (v4.x or higher)

## 🔧 Installation

```bash
# NPM
npm install beehive.ts

# Yarn
yarn add beehive.ts

# PNPM
pnpm add beehive.ts
```

## 🏁 Quick Start

```typescript
// app.ts
import { Aplication } from "./src/bootstrap/Application";
import { createContext } from "./src/bootstrap/AppContext";
import { Route, Get, Post, Put, Patch, Delete, Update } from "./src/common/decorators/RestDecorators";
import { Body, Param, Query } from "./src/common/decorators/ParamDecoratos";
import "reflect-metadata";
//if you want class conversion 
import { IsInt, IsString } from "class-validator";

class User {
    @IsInt()
    id: number

    @IsString()
    name: string
};

@Route("/test")
class controlador {
    @Get("/name")
    getName(@Param("tunombre") name: string, @Query("edad") edad: number) {
        return "Hola "+name+" Edad "+edad;
    }

    @Get("/testing")
    getTest(@Param("name") name: string, @Query("Edad") edad: number) {
        return `name ${name} edad ${edad}`;
    }

    @Post("/prueba")
    getPrueba(@Param("nombre") name: string, @Query("edad") edad: number, @Body("datos", User) data: User) {
        console.log(data);
        return "Hola muy buenas "+name+" edad "+edad;
    }

    @Post("/name2")
    getNamePost(@Param("tunombre") name: string, @Query("edad") edad: number, @Body("data", User) data: User) {
        console.log(data.name)
        return "Hola "+name+" Edad "+edad;
    }
};

```

## 📚 Documentation

Comprehensive documentation is coming soon. Stay tuned!

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/CoderAnchel/Beehive.TS.git
cd Beehive.TS

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests (when available)
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [NestJS](https://nestjs.com/) and [Spring Boot](https://spring.io/projects/spring-boot)
- Built with ❤️ by [Anchel Ascaso Castro](https://github.com/CoderAnchel)

## 📊 Project Status

LinceTS is currently in early development (v0.0.1). APIs might change as we progress toward a stable release.
