pipeline{

    agent any

    tools {nodejs "NodeJS"}

parameters{
    string(name: 'SPEC', defaultValue:"cypress/e2e/Login.feature", description:"Enter the script path that you want to execute")
    choice(name:'BROWSER',choices:['chrome','edge','firebox'],description:"Choice the browser where you want to execute you script")
}

options{
    ansiColor('xtrem')
}

stages{
    stage('Building'){
        steps{
        echo "Building the application"
        }
    }
    stage('Testing'){
        steps{
            sh "npm i"
            sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            sh "node cypress/cucumberReport.js"
        }
    }
    stage('Deploying'){
        steps{
            echo "Deploy the application"
        }
    }
}
   post{
          always{
              publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress//cucumber-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
              //cleanWs()
          }
          
       }

}