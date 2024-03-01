"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48474],{319389:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-354bbbd6","path":"/devices/FUT089Z.html","title":"MiBoxer FUT089Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"MiBoxer FUT089Z control via MQTT","description":"Integrate your MiBoxer FUT089Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-04-30T08:00:58.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Exposing the controls","slug":"exposing-the-controls","link":"#exposing-the-controls","children":[]},{"level":3,"title":"Directly controlling ZigBee devices","slug":"directly-controlling-zigbee-devices","link":"#directly-controlling-zigbee-devices","children":[]},{"level":3,"title":"Quirks","slug":"quirks","link":"#quirks","children":[]},{"level":3,"title":"Touchlink","slug":"touchlink","link":"#touchlink","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1709322963000},"filePathRelative":"devices/FUT089Z.md"}')},180989:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var n=i(166252);const o=(0,n._)("h1",{id:"miboxer-fut089z",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#miboxer-fut089z","aria-hidden":"true"},"#"),(0,n.Uk)(" MiBoxer FUT089Z")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"FUT089Z")],-1),s=(0,n._)("td",null,"Vendor",-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"RGB+CCT Remote")],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, voltage, action, linkquality")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FUT089Z.png",alt:"MiBoxer FUT089Z"})])],-1),c=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the device:</p><ul><li>Allow Zigbee2MQTT pairing</li><li>Press the Master ON and OFF buttons simultaneously until the central red LED flashes quickly.</li></ul><h3 id="exposing-the-controls" tabindex="-1"><a class="header-anchor" href="#exposing-the-controls" aria-hidden="true">#</a> Exposing the controls</h3><p>By default, the controls of the remote are not exposed. This is due to the non-standard way the remote communicates.</p><p>In order to expose the controls, you need to:</p>',7),h=(0,n._)("li",null,[(0,n.Uk)("Open "),(0,n._)("code",null,"Zigbee2MQTT"),(0,n.Uk)(" (the web interface)")],-1),p=(0,n._)("li",null,[(0,n.Uk)("Go to the "),(0,n._)("code",null,"Extensions"),(0,n.Uk)(" tab")],-1),m=(0,n._)("li",null,[(0,n.Uk)("Click the "),(0,n._)("code",null,"+"),(0,n.Uk)("-button to add a new extension file")],-1),b=(0,n._)("li",null,[(0,n.Uk)("Enter a name for the extension file, e.g.: "),(0,n._)("code",null,"miboxer-fut089z-controls-exposer.js")],-1),g={href:"https://github.com/Koenkk/zigbee2mqtt-user-extensions/blob/main/stable/miboxer-fut089z/controls-exposer.js",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/Koenkk/zigbee2mqtt-user-extensions/blob/main/unstable/miboxer-fut089z/controls-exposer.js",target:"_blank",rel:"noopener noreferrer"},f=(0,n._)("li",null,[(0,n.Uk)("Click the "),(0,n._)("code",null,"Save"),(0,n.Uk)(" button")],-1),k=(0,n.uE)('<p>The controls of all your MiBoxer FUT089Z remotes are now properly exposed via MQTT and automatically show up in Home Assistant. (If you don&#39;t use Home Assistant, you probably have to subscribe to the appropriate MQTT topics. You&#39;ll find them in the extension code.)</p><p>Each MiBoxer FUT089Z remote shows up as a separate device in Home Assistant.<br> By default they will report 3 sensors</p><ul><li><code>Battery</code> (%)</li><li><code>Voltage</code> (mV)</li><li><code>Linkquality</code> (lqi)</li></ul><p>The extension adds 3 more sensors:</p><ul><li><code>Brightness</code> (%)</li><li><code>Color Temperature</code> (mireds)</li><li><code>Color</code> (not implemented yet)</li></ul><p>As well as on trigger for each button:</p><ul><li>button_group_1_on</li><li>button_group_1_off</li><li>...</li><li>button_group_8_on</li><li>button_group_8_off</li></ul><p>Example automation using a button:</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>alias: MiBoxerRemote1_Button_Group_8_On\ndescription: &quot;&quot;\ntrigger:\n  - platform: device\n    domain: mqtt\n    device_id: 37c0de12e46bb817b3ed5dcae834feee\n    type: button_short_press\n    subtype: button_group_8_on\n    discovery_id: 0x003c84fffeb6a253_zone_8_button_on\ncondition: []\naction:\n  - service: light.turn_on\n    data: {}\n    target:\n      device_id: 0887f3aa92fa71265fcb5f1d7021c2a7\nmode: restart\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(You can easily create them automatically by going to the Device in Home Assistant and adding an Automation from there.)</p><p>Example automation using the brightness slider:<br> (If you create such an Automation automatically through the Device&#39;s page in Home Assistant, it will create a buggy <code>platform: device</code> automation, please use <code>platform: state</code> instead as shown blow.)</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>alias: MiBoxerRemote1_BrightnessSlider\ndescription: &quot;&quot;\ntrigger:\n  - platform: state\n    entity_id:\n      - sensor.none_brightness\ncondition: []\naction:\n  - service: light.turn_on\n    data:\n      brightness_pct: &quot;{{ trigger.to_state.state }}&quot;\n      transition: 0.2\n    target:\n      device_id: 8984f2bd0c64baa8badb3fe895f7dd95\n    enabled: true\nmode: restart\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bugs:</p><ul><li>The Color Wheel control is currently not supported. (Problem is that the remote sends the last brightness value instead of the selected color value. Fixing probably requires reverse engineering th proprietary protocol. )</li><li>The R, G, B and W buttons have the exact same issue as the color wheel.</li><li>The Color Temperature Slider control doesn&#39;t work reliably. Sometimes it just sends the last brightness value (those messages are filtered out by the extension to avoid complications) and sometimes it just works.</li></ul>',14),y={href:"https://github.com/Koenkk/zigbee2mqtt/issues/10708",target:"_blank",rel:"noopener noreferrer"},_=(0,n.uE)('<h3 id="directly-controlling-zigbee-devices" tabindex="-1"><a class="header-anchor" href="#directly-controlling-zigbee-devices" aria-hidden="true">#</a> Directly controlling ZigBee devices</h3><p>Alternatively, or in addition to the approach mentioned above, you can also directly control ZigBee lights etc. with this remote. The remote has 7 groups of on/off buttons, each button group controlling a different zone. In addition to that, the remote has an eighth button group consisting of the upper dedicated <code>ON</code> and <code>OFF</code> buttons corresponding to another zone. Each zone is mapped to a different ZigBee group, which are currently hardcoded: Zone 1 is mapped to ZigBee group 101, Zone 2 to 102 and so forth... This means that if you have multiple MiBoxer FUT089T remotes, they all control the same ZigBee groups (101-108).</p><p>To directly control lights or smartplugs without going through MQTT (and Home Assistant or whatever),</p><ul><li>first create a ZigBee group with the correct ID (10X),</li><li>name it like you wish,</li><li>then add the devices you intend to control to that group (pay attention to use the right termination point). Very important: do NOT add the remote itself to the group.</li></ul><p>The <code>ON</code> and <code>OFF</code> Master Buttons on top of the remote control an extra zone with Group ID 108. You can for instance use it as a master switch or for just another light/smartplug etc...</p><p>The beauty of this approach is that the remote will work even with Zigbee2MQTT down, ... even better without any alive Zigbee controller.<br> It looks like a perfect emergency backup.</p><h3 id="quirks" tabindex="-1"><a class="header-anchor" href="#quirks" aria-hidden="true">#</a> Quirks</h3><p>Like most of battery powered devices, the remote does not respond to any ZigBee commands sent after initial configuration without taking out the battery and putting it back in. To send any command to it (like a Leave or configure command), take out the battery, send the command and quickly put it back in.</p><p>It does also not support binding its light output clusters or manually joining it to a group.</p><h3 id="touchlink" tabindex="-1"><a class="header-anchor" href="#touchlink" aria-hidden="true">#</a> Touchlink</h3><p>The remote supports Touchlink. It is unclear how the Touchlink configuration interacts with the regular group configuration so if you intend to use Touchlink it would probably best not to pair it to a network.</p>',11),x=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),T=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_to_level</code>, <code>color_temperature_move</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),w={},q=(0,i(983744).Z)(w,[["render",function(e,t){const i=(0,n.up)("RouterLink"),w=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[l,(0,n._)("tr",null,[s,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=MiBoxer"},{default:(0,n.w5)((()=>[(0,n.Uk)("MiBoxer")])),_:1})])]),r,d,u])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,n._)("ul",null,[h,p,m,b,(0,n._)("li",null,[(0,n.Uk)("Copy the contents of this file "),(0,n._)("a",g,[(0,n.Uk)("controls-exposer.js"),(0,n.Wm)(w)]),(0,n.Uk)(" (if it doesn't exist use this one instead: "),(0,n._)("a",v,[(0,n.Uk)("controls-exposer.js"),(0,n.Wm)(w)]),(0,n.Uk)(") and paste it into the extension file you just created")]),f]),k,(0,n._)("p",null,[(0,n.Uk)("If you think you can help fixing the buggy controls, your best bet is probably to start "),(0,n._)("a",y,[(0,n.Uk)("in this issue"),(0,n.Wm)(w)]),(0,n.Uk)(" where the initial reverse engineering efforts have been documented.")]),_,(0,n.kq)(" Notes END: Do not edit below this line "),x,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),T])}]])}}]);