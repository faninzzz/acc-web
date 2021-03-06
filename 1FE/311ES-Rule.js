◆值类型 
基本类型: 也叫原始类型,占据空间小、大小固定,存储在'stack'栈内存中 
  基本类型: 变量的赋值,会创建该值的一个副本  
  undefined 表示未定义的值 
    在声明变量时没有对其初始化,则变量的值就是 undefined 
  null      表示空指针  
    PS: 将来用于保存对象的变量,可初始化为 null 
    Example: 
    console.log(null === null);
    console.log(null==undefined); // true ,undefined派生于null
    console.log(typeof null); // object
  基本包装类型: 基本类型的变体,一定条件下有对象的性质[如可调用方法、设置属性等] 
    PS: 通过构造函数显式的创建基本包装对象 
    基本包装对象和对象一样按引用进行比较 
      var a1 = "test";
      var a2 = new String("test");  // 对象字符串
      console.log(a1 == a2);//true
      console.log(a1 === a2);//false
    隐式创建的包装对象其对象性质是临时性的 
      var aoo ="abc";
      aoo.z ="z"; // 瞬时存在包装对象,所以不会报错,但后续访该对象被丢弃
      console.log(aoo.z); // undefined 
      // 上一次隐式创建的包装对象用完就消失了
      // 此次访问其z属性又隐式创建了包装对象但并未定义,所以为undefined
      var boo = new String("abc");
      boo.z = "z";
      console.log(boo.z); // z
  Boolean 布尔值 
    PS: ECMAScript中所有类型的值都可转换成这两个Boolean值等价的值 
    隐式转换为布尔值 
      规则: 
      undefined、null、0、NaN、""转换为 false;
      其余转换为 true,包括 '0'、对象、Infinity 等等 
      Example: 
        var box = ''; 
        if(box){ //条件语句中()内必须是布尔值
          console.log('真');
        }
        else{ 
          console.log('假');
        } 
        
        console.log(!0,!1); // true false
    bol = Boolean(any) 显式转换为布尔值 [moIn 'Global']
  Number  数值 
    PS: 可以保存+0 和 -0,且 +0 === -0;
    数值进制 
      PS: 在进行算术计算时,所有八进制和十六进制表示的数值都将被转换成十进制数值
      十进制    
      八进制     0 开头,且最大数值不超过7 
        若字面量中的数值超出了范围,则前导0被忽略,后面的数值将被当作十进制数值解析
        八进制字面量在严格模式下是无效的,会导致JS引擎抛错  
      十六进制数 必须使用0x或0X开头,最大字符不超过f 
      ES6中: 
      '0b***' 声明2进制数 
        console.log(0b11);  // 3 
      '0o***' 声明8进制数 
        console.log(0o10);  // 8 
      '0x***' 声明16进制数 
        console.log(0xf);    // 15 
    科学计数: 
      e E 可大写,可小写
      默认情况下,ECMAScript会将小数点后面有6个零以上的浮点数使用科学计数法表示
      var a = 2E3;//或者2e3
      console.log(a); //2000
      2e3;  //2000
      0.000000005; //5e-9
    浮点类型: 小数点后至少有一位非零数字 
      浮点数可省略前导0,但不推荐使用,如 .8  
      浮点数占用的内存比整型数大两倍,默认将可转换为整型的浮点数值转换成整型 
        console.log(8.0);   // 8
      浮点数最高精度是17位小数,但算术运算中可能会不精确 
        // 不要使用浮点数做判断
        console.log(0.1+0.2);   // 0.300000000000004
    特殊数值 
      Infinity/-Infinity   正/负无穷 
        无穷是不能参加计算的数值  
      NaN'not a number'非数值: 表示一本应为数值而不是数值的情况,而不报错 
        PS: 在其他语言中,任何数值除以零都会导致错误而终止程序执行,
          但ECMAScript会返回特殊的值,不会影响程序执行.
        不和任何值相等,包括自己  
          console.log(NaN == NaN); // false
        任何与NaN进行运算的结果均为 NaN  
          console.log(NaN+1); // NaN
        Example:
        console.log(0/0);  // NaN
    转换为数值  
      隐式转换为数值 
        undefined 为 NaN; null false 为 0; true 为 1;
        其他对象调用自身的 .valueOf() .toString() 方法,进行转换 
        Example:
        console.log(1*"2",typeof (1*'2'));  // 2 number  
        console.log(1+"1",typeof (1+'1'));  // 11 string
      Number()、parseInt()、parseFloat()、obj.valueOf()、obj.toString() 显式转换为 
  String  字符串: 由若干个16位Unicode字符组成的字符序列 
    PS: 可使用双引号或单引号,但必须成对出现;
    特殊字符: 也叫转义序列,可能引起歧义的特殊字符字面量  
      枚举: 
        '\"' 双引号
        '\'' 单引号
        '\n' 换行符
        '\r' 回车符
        '\b' 空格 
        '\t' Tab制表符 
        '\0' Null字节
        '\f' 换页符
        '\v' 垂直制表符
        '\\' \反斜杠字符
        '\123'   最多三位0到377八进制数表示的'Latin-1'字符 
          PS: 严格模式下,不能使用八进制转义字符 
          console.log('\251'==='©');  // true  
          console.log('\55');   // -
          console.log('\055');  // -
        '\x12'   二位00和FF的十六进制数字表示的'Latin-1'字符 
          console.log('\xA9'==='©'); // true 
        '\u1234' 四位十六进制数字表示的Unicode序列字符 
          console.log('\u00A9'==='©');  // true 
        '\u{12345}' Unicode代码点'code point'转义字符 
          console.log('\u{2F804}'==='你'); // true 
      作为一个字符来解释 
        console.log('\t\n'.length); // 2
      Example: 
        console.log("read \"book\""); // read "book"
    创建字符串 
      str = 'xx' 字面量法创建
      str = new String() 构造函数创建
      字符串不可单独修改其字符,只能覆盖替换,因为不是引用类型  
    其他类型转换为字符串 
      隐式转换为字符串 
        val+"" 
        undefined 为"undefined";null 转换为"null";
        true 为"true";false 为"false";NaN  为"NaN";
        其他对象调用自身的 .valueOf() .toString() 方法,进行转换 
          数值会转换为数值本身,即数字字符串 
          console.log(123.0.toString(),typeof 123..toString()); // 123 string
      String(val)、obj.valueOf()、obj.toString() 显式转换 
    Accu: 
      数值字符串比较其数值大小,采用相减的方式 
        var str1 = '9';
        var str2 = '100';
        console.log(str1>str2);   // true , 非想要的结果 
        console.log(str1-str2>0); // false
    `a${1+2}b` 模版字符串,可以跨越多行,使用反引号引起来[ES6] 
      `${val/expr}` 模板占位符 
    'Strings and Regular Expressions'字符串与正则表达式[ES6] 
      PS: ECMAScript6诞生之前,JS字符串由 16 位编码的字符组成'UTF-16' 
        每个字符又由包含一个 16 位序列的代码单元(code unit)表示.
        所有的字符串属性和方法,例如 length 和 charAt(),都基于这些 16 位编码单元.
        曾经,16 位的容量对于任意字符的存放都是足够的,
        然而 Unicode 引入了扩展字符集(expanded character set)使得限制字符的长度在 16 位以内,
        所以难以满足 Unicode 意图给世界上所有字符提供全局唯一标识符的雄心壮志.
        UTF-16 的前 2^16 个代码点由单个 16 位代码单元表示.
        这个范围被称作基本多语言面(Basic Multilingual Plane,BMP).
        任何超出该范围的部分都是增补的语言面(supplementary plane),
        代码点将不能被单一的 16 位代码单元表示.
        因此,UTF-16 引入了代理项对(surrogate pair)来让两个 16 位代码单元表示一个代码点.
        这意味着字符既可能是包含单个代码单元的 16 位 BMP 字符,
        也可能是由两个代码单元组成的位于增补语言面的 32 位字符.
      Example: 
        var text = "𠮷";
        console.log(text.length);           // 2
        单个 Unicode 字符 "𠮷" 由代理项对表示,
        因此,本例中 JavaScript 在操作该字符串时会将它视为两个 16 位字符.
      str.codePointAt(index); 返回指定下标字符的经过扩展后的UTF-16 编码
        为了全面支持 UTF-16,ECMAScript 6 新添加的方法之一就是 codePointAt(),
        它可以提取给定位置字符串的对应 Unicode 代码点.
        该方法接收代码单元而非字符的位置并返回一个整型值.
        Example:
          var text = "𠮷a";
          console.log(text.charCodeAt(0));    // 55362
          console.log(text.charCodeAt(1));    // 57271
          console.log(text.charCodeAt(2));    // 97
          console.log(text.codePointAt(0));   // 134071
          console.log(text.codePointAt(1));   // 57271
          console.log(text.codePointAt(2));   // 97
          示例中的首个字符并没有位于 BMP 范围内,因此它包含两个代码单元,
          意味着 length 属性是 3 而不是 2 .
          charCodeAt() 方法返回的只是处于位置 0 的第一个代码单元,
          而 codePointAt() 返回的是完整的代码点,即使它分配给了多个代码单元.
    
          对一个字符调用 codePointAt() 方法是判断它所包含代码单元数量的最容易的方法
          function is32Bit(c) { return c.codePointAt(0) > 0xFFFF; }
          console.log(is32Bit("𠮷"));    // true
          console.log(is32Bit("a"));     // false
      String.fromCodePoint(num); 根据指定的UTF-16 编码生成字符
        PS:可以将 String.fromCharCode() 视为 String.fromCharCode() 的完善版本.
          针对 BMP 字符两者会产生相同的结果,只有 BMP 之外的字符才会有差异.
        Example:
          使用给定的代码点来产生相应的单个字符
          console.log(String.fromCodePoint(134071));  // "𠮷"
引用类型: 引用类型的值是对象,保存在堆内存中 
  PS: 包含引用类型值的变量是一个指向对象的指针 
    变量赋值,复制的其实是指针,因此两个变量最终都指向同一个对象 
    对象是若干名值的合集,一般没有长度
    对象分为JS内置对象[如 Number]、宿主环境[如 window]、自定义[如 {}] 
  创建对象: 'class'类,语言提供的自定义数据类型的机制,用于创建对象 
    PS: 类就是对象的数据类型,对象就是类的具象化 
    key: val,键值对表现形式: 对象成员都是用一个名称来标记的  
      PS: 访问对象不存在的属性,返回'undefined' 
        对象默认是可扩展的,可以向对象中添加、删除属性和方法
      'key'键  str,属性名或方法名,
        需用引号的情况: 非合法的变量名,或包含除特殊字符,或以数字开头,或为JS保留字;
        Example: 
          var aoo = { "d sd ":1 }
          console.log(aoo["d sd "]); // 1
          
          var obj = {};
          var obj1 = {a : 1}
          obj[obj1] = 2;
          console.log(obj); // {[object Object]: 2},对象被转换成字符串来作为key存储
          console.log(obj[{}]); // 2 
          console.log(obj[{b:3}]); // 2 
      'val'值  any/expr,属性值或方法 
        var obj = {
          key1 : new Date().getHours()
        }
        console.log(obj); // {key1: 21} 
      obj[<key>]  读写属性值 
        key    expr,系统将自动转化为字符串 
      obj.<key>   读写属性值,
        PS: 属性名不是一个合法的变量名时,只能使用中括号的形式访问;
      obj.<key>() 方法调用 
    get key(){}/set key(){} getter/setter取值、存值函数创建伪属性  
      PS: 不可在具有真实值的属性上同时拥有getter/setter 
    var obj = {}  字面量创建对象 
      {     
        key1: val1, // 名值对间使用逗号隔开
        ...          
        get key1() { return val; },   // 取值函数 
          this  表示该对象 
          key1   可使用[expr]表达式的返回值[ES2015] 
            var expr = 'foo';
            var obj = {
              get [expr]() { return 'bar'; }
            };
            console.log(obj.foo); // "bar"
          可通过 delete 操作符删除 getter 
            delete obj.key1;
          延时执行: 在访问前不会计算属性的值 
        set key1() {},                // 存值函数 
          this  表示当前对象  
          key1  可使用[expr]表达式的返回值[ES2015] 
            var expr = 'foo';
            var obj = {
              set [expr](val) { console.log(val); }
            };
            obj.foo = 1 // 1 
          可用delete操作来移除 
            delete obj.key1;
        ...
      }   
      Example: 
        var obj = {}    // 空对象,没有任何属性的对象
        var box = null  // 初始化对象
    var obj = new Object(any/expr) 构造函数创建对象 
      PS: 若无参数可省略括号 new Object 但不推荐使用 
      Feature: 
        var aoo = new Foo() 
        // 等价于 
        function Foo(){ }
        var aoo = {} 
        Foo.call(aoo) 
      Example: 
        var obj1 = new Object(2); // Object类型,值是2
        console.log(obj1); //  Number {[[PrimitiveValue]]: 2}  
        console.log(obj1+2); // 4 ,隐式转换为2 
        var obj2 = {a:1} 
        console.log(obj2 + 2); // Object {a: 1} [object Object]2 ,变成字符串相加 
        console.log(new Object({x:1}));  // Object {x : 1} 
        function Foo(){ }
    var obj = Object.create(proto[,config]); 继承方式创建对象[ES5] 
      proto   创建对象的原型对象  
        console.log(Object.create(null)); // {},'纯净的空对象',没有原型 
        Object.create(Object.prototype);  // {} ,一个空对象
        
        var aoo = {x:1};
        var boo = Object.create(aoo);
        console.log(boo.__proto__ === aoo);      // true 
        console.log(boo.constructor === Object); // true  
      config  新增属性方法及属性特性的配置对象 
        var boo = Object.create({aoo:1},{
          boo: {
            value : 22,
            writable : false
          },
          coo: { 
            value : "aa",
            writable : true
          }
        });
    仿造类的实现方式: 
      var obj = foo()  工厂模式: 创建一对象并返回 
        PS: 工厂模式使软件领域一种广为人知的设计模式 
        function createObject(name,age){    // 创建工厂函数 
          var obj = new Object();           //创建对象
          obj.name = name;                  //添加属性
          obj.age = age;
          obj.run = function(){             //添加方法
            return this.name+this.age+"运行中";
          };
          return obj;                       //返回对象引用
        }
        var aoo = createObject("lee",100);       //创建第一个对象
        aoo.run();    // "lee100运行中"
        缺点: 无法继承; 无法识别对象的类型 
      var obj = new Foo() 自定义构构造函数[类]实例化对象 
        混合的构造函数: 构造函数+原型对象  
          构造函数: 定义对象的独有的属性/方法; 原型对象: 定义共享的属性/方法
          Example: 
          function Foo(arg1,arg2) { 
            this.key1 = arg1; 
            this.key2 = arg2; 
          }
          Foo.prototype = {
            constructor: Foo,
            foo1: function(){
            },
          }
        构造函数创建对象的过程: 
          1 创建一个新对象'newObj' 
          2 将this就指向了'newObj';
          3 为'newObj'添加属性/方法;
          4 返回'newObj'
        若构造函数返回值为一对象,则将该返回值作为生成的实例对象 
          若构造函数无返回值或返回值为基本类型,则将'this'作为返回值来生成实例对象 
          即返回值的优先级更高
          var Foo = function(){
            this.aoo = 1;
            this.boo = 2;
            return 1;
          }
          var Goo = function(){
            this.aoo = 1;
            this.boo = 2;
            return {a:'a'}
          }
          console.log(new Foo(),new Goo()); 
          // Foo {aoo: 1, boo: 2}    {a: "a"}
        未使用'new'实例化对象时,相当于直接执行函数,导致'window'属性意外增加 
          直接执行构造函数,使内部的'this'指向的是全局对象window 
          function Foo(arg1,arg2){ 
            this.aoo = arg1; 
            this.boo = arg2; 
          }
          var obj = Foo(2,3);
          console.log(window.aoo,boo); // 2,3 
  对象成员的特性'attributes' 
    PS: 'writable'、'enumerable'、'configurable'只能通过函数来设定 
      这些特性是为了实现JS引擎用的,在JS中不能直接访问它们。
      为了表示特性是内部值,该规范把它们放在了两对儿方括号中,例如 [[Enumerable]]
    ◆数据特性: 描述属性行为 
    [[Value]]        默认 undefined,属性的值 
    [[Writable]]     默认 true,是否可写 
    [[Enumerable]]   默认 true,能否通过'for in'、'Object.keys'等枚举  
    [[Configurable]] 默认 true,能否配置 
      包括: 能否delete删除、能否修改属性特性配置、能否重新定义属性特性 
      不可逆性: 一旦把属性定义为不可配置的,就不能再把其变回可配置的了 
    ◆访问器特性 
    [[Get]]  读属性值时的操作,默认返回属性值 
    [[Set]]  写属性值时的操作,默认返回属性值 
      var obj = {
        aoo : "aaa",
        boo : 111,
        // 注意此处无冒号
        get boo (){ 
          console.log('读取boo中..');
          return 222; 
        },
        set boo (val){ 
          console.log("boo设置为"+val) 
        },
      }
      console.log(obj.boo);     // 读取boo中..
      obj.boo = 11; // boo设置为11
    [[Enumerable]]    能否遍历  
    [[Configurable]]  能否配置 
  原型对象: 构造函数的'prototype'属性 
    PS: 用于存放某一类对象的公有属性和方法 
      构造函数实例化后的对象都可以'继承'到其'prototype'的属性和方法 
      原型对象的'constructor'属性指向构造函数
    原型对象的获取方法:   
      Foo.prototype   通过定义获取 
      obj.constructor.prototype   通过实例间接获取 
      Object.getPrototypeOf(obj)  通过实例获取 [ES5] 
      obj.__proto__               通过实例获取 [非标][IE11+]  
    原型的'修改'与'重设' 
      修改原型对象会影响到其他实例 
        function Person(){ };
        Person.prototype = { 
          "constructor": Person, 
          "friends": ["a","b"] 
        }
        var p1 = new Person();
        var p2 = new Person();
        p1.friends.push("c"); // 实际为修改原型 
        console.log(p1.friends);  // ["a", "b", "c"]
        console.log(p2.friends);  // ["a", "b", "c"]
        p1.friends = ["1"];  // 定义 p1 实例中的属性
        console.log(p1.friends);  // ["1"]
        console.log(p2.friends);  // ["a", "b", "c"]
      重设原型对象: 
      ★导致原型的'constructor'属性被覆盖,不再指回构造函数 
        决解方案: 强制指定 constructor
        Example: 
        function Box(){}
        Box.prototype = { run : function(){} }
        var box1 = new Box();
        box1.constructor; // function Object() { [native code] }
        // 实例的构造函数指向Object
        字面量方式改进为:
        Box.prototype = {
          constructor : Box, // 强制指定到Box
          run : function(){
            return 1;
          }
        }
      ★已创建实例的原型不变,但会改变后续再实例化的对象的原型 
        即构造函数和实例间可存在多个原型对象   
        function Foo(name){
          this.name = name; 
        }
        Foo.prototype.aoo = 1;
        var obj1 = new Foo('aa');
        console.log(obj1.__proto__);  // {aoo: 1, constructor: ƒ}
        Foo.prototype.aoo = 2;   
        console.log(obj1.__proto__);  // {aoo: 2, constructor: ƒ}
        Foo.prototype = { boo : 11 }; 
        console.log(obj1.__proto__);  // {aoo: 2, constructor: ƒ}
        console.log(Object.getPrototypeOf(obj1));  // {aoo: 2, constructor: ƒ}
        // 原实例的原型无变化 
        console.log(obj1.constructor.prototype); // {boo: 11}  
        // 但更改了后续实例的原型 
        var obj2 = new Foo('bb');
        console.log(obj2.constructor.prototype === Object.prototype); // true 
  原型链继承: 通过实例对象继承原型对象的原理,原型对象继承其他对象,从而实现原型链继承[Self]  
    Example: 
    var Foo = function(name){
      this.name = name;
    }
    Foo.prototype.aoo = '1'; // 实例继承原型  
    var Goo = function(age){
      this.age = age;
      this.age1 = 'age1';   // 要求不继承 
    }
    Goo.prototype = {  // 要求继承 
      boo: {
        a: 1 
      },  
    }
    // 方式1
    Foo.prototype = Object.assign(Foo.prototype,Goo.prototype) // 
    Foo.prototype.constructor = Foo;
    // console.log(Foo.prototype.boo === Goo.prototype.boo); // true 
    // 方式2
    // Foo.prototype.__proto__ = Goo.prototype // 原型的继承 
    var obj1 = new Foo('abc')
    console.log(obj1); // Foo {name: "abc"} 
    console.log(obj1.aoo);  // 1 
    console.log(obj1.age1); // undefined
    console.log(obj1.boo);  // {a: 1}  
    原型链继承的缺点: 
    ★在原型中定义的引用类型的属性可被所有实例共享 
      var Foo = function(){ }
      Foo.prototype = {
        key1: [1,2]
      }
      var obj1 = new Foo();
      var obj2 = new Foo();
      obj1.key1.push(3);
      console.log(obj2.key1); //  [1, 2, 3] 
    ★在创建子类型的实例时,不能向超类型的构造函数中传递参数 
对象类型检测方法:  
  PS: 无直接访问对象类型的方式,可间接通过以下方式来获取
  typeof val;               [详参 一元运算符] 
  obj instanceof Object;    [详参 关系运算符] 
  obj.constructor           查询对象的构造函数 
  Object.prototype.toString.call(val).slice(8,-1)  获取值类型 
    function getType(val){
      return Object.prototype.toString.call(val).slice(8,-1);
    }
    console.log( 
      Object.prototype.toString.call(null) // [object Null] 
      ,getType(null) // Null
      ,getType(undefined) // Undefined
      ,getType(true) // Boolean
      ,getType('a') // String
      ,getType(1) // Number
      ,getType(new Number()) // Number
      ,typeof new Number() // object
      ,getType({}) // object
      ,getType([]) // Array
      ,getType(new Date()) // Date
    ); 
  'duck type' 鸭子类型,根据其表现来确定其身份 
--------------------------------------------------------------------------------
'literal'字面量,直接显示出来的数据值 
  100            // 数字字面量
  "abc"          // 字符串字面量
  false          // 布尔字面量
  null           // 对象字面量
  /xxx/ig        // 正则表达式字面量
  {x:1,y:2}      // 对象字面量表达式
  [1,2,3,4,5]    // 数组字面量表达式
var,定义变量: 相当于给window添加不可配置的window属性 
  Feature: 
    定义变量但未赋值,默认:'undefined' 
      var num ;
      console.log(num); // undefined 
    重复的var声明: 相当于赋值操作产生覆盖 
      var box = "fan";
      var box = "abc";  // 相当于 box = "abc";
      console.log(box); // abc
    函数内,产生变量提升 
      var num = 1;
      !function(){
        // 函数内此时num还未定义,所以为undefined 
        console.log(num); // undefined,变量提升
        var num = 2;
      }()
  Relate: 
    全局变量与window属性 
      不用用var声明的变量,相当于给window添加可配置的属性  
        var aoo = 1; 
        console.log(window.aoo); // 1
        console.log(delete aoo); // fasle,删除失败 
        console.log(aoo); // 1 
        boo = 2;
        console.log(window.boo); // 2
        console.log(delete boo); // true,删除成功 
        console.log(boo);  // 报错,变量未定义 
      显式声明的全局变量无法 delete 删除,但window属性则可以 
        var aoo = 1;
        window.boo = 2;
        var o1 = Object.getOwnPropertyDescriptor(window,'aoo')
        var o2 = Object.getOwnPropertyDescriptor(window,'boo')
        console.log(o1); 
        // {value: 1, writable: true, enumerable: true, configurable: false} 
        console.log(o2); 
        // {value: 2, writable: true, enumerable: true, configurable: true} 
      访问未声明的变量会报错,而未声明window对象的属性则为undefined 
        console.log(window.aoo); // undefined 
        console.log(aoo); // 报错 
    'var' 与','运算符 [参见:逗号运算符,变量声明]     
      (var aoo = 1), 2==3; // Uncaught SyntaxError: Unexpected token var
      (var aoo = 1);       // Uncaught SyntaxError: Unexpected token var
      (var aoo);           // Uncaught SyntaxError: Unexpected token var
      var aoo = 1, window.boo = 2; // Unexpected token .
let,定义块级变量 [ES6] 
  PS: 块级作用域限制,只在定义的块级作用域中存在;
  函数内无变量提升 
    var aoo = 1;
    var boo = 2;
    function foo(){
      console.log(aoo); // undefined,变量提升
      console.log(boo); // 报错
      var aoo = 3; 
      let boo = 4; 
    }
  重复声明报错 
    Example:
      var aoo = 1;
      var aoo = 2;
      let aoo = 3; // 报错,Identifier 'aoo' has already been declared
      let boo = 4;
      let boo = 5; // 报错,Identifier 'boo' has already been declared
    函数内重新声明函数的参数报错
      function foo(aoo){
        var aoo = 1;
        let aoo = 2;  //报错,Identifier 'aoo' has already been declared
        console.log(aoo);
      }
  'Let Declarations in Loops'循环中的'let'声明 
    var arr =[];
    for(var i = 0; i < 10; i++) { 
      arr.push(i); 
    }
    console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var fooArr =[];
    for(var i = 0; i < 10; i++) {
      fooArr.push(function(){console.log(i); });
    }
    console.log(fooArr[0]); // function(){console.log(i); }
    // i 是以引用的方式存在函数中的
    console.log(fooArr[0]()); // 10
    使用let的声明方式
    var fooArr =[];
    for(let i = 0; i < 10; i++) {
      fooArr.push(function(){console.log(i); });
    }
    console.log(fooArr[0]); // function(){console.log(i); }
    // i 是以引用的方式存在函数中的
    console.log(fooArr[0]()); // 0
    注:let 声明在上述循环内部中的表现是在规范中特别定义的,
    实际上,早期 let 的实现并不会表现中这种效果,是在后来被添加到规范中的 
const,定义块级常量 [ES6] 
  Feature: 
    在声明时需赋值,否则报错 
      const num;   // 报错,定义时必须赋值 
    在同一作用域中,常量名不能与其他变量或函数名重名,否则报错 
      const num = 1;
      var num = 2; // 报错,重名  
    不可‹覆盖›改变常量值,否则报错   
      const num = 1, obj = { key: 1 }
      obj.key = 2;
      console.log(obj); // { key: 2 },对对象进行了引用修改 
      num = 2;          // 报错,不可改变常量值 
    只在块级作用域生效 
      if (true) { const num = 1; }
      console.log(num); // 报错,num未定义 
    函数内无变量提升 
      !function(){
        console.log(num1);  // undefined,变量提升 
        console.log(num2);  // 报错,变量未定义,无提升  
        var  num1 = 1
        const num2 = 2 
      }() 
  不可传值改变,只能传址改变; 
    不限制对于值的类型为对象的属性的修改,阻止的是绑定的修改,而不是绑定值的修改
    传值赋值和传址赋值
    传址:赋值过程中,变量实存储的是数据的地址[对数据的引用],而非原始数据或者数据的拷贝
    const arr =[1,2,3];
    arr = [1];    // 报错
    arr.push(4); // 允许
    arr[4] =5;   // 允许
    arr;         // [1, 2, 3, 4, 5]
    
    const person = { name: "Nicholas" };
    person.name = "Greg"; // 正常
    person = { name: "Greg" }; // 抛出错误
    person 变量一开始已经和包含一个属性的对象绑定.
    修改 person.name 是被允许的因为 person 的值[地址]未发生改变,
    但是尝试给 person 赋一个新值(代表重新绑定变量和值)的时候会报错.
  Expand: 
    ES5中可通过定义window不可变属性来模拟常量 
      Object.defineProperty(window,'const1',{
        value: '自定义的常量',
        writable: false,
        enumerable: false, 
        configurable: false
      })
'lexical scopes'块作用域,在函数内部、代码块,即'{}'内创建[ES6]  
  PS: 也叫词法作用域,任何一对花括号'{}'中的语句都属于一个块 
  Relate: 
    'var'变量、函数存在块作用域,但可跨块作用域访问  
      存在块作用域:  
      { 
        {
          function foo(){
            return 1;
          }
          var aoo = 1;
          console.log(foo(),aoo); // 1 1
        }
        {
          var aoo = 2;
          function foo(){
            return 2;
          }
          console.log(foo(),aoo); // 2 2 
        }
      }
      可跨块作用域访问: 
      if (true) { 
        var aoo = 1; 
        let boo = 2;
      }
      console.log(aoo); // 1,可跨块作用域访问 
      console.log(boo); // 报错,boo is not defined
'Global Block Bindings'全局块级绑定[ES6] 
  全局作用域使用'var'声明全局变量,相当于给全局对象[浏览器环境下是 window]添加属性 
    这意味着全局对象的属性可能会意外地被重写覆盖
    var RegExp = "Hello!";
    console.log(window.RegExp);     // "Hello!"
  若在全局作用域使用'let'或'const',绑定也发生在全局作用域内,但不会向全局对象添加属性 
    let RegExp = "Hello!";
    console.log(RegExp);           // "Hello!"
    console.log(window.RegExp);    // function RegExp() { [native code] }
'Decorator'修饰器: 用来修改类的行为[ES7] 
'Iterator'遍历器: 为不同的数据结构提供统一的访问机制的接口 
  PS: JS表'集合'的数据结构有: Array、Object、Map&Set  
    也可组合使用,定义自己的数据结构,如数组的成员是Map,Map的成员是对象,
    这样就需要一种统一的接口机制,来处理所有不同的数据结构 
    部署了Iterator接口数据结构都可完成遍历操作,即依次处理该数据结构的所有成员  
  遍历过程:  
    创建一个指针对象,指向当前数据结构的起始位置 
    第一次调用指针对象的next方法,可以将指针指向数据结构的第一个成员 
    第二次调用指针对象的next方法,指针就指向数据结构的第二个成员 
    不断调用指针对象的next方法,直到它指向数据结构的结束位置 
    每一次调用next方法,都会返回数据结构的当前成员的信息 
    具体来说,就是返回一个包含value和done两个属性的对象 
    其中,value属性是当前成员的值,done属性是一个布尔值,表示遍历是否结束。
  Iterator接口: 部署了Iterator接口的数据结构就称可遍历的  
    或者说,一个数据结构只要具有 Symbol.iterator 属性,就可以认为是可遍历的
    数据结构的[Symbol.iterator]属性就是当前数据结构默认的遍历器生成函数 
    执行这个函数,就会返回一个遍历器。
    Symbol.iterator 是一个预定义好的、类型为 Symbol 的特殊值 
    Example:
      数组的 Symbol.iterator 属性 
        let arr = ['a', 'b', 'c'];
        let iter = arr[Symbol.iterator]();
        var aoo1 = iter.next() // { value: 'a', done: false }
        var aoo2 = iter.next() // { value: 'b', done: false }
        var aoo3 = iter.next() // { value: 'c', done: false }
        var aoo4 = iter.next() // { value: undefined, done: true }
        console.log(aoo1,aoo2,aoo3,aoo4);
  会默认调用Iterator接口的场合:  
    for-of  循环 
    解构赋值: 对数组和Set结构进行解构赋值时,会默认调用[Symbol.iterator]方法 
    扩展运算符 
    yield*后面跟的是一个可遍历的结构,它会调用该结构的遍历器接口 
    其他场合: 由于数组的遍历会调用遍历器接口,所以接受数组作为参数的场合,会调用遍历器接口 
      如: 
      Array.from()
      Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
      Promise.all()
      Promise.race()
------------------------------------------------------------------------------- 
'expression'表达式: 解释器通过计算将表达式转换为一个值 
  PS: 最简单的表达式是字面量或变量名; 通过合并简单的表达式来创建复杂的表达式 
'operator'运算符: 用于操作数据值的运算符,也叫操作符 
  PS: ECMAScript操作符的特点是能够适用于很多值,进行运算时会将不同的类型进行隐式转换,
    运用于对象时,通常会调用对象的'valueOf'和'toString'方法,以便取得相应的值;
  一元运算符: 只能操作一个值的运算符 
    ++、-- 自增、自减
      前置和后置的区别:
        对赋值有影响;在没有赋值操作时,前置后后置是一样的,
        在赋值操作时,前置++会先累加再赋值,而后置++则先赋值再累加.
      Example: 
      var num = 100;
      console.log(num++,++num); // 100 , 102 
    +、-   正、负数 
      PS: 会进行隐式转换 
      var str = "1";
      console.log( -str);        // -1 
      console.log( typeof str);  // string 
      console.log( typeof -str); // number 
      console.log( typeof +str); // number 
    typeof val  值类型检测 
      PS: typeof是操作符而非函数,因此后面的括号可有可无;
        不能有效的区分对象的类型;  
      Input: val  any,任意值/变量/字面量/未定义的值 
      Output: 返回如下6种之一的字符串:   
        'undefined' 
          typeof undefined // undefined 
          // 值为undefined的变量 
          var tmp = undefined 
          typeof tmp       // undefined
          // 未定义的变量也是undefined
          typeof tmp1      // undefined
        'boolean'  
        'string' 
        'number'  
          typeof NaN;       // "number"
        'object'   
          typeof null;    // object,空对象
        'function'  
      检测未声明的变量不会报错,而返回 undefined   
        typeof aoo;         // "undefined"
    delete val  删除对象中的成员[值] 
      PS: 若删除不存在的值也会返回true 
      Input: 对象的属性 
      Output: 是否删除成功的布尔值 
      Feature: 
        删除数组成员,相当于将该成员值变成'undefined',数组长度不变化 
          var arr = ['a','b','c']
          delete arr[1]
          console.log(arr,arr[1]); // ["a", undefined × 1, "c"]  undefined 
          console.log(arr.length); // 3 
      Example:
        var obj = { a: 1, b: 2, c: 3 }
        var bol1 = delete obj.b;
        console.log(bol1,obj); // true {a: 1, c: 3}
    new Foo();  初始化对象,返回实例化的对象  
    void expr;   执行表达式,并始终返回 undefined 
      PS: 无论void后的表达式是什么,void操作符始终返回 undefined 
      Input: 待执行的表达式,不可为空,否则报错  
        void ();  // Uncaught SyntaxError: Unexpected token )
      Output: 始终返回 undefined 
      Expand: 
        使用void获取'undefined' 
          'undefined'不是JS的保留字,有可能被占用 
          还有一种方式是通过函数调用,如AngularJS的源码里就用这样的方式:
          (function(undefined) {
            //此处的 undefined 为undefined
          })();
        禁止超链接跳转页面 
          若链接URL为空,点击会刷新整个页面,
          点击以 javascript: URI 的链接时,浏览器会对冒号后面的代码进行求值,
          然后清空页面把求值的结果显示在页面上
          只有当这段代码的求值结果是 undefined 的时候,浏览器才不会去做显示
          但不推荐利用 javascript: 伪协议来执行JS代码
        立即调用的函数表达式 
          void function(){
            console.log(1);
          }();
  布尔操作符/逻辑操作符: 通常用于布尔值的操作,一般和关系运算符配合使用 
    ! expr1        // 逻辑非 
      Input: 任何类型值
      Output: 返回取反后布尔值,会进行隐式转换 
      Expand: 
        使用两次逻辑运算符相当于对值进行Boolean()转型函数处理;
    expr1 && expr2 // 逻辑与  
      Input: 任意表达式/值  
      Output: 
        PS: 尽量返回可转换为 false 的值 
        第一个值可转换成 false 时,直接返回第一个值,且后续不再执行;
          var flag = 1
          var result = 1 && (flag = 4); // 不加括号则报错 
          console.log(result,flag); // 4 4
        第一个值可转换为 true 时,返回第二个值[会执行第二个表达式]    
          fn && fn() 
          // 相当于 
          if (fn) {fn()}
    expr1 || expr2 // 逻辑或 
      Input: 任意表达式/值 
      Output: 
        PS: 尽量返回可转换为 true 的值 
        第一个值可转换为 true 时,直接返回第一个值,后续不再执行 
          var num = 10;
          function foo(){ 
            num++; 
            return 'foo函数' ;
          }
          var result1 = 1 || foo(); // foo函数未执行
          console.log(num,result1); // 10  1 
          var result2 = 0 || foo(); // foo函数执行了
          console.log(num,result2); // 11  foo函数
        第一个值可转换为 false 时,直接返回第二个值[会执行第二个表达式] 
          var result = false || 'abc';
          console.log(result); // abc
  算术运算符 
    PS: 若算术运算的值不是数值,默认会先使用Number()转型函数将其隐式转换为数值 
    +  和运算/字符串连接
      var box=Infinity+-Infinity; //NaN,正负无穷相加为NaN
      var box=100+'100'; //100100,字符串连接先于和运算
      var box="年龄为"+10+10; //年龄为1010,被转换成字符串,字符串链接操作
      var box=10+10+"是年龄"; //20是年龄,先进行和运算再进行字符串连接
      var box="年龄是"+(10+10); //年龄是20,括号提升优先级
      var aoo = 10 + {};
      console.log(aoo);       // 10[object Object]
      console.log(typeof aoo); // string
    -  减运算 
      var box=100-'';         //100,空自动转换为0
      var box=100-'80';
      //20,'80'转换成了80(因为-不同于+可作为字符串连接符)
      var box=100-null;       //100,null转换成0
      var box=100-'abc';      //NaN,abc转换成NaN
      var box = 100 - 对象;   //NaN,若有toString()或alueOf(),返回10-返回值
    *  乘运算
    /  除运算 
      不同于C语言,得到的结果为浮点数.
      var box=100/'';                 //infinity,''转换成了0
      var box=100/null;               //infinity,null转换成了0
      3%-8; //3,其中%后面的符号不起作用
      -3%8; //-3
    %  取余 
       var box=100%'';                 //NaN
       var box=100%null;               //NaN
       var box=100%"abc";             //NaN
       var box=100%0;                 //NaN
    ** 幂 
      Example:
      2**3; // 8
      var aoo =3;
      var boo =2;
      console.log(aoo**boo); // 9
  关系操作符 
    <、>、<=、>=的运算规则:
      两个操作数都是字符串,则比较两个字符串的第一个字符对应的Unicode字符编码值;
      有一个操作数是数值,则将另一个转换为数值,在进行数值比较
      两个操作数有一个是对象.和对象的toString()或valueOf()返回值进行比较.否则数字永远大于对象.
    == 与 === 
      ==:比较值是否相等
       在比较时会进行类型转换
       null和undefined是相等的
       null和undefined在相等比较时不会自动转换.(所以null不等于0)
       当两个对象指向同一个对象,他们才相等.(否则相同值的对象不相等)
      ===:比较值和类型是否都相等
      Example:
      1==true;    //true
      1===true;   //false
      NaN==NaN;   //false
    !==  不全等
    !=   不等 
  条件操作符 
    obj instanceof Foo; bol,对象是否继承至构造函数  
      PS: 对象须和构造函数处于同一iframe或window中,否则返回false
      obj  用于检测的对象,若为基本类型则直接返回:false 
      Foo  被检测的构造器,若为非构造函数则报错 
      Example: 
        console.log( 
          123.1 instanceof Number // false
          ,"a" instanceof String  // false
          ,new Number(123) instanceof Number // true
          ,new Number(123) instanceof Object // true
        );  
    prop in obj;        bol,属性是否在对象中[包括原型中属性]  
      prop num/str,待检测的对象的属性 
      obj  被检测的对象,可为包装对象但不能是原始类型,否则报错  
      Example: 
        var arr = new Array("redwood", "bay", "cedar", "oak", "maple")
        console.log(
          0 in trees         // true
          ,3 in trees        // true
          ,6 in trees        // false
          ,"bay" in trees    // false(必须使用索引号,而不是数组元素的值)
          ,"length" in trees // true(length是一个数组属性)
        );
    
        var obj = {"a":1};
        obj.b = obj;
        console.log(  
          "b" in obj         // true 
          ,"b" in obj.b      // true 
          ,"b" in obj.b.b    // true 
          ,"b" in obj.b.b.b  // true 
        );
    expr1?expr2:expr3; 三元条件运算符 
      当expr1为真则执行expr2,否则执行expr3 
      PS: 三元条件运算符相当于if语句的简写形式 
      var box=5>4?'对':'错';    //对,5>4赋值第一个'对'给box.否则第二个. 
      console.log(true?'真':'假'); // 真 
      console.log(false?'真':'假'); // 假 
      console.log('0'?'真':'假'); // 真 
      console.log('1'?'真':'假'); // 真 
  = 赋值操作符 
    =:将右边的赋值给左边
    复合赋值运算符: +=  -=  *=  /=  %=
  + 字符串连接符
    PS:进行字符的拼接操作(只要需要有一个操作数是字符串即可)
      当有字符串和数值进行+操作时,则默认将数值转换为字符串形式进行拼接操作.
    Example: :
      3+6+"3a";      //"93a",先进行算术运算然后再进行字符串的连接操作.
      ""+3+6+"3a";   //"363a",使用空字符串达到字符连接的效果.
      var a=1,b=2,c=3;
      ""+a+b+c;      //"123",数值和字符串+运算为字符串,运算顺序从左到右.
  , 逗号操作符: 在一条语句中执行多个操作 
    将多个表达式连接为一个表达式,依次执行每个表达式,最终返回值为最后一个表达式的值 
      console.log(1),console.log(2),console.log(3); // 1 2 3
      
      1,2; // 2
    
      var auu=(aoo=1,boo=2,coo=3);
      console.log(auu);    // 3

      var aoo =(1,2,3); // 3,取最后一个值.
      
      self:
      var aoo = 1,boo = 2;
      相当于: 
      var aoo = 1 ;
      var boo = 2 ;
      而非:
      var aoo = 1;
      boo = 2;
      验证:
        function foo(){
          var aoo = 1, boo = 2; 
          console.log(aoo); // 1
          console.log(boo); // 2
        }
        foo();
        console.log(boo); // boo is not defined
        console.log(aoo);
        
        function foo(){
          var aoo = 1;
          boo = 2;
          console.log(aoo); // 1
          console.log(boo); // 2
        }
        foo();
        console.log(boo); // 2
        console.log(aoo); // aoo is not defined
    在for循环中的使用
      for (var i = 0, j = 9; i <= 9; i++, j--) {
        console.log("" + i  + j  );
      }
    'return'处理之后返回: 在返回值前处理一些操作
      有最后一个表达式被返回,其他的都只是被求值
      function foo () {
        var x = 0;
        return x++, x;
      }
      console.log(foo()); // 1
    配合'var'关键字,同时定义多个变量  
      var box="A", age="20", height="175";  // 同时定义多个变量 
      var aoo = 1, 2==3; // Uncaught SyntaxError: Unexpected number
      var 2==3;          // Uncaught SyntaxError: Unexpected number
      1 , 2==3,function(){ console.log(4); }() // 4;
  'Destructuring'解构赋值: 按照一定模式,从数组和对象中取值,对变量进行赋值[ES6] 
    PS: 拆分等号左侧的数组或对象的过程,数组或对象可以来自变量、函数或等式 
    数组解构赋值: 有顺序要求 
      var [a,b,c] = [1,2,3]; //把数组的值分别赋给下面的变量；
      console.log(a,b,c);// 1 2 3 
      
      // 嵌套解构 
      var [ a,b,[ c1,c2 ] ] = [ 1,2,[ 3.1,3.2 ] ];
      console.log(c1,c2); // 3.1 3.2
      
      // 不完全解构: 赋值不成功,变量的值为undefined
      var [a,b,c] = [1,2];
      console.log(a,b,c); // 1 2 undefined 
        
      // 设定默认值 
      var [a,b,c=3] = [1,2];
      console.log(a,b,c); // 1 2 3 
      // 覆盖默认值 
      var [a,b,c=3] =[1,2,4];
      console.log(a,b,c); // 1 2 4
    对象的解构赋值: 不受属性的顺序影响,和属性名对应 
      PS:默认的变量名要和属性名一致,才会成功赋值,否则赋值不成功 
      Example:
        var {a,b,c} = {"a":1,"b":2,"c":3};
        console.log(a,b,c); // 1 2 3 
        改变顺序
        var { a,b,c } = {"a":1,"c":3,"b":2};
        console.log(a,b,c); // 1 2 3 
        
        var { a } = {"b":2};
        console.log(a); // undefined
        
        // 对象解构赋值嵌套 
        var {a:{b}} = {"a":{"b":1}};
        console.log(b);//结果:b的值为1
        
        // 对象解构指定默认值 
        var {a,b=2} = {"a":1}; 
        console.log(b); // 2
      给一个变量名与属性名不一样的变量解构赋值 
        var { b:a } = {"b":2};
        console.log(a); // 2
    字符串到数组的解构赋值:  
      PS: 解构赋值的过程中,字符串被转换成了一个类似数组的对象
      var [a,b,c,d,e] = "12345";
      console.log(a,b,c,d,e); // 1 2 3 4 5 
    使用举例  
      交换变量的值 
        var x = 1;
        var y = 2;
        [x,y] = [y,x]; 
      定义函数参数 
        function foo({a,b,c}){ 
          console.log(a,b,c); 
        }
        foo({a:1,b:2,c:3,d:4}); // 1 2 3 
      函数参数的默认值 
        function demo({aoo=1}){ 
          console.log(aoo); 
        }
        demo({});
  'Spread'扩展运算符: 把数组解开成单独的值[ES6] 
    PS: 除了用在rest参数中,还有其他用途
    结合数组使用,把数组的元素用逗号分隔开来,组成一个序列 
      function sum(a,b) {
        return  a+b ;
      }
      let arr = [2,3];
      // ...arr  // 报错
      sum(...arr);    // 5,用扩展运算法将数组[2,3]转换成2,3
      // sum( ...arr ) 的效果相当于sum( 2,3 ) 
    Example:
      var aoo =[1,2,3];
      var boo =[...aoo,4];
      console.log(boo);  //[1, 2, 3, 4]
      console.log(...aoo); //1 2 3,相当于 console.log(1,2,3)
      // 相当于
      console.log.apply(null,aoo); // 1 2 3
      ...aoo;            //报错
    函数中将部分参数组成的数组 
      var foo = function(aoo,...boo){ 
        console.log(aoo,boo); 
      }
      foo(1,2,3,4);  // 1 [2, 3, 4]
      //  将其余的参数放在数组 boo 中
    对象成员合并,后面覆盖前面  
      var obj1 = { aoo: 1 }
      var obj2 = {
        ...obj1,
        aoo: 2
      }
      console.log(obj2); // { aoo: 2 } 后面覆盖前面 
  位运算符: 按内存中表示数值的位来操作数值 
    PS: 一般应用中,基本用不到位运算符; 比较基于底层,性能和速度会非常好;
      ECMAScript中的所有数值都以'IEEE-754''64位'格式存储,
      但位操作符并不直接操作64位的值,而是先将64位的值转换成32位的整数,
      然后执行操作,最后在将结果转换回64位,
      对于开发人员来说,由于64位存储格式是透明的,因此整个过程就像是只存在32位的整数一样;
    ~   位非NOT
    &   位与AND
    |   位或OR
    ^   位异或XOR
    <<  左移
    >>  有符号右移
    >>> 无符号右移
  ◆运算优先级 
    PS: 可通过圆括号来提高优先级 
    运算符             优先级  描述                 关联性       
    ()                 19     圆括号                \        
    obj.key            18     成员访问              从左到右     
    obj[‹computedVal›] 18     需计算的成员访问       从左到右     
    new Fn(arg)        18     new ‹带参数列表›      \           
    fn(arg?)           17     函数调用              从左到右      
    new Fn()           17     new ‹无参数列表›      从右到左     
    num++              16     后置递增              \       
    num--              16     后置递减              \       
    !bol               15     逻辑非                从右到左  
    ~                  15     按位非                从右到左  
    +num               15     正数                  从右到左   
    -num               15     负数                  从右到左      
    ++num              15     前置递增              从右到左 
    --num              15     前置递减              从右到左   
    typeof val         15     类型检测              从右到左   
    void expr          15                          从右到左    
    delete val         15                          从右到左   
    num*num            14     乘法                 从左到右     
    num/num            14     除法                 从左到右   
    num%num            14     取模                 从左到右   
    num+num            13     加法                 从左到右    
    num-num            13     减法                 从左到右  
    val << val         12     按位左移             从左到右  
    val >> val         12     按位右移             从左到右    
    val >>> val        12     无符号右移           从左到右     
    num < num          11     小于                 从左到右 
    num <= num         11     小于等于             从左到右 
    num > num          11     大于                 从左到右 
    num >= num         11     大于等于             从左到右     
    val in obj         11                         从左到右     
    obj instanceof fn  11                         从左到右    
    val == val         10     等号                从左到右   
    val != val         10     不等                从左到右    
    val === val        10     全等                从左到右  
    val !=== val       10     非全等              从左到右     
    val & val          9      按位与              从左到右    
    val ^ val          8      按位异或            从左到右    
    val | val          7      按位或              从左到右     
    bol && bol         6      逻辑与              从左到右      
    bol || bol         5      逻辑或              从左到右   
    bol?val1:val2      4      条件运算符          从右到左      
    val = val          3      赋值               从右到左  
    val += val         3                         
    val -= val         3                         
    val *= val         3                         
    val /= val         3                         
    val %= val         3                         
    val <<= val        3                         
    val >>= val        3                         
    val &= val         3                         
    val ^= val         3                         
    val |= val         3                         
    yield  fn          2                        从右到左   
    yield* fn          2                        从右到左   
    ...obj             1     展开运算符          \            
    val , val          0     逗号                从左到右    
  ◆特殊用法  
    ★自运行函数
    !function(){}() 
      等同于 (function(){ })() 
      ()、！、+、-、=等运算符,都将函数声明转换成函数表达式,
      消除了javascript引擎识别函数表达式和函数声明的歧义,
      告诉javascript引擎这是一个函数表达式,不是函数声明,
      可以在后面加括号,并立即执行函数的代码。
      加括号是最安全的做法,因为！、+、-等运算符会和函数的返回值进行运算,有时造成不必要的麻烦。
    val/expr, function(){ }() 
'statement'语句: 比表达式更大的单位 
  PS: 程序由语句组成,最简单的语句由一个表达式和表达式后的分号组成.
    在ECMAScript中,所有的代码都是有语句来构成的.
    语句表明执行过程中的流程、限定与约定
    形式上可以是单行语句,或大括号{}括起来的复合语句[复合语句一般也称代码块]
    在语法描述中,复合语句整体可以作为一个单语句处理.
  {} 块语句: JS无块级作用域
  声明语句: 变量声明
  表达式语句: 赋值 与 调用
  ◆分支语句
  if(boo){}  括号的表达式为true时执行语句 
    括号中的若不为布尔值,系统会调用 Boolean() 函数进行转换;
    若需要控制多条语句,那么就需使用{}把多条语句包含在内,推荐都加{}
    if分支语句 if(){}else{}
    if多重分支语句 if(){}else if{}else{}
      else if 的数量为任意个
      可以使用if或else if作为最后一个判断,当使用else时至少会执行一个
      短路执行,即只会有一个分支被执行
        if (true) {
          console.log(1);
        }
        else if (true) {
          console.log(2);
        }
        else {
          console.log(3);
        }
        // 1
  switch(value){} 多重条件判断,用于多个值相等的比较 
    PS:传入值和对比值需是全等关系才会相应的执行.
    switch(传入值){
      case 对比值1:
        控制执行的语句1;
        break;  //break中途退出,防止穿透.
      case 对比值2:
        控制执行的语句2;
        break;
      ...
      default: // 当无条件符合时执行
        控制执行语句n;
    }
  ◆循环语句
  for(初始变量;判断语句;其他语句;){};  for循环 
    具有在执行循环之前初始化变量和定义循环后执行代码的能力;
    其他语句 在 执行语句 后运行;
  while(条件){};  先判断再运行
  do{}while(条件); 先执行后判断,至少会执行一次 
  for(var key in obj){} 无序遍历[会遍历原型链上的属性] [适用'str''arr''obj']  
    PS: 若原型链上的属性设置为可遍历,则也会将其遍历出来 
    遍历字符串 
      var str = 'abc';
      var rst = '';
      for(var key in str){
        rst += key + '=' + str[key] + '&'
      };
      console.log(rst); // 0=a&1=b&2=c&
    遍历数组[遍历的下标为字符串类型而非数值类型] 
      var arr = ['a','b','c']
      var rst = '';
      for(var idx in arr){
        // console.log(typeof idx); // string
        rst += idx + '-' + arr[idx]
      } 
      console.log(rst); // 0-a1-b2-c
    遍历对象 
      var obj ={ 
        aoo : "a", 
        boo : 11 
      }
      var rst = '';
      for(var key in obj){ 
        rst += key +':'+ obj[key]
      }
      console.log(rst); // aoo:aboo:11
    continue 结束本次执行继续下次执行,break 结束循环 
  for(var val of iterator){}  遍历[ES6] 
    PS: 当使用for...of循环遍历某种数据结构时,该循环会自动去寻找Iterator接口
      原生具备Iterator接口的数据结构: Array Map Set String TypedArray arguments NodeList对象 
    数组遍历 
      var arr = ['a','b','c','d','e'];
      for(let val of arr){
        console.log(val); // a b c d e
      }
    字符串遍历 
      let word = "abcde";
      for(let w of word){
        console.log(w); // a  b  c  d  e
      }
    类数组遍历,如'DOM List'
      <p>1</p>
      <p>2</p>
      <p>3</p>
      //假设有3个p元素
      let pList = document.querySelectorAll('p');
      for(let p of pList){
        console.log(p); // <p>1</p>  <p>2</p>  <p>3</p> 
      }
    set和map解构的遍历
    不能遍历'Object' 
      PS:要能够被for...of正常遍历的,都需要实现一个遍历器Iterator 
        而数组、Set和Map结构,内置了遍历器Iterator,它们的原型中都有一个 Symbol.iterator 方法 
        而Object对象并没有实现这个接口,所以无法被for...of遍历 
      Example: 遍历对象报错
        let obj = {"name":"前端君"};
        for(let v of obj){  
          console.log(v);
        }
        // 报错, undefined is not a function
      验证原型中的'Symbol.iterator'方法 
        'Symbol.iterator'是一个特殊的Symbol值,其作为prototype对象属性名时,需使用'[]'的形式;
        prototype[Symbol.iterator] [不能使用点形式获取:prototype.Symbol.iterator]
        即只要一数据结构拥有[Symbol.iterator]()方法的数据结构,就可被'for-of'遍历,称为可遍历对象 
        var arr = Array.prototype[Symbol.iterator];  
        var str = String.prototype[Symbol.iterator]; 
        var set = Set.prototype[Symbol.iterator];    
        var map = Map.prototype[Symbol.iterator];    
        var obj = Object.prototype[Symbol.iterator]; 
        console.log(arr); // function values() { [native code] }
        console.log(str); // function [Symbol.iterator]() { [native code] }
        console.log(set); // function values() { [native code] }
        console.log(map); // function entries() { [native code] }
        console.log(obj); // undefined
      Iterator遍历器的原理
        当可遍历对象被for...of遍历的时候,[Symbol.iterator]()就会被调用,
        返回一个iterator对象,其中还有一个很重要的方法:next();
        先调用可遍历对象的[Symbol.iterator]( )方法,得到一个iterator遍历器对象,
        然后就在遍历器上不断调用next()方法,直到done的值为true的时候,就表示遍历完成结束了。
        let arr = ['a','b','c']; //数组:一个可遍历对象
        let iter = arr[Symbol.iterator](); //调用数组的Symbol.iterator()方法
        iter.next(); // {value: "a", done: false}
        // 第1次调用next():返回第1个元素:“a”,以及done的值为fasle,表示循环没有结束,继续遍历。
        iter.next(); // {value: "b", done: false}
        // 第2次调用next():返回第2个元素:“b”,以及done的值还是为fasle,循环没有结束,继续遍历。
        iter.next(); // {value: "c", done: false}
        // 第3次调用next():返回第3个元素:“c”,以及done的值依然为fasle,循环没有结束,继续遍历。
        iter.next(); // {value: undefined, done: true}
        // 第4次调用next():返回的value值为undefined,以及done的值变成了true,表示遍历结束。
      自定义对象的Iterator遍历器
        给Object对象加上[Symbol.iterator]()方法
        let obj = { //定义一个的Object对象
          0: "我是0"
          ,1: "我是1"
          ,2: "我是2"
          ,length: 3
          //添加[Symbol.iterator]方法
          ,[Symbol.iterator]: function() { 
            let that = this
            ,_key = 0
            return {
              next: () => {
                let value = that[_key] 
                ,done = (_key >= that.length);
                _key++;
                return {value,done}
              }
            }
          }
        };
        for(let v of obj){
          console.log(v); // "我是0" // "我是1" // "我是2"
        }
    'break'终止循环 
      var arr = [1,2,3,4,5];
      for(let val of arr){
        if(value == 3){ break; } 
        console.log(val); // 1 2
      }
    'continue'继续[后面的]循环 
      var arr = [1,2,3,4,5];
      for(let val of arr){
        if(val == 3){ continue; } // 跳过当前循环,继续后面的循环
        console.log(val); // 1 2 4  5
      }
    使用数组的扩展keys()获取键名再遍历,index为数字类型
      var arr = [1,2,3,4,5];
      var rstArr = arr.keys();
      console.log(resArr); 
      for(let index of arr.keys()){
        console.log(index); // 0 1 2 3 4
      }
  ◆控制结构
  break 和 continue  只能用于循环语句中,精确控制代码的执行 
    continue [跳出当前循环]继续下一次循环
    break    跳出整个循环[执行循环后的语句]
      aa: // 命名最外层的循环 
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          for (var k = 0; k < 3; k++) {
            if (k == 1) {
              console.log(i);
              break aa; // 直接跳出最外层的循环 
            }
          }
        }
      }
  return   函数返回
  throw val  异常触发,用于抛出自定义错误 
    PS: 在遇到throw操作时,代码会立即停止执行
    val any,类型无要求
  try{}catch(err){} 异常捕获与处理[ES3+] 
    PS: 与Java中的 try-catch 完全相同
      IE7存在bug: 除非有catch否则不执行finally
    try{
      // 可能会导致错误的代码
      // catch 和 finally 必须存在一个 
    } 
    catch(error){
      // 发生错误时执行的代码
      // 当try中代码出错,catch会接收到一个包含错误信息的 error 对象
    } 
    finally{
      // 该部分可选
      // 一定会执行的代码,即使前面包含return语句
    }
    Example: :
      function foo(){
        try {return 0;}
        catch(e){return 1;}
        finally{return 2;}
      }
      foo(); // 2
  其他语句 
  with(){};  修改当前作用域 
    PS: 运行缓慢,尤其是在已设置了属性值时,尽量少使用;严格模式下不可用 
    Example: :
      var obj = {
        key1: {
          key11: {
            ,key111: 'a'
            ,key112: 'b'
            ,key113: 'c'
          }
        }
      }
      with(obj.key1.key11){ 
        console.log(key111,key112,key113); // a b c 
      }

      var aoo = "hello";
      aoo.toUpperCase(); // HELLO
      with(aoo){
        console.log(toUpperCase());
      }
  label   可在代码中添加标签,以便将来使用 
    Example: 
      var num = 0;
      lab1: for(var i = 0 ; i < 10 ; i++){
        for(var j = 0 ; j < 10 ; j++){
          if( i == 2 && j == 2 ){
            break lab1;
          }
          num++;
        }
      }
      console.log(num); // 22,2*10+2
      // 该例子中定义的lab标签可以在将来由break或continue语句引用.
      // 加标签的语句一般都要与for语句等循环语句配合使用.
--------------------------------------------------------------------------------
class,类: 基于原型的实现的封装[ES6] 
  class className {}     创建类 
    PS: 类名后面的括号{}里面的内容称之为类体  
    Feature: 
      类内部定义的方法都是不可枚举的;
      类和模块内部默认采取严格模式; 
      class内部不可定义原型属性和静态属性;
    Example: 
      ES5 : 
      var Animal = function(name){
        this.name = name;
      }
      Animal.prototype = {
        constructor: Animal
        ,speak: function(){
          console.log("I am"+this.name);
        }
      }
      var animal = new Animal("cat");
      animal.speak();  //I am cat
      ES6 : 
      class Animal {
        constructor(name){
          this.name = name;
        }
        speak(){
          console.log("I am "+this.name);
        }
      }
      const animal = new Animal("cat");
      animal.speak();    //I am cat
    类体中可能出现的几种形式:  
    constructor(){}   构造方法,声明实例属性/方法 
      PS: 实例化时,会调用此方法来初始化实例对象; 
        若无'constructor'方法,执行时会使用一个空的constructor方法 
        具有唯一性,一个类体不能含有多个constructor构造方法 
      // 内部的 this 表示实例对象;  
      this.aoo = 1
      this.foo = function(){ }
    foo(){}           声明原型方法  
      // 内部的 this 表示实例对象;  
      Expand: 
        [val] () {}  属性名可使用表达式 
          var  aoo = 'sayHello';
          class Clas{
            [aoo] () {
              console.log('hello');
            }
          }
          var clas = new Clas();
          clas.sayHello(); // 1
    prop = val        定义原型属性,暂不支持,提案中 
      可使用 className.prototype.prop = val 
    static foo(){}    声明静态方法  
      函数内 this 表示该类本身 
        this.name   str,类名 
      Example: 
        class Clas {
          static foo(){
            console.log('静态方法');
          }
        }
        Clas.foo();  // 静态方法
    static prop = val 定义静态属性,展不支持,提案中 
      可使用 className.prop1 = val 来直接定义 
    get prop1(){ return val }  取值函数,访问实例的该属性时返回指定值  
      // this   表示实例 
    set prop1(arg){}           存值函数,设置实例的该属性时进行回调  
      // this  表示实例 
      Example: 
        使用get和set关键字,对某个属性设置存值函数和取值函数 
        class MyClass {
          constructor(val){
            this.aoo = val 
          }
          get prop() {
            console.log('get');
            return this.aoo;
          }
          set prop(val) {
            console.log('set',val);
            this.aoo = val 
          }
        }
        var inst = new MyClass();
        inst.prop = 123; // set 123 
        inst.prop ;      // get 
  class Child extends Parent {} 继承全部静态方法、实例属性/方法,选择性继承原型方法  
    Example: 
      class Animal { 
        constructor(name){ 
          this.name = name; 
        }
        say(){ 
          return 'This is a animal'; 
        }
      }
      class Dog extends Animal { 
        constructor(name,color){
          super(name);  // 调用父类的构造方法,继承实例属性/方法   
          this.color = color;
          this.say = super.say();
        }
        gerInfo(){
          return super.say()+',name is: '+this.name+',color is: '+this.color;
          // 父类中定义了say方法,想在子类中调用父类的say方法,使用super.say()即可实现
        }
      }
      let doge = new Dog("dog","black"); 
      doge.gerInfo(); // This is a animal,name is: dog,color is: black 
    使用继承的方式创建的实例对象既是子类的实例,也是父类的实例 
      class Child extends Parent {}
      var child = new Child();
      child instanceof Child ; // true
      child instanceof Parent; // true
    super 关键字,在子类中进行调用父类中的构造方法,从而继承实例属性/方法  
      PS: 由于对象总是继承于其它对象,所以可以在ES6的任何一个对象中使用super关键字 
      若子类未显式定义'constructor',则下面的代码将被默认添加 
        constructor(...args){
          super(...args)
        }
      super()  子类的'constructor'构造函数中调用 
        子类的constructor方法必须调用super方法,否则不能新建实例 
        因为子类没有属于自己的this对象,而是继承了父类的this对象而对其进行加工 
        只有调用了super方法后,才可使用this,否则报错;
      super.xx 父类中的静态方法/原型方法[根据调用场合而不同] 
        子类的构造方法中,只能调用父类的原型方法,而不能调用静态方法 
          但可使用 '父类名.方法()' 的方式调用父类的静态方法 
        子类的原型方法中,只能调用父类的原型方法,而不能调用静态方法 
          但可使用 '父类名.方法()' 的方式调用父类的静态方法 
        子类的静态方法中,只能调用父类的静态方法,而不能调用原型方法  
        class Foo{
          static fooSay(){
            console.log('foo say');
          }
        }
        class Bar extends Foo{
          sing(){
            // super.fooSay(); // 报错,因为 super.fooSay() 是父类的静态方法 
            console.log('hello');
          }
          static barSay(){
            super.fooSay();
            console.log('bar say')
          }
        }
        Bar.fooSay() // foo say 
        Bar.barSay() // foo say   bar say 
  ES5继承和ES6继承的区别 
    在ES5中,继承实质上是子类先创建属于自己的this,
    然后再将父类的方法添加到this [也就是使用 Parent.apply(this) 的方式],
    或者 this.__proto__ [即Child.prototype = new Parent()]上;
    而在ES6中,则是先创建父类的实例对象this,然后再用子类的构造函数修改this;
  var inst = new Clas(arg) 创建实例 
    PS: 创建实例时会自动执行类体中的'constructor'方法 
    inst.constructor             创建该实例的类 
    inst.constructor.prototype   该实例的原型对象 
    new Clas{}(arg) 立即执行的class 
      let point = new class{
        constructor(x = 0, y = 0) {
          this.x = x;
          this.y = y;
        }
        toString() {
          return this.x + this.y;
        }
      }(1, 2);
      console.log(point.toString()); // 3
  ◆相关操作
  str = Clas.name;  获取类的名字 
Module,模块化  
  PS: ES6模块默认采用严格模式"use strict";,顶层的this指向 undefined 
  'export'输出: 
    'OutVrb'输出量: 变量/函数/类/字面量 
    export default OutVrb;   匿名/默认输出'OutVrb' 
      PS: 导入时可自定义名称 
        一个模块只能有一个默认输出,即'export default'只能使用一次 
        本质上,export default 就是输出一个叫做default的变量或方法 
        然后输入时,系统允许你为它取任意名字 
      等价于: export { vrbName as default };
    export <define OutVrb>;  单'OutVrb'定义并输出 
      export var vrb = 1;       // 输出变量 
      export function foo(){ }; // 输出函数 
      export class Cls { };     // 输出类 
      export 11;  // 报错,字面量输出需改用 export default  
      可同时输出多个 
        // 对外部输出三个变量: vrb1 vrb2 vrb3
        export var vrb1 = 'aa';
        export var vrb2 = 'bb';
        export var vrb3 = 123; 
        // 等价于: export { vrb1 ,vrb2 ,vrb3 }
    export { vrbName1 ,.. }; 多变量输出  
      PS: 使用大括号指定要输出的一组变量 
      Example: 
        var aoo = 'aa'
        ,boo = 'bb'
        ,coo = 1958
        export { aoo ,boo ,coo };
      export { .. ,vrbName1 as vrbName2 ,.. }    使用别名  
  'import'引入: 
    import 'path';   执行所加载的模块[但未输入任何值]  
      import 'lodash'; //  仅仅执行lodash模块,但是不输入任何值。
  'import from'引入输入: 
    'path'输入的路径: 相对路径/绝对路径 
    import vrbName from "path";  自定义名称引入默认输出   
      PS: 引入 export default 的输出  
      等价于: import { default as vrbName } from 'path';
    import { vrbName1 ,.. } from 'path';  引入指定变量 
      PS: 变量名必须与导出名称相同,位置顺序则无要求 
      'path'   模块文件的位置,可是相对路径、绝对路径或模块名,'.js'可省略 
      import语句是'Singleton'模式 
        import { foo } from 'my_module';
        import { bar } from 'my_module';
        等同于
        import { foo, bar } from 'my_module';
      import { .. ,vrbName1 as vrbName2 ,.. } from 'path' 使用别名 
    import * as vrbName from 'path';     别名整体引入 
      PS: 使用'*'整体加载,指定一个对象,所有输出值都加载在这个对象上 
      // export.js 
      export function foo() { }
      export function goo() { }
      // import.js 
      import * as aoo from './export'; 
      aoo.foo()
      aoo.goo()
      模块整体加载所在的对象不允许运行时改变  
      import * as aoo from './export';
      // 下面两行都是不允许的
      aoo.foo = 'hello';
      aoo.goo = function () {};
    import xx ,xxx ,... from "path";  同时引入多种形式的输出 
      Example: 
        // m1.js 
        export var vrb1 = 1  
        export var vrb2 = 2   
        export default 111
        // main.js 
        import vrb1 ,{ vrb1 as vrb3 ,vrb2 } from "./m1.js";
        console.log(vrb1 ,vrb2 ,vrb3 ); // 111 2 1 
    var promise = import('path')   动态加载,返回Promise对象 [提案中]  
      PS: import命令会被JS引擎静态分析,先于模块内的其他模块执行, 
        固然有利于编译器提高效率,但也导致无法在运行时加载模块,
        require是运行时加载模块,import命令无法取代require的动态加载功能;
        因此,有一个提案,建议引入import()函数,完成动态加载 
        import()函数可以用在任何地方,不仅仅是模块,非模块的脚本也可以使用。
        import()类似于Node的require方法,区别主要是前者是异步加载,后者是同步加载 
      适用场景:  
      按需加载 
        import()可以在需要的时候,再加载某个模块。
        button.addEventListener('click', event => {
          import('./dialogBox.js')
          .then(dialogBox => { dialogBox.open(); })
          .catch(error => { /* Error handling */ })
        });
      条件加载
        if (condition) {
          import('moduleA').then(...);
        } 
        else {
          import('moduleB').then(...);
        }
      动态的模块路径
        import(f()) // 根据函数f的返回结果,加载不同的模块 
        .then(...);
      加载模块成功以后,这个模块会作为一个对象,当作then方法的参数 
          因此,可以使用对象解构赋值的语法,获取输出接口。
          import('./myModule.js')
          .then(({export1, export2}) => {
            // ...·
          });
          上面代码中,export1 和 export2 都是 myModule.js 的输出接口,可以解构获得。
      同时加载多个模块 
        Promise.all([
          import('./module1.js'),
          import('./module2.js'),
          import('./module3.js'),
        ])
        .then(([module1, module2, module3]) => {
           ···
        });
      用在async函数中 
        async function main() {
          const myModule = await import('./myModule.js');
          const {export1, export2} = await import('./myModule.js');
          const [module1, module2, module3] =
            await Promise.all([
              import('./module1.js'),
              import('./module2.js'),
              import('./module3.js'),
            ]);
        }
        main();    
  'export from'输出引入:  
    PS: 当前模块不可使用引入量,只是进行转发,并未输入 
    export { default } from 'path';  默认输出默认输入 
    export { vrbName as default } from 'path';   默认输出具名输入 
      // 等同于
      import { vrbName } from 'path';
      export default vrbName; 
    export { default as vrbName } from 'path'; 具名输出默认输入   
    export vrbName from "path";          具名输出默认输入 [提案中]
    export { vrbName1 ,.. }  from 'path';  具名输出指定变量 
      等价于:
      import {aoo,..} from 'my_module';
      export {aoo,..};
      Example:
      export { foo as myFoo } from 'my_module' 接口改名 
      export { default } from 'foo';           默认接口 
      export * from 'my_module';               整体输出 
      export { aoo as default } from './someModule'  具名接口改为默认接口 
      export { default as es6 } from './someModule'  默认接口改为具名接口 
      下面三种import语句,没有对应的复合写法。
        import * as someIdentifier from "someModule";
        import someIdentifier from "someModule";
        import someIdentifier, { namedIdentifier } from "someModule";
        为了做到形式的对称,现在有提案,提出补上这三种复合写法。
        export * as someIdentifier from "someModule";
        export someIdentifier from "someModule";
        export someIdentifier, { namedIdentifier } from "someModule";
    export * from 'path';      输出所有输入 
      PS: 会忽略输入模块的'export default'内容   
    export * as vrbName from 'path';   具名输出所有输入 [提案中] 
    export xx ,xxx ,.. from "path"; 输出多种形式输入 [提案中] 
  Feature: 
    仅支持静态导入导出 
      PS: 必须要在编译时就能确定,在运行时才能确定的是不行的
      设计思想: 尽量静态化,使编译时能确定模块的依赖关系,及输入和输出的变量 
      目的： 
        性能,在编译阶段即完成所有模块导入,避免在运行时进行降低速度 
        更好的检查错误,比如对变量类型进行检查 
      'export'需在模块顶层作用域定义,否则无法静态化    
        PS: 可出现在模块的任何位置,但要处于模块顶层 
        Example: 
          function foo() { 
            export default 'bar'  // SyntaxError
          } 
          foo();
      'import'会在代码运行前[编译阶段]执行 
        foo();
        import { foo } from 'my_module'; // import的执行会早于foo的调用 
      'import'静态执行,不能使用表达式和变量 
        这些只有在运行时才能得到结果的语法结构,在静态分析阶段无法得到值  
        import { 'f' + 'oo' } from 'my_module'; // 报错
        
        let module = 'my_module'; // 报错
        import { foo } from module;
        
        if (x === 1) { 
          import { foo } from 'module1'; // 报错
        } 
    'export'输出的值是实时动态的 
      PS: 'CommonJS'输出的是值的缓存,不存在动态更新 
      export var aoo = 'bar';
      setTimeout(() => aoo = 'baz', 500);
      输出变量'aoo',值为'bar',500 毫秒之后变成'baz' 
    'export'输出的变量,对外都是只读的 
      Example: 
        //---module-B.js文件------
        var name = "前端君"
        export {name}
        //---module-A.js文件------
        import {name} from "./module-B.js";
        name = "修改字符串变量"; //报错:name is read-only
      若模块导出的是对象类型的值,可[部分]修改 [JS的引用传递] 
        //---module-B.js文件---
        var person = {"name":"前端君"}
        export { person }
        //---module-A.js文件------
        import {person} from "./module-B.js";
        person.name = "修改字符串变量"; // 修改成功
        // 且其他模块也可以读到改写后的值 
    'import'导入不存在的变量,值为 undefined 
      //---module-B.js文件---
      var name = "前端君";
      export {name}
      //---module-A.js文件------
      import { height } from "./module-B.js";
      console.log(height); // undefined,不会抛出异常,只是值为undefined
    'import'多次重复执行同一语句,则只会执行一次,而不会执行多次 
      import 'lodash';
      import 'lodash'; // 未执行 
  Example: 
    export 1; // 报错 
    
    var m = 1;
    export m; // 报错
    单变量输出需采用
    export var m = 1;
    或
    var m = 1;
    export { m };
    或
    var n = 1;
    export { n as m };
    
    function f() {}
    export f;  // 报错
    改为:
    export function f() {};
    或
    function f() {}
    export { f };
  跨模块常量 
    const声明的常量只在当前代码块有效。
    若想设置跨模块的常量(即跨多个文件),或者说一个值要被多个模块共享,
    可以采用下面的写法。
    // constants.js 模块
    export const A = 1;
    export const B = 3;
    export const C = 4;
    // test1.js 模块
    import * as constants from './constants';
    console.log(constants.A); // 1
    console.log(constants.B); // 3
    // test2.js 模块
    import {A, B} from './constants';
    console.log(A); // 1
    console.log(B); // 3
    若要使用的常量非常多,可以建一个专门的constants目录,
    将各种常量写在不同的文件里面,保存在该目录下。
    // constants/db.js
    export const db = {
      url: 'http://my.couchdbserver.local:5984',
      admin_username: 'admin',
      admin_password: 'admin password'
    };
    // constants/user.js
    export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];
    然后,将这些文件输出的常量,合并在index.js里面。
    // constants/index.js
    export {db} from './db';
    export {users} from './users';
    使用的时候,直接加载index.js就可以了。
    // script.js
    import {db, users} from './constants';
-----------------------------------------------------------------------待整理   





