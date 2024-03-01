"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[60920],{239765:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-73dfc664","path":"/devices/SNZB-06P.html","title":"SONOFF SNZB-06P control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF SNZB-06P control via MQTT","description":"Integrate your SONOFF SNZB-06P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Sensitivity","slug":"sensitivity","link":"#sensitivity","children":[]},{"level":3,"title":"Detection duration","slug":"detection-duration","link":"#detection-duration","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Occupancy timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]},{"level":3,"title":"Occupancy sensitivity (enum)","slug":"occupancy-sensitivity-enum","link":"#occupancy-sensitivity-enum","children":[]},{"level":3,"title":"Illumination (enum)","slug":"illumination-enum","link":"#illumination-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1709322963000},"filePathRelative":"devices/SNZB-06P.md"}')},280885:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(166252);const o=(0,n._)("h1",{id:"sonoff-snzb-06p",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#sonoff-snzb-06p","aria-hidden":"true"},"#"),(0,n.Uk)(" SONOFF SNZB-06P")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"SNZB-06P")],-1),s=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee occupancy sensor")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"occupancy, occupancy_timeout, occupancy_sensitivity, illumination, linkquality")],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SNZB-06P.png",alt:"SONOFF SNZB-06P"})])],-1),r=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Firmware 1.0.3 can be misbehaving, as of December 2023 upgrade to 1.0.5 is recommended.</p><p>Additional settings currently not exposed in Z2M can be adjusted via the Dev console:</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity" aria-hidden="true">#</a> Sensitivity</h3><p>Select the msOccupancySensing Cluster, ultrasonicUToOThreshold Attribute is the sensitivity setting.</p><p>1 represents low sensitivity with a detection distance of 2.5m.<br> 2 represents medium sensitivity with a detection distance of 3.5m.<br> 3 represents high sensitivity with a detection distance of 4m.</p><h3 id="detection-duration" tabindex="-1"><a class="header-anchor" href="#detection-duration" aria-hidden="true">#</a> Detection duration</h3><p>Select the msOccupancySensing Cluster, ultrasonicOToUDelay is the detection duration setting.</p><p>On firmware versions lower than 1.0.5, the shortest detection duration is 30 (seconds), otherwise, the sensor will stay permanently on detected status.</p><p>Firmware version 1.0.5 and above allows setting the shortest detection duration to 15 (seconds).</p>',10),h={href:"https://sonoff.tech/product-review/tutorial/snzb-06p-firmware-upgrade-and-home-assistant-operation-guide/",target:"_blank",rel:"noopener noreferrer"},p=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),m=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),y=(0,n.uE)('<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric" aria-hidden="true">#</a> Occupancy timeout (numeric)</h3><p>Unoccupied to occupied delay. Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>65535</code>.</p><h3 id="occupancy-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#occupancy-sensitivity-enum" aria-hidden="true">#</a> Occupancy sensitivity (enum)</h3><p>Sensitivity of human presence detection. Value can be found in the published state on the <code>occupancy_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="illumination-enum" tabindex="-1"><a class="header-anchor" href="#illumination-enum" aria-hidden="true">#</a> Illumination (enum)</h3><p>Only updated when occupancy is detected. Value can be found in the published state on the <code>illumination</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>dim</code>, <code>bright</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),v={},g=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,n.up)("RouterLink"),v=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[c,(0,n._)("tr",null,[s,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=SONOFF"},{default:(0,n.w5)((()=>[(0,n.Uk)("SONOFF")])),_:1})])]),d,u,l])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),r,(0,n._)("p",null,[(0,n._)("a",h,[(0,n.Uk)("Source - Sonoff documentation"),(0,n.Wm)(v)])]),(0,n.kq)(" Notes END: Do not edit below this line "),p,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),m,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),y])}]])}}]);