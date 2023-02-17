# Test Tecnique

## Contexte

Réalisation d'une API et d'un front en Node.JS et React.JS pour afficher les statistiques des joueurs de tennis.

Le projet entier n'est pas déployer et fonctionne en local, d'un côté avec `serverless-offline` sur le port 4000 et d'un autre côté le front sur le port 3000. Pour cela il vous faudra installer les dépendances de l'API et du Front.

## Installation

Récupérer le projet en faisant la commande `git pull` puis installer les différentes dépendances.

```
  cd /api && yarn install
  cd /front && yarn install
```

## API

Dans le dossier /api, vous trouverez une API réaliser avec la librairie **express.js**. Il y a deux routes :

- /players Permettant de récupérer les joueurs de tennis
- /players/:id Permettant de récupérer un seul joueur avec son détails.

Les tests unitaires sont présent dans le fichier **helpers.test.ts**.

### Commandes

Pour lancer le serveur d'API avec **serverless-offline**
`yarn start`

Déploiement du serveur (attention, il vous faudra un compte AWS)
`yarn deploy`

Pour lancer les tests unitaires
`yarn test`

## Front

Dans le dossier /front, vous trouverez un front réaliser avec React.JS en Typescript.

### Commandes

Pour lancer le serveur
`yarn start`
