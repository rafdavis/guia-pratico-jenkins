pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            sh 'echo "Executando o comando Docker build"'
        }

        stage('Push Docker Image') {
            sh 'echo "Executando o comando Docker push"'
        }

        stage('Deploy no Kubernetes') {
            sh 'echo "Executando o comando kubectl apply"'
        }
    }
}