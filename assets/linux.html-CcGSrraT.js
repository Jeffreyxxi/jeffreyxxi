import{_ as s,c as n,o as a,a as e}from"./app-CwA4SPVS.js";const p={},l=e(`<h2 id="linux-命令整理" tabindex="-1"><a class="header-anchor" href="#linux-命令整理"><span>Linux 命令整理</span></a></h2><h3 id="scp命令" tabindex="-1"><a class="header-anchor" href="#scp命令"><span>scp命令</span></a></h3><h4 id="linux-scp-命令用于-linux-之间复制文件和目录。" tabindex="-1"><a class="header-anchor" href="#linux-scp-命令用于-linux-之间复制文件和目录。"><span>Linux scp 命令用于 Linux 之间复制文件和目录。</span></a></h4><p>scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令。 scp 是加密的，rcp 是不加密的，scp 是 rcp 的加强版。</p><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment">#完整功能</span></span>
<span class="line"><span class="token function">scp</span> <span class="token punctuation">[</span>-1246BCpqrv<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c cipher<span class="token punctuation">]</span> <span class="token punctuation">[</span>-F ssh_config<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i identity_file<span class="token punctuation">]</span> <span class="token punctuation">[</span>-l limit<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o ssh_option<span class="token punctuation">]</span> <span class="token punctuation">[</span>-P port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S program<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>user@<span class="token punctuation">]</span>host1:<span class="token punctuation">]</span>file1 <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>user@<span class="token punctuation">]</span>host2:<span class="token punctuation">]</span>file2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># -1： 强制scp命令使用协议ssh1</span></span>
<span class="line"><span class="token comment"># -2： 强制scp命令使用协议ssh2</span></span>
<span class="line"><span class="token comment"># -4： 强制scp命令只使用IPv4寻址</span></span>
<span class="line"><span class="token comment"># -6： 强制scp命令只使用IPv6寻址</span></span>
<span class="line"><span class="token comment"># -B： 使用批处理模式（传输过程中不询问传输口令或短语）</span></span>
<span class="line"><span class="token comment"># -C： 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）</span></span>
<span class="line"><span class="token comment"># -p：保留原文件的修改时间，访问时间和访问权限。</span></span>
<span class="line"><span class="token comment"># -q： 不显示传输进度条。</span></span>
<span class="line"><span class="token comment"># -r： 递归复制整个目录。</span></span>
<span class="line"><span class="token comment"># -v：详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。</span></span>
<span class="line"><span class="token comment"># -c cipher： 以cipher将数据传输进行加密，这个选项将直接传递给ssh。</span></span>
<span class="line"><span class="token comment"># -F ssh_config： 指定一个替代的ssh配置文件，此参数直接传递给ssh。</span></span>
<span class="line"><span class="token comment"># -i identity_file： 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。</span></span>
<span class="line"><span class="token comment"># -l limit： 限定用户所能使用的带宽，以Kbit/s为单位。</span></span>
<span class="line"><span class="token comment"># -o ssh_option： 如果习惯于使用ssh_config(5)中的参数传递方式，</span></span>
<span class="line"><span class="token comment"># -P port：注意是大写的P, port是指定数据传输用到的端口号</span></span>
<span class="line"><span class="token comment"># -S program： 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 简易</span></span>
<span class="line"><span class="token function">scp</span> <span class="token punctuation">[</span>可选参数<span class="token punctuation">]</span> file_source file_target </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 举例</span></span>
<span class="line"><span class="token function">scp</span> <span class="token parameter variable">-r</span> ./* develop@www.dalitek.online:/opt/project/dalitek_hr/app/public/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-远程登陆" tabindex="-1"><a class="header-anchor" href="#ssh-远程登陆"><span>ssh 远程登陆</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-p</span> port useraccount@remote_address</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8),i=[l];function c(t,o){return a(),n("div",null,i)}const r=s(p,[["render",c],["__file","linux.html.vue"]]),d=JSON.parse('{"path":"/linux.html","title":"","lang":"en-US","frontmatter":{"prev":"./javascript","next":"./node"},"headers":[{"level":2,"title":"Linux 命令整理","slug":"linux-命令整理","link":"#linux-命令整理","children":[{"level":3,"title":"scp命令","slug":"scp命令","link":"#scp命令","children":[]},{"level":3,"title":"ssh 远程登陆","slug":"ssh-远程登陆","link":"#ssh-远程登陆","children":[]}]}],"git":{"updatedTime":1721738315000,"contributors":[{"name":"jeffrey","email":"1600793739@qq.com","commits":1}]},"filePathRelative":"linux.md"}');export{r as comp,d as data};
