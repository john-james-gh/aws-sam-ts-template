# 🦄 AWS SAM Template for Node.js + TypeScript Lambda

Welcome to the **AWS SAM TypeScript Lambda Template**. A clean, modern starting point for building AWS Lambda functions with Node.js and TypeScript, powered by the **AWS Serverless Application Model (SAM)**. 🚀

This template helps you quickly spin up serverless projects with best practices baked in: strict type checking, linting, testing, and formatting included.

---

## ⚡️ Features

✅ AWS SAM-based Lambda setup  
✅ TypeScript for type safety and modern development  
✅ 🪵 [Pino](https://github.com/pinojs/pino) for fast, structured logging  
✅ 🏗️ [esbuild](https://esbuild.github.io/) for super-fast builds  
✅ ✅ Jest testing with TS + globals support  
✅ ESLint + Prettier for clean, consistent code  
✅ Handy scripts for linting, formatting, testing, and type-checking

---

## 🛠️ Getting Started

### 📦 Build the project
```bash
sam build
```

### 🧪 Local invoke your function
```bash
sam local invoke MyTemplateGetAllFunction --event events/get-all-event.json
```

### 🌐 Remote invoke your function
```bash
sam remote invoke MyTemplateGetAllFunction --stack-name aws-sam-ts-template
```

### 🚀 Start the local API Gateway
```bash
sam local start-api
```

### ✅ Validate the SAM template
```bash
sam validate --lint
```

### 📤 Deploy the stack (guided mode)
```bash
sam deploy --guided
```

---

## 🧹 Available NPM Scripts

| Script           | Purpose                                 |
|------------------|-----------------------------------------|
| `npm run type-check` | Run TypeScript strict type checking       |
| `npm run lint`        | Lint code with ESLint (auto-fix enabled)  |
| `npm run test`        | Run tests with Jest                      |
| `npm run format`      | Format codebase with Prettier            |

---

## 📂 Project Structure

```
├── events/                 # Sample event payloads for testing
├── src/                    # Lambda function source code
├── tests/                  # Unit tests
├── template.yaml           # AWS SAM template definition
├── samconfig.toml          # Deployment configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint config
├── jest.config.js          # Jest config
├── .prettierrc             # Prettier config
```

---

## 🚀 Why Use This Template?

> 💡 "Don't reinvent the wheel — but make sure your wheel isn't square."


✅ Modern tooling  
✅ Fast feedback loop  
✅ Clean DX (Developer Experience)

---

## 📜 License

MIT @ John James

---

> _"Horses don’t stop, they keep goin’."_ 🐎
