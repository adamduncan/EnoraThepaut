﻿
module.exports = function (grunt) {

	// Load plugins
	require('load-grunt-tasks')(grunt);


	// ---------- Project configuration
	grunt.initConfig({


		//	Settings
		//-----------------------------------
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*\n' +
					'\t<%= pkg.name %> v<%= pkg.version %>\n' +
					'\tBuild:' +
					'<% _.forEach( pkg.contributors, function(contributor) { %>' +
						'\n\t\t<%= contributor.name %> - <%= contributor.email %>' +
					'<% }); %>\n' +
					'\tDate: <%= grunt.template.today("dd/mm/yyyy") %>\n' +
				'*/\n',


		//	Watch
		//-----------------------------------

		//	Watch changes to project folders within css/ and js/,
		//	files within core/ or packages/ should not be updated
		watch: {
			html: {
				files: [
					'_templates/*/**/*.html'
				],
				tasks: ['html']
			},
			css: {
				files: [
					'css/core/*.scss',
					'css/project/*.scss',
					'css/packages/*.scss',
					'css/master.scss'
				],
				tasks: ['css']
			},
			js: {
				files: [
					'js/core/*.js',
					'js/packages/**/*.js',
					'js/master.js'
				],
				tasks: ['js']
			}
		},


		//	HTML
		//-----------------------------------

		//	Clean generated templates directory
		clean: {
			build: ['<%= flats.build.options.destPath %>/*.html', '!<%= flats.build.options.basePath %>/<%= flats.build.options.masterSrc %>']
		},

		//	Run grunt-flats with default config for templates
		//	Run grunt-flats with alternate paths for styleguide, referencing same partials as templates
		flats: {
			build: {
				options: {
					basePath: '_templates',
					//layoutPath: 'layouts',
					//partialPath: 'partials',
					masterSrc: 'masterpage/master.html',
					destPath: '_templates'
				}
			}
		},


		//	CSS
		//-----------------------------------

		//	Lint .scss files according to .scss-lint.yml
		//	Requires scss-lint, run the following commands to install scss-lint and rainbow to colorize:
		//	gem install scss-lint
		//	gem install windows-pr win32console
		scsslint: {
			all: [
				'css/core/*.scss',
				'css/project/*.scss',
				'css/packages/*.scss',
				'css/master.scss'
			],
			options: {
				config: '.scss-lint.yml',
				exclude: 'css/core/_generic.reset.scss',
				colorizeOutput: true
			}
		},

		//	Compile .scss files to global.css
		sass: {
			dist: {
				options: {
					sourcemap: 'none'
				},
				files: {
					'css/dist/global.css': 'css/master.scss'
				}
			}
		},

		//	Add relevant browser-prefixes to CSS3 properties where necessary
		autoprefixer: {
			options: {
				browsers: [
					'last 2 version',
					'ie 9'
				]
			},
			global: {
				src: 'css/dist/global.css'
			}
		},

		//	Combine common media queries
		cmq: {
			css: {
				files: {
					'css/dist': ['css/dist/global.css']
				}
			}
		},

		//	Minify CSS
		cssmin: {
			css: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'css/dist/global.min.css': ['css/dist/global.css']
				}
			}
		},


		//	JS
		//-----------------------------------

		//	Hint .js files according to .jshintrc
		jshint: {
			all: [
				'js/master.js'
			],
			options: {
				jshintrc: '.jshintrc',
				force: true
			}
		},

		//	Test javascript writing conventions according to .jscs.json
		jscs: {
			src: [
				'js/master.js'
			],
			options: {
				config: '.jscs.json'
			}
		},

		//	Concatenate .js files
		concat: {
			options: {
				stripBanners: true,
				banner: '<%= banner %>'
			},
			global: {
				src: [
					'js/core/*.js',
					'js/packages/**/*.js',
					'js/master.js'
				],
				dest: 'js/dist/global.js'
			}
		},

		//	Create custom Modernizr build
		modernizr: {
			dist: {
				devFile: 'remote',
				outputFile: 'js/dist/modernizr-custom.js',
				extra: {
					shiv: false,
					printshiv: false,
					load: false,
					mq: true,
					cssclasses: true
				},
				files: {
					src: [
						'css/core/*.scss',
						'css/project/*.scss',
						'css/packages/*.scss',
						'css/master.scss',
						'js/packages/*.js',
						'js/master.js'
					]
				}
			}
		},

		//	Minify & obfuscate .js files
		uglify: {
			build: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'js/dist/global.min.js': ['js/dist/global.js'],
					'js/dist/modernizr-custom.min.js': ['js/dist/modernizr-custom.js']
				}
			}
		}
	});


	// ---------- Tasks

	// Default
	grunt.registerTask('default', []);

	// HTML
	grunt.registerTask('html', ['clean', 'flats']);

	// CSS
	grunt.registerTask('css', ['scsslint', 'sass', 'autoprefixer', 'cmq', 'modernizr', 'cssmin']);

	// JS
	grunt.registerTask('js', ['jshint', 'jscs', 'concat', 'modernizr', 'uglify']);
};