var App=App||{};App.Model=App.Model||{},App.Collection=App.Collection||{},App.View=App.View||{},App.Router=App.Router||{},App.views=App.views||{},App.models=App.models||{},App.collections=App.collections||{},App.routers=App.routers||{},this.App=this.App||{},this.App.Templates=this.App.Templates||{},this.App.Templates.cloudcall=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' \n <div class="content_view">\n  <div class="container">\n    <h1 class="appheading">',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.text)?f=f.call(b,{hash:{},data:e}):(f=b.text,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n    <h2>Name</h2>\n    <p class="appdata appdata_name">',(f=c.page1Name)?f=f.call(b,{hash:{},data:e}):(f=b.page1Name,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n    <p class="appdata appdata_address">',(f=c.page1Address)?f=f.call(b,{hash:{},data:e}):(f=b.page1Address,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n  </div>\n</div>"}),this.App.Templates.cmsaddresses=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n      <option value="',(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===i?d.apply(a):d),e+=j(d)+'">',(d=c.name)?d=d.call(a,{hash:{},data:b}):(d=a.name,d=typeof d===i?d.apply(a):d),e+=j(d)+"</option>\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+=' \n <div class="content_view">\n  <div class="container">\n    <h1>',(g=c.header)?g=g.call(b,{hash:{},data:e}):(g=b.header,g=typeof g===i?g.apply(b):g),h+=j(g)+"</h1>\n    <p>",(g=c.text)?g=g.call(b,{hash:{},data:e}):(g=b.text,g=typeof g===i?g.apply(b):g),h+=j(g)+'</p>\n    <div class="row">\n    <select>\n      <option value="">Select</option>\n    ',g=c.each.call(b,b.addresses,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+='\n    </select>\n\n    <hr />\n    <div id="yolks">\n      <p id="name"></p>\n      <textarea readonly class="addressbox" id="address"></textarea>\n    </div>\n  </div>\n</div>'}),this.App.Templates.cmslist=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="\n        <p>"+j((b=a.paragraph,typeof b===i?b.apply(a):b))+"</p>\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+=' \n <div class="content_view">\n  <div class="container">\n    <h1>',(g=c.header)?g=g.call(b,{hash:{},data:e}):(g=b.header,g=typeof g===i?g.apply(b):g),h+=j(g)+"</h1>\n    <p>",(g=c.text)?g=g.call(b,{hash:{},data:e}):(g=b.text,g=typeof g===i?g.apply(b):g),h+=j(g)+'</p>\n    <div class="row">\n    ',g=c.each.call(b,b.paragraphs,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+="\n    </div>\n  </div>\n</div>"}),this.App.Templates.intro=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n    <div class="col-xs-6 col-sm-4 ',(d=c.responsiveClass)?d=d.call(a,{hash:{},data:b}):(d=a.responsiveClass,d=typeof d===i?d.apply(a):d),e+=j(d)+'">\n    <div class="container start-menu-item ',(d=c.className)?d=d.call(a,{hash:{},data:b}):(d=a.className,d=typeof d===i?d.apply(a):d),e+=j(d)+'">\n      <a class="btn start-menu-item-icon">\n        <i class="icon-',(d=c.iconClass)?d=d.call(a,{hash:{},data:b}):(d=a.iconClass,d=typeof d===i?d.apply(a):d),e+=j(d)+' icon-2x"></i>\n      </a>\n      <h5>',(d=c.menuTitle)?d=d.call(a,{hash:{},data:b}):(d=a.menuTitle,d=typeof d===i?d.apply(a):d),e+=j(d)+"</h5>\n      <h6>",(d=c.menuSubTitle)?d=d.call(a,{hash:{},data:b}):(d=a.menuSubTitle,d=typeof d===i?d.apply(a):d),e+=j(d)+"</h6>\n    </div>\n  </div>\n  "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+=' \n<div class="banner well center text-center">\n<h1>',(g=c.header)?g=g.call(b,{hash:{},data:e}):(g=b.header,g=typeof g===i?g.apply(b):g),h+=j(g)+"</h1>\n<p>",(g=c.text)?g=g.call(b,{hash:{},data:e}):(g=b.text,g=typeof g===i?g.apply(b):g),h+=j(g)+'</p>\n</div>\n<div class="row">\n  ',g=c.each.call(b,b.menuItems,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+="\n</div>\n\n\n\n"}),this.App.Templates.navbar=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' \n<nav class="navbar navbar-default" role="navigation">\n<div class="nav">\n  <a class="btn back pull-left"><i class="icon-chevron-left icon-2x"></i></a>\n  <div class="navbar-text2 pull-left">',(f=c.title)?f=f.call(b,{hash:{},data:e}):(f=b.title,f=typeof f===h?f.apply(b):f),g+=i(f)+'</div>\n  <a class="btn refresh pull-right"><i class="icon-refresh icon-2x"></i></a>\n</div>\n</nav>'}),this.App.Templates.populate=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' \n <div class="content_view">\n  <div class="container">\n    <h1>',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.text)?f=f.call(b,{hash:{},data:e}):(f=b.text,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n    <p><a class="btn btn-primary btn-lg populate-action-button"><i class="icon-external-link-sign"></i> ',(f=c.buttonText)?f=f.call(b,{hash:{},data:e}):(f=b.buttonText,f=typeof f===h?f.apply(b):f),g+=i(f)+'</a></p>\n    <p class="response_content alert"></p>\n    <p class="extra_response hidden">\n      ',(f=c.extraRes)?f=f.call(b,{hash:{},data:e}):(f=b.extraRes,f=typeof f===h?f.apply(b):f),g+=i(f)+"\n    </p>\n  </div>\n</div>"}),App.Router.MainRoute=Backbone.Router.extend({routes:{"":"mainPage",main:"mainPage"},mainPage:function(){var a=new App.View.MainView({el:$("body")[0],mainContainer:$("#main_page"),pageContainer:$("#page_view_container")});a.render()}}),App.Model.PageModel=Backbone.Model.extend({}),App.models.introPage=new App.Model.PageModel({title:"Welcome",header:"Welcome To FeedHenry",text:"Learn about and interact with mCMS",nextButtonText:"Let's Start",menuItems:[{className:"populate-action",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"Initialise",menuSubTitle:"Setup Initial Data",responsiveClass:"col-md-3 col-lg-2",iconClass:"off"},{className:"cloud-action",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"mCMS",menuSubTitle:"Try it now",responsiveClass:"col-md-3 col-lg-2",iconClass:"cloud"},{className:"cms-list",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"mCMS List Page",menuSubTitle:"CMS Lists",responsiveClass:"col-md-3 col-lg-2",iconClass:"list-alt"},{className:"cms-address",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"mCMS Address",menuSubTitle:"CMS Adresses",responsiveClass:"col-md-3 col-lg-2",iconClass:"user"}]}),App.models.cloudcallPage=new App.Model.PageModel({title:"Mobile CMS",header:"Simple CMS Fields",text:"Using Studio you can change the data show in this screen of the app. Tap the button to request a refresh of CMS data from the cloud. The fields displayed here are in section page1, and are called name and address",buttonText:"Refresh CMS",extraRes:"",cmsFieldData:"Initial App Data",page1Name:"Initial name value when app installed",page1Address:"Initial address value when app installed"}),App.models.populatePage=new App.Model.PageModel({title:"Populate CMS",header:"Initialise CMS",text:"Using Studio you enable CMS for you app, then tap the button to store initial data on the server",buttonText:"Populate",extraRes:""}),App.models.statsPage=new App.Model.PageModel({title:"Stats",header:"Stats",titleWidth:"50",text:"In addition to all of our App install/usage Analytics, you can also instrument your cloud code to see exactly how it is performing. Go to the Stats section of the Studio and see if your device has been detected."}),App.models.nodePage=new App.Model.PageModel({title:"Powered By Nodejs",header:"Powered By Nodejs",text:"FeedHenry Apps are made much more powerful by our Node.js cloud code. You have all of the functionality of Node available to you including all of its modules. This means you get powerful responsive business logic doing all the heavy lifting for your application.",titleWidth:"150"}),App.models.databrowserPage=new App.Model.PageModel({title:"Data Browser",header:"Data Browser",text:"Enter your name and then tap the button to save your name in our cloud database",moreInfo:"Now go to the Data Browser section of the App Studio and see if you can find your name stored there.",inputFieldLabel:"Please Enter Your Name",buttonText:"Save",extraRes:"Your data is now saved. Please go to studio and see your data using the Data Browser."}),App.models.weatherPage=new App.Model.PageModel({title:"Location Example",header:"Location Example",geoText:"Let’s grab your location and do something with it. Tap the button to find your location",geoButtonText:"Get My Location",geoLabelText:"My Location",getWeatherText:"Now we are going to use that location to request weather information from an online web-service via our cloud code. Tap the button to do this.",getWeatherButtonText:"Get My Weather Info",titleWidth:"180"}),App.models.cmsListPage=new App.Model.PageModel({title:"cms List Page",header:"CMS list",titleWidth:"150",text:"You can easily integrate with mCMS. Check out the the App Studio to see how to change the following data",paragraphs:[{paragraph:"The Quick brown fox jumped over the lazy dogs."},{paragraph:"Hello World"}]}),App.Model.Address=Backbone.Model.extend({}),App.Collection.Addresses=Backbone.Collection.extend({model:App.Model.Address}),App.collections.addresses=new App.Collection.Addresses([{name:"FH",address:"Cleaboy,\nWaterford"},{name:"Martin",address:"Tramore,\nCo. Waterford"}]),App.models.cmsAddresses=new App.Model.PageModel({title:"CMS Addresses",header:"Addresses",titleWidth:"150",text:"Check out the the App Studio to see how to change the following address data",addresses:[{name:"FH",address:"Cleayboy"},{name:"Martin",address:"Tramore"}]}),App.View.NavbarView=Backbone.View.extend({template:App.Templates.navbar,initialize:function(a){this.model=new Backbone.Model({title:a.title,titleWidth:a.titleWidth}),this.listenTo(this.model,"change:title",this.render),_.bindAll(this,"setTitle")},render:function(){return this.$el=this.template(this.model.toJSON()),this.$el},setTitle:function(a){this.model.set("title",a)}}),App.View.IntroView=Backbone.View.extend({template:App.Templates.intro,model:App.models.introPage,render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el}}),App.View.BaseView=Backbone.View.extend({className:"page_view",render:function(){return this.navbar=new App.View.NavbarView({title:this.model.get("title"),titleWidth:this.model.get("titleWidth")}),this.$el.empty(),this.$el.append(this.navbar.render()),this.$el.append(this.template(this.model.toJSON())),this.$el},dataError:function(a){this.$el.find(".response_content").removeClass("alert-success").addClass("alert").addClass("alert-danger").html("Ops, something went wrong ("+a+"). Please try again later.")},dataReset:function(){this.$el.find(".response_content").removeClass("alert-success").removeClass("alert").removeClass("alert-danger").html("")}}),App.View.CMSAddressesView=Backbone.View.extend({events:{"change select":"changed"},initialize:function(){this.collection=App.collections.addresses;var a=this;this.listenTo(this.collection,"reset",function(){console.log("address change - calling render"),a.render()})},render:function(){this.navbar=new App.View.NavbarView({title:"CMS Addresses"}),this.$el.empty(),this.$el.append(this.navbar.render());var a=App.Templates.cmsaddresses({addresses:this.collection.toJSON()});return console.log("tpl: ",a),this.$el.append(a),this.$el},changed:function(a){var b=$(a.currentTarget).val(),c=this.collection.findWhere({name:b});this.$el.find("#address").empty().append(c.get("address")),this.$el.find("#name").empty().append(c.get("name"))},dataError:function(a){this.$el.find(".response_content").removeClass("alert-success").addClass("alert").addClass("alert-danger").html("Ops, something went wrong ("+a+"). Please try again later.")},dataReset:function(){this.$el.find(".response_content").removeClass("alert-success").removeClass("alert").removeClass("alert-danger").html("")}}),App.View.MainView=Backbone.View.extend({events:function(){var a="click",b={};return b[a+" .populate-action"]="populateActionPage",b[a+" .cloud-action"]="cloudActionPage",b[a+" .cms-list"]="cmsListPage",b[a+" .cms-address"]="cmsAddressPage",b[a+" .btn.refresh"]="cmsRefresh",b[a+" .btn.back"]="backToIntro",b},initialize:function(a){this.mainViewContainer=a.mainContainer,this.pageViewContainer=a.pageContainer,_.bindAll(this,"populateActionPage","cloudActionPage","cmsListPage","cmsAddressPage","backToIntro")},render:function(){var a=new App.View.IntroView;this.introView=a.render(),this.mainViewContainer.html(this.introView)},populateActionPage:function(){if(!this.populateView){var a=new App.View.PopulateView;this.populateView=a.render()}this.showPage(this.populateView)},cloudActionPage:function(){if(!this.cloudCallView){var a=new App.View.CloudcallView;this.cloudCallView=a.render()}this.showPage(this.cloudCallView)},cmsAddressPage:function(){if(console.log("calling CMS address page"),!this.cmsAddressView){var a=new App.View.CMSAddressesView;this.martinView=a,this.cmsAddressView=a.render()}this.showPage(this.cmsAddressView)},cmsListPage:function(){if(!this.cmsListView){var a=new App.View.CMSListView;this.cmsListView=a.render()}this.showPage(this.cmsListView)},setListData:function(){$fh.cms.getField({path:"simpleList.title"},function(a){App.models.cmsListPage.set("header",a)},function(a){console.log("error retrieving list title, err: ",a)}),$fh.cms.getField({path:"simpleList.subtitle"},function(a){App.models.cmsListPage.set("text",a)},function(a){console.log("error retrieving list subtitle, err: ",a)}),$fh.cms.getList({path:"simpleList.list"},function(a){App.models.cmsListPage.set("paragraphs",a)},function(a){console.log("error retrieving list data, err: ",a)})},setAddressData:function(){$fh.cms.getList({path:"addresses.list"},function(a){console.log("setting collection to:",a),App.collections.addresses.reset(a)},function(a){console.log("error retrieving list data, err: ",a)})},setDummyListData:function(){App.models.cmsListPage.set("paragraphs",[{paragraph:"one"},{paragraph:"two"},{paragraph:"three"}])},cmsRefresh:function(){console.log("refreshing");var a=this;$fh.cms.updateAll(function(){console.log("Successful mCMS refresh"),$fh.cms.getField({path:"simpleFields.name"},function(b){console.log("Retrieved field value: ",b),$fh.cms.getField({path:"simpleFields.address"},function(c){console.log("Retrieved field value: ",c),console.log("Retrieved field value: ",c),App.models.cloudcallPage.set("page1Name",b),App.models.cloudcallPage.set("page1Address",c),a.setListData(),a.setAddressData()},function(a){console.log("error retrieving field value, err: ",a)})},function(a){console.log("error retrieving field value, err: ",a)})},function(b){console.log("Failed mCMS refresh"),a.dataError("Failed mCMS refresh",b)})},showPage:function(a){this.pageViewContainer.html(a),this.doTransition(this.mainViewContainer,this.pageViewContainer,"slide-from-right","slide-to-left")},backToIntro:function(){this.doTransition(this.pageViewContainer,this.mainViewContainer,"slide-from-left","slide-to-right")},doTransition:function(a,b,c,d){b.addClass("effeckt-page-animating effeckt-page-active"),a.addClass("effeckt-page-active effeckt-page-animating"),a.addClass(d),b.addClass(c);var e=!1,f=!1,g=function(){a.removeClass("effeckt-page-animating effeckt-page-active "+d),b.removeClass("effeckt-page-animating "+c)};b.on(Effeckt.transitionAnimationEndEvent,function(){b.off(Effeckt.transitionAnimationEndEvent),e=!0,f&&g()}),a.on(Effeckt.transitionAnimationEndEvent,function(){a.off(Effeckt.transitionAnimationEndEvent),f=!0,e&&g()})}}),App.View.CloudcallView=App.View.BaseView.extend({template:App.Templates.cloudcall,model:App.models.cloudcallPage,initialize:function(){this.listenTo(this.model,"change",this.render)}}),App.View.PopulateView=App.View.BaseView.extend({template:App.Templates.populate,model:App.models.populatePage,events:{"click .populate-action-button":"populateCall"},initialize:function(){_.bindAll(this,"gotData","dataError")},populateCall:function(){var a=this;$fh.act({act:"populate",req:{}},function(b){a.gotData(b)},function(b,c){a.dataError(b,c)})},gotData:function(a){this.$el.find(".hidden").removeClass("hidden"),this.$el.find(".response_content").removeClass("alert-error").addClass("alert-success").html("Response: "+a.text),this.$el.find(".extra_response").removeClass("hidden")}}),App.View.CMSListView=App.View.BaseView.extend({template:App.Templates.cmslist,model:App.models.cmsListPage,initialize:function(){var a=this;this.listenTo(this.model,"change",function(){console.log("list change - calling render"),a.render()})}});var initialize=function(){MBP.preventZoom(),MBP.enableActive(),App.routers.mainRoute=new App.Router.MainRoute,Backbone.history.start({pushState:!0,root:document.location.pathname}),$fh.cms.init(function(){console.log("Successful mCMS initialisation")},function(){console.log("Failed mCMS initialisation")}),$fh.act({act:"recordActivity",req:{action:"Client App Started"}},function(){},function(){})};window.device&&window.device.cordova?document.addEventListener("deviceready",initialize,!1):$(initialize),Handlebars.registerHelper("visibleClass",function(a){var b=[];return a>=2&&b.push("hidden-xs"),a>=3&&b.push("hidden-sm"),a>=4&&b.push("hidden-md"),b.join(" ")});