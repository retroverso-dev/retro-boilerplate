# retro-boilerplate

Fivem Script Boilerplate

## Estrutura de pastas:

```
resource/
|
├── fxmanifest.lua
├── web/
│   ├── //react project
│   ├── dist
│   └── ...
├── src/
│   ├── client/
│   │   ├── core
│   │   ├── modules
│   │   └── services
│   ├── server/
│   │   ├── core
│   │   ├── modules
│   │   └── services
│   └── shared/
│       ├── utils
│       └── config/
│           └── config.lua
└── locales/
    ├── pt-br.json
    ├── en.json
    ├── es.json
    ├── ch.json
    ├── pt.json
    ├── ru.json
    └── ...
```

### Entendendo a estrutura

**Modules:**

- Contém os módulos principais do script, como por exemplo: `garage`, `inventory`, `job`, etc.
- Cada módulo é responsável por uma funcionalidade específica do script.

**Services:**

- Código Reutilizável que pode ser utilizado por vários módulos, como por exemplo: `database`, `player`, `cache`, `api`, `utils`, etc.

**Core:**

- Só inicializa eventos e injeta dependências.
