# LinceTS
![](assets/Logo.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/CoderAnchel/Beehive.TS)

Lince is a modern TypeScript-based backend framework built on top of Node.js, inspired by the best features of NestJS and Spring Boot. Designed specifically for microservices and distributed systems, it aims to provide a scalable, efficient, and developer-friendly foundation for building cloud-native applications.

## 🚀 Features

- **First-Class ORM Support** 🗂️ - Built-in, opinionated ORM for TypeScript
- **Reactive & Event-Driven Architecture** 💨 - Seamless integration of RxJS-like features
- **Simplified Dependency Injection** 💉 - Intuitive and automatic DI for large-scale apps
- **Built-in Background Jobs & Task Scheduling** 🗓️ - Native support for workers and scheduling
- **Advanced Caching & Rate Limiting** ⏲️ - First-class support for Redis, Memcached
- **Enhanced Security Defaults** 🔐 - JWT, OAuth, CSRF protection out of the box
- **Zero-Config Scaffolding** ✅ - CLI-based automation for project generation
- **Observability & Logging Built-in** 👀 - OpenTelemetry-based logging and tracing

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
import { BeeHive, Controller, Get } from 'beehive.ts';

@Controller('/hello')
class HelloController {
  @Get('/')
  sayHello() {
    return { message: 'Hello, Beehive!' };
  }
}

const app = new BeeHive()
  .addController(HelloController)
  .start(3000);

console.log('Server running on http://localhost:3000');
```

## 📚 Documentation

Comprehensive documentation is coming soon. Stay tuned!

## 🧪 Examples

Check the [examples](./examples) directory for sample applications built with Beehive.TS.

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
