pipeline {
  agent any
  stages {
    stage('Test 1') {
      steps {
        build 'Stage1_xxx'
      }
    }
    stage('Test2') {
      parallel {
        stage('Test2') {
          steps {
            build 'Stage2_xxx'
          }
        }
        stage('Test3') {
          steps {
            build 'Stage3_xxx'
          }
        }
      }
    }
    stage('Test4') {
      steps {
        build 'Stage4_xxx'
        catchError() {
          build 'Stage1_xxx'
        }

      }
    }
  }
}