(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(157),c=a(155),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=l;var d="1097489062"},151:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(160),r=a.n(n),i=a(161),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"header p":{color:"grey",fontStyle:"italic"}}},delete o.a.googleFonts;var s=new r.a(o.a);var c=s.rhythm,l=s.scale},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{width:50,height:50,src:"/static/e2c6d3619b444326d7ee780d821adaeb/f39b3/profile-pic.png",srcSet:"/static/e2c6d3619b444326d7ee780d821adaeb/f39b3/profile-pic.png 1x,\n/static/e2c6d3619b444326d7ee780d821adaeb/ddf57/profile-pic.png 1.5x,\n/static/e2c6d3619b444326d7ee780d821adaeb/7e625/profile-pic.png 2x,\n/static/e2c6d3619b444326d7ee780d821adaeb/80e1d/profile-pic.png 3x"}}},site:{siteMetadata:{author:"Ondřej Chrastina",social:{twitter:"ChrastinaOndrej"}}}}}},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(162),l=a.n(c);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,d=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Custom Elements Marketplace",description:"Samples of the HTML web pages that can be used as Custom Element (BETA) Extensions in Kentico Cloud. Custom elements help you with extending the basic functionality of Kentico Cloud UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed <iframe> and interacts with the Kentico Cloud app via the Custom Elements API.",author:"Ondřej Chrastina"}}}}},157:function(e,t,a){"use strict";a(34);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(4),c=a.n(s),l=a(33),d=a.n(l),u=(a(152),o.a.createContext({})),p=function(e){return o.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};a(158);var m=a(154),h=a(159),g=a.n(h),f=a(151);var y="996065848",b=function(){return o.a.createElement(p,{query:y,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return o.a.createElement("div",{style:{display:"flex",marginTop:Object(f.a)(2.5)}},o.a.createElement(g.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(f.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,a),".",o.a.createElement("br",null),o.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"...You should follow him on Twitter")))},data:m})},w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.description,i=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(f.b)(1.5),{marginBottom:Object(f.a)(1.5),marginTop:0})},o.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(f.a)(24),padding:Object(f.a)(1.5)+" "+Object(f.a)(.75)}},o.a.createElement("header",null,e,o.a.createElement("p",null,r)),o.a.createElement("main",null,i),o.a.createElement("footer",null,o.a.createElement(b,null),"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," ","using"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/"},"Gatsby Starter Blog")," ","by"," ",o.a.createElement("a",{href:"https://www.twitter.com/kylemathews"},"Kyle Mathews")))},t}(o.a.Component);t.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-a1f788cb0b5cdf3d7dc1.js.map