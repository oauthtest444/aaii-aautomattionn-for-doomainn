try{let e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`870b9a58-734b-49a2-afdd-17def4509306`,e._sentryDebugIdIdentifier=`sentry-dbid-870b9a58-734b-49a2-afdd-17def4509306`)}catch{}import{q as e,y as t}from"./react-C9EcEEoD.js";import{a as n}from"./rolldown-runtime-Bqsl3lKq.js";import{Fr as r,Jn as i,Jr as a,Lr as o,Yr as s,at as c,p as l}from"./three-BhPyDYUp.js";import{Rc as u,Yo as d,rc as f,zc as p}from"./src-D838am2T.js";var m={fragment:`
    // Modified version of Line2 shader from three-stdlib
    uniform vec3 diffuse;
    uniform float opacity;
    uniform float linewidth;
    uniform vec3 uStartPoint;
    uniform vec3 uEndPoint;
    uniform float uAngle;
    uniform vec2 resolution;
    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;
    uniform float uTotalScreenDistance;

    varying vec3 vInstanceStart;
    varying vec3 vInstanceEnd;

    #ifdef USE_DASH

      uniform float dashOffset;
      uniform float dashSize;
      uniform float gapSize;

    #endif

    uniform float uDistance;
    uniform float uTime;

    varying float vLineDistance;

    #ifdef WORLD_UNITS

      varying vec4 worldPos;
      varying vec3 worldStart;
      varying vec3 worldEnd;

      #ifdef USE_DASH

        varying vec2 vUv;

      #endif

    #else

      varying vec2 vUv;

    #endif

    #include <common>
    #include <fog_pars_fragment>
    #include <logdepthbuf_pars_fragment>
    #include <clipping_planes_pars_fragment>

    #ifdef USE_COLOR
      #ifdef USE_LINE_COLOR_ALPHA
        varying vec4 vLineColor;
      #else
        varying vec3 vLineColor;
      #endif
    #endif

    vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

      float mua;
      float mub;

      vec3 p13 = p1 - p3;
      vec3 p43 = p4 - p3;

      vec3 p21 = p2 - p1;

      float d1343 = dot( p13, p43 );
      float d4321 = dot( p43, p21 );
      float d1321 = dot( p13, p21 );
      float d4343 = dot( p43, p43 );
      float d2121 = dot( p21, p21 );

      float denom = d2121 * d4343 - d4321 * d4321;

      float numer = d1343 * d4321 - d1321 * d4343;

      mua = numer / denom;
      mua = clamp( mua, 0.0, 1.0 );
      mub = ( d1343 + d4321 * ( mua ) ) / d4343;
      mub = clamp( mub, 0.0, 1.0 );

      return vec2( mua, mub );

    }

    void main() {

      #include <clipping_planes_fragment>

      #ifdef USE_DASH

        if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

        if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

      #endif

      float alpha = opacity;

      #ifdef WORLD_UNITS

        // Find the closest points on the view ray and the line segment
        vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
        vec3 lineDir = worldEnd - worldStart;
        vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

        vec3 p1 = worldStart + lineDir * params.x;
        vec3 p2 = rayEnd * params.y;
        vec3 delta = p1 - p2;
        float len = length( delta );
        float norm = len / linewidth;

        #ifndef USE_DASH

          #ifdef USE_ALPHA_TO_COVERAGE

            float dnorm = fwidth( norm );
            alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

          #else

            if ( norm > 0.5 ) {

              discard;

            }

          #endif

        #endif

      #else

        #ifdef USE_ALPHA_TO_COVERAGE

          // artifacts appear on some hardware if a derivative is taken within a conditional
          float a = vUv.x;
          float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
          float len2 = a * a + b * b;
          float dlen = fwidth( len2 );

          if ( abs( vUv.y ) > 1.0 ) {

            alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

          }

        #else
          float pi = 3.1415926535897932384626433832795;

          vec4 clipStartPoint = modelViewMatrix * projectionMatrix * vec4(vInstanceStart, 1.0);
          vec4 clipEndPoint = modelViewMatrix * projectionMatrix * vec4(vInstanceEnd, 1.0);

          vec3 ndcStartPoint = clipStartPoint.xyz / clipStartPoint.w;
          vec3 ndcEndPoint = clipEndPoint.xyz / clipEndPoint.w;

          vec2 screenStartPoint = ((ndcStartPoint.xy + 1.0) * 0.5) * resolution;
          vec2 screenEndPoint = ((ndcEndPoint.xy + 1.0) * 0.5) * resolution;

          float screenDist = length(screenEndPoint - screenStartPoint);

          if ( abs( vUv.y ) > 1.0 ) {

            float a = vUv.x;
            float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
            float len2 = a * a + b * b;

            if (len2 > 1.0) {
              discard;
            }

            float ang = atan(a, b);

            if (ang < 0.0) {
              ang += 2.0 * pi;
            }
            float angle = pi - uAngle;
            if (ang <= 1.5 * pi - angle || ang > 1.5 * pi) {
              discard;
            }
          } else {

            float uvYDist = linewidth / screenDist;

            if (abs(vUv.y) > 1.0 - uvYDist) {

              float a = vUv.x;
              float b = (vUv.y > 0.0) ? 1.0 - vUv.y : vUv.y + 1.0;
              b /= uvYDist;

              float len2 = a * a + b * b;
              float ang = atan(a, b);
              if (ang < 0.0) {
                ang += 2.0 * pi;
              }
              float angleSupplement = uAngle - 0.5 * pi;
              float angle = uAngle - 2.0 * angleSupplement;
              if (len2 < 1.0 && ang > 0.5 * pi - angle / 2.0 && ang < 0.5 * pi) {
                discard;
              }
            }

          }

        #endif

      #endif

      float dist = length(vInstanceEnd - vInstanceStart);
      vec4 diffuseColor = vec4( diffuse, alpha );
      vec3 colors[3] = vec3[3](
        vec3(0.0, 111.0 / 255.0, 1.0),   
        vec3(0.0, 80.0 / 255.0, 1.0), 
        vec3(0.0, 111.0 / 255.0, 1.0)          
      );
      float ratio = max(min((vUv.y + 1.0) / 2.0, 1.0), 0.0);
      float alphaMultiplier = 1.0;
      float distToStart = length(vInstanceStart - uStartPoint);
      // prevent division by 0
      if (uDistance != 0.0) {
        if (all(equal(vInstanceStart, uStartPoint))) {
          ratio *= (dist / uDistance);
        } else if (all(equal(vInstanceEnd, uEndPoint))) {
          ratio = 1.0 - (dist / uDistance) + ratio * (dist / uDistance);
        } else {
          ratio = (distToStart / uDistance) + ratio * (dist / uDistance);
        }
      }
      // Use total screen distance for consistent density across all segments
      // Velocity scale increases for shorter distances (inverse relationship)
      // Smoothly interpolates: 0.032 at very short distances, 0.008 at long distances (200px+)
      float velocityScale = mix(0.032, 0.008, smoothstep(0.0, 200.0, uTotalScreenDistance));
      float animationPosition = ratio - (uTime / (uTotalScreenDistance * velocityScale));
      float cyclePosition = fract(animationPosition * 3.0); // 3 cycles = 3 gaps
      vec3 color;
      if (cyclePosition < 0.5) {
        color = mix(colors[0], colors[1], cyclePosition * 2.0);
      } else {
        color = mix(colors[1], colors[2], (cyclePosition - 0.5) * 2.0);
      }
      #ifdef USE_COLOR
        #ifdef USE_LINE_COLOR_ALPHA
          diffuseColor *= vec4(color, 1);
        #else
          diffuseColor.rgb *= color;
        #endif
      #endif

      #include <logdepthbuf_fragment>

      gl_FragColor = vec4(diffuseColor.rgb * color, diffuseColor.a * alphaMultiplier);

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      #include <fog_fragment>
      #include <premultiplied_alpha_fragment>

    }
  `,vertex:`
    // Modified version of Line2 shader from three-stdlib
    #include <common>
    #include <fog_pars_vertex>
    #include <logdepthbuf_pars_vertex>
    #include <clipping_planes_pars_vertex>

    uniform float linewidth;
    uniform vec2 resolution;

    attribute vec3 instanceStart;
    attribute vec3 instanceEnd;

    varying vec3 vInstanceStart;
    varying vec3 vInstanceEnd;

    #ifdef USE_COLOR
      #ifdef USE_LINE_COLOR_ALPHA
        varying vec4 vLineColor;
        attribute vec4 instanceColorStart;
        attribute vec4 instanceColorEnd;
      #else
        varying vec3 vLineColor;
        attribute vec3 instanceColorStart;
        attribute vec3 instanceColorEnd;
      #endif
    #endif

    #ifdef WORLD_UNITS

      varying vec4 worldPos;
      varying vec3 worldStart;
      varying vec3 worldEnd;

      #ifdef USE_DASH

        varying vec2 vUv;

      #endif

    #else

      varying vec2 vUv;

    #endif

    #ifdef USE_DASH

      uniform float dashScale;
      attribute float instanceDistanceStart;
      attribute float instanceDistanceEnd;
      varying float vLineDistance;

    #endif

    void trimSegment( const in vec4 start, inout vec4 end ) {

      // trim end segment so it terminates between the camera plane and the near plane

      // conservative estimate of the near plane
      float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
      float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
      float nearEstimate = - 0.5 * b / a;

      float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

      end.xyz = mix( start.xyz, end.xyz, alpha );

    }

    void main() {

      vInstanceStart = instanceStart;
      vInstanceEnd = instanceEnd;

      #ifdef USE_COLOR

        vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

      #endif

      #ifdef USE_DASH

        vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
        vUv = uv;

      #endif

      float aspect = resolution.x / resolution.y;

      // camera space
      vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
      vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

      #ifdef WORLD_UNITS

        worldStart = start.xyz;
        worldEnd = end.xyz;

      #else

        vUv = uv;

      #endif

      // special case for perspective projection, and segments that terminate either in, or behind, the camera plane
      // clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
      // but we need to perform ndc-space calculations in the shader, so we must address this issue directly
      // perhaps there is a more elegant solution -- WestLangley

      bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

      if ( perspective ) {

        if ( start.z < 0.0 && end.z >= 0.0 ) {

          trimSegment( start, end );

        } else if ( end.z < 0.0 && start.z >= 0.0 ) {

          trimSegment( end, start );

        }

      }

      // clip space
      vec4 clipStart = projectionMatrix * start;
      vec4 clipEnd = projectionMatrix * end;

      // ndc space
      vec3 ndcStart = clipStart.xyz / clipStart.w;
      vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

      // direction
      vec2 dir = ndcEnd.xy - ndcStart.xy;

      // account for clip-space aspect ratio
      dir.x *= aspect;
      dir = normalize( dir );

      #ifdef WORLD_UNITS

        // get the offset direction as perpendicular to the view vector
        vec3 worldDir = normalize( end.xyz - start.xyz );
        vec3 offset;
        if ( position.y < 0.5 ) {

          offset = normalize( cross( start.xyz, worldDir ) );

        } else {

          offset = normalize( cross( end.xyz, worldDir ) );

        }

        // sign flip
        if ( position.x < 0.0 ) offset *= - 1.0;

        float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

        // don't extend the line if we're rendering dashes because we
        // won't be rendering the endcaps
        #ifndef USE_DASH

          // extend the line bounds to encompass  endcaps
          start.xyz += - worldDir * linewidth * 0.5;
          end.xyz += worldDir * linewidth * 0.5;

          // shift the position of the quad so it hugs the forward edge of the line
          offset.xy -= dir * forwardOffset;
          offset.z += 0.5;

        #endif

        // endcaps
        if ( position.y > 1.0 || position.y < 0.0 ) {

          offset.xy += dir * 2.0 * forwardOffset;

        }

        // adjust for linewidth
        offset *= linewidth * 0.5;

        // set the world position
        worldPos = ( position.y < 0.5 ) ? start : end;
        worldPos.xyz += offset;

        // project the worldpos
        vec4 clip = projectionMatrix * worldPos;

        // shift the depth of the projected points so the line
        // segments overlap neatly
        vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
        clip.z = clipPose.z * clip.w;

      #else

        vec2 offset = vec2( dir.y, - dir.x );
        // undo aspect ratio adjustment
        dir.x /= aspect;
        offset.x /= aspect;

        // sign flip
        if ( position.x < 0.0 ) offset *= - 1.0;

        // endcaps
        if ( position.y < 0.0 ) {

          offset += - dir;

        } else if ( position.y > 1.0 ) {

          offset += dir;

        }

        // adjust for linewidth
        offset *= linewidth;

        // adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
        offset /= resolution.y;

        // select end
        vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

        // back to clip space
        offset *= clip.w;

        clip.xy += offset;

      #endif

      gl_Position = clip;

      vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

      #include <logdepthbuf_vertex>
      #include <clipping_planes_vertex>
      #include <fog_vertex>

    }
  
  `},h=1,g={wifi:{dashSize:20,gapSize:5},thread:{dashSize:5,gapSize:5},threadAlternate:{dashSize:3,gapSize:4}},_=e=>{let t=e/2,n=t+3;return{base:{hitboxSize:n+2,borderSize:0,contentSize:t,borderColor:`#000000`},hover:{hitboxSize:n+2,borderSize:1,contentSize:n,borderColor:`#000000`},active:{hitboxSize:n+2,borderSize:2,contentSize:n,borderColor:`#006FFF`}}},v={image:20,fragments:64,cone:25,bubble:18},y={transparent:!0,toneMapped:!1,depthTest:!1},b={...v,image:15},x=_(6),S={...v,image:15,cone:20},C=({timeline:e})=>{let t=e?15:v.image,n={...v,image:t,cone:20};return{environmental:{base:{...n,halo:{type:`outline`,color:`#006FFF`}},hovered:{...n,halo:{type:`hovered`,color:`#66A9FF`}},selected:{...n,halo:{type:`active`,color:`#006FFF`}},invalid:{...n,halo:{type:`active`,color:`#F0383B`}},highlighted:{...n,halo:{type:`active`,color:`#39CC64`}}},entry:{opened:{...n,halo:{type:`outline`,color:`#F5A623`}},closed:{...n,halo:{type:`outline`,color:`#006FFF`}},hovered:{...n,halo:{type:`hovered`,color:`#66A9FF`}},selected:{...n,halo:{type:`active`,color:`#006FFF`}},invalid:{...n,halo:{type:`active`,color:`#F0383B`}},highlighted:{...n,halo:{type:`active`,color:`#39CC64`}}}}},w=`#CDD1D5`,T={ok:{...y,linewidth:h,color:`#39CC64`},marginal:{...y,linewidth:h,color:`#F5A524`},over:{...y,linewidth:h,color:`#F0383B`}},E={...y,linewidth:h,color:`#6FA383`,opacity:.5},D={[u.WALL]:{concrete:{base:{...y,linewidth:f.concrete.thickness.px,color:f.concrete.color},hover:{...y,linewidth:f.concrete.thickness.px,color:`#6F8AB0`},disabled:{...y,linewidth:f.concrete.thickness.px,color:w}},drywall:{base:{...y,linewidth:f.drywall.thickness.px,color:f.drywall.color},hover:{...y,linewidth:f.drywall.thickness.px,color:`#A2D3DF`},disabled:{...y,linewidth:f.drywall.thickness.px,color:w}},drywall_heavy:{base:{...y,linewidth:f.drywall_heavy.thickness.px,color:f.drywall_heavy.color},hover:{...y,linewidth:f.drywall_heavy.thickness.px,color:`#5F9AB0`},disabled:{...y,linewidth:f.drywall_heavy.thickness.px,color:w}},glass:{base:{...y,linewidth:f.glass.thickness.px,color:f.glass.color},hover:{...y,linewidth:f.glass.thickness.px,color:`#91C2FF`},disabled:{...y,linewidth:f.glass.thickness.px,color:w}},glass_thin:{base:{...y,linewidth:f.glass_thin.thickness.px,color:f.glass_thin.color},hover:{...y,linewidth:f.glass_thin.thickness.px,color:`#D0E1FA`},disabled:{...y,linewidth:f.glass_thin.thickness.px,color:w}},brick:{base:{...y,linewidth:f.brick.thickness.px,color:f.brick.color},hover:{...y,linewidth:f.brick.thickness.px,color:`#C02E32`},disabled:{...y,linewidth:f.brick.thickness.px,color:w}},metal:{base:{...y,linewidth:f.metal.thickness.px,color:f.metal.color},hover:{...y,linewidth:f.metal.thickness.px,color:`#B0B0B0`},disabled:{...y,linewidth:f.metal.thickness.px,color:w}},wood:{base:{...y,linewidth:f.wood.thickness.px,color:f.wood.color},hover:{...y,linewidth:f.wood.thickness.px,color:`#F7B84F`},disabled:{...y,linewidth:f.wood.thickness.px,color:w}},door_wood:{base:{...y,linewidth:f.door_wood.thickness.px,color:f.door_wood.color},hover:{...y,linewidth:f.door_wood.thickness.px,color:`#E09B4C`},disabled:{...y,linewidth:f.door_wood.thickness.px,color:w}},door_metal:{base:{...y,linewidth:f.door_metal.thickness.px,color:f.door_metal.color},hover:{...y,linewidth:f.door_metal.thickness.px,color:`#9A9A9A`},disabled:{...y,linewidth:f.door_metal.thickness.px,color:w}},door_glass:{base:{...y,linewidth:f.door_glass.thickness.px,color:f.door_glass.color},hover:{...y,linewidth:f.door_glass.thickness.px,color:`#C6D7EA`},disabled:{...y,linewidth:f.door_glass.thickness.px,color:w}},window_1_pane:{base:{...y,linewidth:f.window_1_pane.thickness.px,color:f.window_1_pane.color},hover:{...y,linewidth:f.window_1_pane.thickness.px,color:`#AED1F8`},disabled:{...y,linewidth:f.window_1_pane.thickness.px,color:w}},window_2_pane:{base:{...y,linewidth:f.window_2_pane.thickness.px,color:f.window_2_pane.color},hover:{...y,linewidth:f.window_2_pane.thickness.px,color:`#5BAEFD`},disabled:{...y,linewidth:f.window_2_pane.thickness.px,color:w}},window_3_pane:{base:{...y,linewidth:f.window_3_pane.thickness.px,color:f.window_3_pane.color},hover:{...y,linewidth:f.window_3_pane.thickness.px,color:`#3E8AE7`},disabled:{...y,linewidth:f.window_3_pane.thickness.px,color:w}}},[u.TRAY]:{base:{...y,linewidth:4,color:`#676F79`},hover:{...y,linewidth:4,color:`#808893`},disabled:{...y,linewidth:4,color:w}},[u.WIRE]:{base:{...y,linewidth:2,color:`#F5A623`},existing:{...y,linewidth:2,color:`#AED222`},disabled:{...y,linewidth:2,color:w}},[u.WIFI]:{base:{...y,linewidth:2,color:`#338CFF`},thread:T,error:{...y,linewidth:2,color:`#C02E32`},disabled:{...y,linewidth:2,color:w}},[u.CLIENTCONNECTION]:{active:{...y,vertexShader:m.vertex,fragmentShader:m.fragment,linewidth:void 0},base:{...y,opacity:.6,linewidth:1,color:`#212427`},hover:{...y,opacity:1,linewidth:1,color:`#212427`}},[u.SCALE]:{...y,linewidth:6,color:`#CC3135`},[u.SELECTOR]:{...y,color:`#006fff`},[u.CALIBRATION]:{...y,linewidth:1,color:`#A252E3`,borderColor:`#693594`},[u.MARKER]:{[u.WALL]:{...x},[u.TRAY]:{...x},[u.WIRE]:{...x},[u.ATTENUATION_OBJECT]:{...x,base:{...x.base,borderSize:1}},[u.COVERAGE_ZONE]:{...x,base:{...x.base,borderSize:1}},[u.ZONE]:{...x,base:{...x.base,borderSize:1}},[u.SCALE]:{...x},[u.CALIBRATION]:{base:{hitboxSize:10,borderSize:1,contentSize:9,borderColor:`#693594`},hover:{hitboxSize:10,borderSize:2,contentSize:9,borderColor:`#693594`},active:{hitboxSize:10,borderSize:2,contentSize:9,borderColor:`#693594`}}},[u.DEVICE]:{base:{...v,halo:{type:`default`}}},[u.CLIENT]:{base:{...v,halo:{type:`default`}}},[u.CAMERATARGET]:{base:{...v,halo:{type:`default`}}},[u.CAMERATARGETCONNECTION]:{active:{...y,vertexShader:m.vertex,fragmentShader:m.fragment,linewidth:void 0},base:{...y,opacity:.6,linewidth:1,color:`#212427`},hover:{...y,opacity:1,linewidth:1,color:`#212427`}},[u.RACK]:{base:{...v,halo:{type:`default`}},target:{...v,halo:{type:`border`,color:`#00ff00`}},invalid:{...v,halo:{type:`border`,color:`#ff0000`}}},[u.TUNNEL]:{base:{...v,halo:{type:`default`}},linked:{...v,halo:{type:`border`,color:`#F5A623`}}},[u.GUIDELINE]:{...y,linewidth:1,color:`#FF0000`,dashed:!0,dashSize:3,gapSize:3},[u.SHADOW]:{placeable:{...v,halo:{type:`default`}},drawable:{...y,linewidth:2}},[u.DETECTION]:{base:{...b,halo:{type:`outline`,color:{vehicle:`#2E81A4`,person:`#693594`,default:`#FEF6E9`}}},hovered:{...b,halo:{type:`hovered`,color:{vehicle:`#2E81A4`,person:`#693594`,default:`#F9CA7B`}}},selected:{...b,halo:{type:`active`,color:{vehicle:`#2E81A4`,person:`#693594`,default:`#F5A623`}}}},[u.ATTENUATION_OBJECT]:{base:{line:{...y,linewidth:1,color:`#FF0000`,dashed:!0,dashSize:3,gapSize:3},fill:{...y,color:`#FF0000`,transparent:!0,opacity:.25}},creating:{line:{...y,linewidth:1,color:`#FF0000`,dashed:!1,dashSize:void 0,gapSize:void 0},fill:{...y,color:`#FF0000`,transparent:!0,opacity:.25}}},[u.COVERAGE_ZONE]:{base:{line:{...y,linewidth:1,color:`#64748B`,dashed:!0,dashSize:3,gapSize:3},fill:{...y,color:`#006FFF`,transparent:!0,opacity:.1}},creating:{line:{...y,linewidth:1,color:`#64748B`,dashed:!1,dashSize:void 0,gapSize:void 0},fill:{...y,color:`#006FFF`,transparent:!0,opacity:.1}}},[u.ZONE]:{[p.CAPACITY]:{label:!0,base:{line:{...y,linewidth:1,color:`#d9b9f4`,dashed:!0,dashSize:3,gapSize:3},fill:{...y,color:`#d9b9f4`,transparent:!0,opacity:.1}},creating:{line:{...y,linewidth:1,color:`#c696ee`,dashed:!1,dashSize:void 0,gapSize:void 0},fill:{...y,color:`#c696ee`,transparent:!0,opacity:.1}}}},common:{placeable:{highlighted:{...v,halo:{type:`active`,color:`#39CC64`}},selected:{...v,halo:{type:`active`,color:`#006FFF`}},hovered:{...v,halo:{type:`hovered`,color:`#66A9FF`}},invalid:{...v,halo:{type:`active`,color:`#F0383B`}}},linkable:{active:{...y,linewidth:4,color:`#39CC64`},selected:{...y,linewidth:4,color:`#006FFF`},disabled:{...y,linewidth:4,color:`#CDD1D5`}}},timelineCamera:{base:{...S,halo:{type:`outline`,color:`#006FFF`}},hovered:{...S,halo:{type:`hovered`,color:`#66A9FF`}},selected:{...S,halo:{type:`active`,color:`#006FFF`}},invalid:{...S,halo:{type:`active`,color:`#F0383B`}},highlighted:{...S,halo:{type:`active`,color:`#39CC64`}}},sensor:{timeline:C({timeline:!0}),base:C({timeline:!1})},halo:{outline:e=>e+1,shadow:e=>e+2,border:e=>e+3,pulse:e=>e+22},colors:{cone:`#66A9FF`,coneActive:`#F5A623`,placeholderSnap:{fill:`#083c7d`,border:`#4797ff`,fillActive:`#19572c`,borderActive:`#37be60`,fillOpacity:.45,dashSize:4,gapSize:2},stackBadge:{background:`#006FFF`,text:`#FFFFFF`},placeableBackground:{none:{light:`#FFFFFF`,dark:`#1C1E21`},low:{light:`#F9FAFA`,dark:`#3B3F45`},medium:{light:`#CCE2FF`,dark:`#003780`},high:{light:`#F9FAFA`,dark:`#3B3F45`}},entrySensorBackground:{opened:{light:`#F5A623`,dark:`#F5A623`},closed:{light:`#FFFFFF`,dark:`#1C1E21`}},detectionGradients:{vehicle:{light:[`#61BDE3`,`#286E8A`],dark:[`#90DDFE`,`#389FCA`]},person:{light:[`#B37CDE`,`#6B2E9E`],dark:[`#C797EE`,`#A252E3`]},default:{light:[`#debf7c`,`#9e6f2e`],dark:[`#eed797`,`#e3b752`]}},cameraTargetBackground:{light:`#6B2E9E`,dark:`#A252E3`}}},O={empty:[],marker:{wall:[],tray:[],wire:[`remove`],attenuationObject:[`remove`],coverageZone:[`remove`],zone:[`remove`],scale:[],calibration:[]},rack:{designcenter:[`remove`,`copy`],innerspace:[]},device:{designcenter:[`remove`,`copy`],innerspace:[`remove`,`changePlan`]},tunnel:[`remove`,`rename`,`tunnelUp`,`tunnelDown`],detection:[],tray:[`remove`,`markerCreate`],wall:[`remove`,`markerCreate`,`wallChange`],attenuationObject:[`remove`,`markerCreate`],coverageZone:[`remove`,`markerCreate`],zone:[`remove`,`markerCreate`,`copy`],wire:[`remove`,`markerCreate`,`wireChange`],wifi:[`remove`]},k={lineWidth:.5,color:0},A={TEXTURE_OPACITY:.6,SHADOW_OPACITY:.2,SLAB_DEPTH:.2,TEXTURE_LIFT:.01,SHADOW_LIFT:.011,COVERAGE_LIFT:.012,GROUND_SIZE:1e3},j={FLOOR_GAP:A.SLAB_DEPTH,INACTIVE_OPACITY:.2,DEFAULT_FLOOR_HEIGHT:2.7},M=e=>e.length>2,N=e=>e.length>=4,P=(e,t)=>{if(e.length===0)return!1;let n=1/0,r=-1/0,i=1/0,a=-1/0;for(let t of e)t.x<n&&(n=t.x),t.x>r&&(r=t.x),t.y<i&&(i=t.y),t.y>a&&(a=t.y);return r-n>=t&&a-i>=t},F=e=>{if(!N(e))return null;let t=new r;t.moveTo(e[0].x,e[0].y);for(let n=1;n<e.length-1;n++)t.lineTo(e[n].x,e[n].y);return t.closePath(),t},I=e=>{let t=e.length-1;return t>0&&e[0].equals(e[t])?e.slice(0,t):e},L=e=>{let t=0,n=0,r=0;for(let i=0,a=e.length-1;i<e.length;a=i++){let o=e[a].x*e[i].y-e[i].x*e[a].y;t+=o,n+=(e[a].x+e[i].x)*o,r+=(e[a].y+e[i].y)*o}return t===0?null:new s(n/(3*t),r/(3*t),e[0].z)},R=e=>{let t=e.map(({x:e,y:t})=>new a(e,t));o.isClockWise(t)||t.reverse();let n=null,r=0;for(let i of o.triangulateShape(t,[])){let[a,o,c]=i.map(e=>t[e]),l=Math.abs((o.x-a.x)*(c.y-a.y)-(c.x-a.x)*(o.y-a.y));l<=r||(r=l,n=new s((a.x+o.x+c.x)/3,(a.y+o.y+c.y)/3,e[0].z))}return n},z=e=>{let t=I(e);if(!t.length)return null;let n=L(t);return n?d(n.x,n.y,t)?n:R(t)??n:t.reduce((e,t)=>e.add(t),new s).divideScalar(t.length)},B=e=>e.length<2||e[0].equals(e[e.length-1])?e:[...e,e[0].clone()],V=12,H=(e,t)=>{let n=t.extractPoints(V).shape;o.isClockWise(n)||n.reverse();let r=n.length,a=e.getAttribute(`position`);if(a.count!==r){let t=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*2);for(let e=0;e<r;e++)t[e*3]=n[e].x,t[e*3+1]=n[e].y,a[e*3+2]=1,o[e*2]=n[e].x,o[e*2+1]=n[e].y;e.setAttribute(`position`,new i(t,3)),e.setAttribute(`normal`,new i(a,3)),e.setAttribute(`uv`,new i(o,2))}else{let t=a.array,i=e.getAttribute(`uv`).array;for(let e=0;e<r;e++)t[e*3]=n[e].x,t[e*3+1]=n[e].y,i[e*2]=n[e].x,i[e*2+1]=n[e].y;a.needsUpdate=!0,e.getAttribute(`uv`).needsUpdate=!0}let s=o.triangulateShape(n,[]);e.setIndex(s.flat()),e.boundingBox=null,e.boundingSphere=null},U=n(e()),W=t(),G=(0,U.memo)(({geometry:e,color:t=`black`,opacity:n=1,lineWidth:r=1,threshold:i,renderOrder:a})=>(0,W.jsx)(c,{name:`ObjectOutlines`,geometry:e,lineWidth:r,color:t,polygonOffset:!0,polygonOffsetFactor:-1,opacity:n,visible:n>0,transparent:!0,threshold:i,renderOrder:a})),K=(0,U.memo)(({geometries:e,...t})=>{let n=(0,U.useMemo)(()=>e.length===0?null:l(e),[e]);return(0,U.useEffect)(()=>()=>{n?.dispose()},[n]),n?(0,W.jsx)(G,{geometry:n,...t}):null});export{g as _,M as a,z as c,A as d,j as f,k as g,E as h,B as i,H as l,D as m,G as n,P as o,O as p,F as r,N as s,K as t,w as u};
//# sourceMappingURL=Outlines-lGVeKKRf.js.map