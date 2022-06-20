"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return c}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),f=p(r),c=a,k=f["".concat(u,".").concat(c)]||f[c]||m[c]||l;return r?n.createElement(k,i(i({ref:e},s),{},{components:r})):n.createElement(k,i({ref:e},s))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1096:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return g}});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&s(t,r,e[r]);if(o)for(var r of o(e))p.call(e,r)&&s(t,r,e[r]);return t};const f={},c="Configuration",k={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"When you use Sharkur you will have more configuration files because:",source:"@site/docs/sharkur/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/sharkur/configuration",draft:!1,editUrl:"https://github.com/SharkurMC/docs/blob/main/docs/sharkur/configuration.md",tags:[],version:"current",lastUpdatedBy:"Hyro",lastUpdatedAt:1655741237,formattedLastUpdatedAt:"6/20/2022",frontMatter:{},sidebar:"primary",previous:{title:"Introduction",permalink:"/sharkur/"},next:{title:"Commands",permalink:"/sharkur/commands"}},d={},g=[{value:"Sharkur Configuration",id:"sharkur-configuration",level:2},{value:"Settings",id:"settings",level:3},{value:"Messages",id:"messages",level:4},{value:"Commands",id:"commands",level:4}],h={toc:g};function N(t){var e,r=t,{components:a}=r,s=((t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(e=m(m({},h),s),l(e,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",m({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"When you use Sharkur you will have more configuration files because:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sharkur is a fork of Purpur,"),(0,n.kt)("li",{parentName:"ul"},"Purpur is a fork of Pufferfish,"),(0,n.kt)("li",{parentName:"ul"},"Pufferfish is a fork of Paper,"),(0,n.kt)("li",{parentName:"ul"},"Paper is a fork of Spigot,"),(0,n.kt)("li",{parentName:"ul"},"Spigot is a fork of CraftBukkit"),(0,n.kt)("li",{parentName:"ul"},"CraftBukkit is a fork of vanilla")),(0,n.kt)("p",null,"All configuration files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://minecraft.fandom.com/wiki/Server.properties"}),"Server Configuration (server.properties)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://bukkit.fandom.com/wiki/Bukkit.yml"}),"Bukkit Configuration (bukkit.yml)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://www.spigotmc.org/wiki/spigot-configuration/"}),"Spigot Configuration (spigot.yml)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.papermc.io/paper/reference/paper-global-configuration"}),"Paper Configuration (config/paper-global.yml,world/paper-world.yml)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://docs.pufferfish.host/setup/pufferfish-fork-configuration/"}),"Pufferfish Configuration (pufferfish.yml)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://purpurmc.org/docs/Configuration/"}),"Purpur Configuration (purpur.yml)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#sharkur-configuration"}),"Sharkur Configuration (sharkur.yml)"))),(0,n.kt)("h2",m({},{id:"sharkur-configuration"}),"Sharkur Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"NAME"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"verbose"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sets whether the server should dump all configuration values to the server log on startup"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"config-version"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Do not change this!")," This is used internally to help automatically update your config"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"-")))),(0,n.kt)("h3",m({},{id:"settings"}),"Settings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"NAME"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"disable-user-cache"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sets whether to use usercache.json file. ",(0,n.kt)("strong",{parentName:"td"},"We do not recommend disabling it on online servers.")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"false")))),(0,n.kt)("h4",m({},{id:"messages"}),"Messages"),(0,n.kt)("p",null,"Messages use MiniMessage formatting.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://webui.adventure.kyori.net/"}),"Web Interface")," | ",(0,n.kt)("a",m({parentName:"p"},{href:"https://docs.adventure.kyori.net/"}),"Documentation"),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"NAME"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"sharkur-commands-prefix"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sets the prefix for sharkur commands"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"<gradient:#1db0f3:#64cdfd>(Sharkur)</gradient:#1db0f3:#64cdfd>")))),(0,n.kt)("h4",m({},{id:"commands"}),"Commands"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"NAME"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"version"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sets whether to register the ",(0,n.kt)("inlineCode",{parentName:"td"},"/version")," command"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"plugins"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sets whether to register the ",(0,n.kt)("inlineCode",{parentName:"td"},"/plugins")," command"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"reload"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sets whether to register the ",(0,n.kt)("inlineCode",{parentName:"td"},"/reload")," command"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"help"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Sets whether to register the ",(0,n.kt)("inlineCode",{parentName:"td"},"/help")," command"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"true")))))}N.isMDXComponent=!0}}]);