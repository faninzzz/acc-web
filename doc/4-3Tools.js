SVN 
  介绍、说明篇 
    下载网址 https://tortoisesvn.net/downloads.html
    介绍
      TortoiseSVN 是一个 Windows 下的版本控制系统 Apache™ Subversion® 的客户端工具。
      文件存储于一个中央版本库中。
      版本库就像一个常见的文件服务器,保存对文件和目录所有的改变。
      Subversion 是一个通用系统,可以管理任何类型的文件集,包括源代码。
    TortoiseSVN 的特性 
      外壳集成
        TortoiseSVN 无缝地整合进 Windows 的外壳(例如资源管理器)。
        即可以继续使用已经熟悉的工具,而且当需要版本控制功能时不用切换到不同的应用程序。
        而且并没有被限制在 Windows 资源管理器中; 
        TortoiseSVN 的右键菜单可以在很多其它文件管理器中以及标准 Windows 程序的 文件/打开 对话框中被调出。
        不过,TortoiseSVN 是专 门作为 Windows 资源管理器的扩展进行开发的。有可能在其它程序中整合的不那么完整,例 如重载图标可能不显示。
      重载图标
        每个版本控制的文件和目录的状态使用小的重载图标表示,可以让你立刻看出工作副本的状态。
      图形用户界面
        当你列出文件或文件夹的更改时,你可以点击任意版本查看提交注释。
        也可以看到更改过的文件列 表 - 只要双击文件就可以查看更改内容。
        提交对话框列出了本次提交将要包括的条目,每一个条目有一个复选框,所以你可以选择包括哪些 条目。
        未版本控制的文件也会被列出,以防你忘记添加新文件。
      Subversion 命令的简便访问
        PS:TortoiseSVN 是一个 Subversion 客户端,包含一些 Subversion 本身的特性:
        所有的 Subversion 命令存在于资源管理器的右键菜单,TortoiseSVN 在那里添加子菜单。
        目录版本控制
          CVS 只能追踪单个文件的历史,
          但是 Subversion 实现了一个“虚拟”文件系统,可以追踪整个目 录树的修改,文件和目录都是版本控制的,
          结果就是可以在客户端对文件和目录执行移动和复制命
          令。
        原子提交
          提交要么完全进入版本库,要么一点都没有,这允许开发者以一个逻辑块提交修改。
        版本控制的元数据
          每个文件和目录都有一组附加的“属性”,你可以发明和保存任意的键/值对,
          属性是版本控制 的,就像文件内容。
        可选的网络层
          Subversion 在版本库访问方面有一个抽象概念,
          利于人们去实现新的网络机制,Subversion 的“高级”服务器是 Apache 网络服务器的一个模块,
          使用 HTTP 的变种协议 WebDAV/DeltaV 通讯,这给了 Subversion 在稳定性和交互性方面很大的好处,
          可以直接使用服务器的特性,例如认 证、授权、传输压缩和版本库浏览等等。
          也有一个轻型的,单独运行的 Subversion 服务器,这个 服务器使用自己的协议,可以轻松的用 SSH 封装。
        一致的数据处理
          Subversion 使用二进制文件差异算法展现文件的区别,
          对于文本(人类可读)和二进制(人类不可 读)文件具备一致的操作方式,
          两种类型的文件都压缩存放在版本库中,差异在网络上双向传递。
        高效的分支和标签
          分支与标签的代价不与工程的大小成比例,
          Subversion 建立分支与标签时只是复制项目,使用了 一种类似于硬链接的机制,
          因而这类操作通常只会花费很少并且相对固定的时间,以及很小的版本 库空间。
    命令、名词解释
      提交:将本地文件同步到服务器上
      更新:将服务器上的文件同步到本地
  使用总结 
    提交之前先更新
    当更新时中途中断后,仓库会锁住,下次在执行更新时需先执行清理操作
GIT 分布式版本控制系统 
  介绍、说明 
    拉取:将服务器上文件同步到本地
    提交:将本地文件同步到本地库
    推送:将本地库文件同步到服务器端
  使用总结 
    通常的操作顺序为,提交、推送、拉取;
    在未进行提交而执行其他操作都有风险,如拉取会覆盖本地未提交的改变,推送无[提交的]更新
GitHub 
  GitHub 
    名词解释 
      commit  版本,添加一个新版本 
      Merging 合并分支
      Pull Request 发起讨论
      collaborators 协作者
      wiki 
      issues 事务卡片
      GitHub Pages 项目展示为网站
    网页上的快捷键 
      t    搜索文件
  命令行 
    PS:需进入到当前仓库对应的文件夹进行相应的操作 
      命令之前都需要加'git'命令[之间使用空格隔开]
    help   查看git的使用帮助[git命令]
    clone  将远端仓库克隆到本地形成本地仓库
      默认克隆在当前文件夹
      Example: git clone https://github.com/hk029/hello-world.git
    init   在本地创建一个新的本地仓库
    add    添加文件到本地仓库
    mv     移动或重命名文件
    rm     移除文件
    commit 提交更新到本地仓库
    pull   将远端仓库同步到本地仓库
    push   将本地仓库同步到远端仓库
PhotoShop 
  界面设置
    新建 设置 初始化
      新建(快捷键Ctrl+N)
      预设:自定义
      宽度:1920(像素)
      高度:2000(像素)
      分辨率:72(像素/英寸)(现在比较常用的)
      背景内容:透明
        PS:可将上述设置设定为 存储预设
        
    设置
      通过新建设置 单位为pixels 背景设置为透明 并储存预设,设为默认的新建样式.
      在 信息 栏选项中更改其显示的单位为像素
      图像-首选项-单位与标尺 设置单位为像素
    
      视图-工作区-新建工作区 保存自己自定义后的界面环境,方便环境的切换.
        
    移动工具设置
      移动工具 快捷键 V
      默认设置为选择的是图层
      
    视图设置
      视图-显示-智能参考线 勾选
      打开 视图-标尺  快捷键:Ctrl+R
      窗口 取消勾选(web切图一般不用的) 库、颜色
        打开  信息、字符
  基本操作
    选区工具 快捷键M
    缩放  Alt+滚轮
    移动  空格+左键
    套索工具  L
  参考线
    隐藏参考线   Ctrl+;
  切片
    根据图层来切片
      将背景切下
        选中该图层-图层菜单-新建基于图层的切片
      只将图案切下(背景为透明)
        选中图层-在右边的图层列表中 右键-编辑图层(若没有则创建智能对象)
        打开新窗口-文件-储存为web所用格式 [快捷键 Ctrl+Shift+S]
  图片周围有光晕
    设置PS中的matte,蒙版或杂边属性,将其设置为和图片相接的背景色.
  快捷键
    标尺————Ctrl+R
    后退一步————Ctrl+Z+Alt
    前进一步————Ctrl+Z+Shift
    根据图层选区————Ctrl+左键在图层栏中选中图层
    取消选区————Ctrl+D(或者使用选区工具)
Zeplin 
  标注与线上协作平台,不同平台的设计师和开发者沟通起来更加轻松便捷
----------------------------------------------------------------------以下待整理