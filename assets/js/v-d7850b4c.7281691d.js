"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30674],{458171:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-d7850b4c","path":"/devices/MIR-HE200-TY.html","title":"TuYa MIR-HE200-TY control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa MIR-HE200-TY control via MQTT","description":"Integrate your TuYa MIR-HE200-TY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Motion speed (numeric)","slug":"motion-speed-numeric","link":"#motion-speed-numeric","children":[]},{"level":3,"title":"Motion direction (enum)","slug":"motion-direction-enum","link":"#motion-direction-enum","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Radar scene (enum)","slug":"radar-scene-enum","link":"#radar-scene-enum","children":[]},{"level":3,"title":"Tumble switch (enum)","slug":"tumble-switch-enum","link":"#tumble-switch-enum","children":[]},{"level":3,"title":"Fall sensitivity (numeric)","slug":"fall-sensitivity-numeric","link":"#fall-sensitivity-numeric","children":[]},{"level":3,"title":"Tumble alarm time (numeric)","slug":"tumble-alarm-time-numeric","link":"#tumble-alarm-time-numeric","children":[]},{"level":3,"title":"Fall down status (enum)","slug":"fall-down-status-enum","link":"#fall-down-status-enum","children":[]},{"level":3,"title":"Static dwell alarm (text)","slug":"static-dwell-alarm-text","link":"#static-dwell-alarm-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1709322963000},"filePathRelative":"devices/MIR-HE200-TY.md"}')},957417:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var a=i(166252);const o=(0,a._)("h1",{id:"tuya-mir-he200-ty",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-mir-he200-ty","aria-hidden":"true"},"#"),(0,a.Uk)(" TuYa MIR-HE200-TY")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"MIR-HE200-TY")],-1),d=(0,a._)("td",null,"Vendor",-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Human presence sensor with fall function")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"illuminance_lux, presence, occupancy, motion_speed, motion_direction, radar_sensitivity, radar_scene, tumble_switch, fall_sensitivity, tumble_alarm_time, fall_down_status, static_dwell_alarm, linkquality")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MIR-HE200-TY.png",alt:"TuYa MIR-HE200-TY"})])],-1),u=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),m=(0,a._)("p",null,'Factory resetting by pushing the "Reset-Button" longer than 5 seconds or by using Touchlink factory reset.',-1),p=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),b=(0,a.uE)('<ul><li><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="motion-speed-numeric" tabindex="-1"><a class="header-anchor" href="#motion-speed-numeric" aria-hidden="true">#</a> Motion speed (numeric)</h3><p>Speed of movement. Value can be found in the published state on the <code>motion_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="motion-direction-enum" tabindex="-1"><a class="header-anchor" href="#motion-direction-enum" aria-hidden="true">#</a> Motion direction (enum)</h3><p>direction of movement from the point of view of the radar. Value can be found in the published state on the <code>motion_direction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>standing_still</code>, <code>moving_forward</code>, <code>moving_backward</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric" aria-hidden="true">#</a> Radar sensitivity (numeric)</h3><p>Sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="radar-scene-enum" tabindex="-1"><a class="header-anchor" href="#radar-scene-enum" aria-hidden="true">#</a> Radar scene (enum)</h3><p>Presets for sensitivity for presence and movement. Value can be found in the published state on the <code>radar_scene</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_scene&quot;: NEW_VALUE}</code>. The possible values are: <code>default</code>, <code>area</code>, <code>toilet</code>, <code>bedroom</code>, <code>parlour</code>, <code>office</code>, <code>hotel</code>.</p><h3 id="tumble-switch-enum" tabindex="-1"><a class="header-anchor" href="#tumble-switch-enum" aria-hidden="true">#</a> Tumble switch (enum)</h3><p>Tumble status switch. Value can be found in the published state on the <code>tumble_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tumble_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>ON</code>, <code>OFF</code>.</p><h3 id="fall-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#fall-sensitivity-numeric" aria-hidden="true">#</a> Fall sensitivity (numeric)</h3><p>Fall sensitivity of the radar. Value can be found in the published state on the <code>fall_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fall_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="tumble-alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#tumble-alarm-time-numeric" aria-hidden="true">#</a> Tumble alarm time (numeric)</h3><p>Tumble alarm time. Value can be found in the published state on the <code>tumble_alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tumble_alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>min</code>.</p><h3 id="fall-down-status-enum" tabindex="-1"><a class="header-anchor" href="#fall-down-status-enum" aria-hidden="true">#</a> Fall down status (enum)</h3><p>Fall down status. Value can be found in the published state on the <code>fall_down_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>maybe_fall</code>, <code>fall</code>.</p><h3 id="static-dwell-alarm-text" tabindex="-1"><a class="header-anchor" href="#static-dwell-alarm-text" aria-hidden="true">#</a> Static dwell alarm (text)</h3><p>Static dwell alarm. Value can be found in the published state on the <code>static_dwell_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),v={},f=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[n,(0,a._)("tbody",null,[l,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,a.w5)((()=>[(0,a.Uk)("TuYa")])),_:1})])]),c,s,r])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,m,(0,a.kq)(" Notes END: Do not edit below this line "),p,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);