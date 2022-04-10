"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1493],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,f=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3687:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_label:"Creating Commands",title:"Creating Commands",sidebar_position:5.4},l=void 0,d={unversionedId:"BedWars1058/developers/commands",id:"BedWars1058/developers/commands",title:"Creating Commands",description:"If you want to create a command for your add-on like /bw mycmd continue reading on this page.",source:"@site/docs/BedWars1058/developers/commands.md",sourceDirName:"BedWars1058/developers",slug:"/BedWars1058/developers/commands",permalink:"/docs/BedWars1058/developers/commands",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/developers/commands.md",tags:[],version:"current",lastUpdatedBy:"ajgeiss0702",lastUpdatedAt:1649604848,formattedLastUpdatedAt:"4/10/2022",sidebarPosition:5.4,frontMatter:{sidebar_label:"Creating Commands",title:"Creating Commands",sidebar_position:5.4},sidebar:"bw1058",previous:{title:"Events",permalink:"/docs/BedWars1058/developers/events"},next:{title:"Custom Levels",permalink:"/docs/BedWars1058/developers/custom-levels"}},u=[],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to create a command for your add-on like ",(0,o.kt)("inlineCode",{parentName:"p"},"/bw mycmd")," continue reading on this page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new class with extends ",(0,o.kt)("inlineCode",{parentName:"p"},"com.andrei1058.bedwars.command.SubCommand"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class TutorialCommand extends SubCommand {\n    \n    //Provide information about the command\n    public TutorialCommand(ParentCommand parent, String name) {\n        super(parent, name);\n    }\n    \n    @Override\n    //Execute your code. return found will result command not found\n    public boolean execute(String[] args, CommandSender s) {\n        return false;\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Now you have to provide some information about your command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public TutorialCommand(ParentCommand parent, String name) {\n        super(parent, name);\n\n        // Is it a cmd for ops? False if you want it to be a public command.\n        setOpCommand(true); //false if you want it to be a public command\n\n        //Do you want to show it at /bw ?\n        //Only ops can see the cmds list\n        //Because the players receive a static list from messages file\n        //If you set this to true, you MUST add also setDisplayInfo()\n        showInList(true);\n\n        //This is the command description at /bw\n        //It requires a TextComponent but if you don\'t know how to use it\n        //you can use com.andrei1058.bedwars.arena.Misc.msgHoverClick()\n        setDisplayInfo(Misc.msgHoverClick("description", "hover description",\n                "run this on click", ClickEvent.Action.RUN_COMMAND));\n\n        //This is the order used to show sub-commands at /bw\n        //The max value is 20\n        //Lower value to show it upper, higher value to show it on the bottom\n        setPriority(14);\n        \n        //Set this to true if it is a command used for arena set-up\n        setArenaSetupCommand(false);\n    }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," After that you can deal with your code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public boolean execute(String[] args, CommandSender s) {\n\n        //this will send "cmd not found" msg to the console\n        if (!(s instanceof Player)) return false;\n        \n        Player p = (Player) s;\n        \n        if (args[0].equalsIgnoreCase("apple")){\n            p.getInventory().addItem(new ItemStack(Material.APPLE));\n        }\n        \n        //the command was executed in its scope so return true\n        //again, return false will return command not found msg\n        return true;\n    }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Registering your sub-command:"),(0,o.kt)("p",null,"All you have to do is to initialize the class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public void onEnable() {\n        //Disable if pl not found\n        if (Bukkit.getPluginManager().isPluginEnabled("BedWars1058")) {\n            getLogger().severe("BedWars1058 was not found. Disabling...");\n            setEnabled(false);\n            return;\n        }\n        \n        //Your command is: /bw tutorial apple\n        //com.andrei1058.bedwars.commands.main.MainCommand\n        BedWars bedwarsAPI = Bukkit.getServicesManager().getRegistration(BedWars.class).getProvider();\n        new TutorialCommand(bedwarsAPI.getBedWarsCommand(), "tutorial");\n    }\n')))}m.isMDXComponent=!0}}]);