def buildImage(name,path){
    return docker.build("${name}", "${path}")
}

pipeline {
    agent any
    stages {
        stage('Run Builds'){
            parallel {
                stage('Build Frontend') {
                    steps {
                        script{
                              /**build Frontend image**/
                              dir('frontend'){
                                buildImage('frontend','.')
                              }
                        }
        
                    }
                }

                stage('Build Backend') {
                    steps {
                        script{
                              /**build Python image**/
                              //buildImage('api','${env.WORKSPACE}/api')
                              dir('api'){
                                buildImage('api','.')
                              }
                        }
        
                    }
                }
            }
        }
    }
}

