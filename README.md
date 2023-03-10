# TypeScript
## 一 TS简介
  1. TS是一个JS的超集，是以JS为基础构建的语言，可以在任何支持JS的平台中执行，TS扩展了JS并添加了类型。TS不能直接被JS解析器直接执行，需要通过编译器转换为JS执行。
  2. TS增加了什么？类型、支持ES的新特性、添加ES不具备的新特性、丰富的配置选项、强大的开发工具
## 二 开发环境搭建
  1. 下载和安装nodejs
  2. npm全局安装typescript,```npm i -g typescript```
  3. 创建ts文件
  4. 编译 ```tsc xxx.ts```
## 三 基本类型
  - 类型声明
    - 类型声明是TS非常重要的一个特点
    - 通过类型声明可以指定TS中变量（参数、形参）的类型
    - 指定类型后，当变量赋值时，TS编译器会自动检查值是否符合类型生命，符合则赋值，否则报错
    - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值
    - 语法：
      - ```typescript
          let 变量:类型;
          let 变量:类型 = 值;
          function fn(参数:类型):类型{
            ...
          }
        ```
  - 自动类型判断
    - TS拥有自动类型判断机制
    - 当变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
    - 所以如果你的变量的声明和赋值同时进行的，可以省略掉类型声明
  - 类型
    |类型|例子|描述|
    |:---:|:---:|:---:|
    |number|1,33,2.5|任意数字|
    |string|'hi','hello'|任意字符串|
    |boolean|true,false|布尔值true或false|
    |字面量|其本身|限制变量的值就是该字面量的值|
    |any|*|任意类型|
    |unknown|*|类型安全的any|
    |void|空值（undefined）|没有值或undefined|
    |never|没有值|不能是任何值|
    |object|{name:'jack'}|任意js对象|
    |array|[1,2,3]|任意JS数组|
    |tuple|[4,5]|元素，TS新增类型，固定长度数组|
    |enum|enum(A,B)|枚举，TS中新增类型|
## 四 编译配置
  - 自动编译文件
    - 编译文件时，使用-w指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。
    - 示例：```tsc xxx.ts -w```
  - 自动编译整个项目
    - 如果直接使用tsc指令，即可自动将当前项目下所有的ts文件编译为js文件
    - 但是能直接使用tsc命令的前提是，要先在项目根目录下创建一个ts的配置文件tsconfig.json
    - tsconfig.json是一个json文件，添加配置文件后，只需tsc命令即可完成对整个项目的编译。
    - 配置选项：
      - include
        - 定义希望被编译文件所在的目录
        - 默认值：["**/*"]
        - 示例:```"include":["src/**/*","test/**/*"]```
          - 上述示例中，所有src目录和test目录下的所有文件都会被编译
      - exclude
        - 定义需要排除在外的目录
        - 默认值：["node_modules","bower_components","jspm_packages"]
        - 示例：```"exclude":["./src/hello/**/*"]```
          - 上述示例中，src下hello目录下的文件都不会被编译
      - extends
        - 定义被继承的配置文件
        - 示例：```"extends":"./configs/base"```
        - 上述示例中：当前配置文件会自动包含config目录下base.json的所有配置信息
      - files
        - 指定被编译文件的列表，只有需要编译的文件少才会用到
        - 示例：
          ```json
           "files": [
            "core.ts",
            "sys.ts",
            "types.ts"
            ...
           ]
          ```
        - 列表中的文件都会被TS编译器所编译
      - compilerOptions
        - 编译选项是配置文件中非常重要也比较复杂的配置选项
        - 在compiler Options中包含多个子项，用来完成对编译的配置
          - 项目选项
            - <font color=red>target</font>
              - 设置ts代码编译的目标版本
              - 可选值：ES3（默认）、ES5、ES6/ES2015、ES7/2016、ES2017、ES2018、ES2019、ES2020、ESNext
              ```json
              "compilerOptions":{
                "target":"ES6"
              }
              ```
              如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码
            - <font color=red>lib</font>
              - 指定代码运行时所包含的库（宿主环境）
              - 可选值：
                - ES5、ES6/ES2015、ES7/2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost
            - <font color=red>module</font>
              - 设置编译后代码使用的模块化系统
              - 可选值：
                - CommonJS、UMD、AMD、System、ES2020、ESNext、None
            - <font color=red>outDir</font>
              - 设置编译后代码文件所在目录，一般为"./dist"
            - <font color=red>outFile</font>
              - 将编译代码合并成一个文件：  ```"outFile":"./dist/app.js"```
              - 设置outFile后，所有全局作用域中代码会合并到一个文件
            - <font color=red>allowJs</font>
              - 是否对js文件进行编译，默认是不编译（false）
            - <font color=red>checkJs</font>
              - 是否检查js代码是否符合规范（false）
            - <font color=red>removeComments</font>
              - 是否移除代码中的注释
            - <font color=red>noEmit</font>
              - 是否生成编译文件，只执行编译过程，不生成编译文件
            - <font color=red>noEmitOnError</font>
              - 当代码有错误时，不生成编译文件
            - <font color=red>alwaysStrict</font>
              - 用来设置编译后的文件是否使用严格模式，默认为false
            - <font color=red>noImplicitAny</font>
              - 不允许使用隐式的any类型，默认为false
            - <font color=red>noImplicitThis</font>
              - 不允许不明确类型的this，默认为false
            - <font color=red>strictNullChecks</font>
              - 严格的检查空值，默认为false
            - <font color=red>strict</font>
              - 所有严格检查的总开关，默认为false


# Vite
  - vite也是前端构建工具
  - 相较于webpack，vite采用了不同的运行方式
    - 开发时，并不对项目打包，而是直接采用ESM的方式来运行项目。
    - 项目部署时，再对项目进行打包
  - 基本使用
    1. 安装开发依赖vite
    2. vite的源码目录就是项目根目录
    3. 开发命令：
       1. vite 启动开发服务器
       2. vite build打包代码
       3. vite preview预览打包后的代码
  - 使用命令构建
    ```npm create vite@latest```
  - 配置文件：```vite.config.js```
    - 格式：
      ```JavaScript
      // vite.config.js
      import legacy from '@vitejs/plugin-legacy'
      //这个方法可以包也可不包，包上会有书写提示
      import { defineConfig } from 'vite'

      export default defineConfig({
        plugins: [
          legacy({
            targets: ['defaults', 'not IE 11'],
          }),
        ],
      })
      ```