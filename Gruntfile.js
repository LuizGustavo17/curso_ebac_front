module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
      // Configuração para a tarefa less
      less: {
        development: {
          options: {
            compress: true, // Comprimir o output
          },
          files: {
            // Arquivo de saída: Arquivo de entrada
            'output.css': 'input.less'
          }
        }
      },
      
      // Configuração para a tarefa uglify
      uglify: {
        my_target: {
          files: {
            'output.min.js': 'arq.js'
          }
        }
      }
    });
  
    // Carregar plugins que fornecem tarefas.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tarefa padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };