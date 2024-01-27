pipeline{

    agent any

    tools {nodejs "NodeJS"}

parameters{
    string(name: 'branch', defaultValue:"main", description:"Cypress Automation branch",trim: true)
    choice(name:'BROWSER',choices:['chrome','edge','firebox'],description:"Choice the browser where you want to execute you script")
    string(name: 'SPEC', defaultValue:"cypress/e2e/**", description:"Enter the script path that you want to execute")
    booleanParam(name:'All_tests',description:"Check this box to run All tests")
    booleanParam(name:'Custom_tests',description:"Check this box to run Custom tests please specify only the feature file name in Spec input box eg:Login.feature")
    booleanParam(name:'Specifc_Feature',description:"Check this box to run Custom tests please specify Spec and tag Name")
    string(name: 'Tag_Name')
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
            catchError(buildResult:'UNSTABLE',stageResult:'FAILURE'){
            sh "npm i"
            script{
                if(params.All_tests == true && params.Custom_tests == false && params.Specifc_Feature == false){
                    sh "npx cypress run --browser ${BROWSER} -e TAGS='not @feature-skip'"
                }
                if(params.All_tests == false && params.Custom_tests == true && params.Specifc_Feature == false){
                    sh "npx cypress run --browser ${BROWSER} --spec cypress//e2e//${SPEC}"
                }
                if(params.All_tests == false && params.Custom_tests == false && params.Specifc_Feature == true){
                    sh "npx cypress run --browser ${BROWSER} --spec cypress//e2e//${SPEC} -e TAGS=${Tag_Name}"
                }
            }
            }
        }
    }
    stage('Reporting'){
        steps{
            sh "node cypress/cucumberReport.js"
        }
    }
}
   post{
          always{
                //         script {
                //     // Send an email only if the build status has changed from green/unstable to red
                //     emailext subject: '$DEFAULT_SUBJECT',
                //         body: '$DEFAULT_CONTENT',
                //         attachmentsPattern: 'cypress/cucumber-Report/index.html',
                //         to: 'narayananvsi95@gmail.com'
                // }
                script {
                email_subject = "Job ${env.JOB_NAME} : Status ${currentBuild.currentResult}"
                email_body = '${SCRIPT, template="./template/test-result.groovy"}'
                email_body2 = 'More info at: ${env.BUILD_URL}HTML_20Report/'
                emailext attachLog:true, body: {email_body,email_body2}, subject: email_subject, to: "narayananvsi95@gmail.com"
                }
              publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress//cucumber-report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
              cleanWs()
          }
          
       }

}