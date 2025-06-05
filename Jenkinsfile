pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerbuild = docker.build("rafdavis/guia-jenkins:${env.BUILD_ID}", '-f ./src/Dockerfile ./src')
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
            environment {
                tag_version = "${env.BUILD_ID}"
            }
            steps {
                withKubeConfig([credentialsId: 'kubeconfig']) {
                        sh "sed -i 's/{{tag}}/${tag_version}/g' ./k8s/"
                        sh 'kubectl apply -f ./k8s/'
                    }
                }
            }
        }
    }