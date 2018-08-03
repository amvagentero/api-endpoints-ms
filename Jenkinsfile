node {
    def scmVars
    def branchName
    def dockerImagePrefix = "443466800498.dkr.ecr.us-east-1.amazonaws.com"
    def dockerProjectName = "api-endpoints-ms-ag"
    def dockerName

    env.NODEJS_HOME = "${tool 'Node 8.x'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

    stage('Checkout SCM') {
        checkout scm
        checkout(scm).each { k,v -> env.setProperty(k, v) }
        scmVars = checkout(scm)
        getBranchNameScript = $/eval "echo ${GIT_BRANCH} | cut -d / -f2 "/$
        branchName = sh(script: "${getBranchNameScript}", returnStdout: true).trim()
    }

    stage('Install modules'){
        sh 'npm install'
    }

    stage('Lint') {
        sh 'npm run lint'
        sh 'npm run lint-tests'
    }

    stage('Test') {
        sh 'npm run coverage'
    }

    stage('Build') {
        dockerName = "${dockerImagePrefix}/${dockerProjectName}:${branchName}-${env.BUILD_NUMBER}"
		dockerBuild = docker.build("${dockerName}")
    }

    stage('Login and push') {
        // Login
        sh 'eval $(docker login https://443466800498.dkr.ecr.us-east-1.amazonaws.com -u AWS -p "$(aws ecr get-login | awk \'{print $6}\')" >> loginres.log)'
        sh 'cat loginres.log'

        // Push
        dockerPushScript = $/eval "docker push ${dockerName}"/$
        sh(script: "${dockerPushScript}")
    }

    stage('Deploy') {
        sh """
            sed -i -- "s#{{imagename}}#${dockerName}#g" "./deploy/${branchName}.yaml"
            sed -i -- 's#{{environment}}#${branchName}#g' "./deploy/${branchName}.yaml"
            cat "./deploy/${branchName}.yaml"
            kubectl apply -f "./deploy/${branchName}.yaml"
        """
    }

    stage('Clean') {
        sh """
            docker rmi "${dockerName}"
        """
        cleanWs()
    }

}
