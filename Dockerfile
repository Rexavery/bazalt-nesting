# Étape 1 : Build de l'application
FROM node:20-alpine AS builder

# Répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires à l'installation
COPY package*.json ./

# Installer uniquement les dépendances de production (plus rapide et léger)
RUN npm ci --only=production --prefer-offline --no-audit

# Copier tout le reste du projet
COPY . .

# Build de l'application (si applicable, ex: NestJS)
RUN npm run build


# Étape 2 : Image finale, plus légère
FROM node:20-alpine

# Répertoire de travail
WORKDIR /app

# Copier les fichiers depuis l'étape précédente
COPY --from=builder /app ./

# Exposer le port (change si nécessaire)
EXPOSE 3000

# Commande de démarrage
CMD ["node", "dist/main.js"]
