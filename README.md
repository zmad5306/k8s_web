# K8sWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker Commands

`docker build -t zmad5306/k8s-web:latest .`

`docker push zmad5306/k8s-web:latest`

## Kubernetes Commands

`kubectl delete deployment k8s-web-deployment`

`kubectl apply -f k8s/deploy.yml`

`kubectl apply -f k8s/svc.yml`
