def buildImage(name,path){
    return docker.build("${name}:latest", "${path}")
}

pipeline {
    agent any
    parameters {
        string (
                name : 'IP',
                defaultValue: '192.168.1.220',
                description: 'VM IP')
    }

    stages {
        stage('Run Builds'){
            parallel {
                stage('Build Frontend') {
                    steps {
                        script{
                              /**build Frontend image**/
                              dir('frontend'){
                                echo "BACKENDHOST=${IP} > .env.local" 
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

        stage('Deploy'){
            
            steps{
                script{

                    sh """
                    docker-compose up -d
                    """
                }
            }
        }

        stage('Run TESTS'){
            parallel{
                stage('Test Integrity Backend'){
                    steps{
                        script{
                            backend_from_frontend= sh(returnStdout: true, script: """curl -H "Accept: application/json"  http://${IP}:5000/health""").trim()
                            if(backend_from_frontend.contains('"response":"ok"')){
                                echo "Connection UP"
                            }else{
                                error("Connection DOWN FOR Backend")
                            }
                        }
                    }
                }
                
                stage('Test Integrity FrontEnd to Backend'){
                    steps{
                        script{
                            backend_from_frontend= sh(returnStdout: true, script: """curl -H "Accept: application/json"  http://${IP}:3000/health_call_api""").trim()
                            if(backend_from_frontend.contains('"response":"ok"')){
                                echo "Connection UP"
                            }else{
                                error("Connection DOWN BTW frontend & backend")
                            }
                        }
                    }
                }
            }
        }
    }
}

