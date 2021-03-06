Grunt: JS构建工具,前端自动化工具 
  PS: 基于NodeJS,用JS开发,Grunt及其插件,都作为一个包,可以用NPM安装进行管理 
  相关命令 
    npm i -g grunt-cli   全局安装Grunt命令行 
      grunt -V 查看版本 
    npm i -D grunt    项目中安装grunt,并写入开发依赖 
    npm i -D <name>   安装相关插件、工具,并写入开发依赖 
      npm i -D load-grunt-tasks   安装用于加载包的grunt工具 
      npm i -D time-grunt    
    grunt <task>      执行grunt任务 
      task 为'Gruntfile.js'中'grunt.initConfig'的配置对象的属性 
'Gruntfile.js'文件: Grunt的配置文件  
  PS: Grunt调用'Gruntfile.js'文件,解析里面的任务'task'并执行相应操作 
  module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);  
    require('time-grunt')(grunt); 
    
    var config = { // 自定义的配置项  
      name: 'app', 
      src: 'app/src',    //源文件目录
      dist: 'app/assets' //生产文件目录
    }
    grunt.initConfig({ // 任务配置
      // 定义此参数对象为'params',便于后续描述
      // params 的属性名和使用的同名模块对应,也可自定义属性  
      
      pkg: grunt.file.readJSON('package.json'), 
      
      config:  config, // 自定义配置,方便后续使用 
      // 任务配置 具体设置需参考该模板的文档 
      taskName0: {   // $ grunt xx ,执行所有子任务 
        aoo: { // 子任务, $ grunt xx:aoo 执行该任务 
          // ..
        },
        boo: {
          // ..
        }
        // ...
      },
      // ...
    })
  } 
  任务中常用属性名说明  
    'options': {}   // 任务的可选配置项  
      'banner': str,  // 定义的banner注释将插入到输出文件的顶部 
      'mangle': bol,  // 是否混淆变量名 
      'preserveComments': keywords, // 是否保留注释 
      'report': keywords, // 输出压缩率报告 
        "min"  
        false   不输出信息  
    'files': arr/obj,  
      'expand': bol,  // 下面文件名的占位符[即*号]是否扩展成具体的文件名 
      'cwd': str,     // 需处理的文件所在的目录 
      'src': str/arr, // 需处理的文件 
      'dest': str,    // 处理后的文件所在目录或文件名   
      'ext': str,     // 处理后的文件后缀名 
API 
  通配符 
    ?   匹配除'/'外的单个字符
    *   匹配除'/'外的任意字符
    **  匹配任意字符 
    {xx,xx,...}  匹配所有列出的字符 
    !   条件取反 
    Example: 
      '**/*.js'  所有的JS文件 
  <%= aoo.xx %>   模板引擎,aoo表示'params.aoo'  
    可实现类似管道的功能 
      在'concat'合并任务中,子任务为'aoo',输出目录为'boo'
      在'uglify'JS压缩任务中,使用 <%= concat.aoo.boo> 作为输入目录 
      则uglify会自动压缩concat任务中生成的文件 
  属性 
  函数 
  grunt.file.readJSON('package.json') // 读取'package.json'文件的项目配置信息
  grunt.file.isDir(filePath)     // 判断路径是文件还是文件夹 
  grunt.loadNpmTasks('grunt-contrib-uglify')  // 加载插件 
  grunt.registerTask(task,['plugs0',..])   // 注册任务 
    task    任务名 
      'default'  默认的任务,执行grunt时,会执行注册到'default'上的任务 
    plugs   表示该任务需要依次使用的模块 
    Example: 
      grunt.registerTask('build', [ 'uglify', 'cssmin' ]);
      grunt.registerTask('dev', []);
任务插件详解 
  load-grunt-tasks       加载所有在'package.json'开发依赖中的Grunt插件 
  time-grunt             显示每一个任务所花的时间和百分比 
  grunt-contrib-uglify   压缩及合并JS文件  
    'uglify': {
      options: {
        //添加banner
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        report: keywords,  // 输出压缩率 
          false   // 不输出信息
          'gzip'  // 
          'min'   // 
      },
      task0: {
        options: {
          mangle: bol, // 是否混淆变量名
          preserveComments: keywords, // 是否删除注释 
            // 'all'   不删除注释 
            // 'some'  保留@preserve @license @cc_on等注释
            // false   删除全部注释 
          //添加footer
          footer: '\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'output/js/a.min.js': ['js/a.js']
        },
        files: [{  // 按原文件结构压缩文件夹内所有JS文件 
          expand: true,
          cwd:'src',      // src目录下 
          src:'**/*.js',  // 所有js文件
          dest: 'dist'    // 输出到此目录下
        }]
      },
      // ...
    }
    Example: 
      uglify: {
        prod: {
          options: {
            mangle: {
              except: ['require', 'exports', 'module', 'window']
            },
            compress: {
              global_defs: {
                PROD: true
              },
              dead_code: true,
              pure_funcs: [
                "console.log",
                "console.info"
              ]
            }
          },
          files: [{
            expand: true,
            cwd: 'dist/html',
            src: ['js/*.js', '!js/*.min.js'],
            dest: 'dist/html'
          }]
        }
      },      
  grunt-contrib-cssmin   压缩及合并CSS文件 
    Example: 
      cssmin: {
        prod: {
          options: {
            report: 'gzip'
          },
          files: [
            {
              expand: true,
              cwd: 'dist/html',
              src: ['css/*.css'],
              dest: 'dist/html'
            }
          ]
        }
      },
  grunt-contrib-htmlmin  压缩及合并HTML文件 
    Example:
      htmlmin: {
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        html: {
          files: [
            {expand: true, cwd: 'dist/html', src: ['*.html'], dest: 'dist/html'}
          ]
        }
      }    
  grunt-contrib-imagemin 图像压缩  
    Example:
      imagemin: {
        prod: {
          options: {
            optimizationLevel: 7,
            pngquant: true
          },
          files: [
            {
              expand: true, 
              cwd: 'dist/html', 
              src: ['images/*.{png,jpg,jpeg,gif,webp,svg}'], 
              dest: 'dist/html'
            }
          ]
        }
      },
  grunt-contrib-sass     Scss编译  
    var sassStyle = 'expanded';
    
    'sass': {
      output : {
        options: {
          style: sassStyle
        },
        files: {
          './style.css': './scss/style.scss'
        }
      }
    }
  grunt-contrib-copy     文件拷贝 
    'copy': {
      aoo: {  // 子任务'aoo' 
        // 形式一: 单/多对单  
        src: str/arr, // 原文件  
        dest:   ,     // 目标文件  
        // 形式二: 多对多映射 
        files: [
          {
            expand: true, 
            cwd: 'path',  // src中的文件路径,以此为基 
            src: str/arr,  
            dest: '' ,     
            ext: '.js',  // 定义扩展名 
            extDot: '',  // 当原文件名中存在多个点,如'aoo.min.js'
              // 'first'  
              // 'last'   
            flatten: true,
            rename: function(dest,src){
              return dest+'js/'+src;
            },
          },
        ],
        // 形式三: 形式二的简化版 
        files: {
          // key 为目标文件,val 为原文件 
          key1: val2,
        }
      }
    }
    Example: 
      copy: {
        src: {
          files: [
            {expand: true, cwd: 'src', src: ['*.html'], dest: 'dist/html'}
          ]
        },
        image: {
          files: [
            {expand: true, cwd: 'src', src: ['images/*.{png,jpg,jpeg,gif}'], dest: 'dist/html'}
          ]
        }
      },
  grunt-contrib-clean    文件删除 
    'clean': {
      aoo: {
        src: str/arr, // 将删除的文件 
        filter:   ,   // 过滤条件 
          参数可为 NodeJS的'fs.stats'的方法,或自定义函数
            如将文件全部删除,单保留文件夹,以下二选一  
            'isFile'        
            function(filePath){
              return !grunt.file.isDir(filePath);
            }
        dot: bol,     // 是否删除以'.'开头的文件, 
      }
    }
    Example: 
      clean: {
        all: ['dist/html/**', 'dist/*.*'],
        image: 'dist/html/images',
        css: 'dist/html/css',
        html: 'dist/html/**/*'
      },
  grunt-contrib-concat   合并文件  
    'concat': {
      options: {
        separator: ';',  // 用于插入合并输出文件间的字符
      },
      dist: {
        src: ['./src/plugin.js', './src/plugin2.js'],
        dest: './global.js',
      },
    }
    Example: 
      concat: {
        options: {
          separator: ';',
          stripBanners: true
        },
        js: {
          src: [
            "src/js/*.js"
          ],
          dest: "dist/html/js/app.js"
        },
        css:{
          src: [
            "src/css/*.css"
          ],
          dest: "dist/html/css/main.css"
        }
      },
  grunt-contrib-jshint   语法检查  
  grunt-contrib-watch    监听文件变动  
    watch: {
      files: [],
      tasks: ['jshint', 'qunit'], // 监听到变化后触发的任务列表 
    }
  grunt-contrib-connect  建立本地服务器 
--------------------------------------------------------------------------------



















