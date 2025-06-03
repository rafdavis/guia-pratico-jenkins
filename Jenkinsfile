pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerbuild = docker.build("ricardodavis/guia-pratico-jenkins:${env.BUILD_ID}", '-f src/Dockerfile ./src')
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        dockerbuild.push('latest')
                        dockerbuild.push("${env.BUILD_ID}")
                     }
                }
            }
        }

        stage('Deploy no Kubernetes') {
            steps {
                sh 'echo "Executando comando kubectl apply'
            }
        }
    }
}