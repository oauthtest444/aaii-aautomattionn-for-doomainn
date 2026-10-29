try{let e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`95eae146-968c-4bcd-a207-ce704d54d9ff`,e._sentryDebugIdIdentifier=`sentry-dbid-95eae146-968c-4bcd-a207-ce704d54d9ff`)}catch{}import{q as e,y as t}from"./react-C9EcEEoD.js";import{a as n}from"./rolldown-runtime-Bqsl3lKq.js";import{Ar as r,Bn as i,Br as a,Dr as o,Er as s,Fr as c,Gn as l,Gr as u,In as d,Ir as f,Jn as p,Jr as m,Kr as h,Nr as g,Or as _,Pr as v,Sr as y,Tr as b,Ur as x,Yr as S,Zr as C,a as w,an as T,cr as E,dr as D,fr as O,gr as k,i as ee,ir as A,kn as j,n as te,nn as M,nr as ne,o as N,pr as re,r as ie,tn as ae,ur as P,vr as oe,wr as se}from"./three-BhPyDYUp.js";import{a as ce,i as le,n as ue,r as de}from"./ShimmerText-C6CzBzDG.js";import{tt as fe}from"./src-DfQgNQkU.js";import{$a as F,Ai as pe,Ar as me,Ca as he,Di as I,Fc as L,Fo as ge,Gn as _e,Gs as ve,Hc as ye,Ic as be,Io as xe,Js as R,Mi as z,Mo as B,Na as V,Ni as H,Ta as Se,Vc as U,X as W,_o as Ce,as as we,cc as Te,cr as Ee,dt as De,fs as Oe,gr as ke,gs as Ae,ha as G,hr as je,ko as Me,ma as K,no as Ne,oo as Pe,or as Fe,ot as q,po as Ie,ps as Le,pt as Re,rs as ze,ts as Be,ut as Ve,vs as He,wa as Ue,yi as We,yn as Ge}from"./src-D838am2T.js";import{h as Ke,i as qe,n as Je,r as Ye}from"./src-DXktLzRI.js";import{d as Xe}from"./Outlines-lGVeKKRf.js";import{_ as Ze,p as Qe,v as $e,y as et}from"./polygonClipping-D46iLzNV.js";import{t as tt}from"./wallGeometry-D32C-giu.js";var J=n(e()),nt=class extends v{constructor({opacity:e,transparent:t}){super(),this.name=`WifiCoverageQuadMaterial`,this.opacity=e,this.transparent=t,this.depthTest=!0,this.depthWrite=!1,this.uniforms=u.merge([j.common,{map:{value:{}},opacity:{value:this.opacity},resolution:{value:new m}}])}vertexShader=`
    precision highp float;

    void main() {
      // Project normally so the plane occupies its true 3D position and depth.
      // The fragment shader still samples the composited texture by screen position.
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;fragmentShader=`
    uniform sampler2D map;
    uniform vec2 resolution;
    uniform float opacity;

    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      vec4 color = texture2D(map, uv);
      gl_FragColor = sRGBTransferOETF(vec4(color.rgb, color.a * opacity));
    }
  `},rt={name:`CoverageMaskShader`,uniforms:{tDiffuse:{value:null},uMaskTexture:{value:null},uBgColor:{value:new S(1,1,1)},uMaskedCoverageScale:{value:1},uHatchColor:{value:new S(.4,.4,.4)},uPixelRatio:{value:1},uHatchOffset:{value:0},uMode2D:{value:!0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform sampler2D uMaskTexture;
    uniform vec3 uBgColor;
    uniform float uMaskedCoverageScale;
    uniform vec3 uHatchColor;
    uniform float uPixelRatio;
    uniform float uHatchOffset;
    uniform bool uMode2D;

    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float m = texture2D(uMaskTexture, vUv).r;
      if (m >= 0.99) {
        gl_FragColor = c;
        return;
      }
      if (uMode2D) {
        float coord = (gl_FragCoord.y - gl_FragCoord.x) / uPixelRatio + uHatchOffset;
        if (mod(coord, 24.0) < 1.0) {
          gl_FragColor = vec4(uHatchColor, 1.0);
          return;
        }
        // Opaque bg wash; uMaskedCoverageScale tunes contrast against the motif bg.
        float covA = clamp(c.a * m * m * uMaskedCoverageScale, 0.0, 1.0);
        gl_FragColor = vec4(mix(uBgColor, c.rgb, covA), 1.0);
      } else {
        // 3D: attenuate alpha by m^2. uMaskedCoverageScale is omitted - its
        // 2D-tuned values (0.1/2) would make this invisible in dark mode.
        float covA = clamp(c.a * m * m, 0.0, 1.0);
        gl_FragColor = vec4(c.rgb, covA);
      }
    }
  `},it={name:`CoverageLineSeperatorShader`,uniforms:{tDiffuse:{value:null},uMaskTexture:{value:null},resolution:{value:new m}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    #include <common>

    uniform sampler2D tDiffuse;
    uniform sampler2D uMaskTexture;
    uniform vec2 resolution;
    varying vec2 vUv;

    float cameraCoverage(vec4 tx0, vec4 tx1, vec4 tx2, vec4 tx3, vec4 tx4, vec4 tx5, vec4 tx6, vec4 tx7, vec4 tx8) {
     const float EDGE = 0.3;
     return max(max(max(max(max(max(max(max(step(EDGE, tx0.b), step(EDGE, tx1.b)), step(EDGE, tx2.b)), step(EDGE, tx3.b)), step(EDGE, tx4.b)), step(EDGE, tx5.b)), step(EDGE, tx6.b)), step(EDGE, tx7.b)), step(EDGE, tx8.b));
    }

    void main() {
      vec2 texel = vec2( 1.0 / resolution.x, 1.0 / resolution.y );

      // kernel definition (in glsl matrices are filled in column-major order)
      const float width = 1.0;
      const mat3 Gx = mat3( -1, -2, -1, 0, 0, 0, 1, 2, 1 ); // x direction kernel
      const mat3 Gy = mat3( -1, 0, 1, -2, 0, 2, -1, 0, 1 ); // y direction kernel

      // fetch the 3x3 neighbourhood of a fragment
      // first column
      vec4 tx0y0 = texture2D( tDiffuse, vUv + texel * vec2( -1, -1 ) * width );
      float lx0y0 = luminance(tx0y0.rgb);
      vec4 tx0y1 = texture2D( tDiffuse, vUv + texel * vec2( -1,  0 ) * width );
      float lx0y1 = luminance(tx0y1.rgb);
      vec4 tx0y2 = texture2D( tDiffuse, vUv + texel * vec2( -1,  1 ) * width );
      float lx0y2 = luminance(tx0y2.rgb);

      // second column
      vec4 tx1y0 = texture2D( tDiffuse, vUv + texel * vec2(  0, -1 ) * width );
      float lx1y0 = luminance(tx1y0.rgb);
      vec4 tx1y1 = texture2D( tDiffuse, vUv + texel * vec2(  0,  0 ) * width );
      float lx1y1 = luminance(tx1y1.rgb);
      vec4 tx1y2 = texture2D( tDiffuse, vUv + texel * vec2(  0,  1 ) * width );
      float lx1y2 = luminance(tx1y2.rgb);

      // third column
      vec4 tx2y0 = texture2D( tDiffuse, vUv + texel * vec2(  1, -1 ) * width );
      float lx2y0 = luminance(tx2y0.rgb);
      vec4 tx2y1 = texture2D( tDiffuse, vUv + texel * vec2(  1,  0 ) * width );
      float lx2y1 = luminance(tx2y1.rgb);
      vec4 tx2y2 = texture2D( tDiffuse, vUv + texel * vec2(  1,  1 ) * width );
      float lx2y2 = luminance(tx2y2.rgb);

      // gradient value in x direction
      float valueGx = Gx[0][0] * lx0y0 + Gx[1][0] * lx1y0 + Gx[2][0] * lx2y0 +
        Gx[0][1] * lx0y1 + Gx[1][1] * lx1y1 + Gx[2][1] * lx2y1 +
        Gx[0][2] * lx0y2 + Gx[1][2] * lx1y2 + Gx[2][2] * lx2y2;

      // gradient value in y direction
      float valueGy = Gy[0][0] * lx0y0 + Gy[1][0] * lx1y0 + Gy[2][0] * lx2y0 +
        Gy[0][1] * lx0y1 + Gy[1][1] * lx1y1 + Gy[2][1] * lx2y1 +
        Gy[0][2] * lx0y2 + Gy[1][2] * lx1y2 + Gy[2][2] * lx2y2;

      // magnitute of the total gradient
      float G = sqrt( ( valueGx * valueGx ) + ( valueGy * valueGy ) );

      if (cameraCoverage(tx0y0, tx0y1, tx0y2, tx1y0, tx1y1, tx1y2, tx2y0, tx2y1, tx2y2) == 0.0 && G >= 0.5 && lx1y0 != 0.0 &&  lx1y2 != 0.0 && lx0y0 != 0.0 &&  lx0y2 != 0.0 && lx2y0 != 0.0 &&  lx2y2 != 0.0 && lx1y1 != 0.0 && lx2y1 != 0.0) {
        // Fade MCS contour lines outside zones to match the heatmap's fade.
        float maskSample = texture2D(uMaskTexture, vUv).r;
        gl_FragColor = vec4( vec3( 0.05 ), maskSample * maskSample );
      } else {
        gl_FragColor = tx1y1;
      }
    }`},at=.01,ot={name:`CoverageOutlineShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new m},diffuse:{value:new i(`rgb(71, 151, 255)`)}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,fragmentShader:`
    #include <common>

    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;
    uniform vec3 diffuse;

    float cameraCoverage(vec4 tx0, vec4 tx1, vec4 tx2, vec4 tx3, vec4 tx4, vec4 tx5, vec4 tx6, vec4 tx7, vec4 tx8) {
     const float EDGE = 0.3;
     return max(max(max(max(max(max(max(max(step(EDGE, tx0.b), step(EDGE, tx1.b)), step(EDGE, tx2.b)), step(EDGE, tx3.b)), step(EDGE, tx4.b)), step(EDGE, tx5.b)), step(EDGE, tx6.b)), step(EDGE, tx7.b)), step(EDGE, tx8.b));
    }

    void main() {
      vec2 texel = vec2( 1.0 / resolution.x, 1.0 / resolution.y );

      // kernel definition (in glsl matrices are filled in column-major order)
      const float width = 1.0;
      const mat3 Gx = mat3( -1, -2, -1, 0, 0, 0, 1, 2, 1 ); // x direction kernel
      const mat3 Gy = mat3( -1, 0, 1, -2, 0, 2, -1, 0, 1 ); // y direction kernel

      // fetch the 3x3 neighbourhood of a fragment
      // first column
      vec4 tx0y0 = texture2D( tDiffuse, vUv + texel * vec2( -1, -1 ) * width );
      vec4 tx0y1 = texture2D( tDiffuse, vUv + texel * vec2( -1,  0 ) * width );
      vec4 tx0y2 = texture2D( tDiffuse, vUv + texel * vec2( -1,  1 ) * width );

      // second column
      vec4 tx1y0 = texture2D( tDiffuse, vUv + texel * vec2(  0, -1 ) * width );
      vec4 tx1y1 = texture2D( tDiffuse, vUv + texel * vec2(  0,  0 ) * width );
      vec4 tx1y2 = texture2D( tDiffuse, vUv + texel * vec2(  0,  1 ) * width );

      // third column
      vec4 tx2y0 = texture2D( tDiffuse, vUv + texel * vec2(  1, -1 ) * width );
      vec4 tx2y1 = texture2D( tDiffuse, vUv + texel * vec2(  1,  0 ) * width );
      vec4 tx2y2 = texture2D( tDiffuse, vUv + texel * vec2(  1,  1 ) * width );

      // gradient value in x direction
      float valueGx = Gx[0][0] * tx0y0.r + Gx[1][0] * tx1y0.r + Gx[2][0] * tx2y0.r +
        Gx[0][1] * tx0y1.r + Gx[1][1] * tx1y1.r + Gx[2][1] * tx2y1.r +
        Gx[0][2] * tx0y2.r + Gx[1][2] * tx1y2.r + Gx[2][2] * tx2y2.r;

      // gradient value in y direction
      float valueGy = Gy[0][0] * tx0y0.r + Gy[1][0] * tx1y0.r + Gy[2][0] * tx2y0.r +
        Gy[0][1] * tx0y1.r + Gy[1][1] * tx1y1.r + Gy[2][1] * tx2y1.r +
        Gy[0][2] * tx0y2.r + Gy[1][2] * tx1y2.r + Gy[2][2] * tx2y2.r;

      // magnitute of the total gradient
      float G = sqrt( ( valueGx * valueGx ) + ( valueGy * valueGy ) );

      if (cameraCoverage(tx0y0, tx0y1, tx0y2, tx1y0, tx1y1, tx1y2, tx2y0, tx2y1, tx2y2) == 0.0 && G >= ${at}) {
        gl_FragColor = vec4( diffuse, 0.9 );
      } else {
        gl_FragColor = vec4(0.0);
      }
    }`},st={name:`AlphaBlendShader`,uniforms:{tDiffuse:{value:null},tOverlay:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,fragmentShader:`
  varying vec2 vUv;
  uniform sampler2D tDiffuse;
  uniform sampler2D tOverlay;

  void main() {
    vec4 baseColor = texture2D(tDiffuse, vUv);
    vec4 overlayColor = texture2D(tOverlay, vUv);
    gl_FragColor = mix(baseColor, overlayColor, overlayColor.a) ;
      }
  `},ct=class extends v{constructor(e){super({uniforms:u.merge([j.common,{apId:{value:e},rank1Texture:{value:null},rank2Texture:{value:null},useRank1Exclusion:{value:!1},useRank2Exclusion:{value:!1},resolution:{value:new m(1,1)}}]),vertexShader:`
        varying float vMCS;

        void main() {
          // Extract MCS from position.z
          // According to spec: position.z = -85 + mcs
          vMCS = position.z + 85.0;

          // Map higher MCS to closer depth for max-selection
          // Higher MCS = lower Z = passes depth test
          vec4 mvPosition = modelViewMatrix * vec4(position.xy, 0.0, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Depth mapping: higher MCS should win depth test
          // Map MCS [0-15] to depth [far-near]
          float normalizedMCS = clamp(vMCS / 15.0, 0.0, 1.0);
          gl_Position.z = mix(1.0, -1.0, normalizedMCS) * gl_Position.w;
        }
      `,fragmentShader:`
        uniform int apId;
        uniform sampler2D rank1Texture;
        uniform sampler2D rank2Texture;
        uniform bool useRank1Exclusion;
        uniform bool useRank2Exclusion;
        uniform vec2 resolution;
        varying float vMCS;

        void main() {
          // Use actual fragment coordinates for texture lookup
          // This is correct in both 2D and 3D modes
          vec2 screenPos = gl_FragCoord.xy / resolution;

          // If rendering Rank2, exclude Rank1 winner at this pixel
          if (useRank1Exclusion) {
            vec4 rank1Data = texture2D(rank1Texture, screenPos);
            // Unpack AP ID from R,G channels
            int rank1ApId = int(rank1Data.r * 255.0) * 256 + int(rank1Data.g * 255.0);

            // Discard if this AP is the Rank1 winner
            if (apId == rank1ApId) {
              discard;
            }
          }

          // If rendering Rank3, also exclude Rank2 winner at this pixel
          if (useRank2Exclusion) {
            vec4 rank2Data = texture2D(rank2Texture, screenPos);
            // Unpack AP ID from R,G channels
            int rank2ApId = int(rank2Data.r * 255.0) * 256 + int(rank2Data.g * 255.0);

            // Discard if this AP is the Rank2 winner
            if (apId == rank2ApId) {
              discard;
            }
          }

          // Pack AP ID into R,G channels (hi/lo bytes)
          int apIdInt = apId;
          int hi = apIdInt / 256;
          int lo = apIdInt - (hi * 256);

          // Output: R=AP_ID_hi, G=AP_ID_lo, B=MCS, A=255
          gl_FragColor = vec4(
            float(hi) / 255.0,
            float(lo) / 255.0,
            clamp(vMCS, 0.0, 15.0) / 255.0,
            1.0
          );
        }
      `,depthTest:!0,depthWrite:!0})}set apId(e){this.uniforms.apId.value=e}set rank1Texture(e){this.uniforms.rank1Texture.value=e}set rank2Texture(e){this.uniforms.rank2Texture.value=e}set useRank1Exclusion(e){this.uniforms.useRank1Exclusion.value=e}set useRank2Exclusion(e){this.uniforms.useRank2Exclusion.value=e}setResolution(e,t){this.uniforms.resolution.value.set(e,t)}},lt=class extends v{constructor(){super({uniforms:u.merge([j.common,{}]),vertexShader:`
        varying float vThroughput;

        void main() {
          // Extract MCS from position.z
          // Worker encodes: layer = -85 + floor(mcs) - fraction
          // So: position.z + 85 = floor(mcs) - fraction
          // And: fract() gives us (1 - original_fraction)
          float mcs = position.z + 85.0;
          float fractPart = fract(mcs);

          // Invert to get actual throughput fraction
          vThroughput = 1.0 - fractPart;

          vec4 mvPosition = modelViewMatrix * vec4(position.xy, 0.0, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Depth mapping: higher throughput should win depth test
          // fractPart is inverted: low fractPart = high throughput
          // Map low fractPart → near (-1), high fractPart → far (1)
          gl_Position.z = mix(-1.0, 1.0, fractPart) * gl_Position.w;
        }
      `,fragmentShader:`
        varying float vThroughput;

        void main() {
          // Convert normalized throughput (0-1) to Mbps (0-100000)
          // vThroughput = throughput / THROUGHPUT_PRECISION where THROUGHPUT_PRECISION = 1e5
          float mbps = floor(clamp(vThroughput, 0.0, 1.0) * 100000.0 + 0.5);

          // Encode as 24-bit integer across R,G,B channels
          // Extract bytes using division and subtraction (more reliable than mod)
          float r = floor(mbps / 65536.0);
          float remainder = mbps - r * 65536.0;
          float g = floor(remainder / 256.0);
          float b = remainder - g * 256.0;

          // Output normalized [0,1] for uint8 texture with proper quantization
          gl_FragColor = vec4(
            (r + 0.5) / 256.0,
            (g + 0.5) / 256.0,
            (b + 0.5) / 256.0,
            1.0
          );
        }
      `,depthTest:!0,depthWrite:!0})}},ut=class extends v{constructor(){super({uniforms:u.merge([j.common,{rank1Texture:{value:null},rank2Texture:{value:null},useRank1Exclusion:{value:!1},useRank2Exclusion:{value:!1},resolution:{value:new m(1,1)},apId:{value:0}}]),vertexShader:`
        attribute float signal;
        varying float vSignal;
        varying float vMCS;

        void main() {
          vSignal = signal;
          vMCS = position.z + 85.0;

          vec4 mvPosition = modelViewMatrix * vec4(position.xy, 0.0, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          float normalizedMCS = clamp(vMCS / 15.0, 0.0, 1.0);
          gl_Position.z = mix(1.0, -1.0, normalizedMCS) * gl_Position.w;
        }
      `,fragmentShader:`
        uniform int apId;
        uniform sampler2D rank1Texture;
        uniform sampler2D rank2Texture;
        uniform bool useRank1Exclusion;
        uniform bool useRank2Exclusion;
        uniform vec2 resolution;
        varying float vSignal;

        void main() {
          vec2 screenPos = gl_FragCoord.xy / resolution;

          if (useRank1Exclusion) {
            vec4 rank1Data = texture2D(rank1Texture, screenPos);
            int rank1ApId = int(rank1Data.r * 255.0) * 256 + int(rank1Data.g * 255.0);
            if (apId == rank1ApId) { discard; }
          }

          if (useRank2Exclusion) {
            vec4 rank2Data = texture2D(rank2Texture, screenPos);
            int rank2ApId = int(rank2Data.r * 255.0) * 256 + int(rank2Data.g * 255.0);
            if (apId == rank2ApId) { discard; }
          }

          // Encode dBm: shift by +128 so -128..-1 maps to 0..127 and 0..127 maps to 128..255
          float encoded = clamp(vSignal + 128.0, 0.0, 255.0);
          // Pack AP ID hi/lo into G,B
          // so signal readback can identify the winning AP even in primary/client-experience views.
          int apIdHi = apId / 256;
          int apIdLo = apId - apIdHi * 256;
          gl_FragColor = vec4(
            (floor(encoded) + 0.5) / 256.0,
            (float(apIdHi) + 0.5) / 256.0,
            (float(apIdLo) + 0.5) / 256.0,
            1.0
          );
        }
      `,depthTest:!0,depthWrite:!0})}set apId(e){this.uniforms.apId.value=e}set rank1Texture(e){this.uniforms.rank1Texture.value=e}set rank2Texture(e){this.uniforms.rank2Texture.value=e}set useRank1Exclusion(e){this.uniforms.useRank1Exclusion.value=e}set useRank2Exclusion(e){this.uniforms.useRank2Exclusion.value=e}setResolution(e,t){this.uniforms.resolution.value.set(e,t)}},dt={name:`RankDisplayShader`,uniforms:{rankTexture:{value:null},mcsColors:{value:Array(48).fill(0)}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D rankTexture;
    uniform vec3 mcsColors[16]; // MCS color lookup table (0-15)
    varying vec2 vUv;

    void main() {
      vec4 rankData = texture2D(rankTexture, vUv);

      float mcsFloat = rankData.b * 255.0;
      int mcs = clamp(int(mcsFloat), 0, 15);

      if (rankData.a < 0.5) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 color = mcsColors[mcs];
      gl_FragColor = vec4(color, 1.0);
    }
  `},ft={name:`InterferenceCompositeShader`,uniforms:{tBase:{value:null},tCount:{value:null},uColor0:{value:new i},uColor1:{value:new i},uColor2:{value:new i},uColor3:{value:new i},uColor4:{value:new i},uColor5:{value:new i}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tBase;
    uniform sampler2D tCount;
    uniform vec3 uColor0;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    uniform vec3 uColor5;
    varying vec2 vUv;

    void main() {
      if (texture2D(tBase, vUv).a < 0.01) { gl_FragColor = vec4(0.0); return; }
      // raw = APs (in >=2 co-channel groups) covering this pixel. Subtract 1 to report *overlap*
      // count (excluding self) so a non-overlap pixel - even when its AP is in a co-channel
      // group - reads as "Clean 0".
      float raw = floor(texture2D(tCount, vUv).r * 255.0 + 0.5);
      float count = max(raw - 1.0, 0.0);
      vec3 color;
      if      (count >= 5.0) color = uColor5;
      else if (count >= 4.0) color = uColor4;
      else if (count >= 3.0) color = uColor3;
      else if (count >= 2.0) color = uColor2;
      else if (count >= 1.0) color = uColor1;
      else                   color = uColor0;
      // Alpha 1.0: the coverage mesh material opacity (settings.visual.opacity.coverage) controls
      // transparency, exactly like regular wifi coverage does - keeping both modes consistent.
      gl_FragColor = vec4(color, 1.0);
    }
  `},pt=16,Y=8,mt=(e,t)=>({width:Math.max(1,Math.ceil(e/2)),height:Math.max(1,Math.ceil(t/2))}),X=(e,t=k)=>{let n=new C(1,1,{format:_,type:h,minFilter:t,magFilter:t,generateMipmaps:!1,colorSpace:``,depthBuffer:!1,stencilBuffer:!1});return n.texture.name=e,n},ht=(e,t)=>{let n=X(`InterferenceBase`),r=X(`InterferenceGroupCount`),i=X(`InterferenceCount`),a=X(`InterferenceRoundedScratch`,A),o=X(`InterferenceRoundedBlur`,A),s=X(`InterferenceRoundedCount`),c=X(`InterferenceOutput`),l=X(`InterferenceApMaskScratch`),u=new O({color:16777215,depthTest:!1,depthWrite:!1}),d=new v({uniforms:{},vertexShader:`void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`void main() {
      gl_FragColor = vec4(${(1/255).toFixed(8)}, 0.0, 0.0, 1.0);
    }`,depthTest:!1,depthWrite:!1}),f=`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,p=`uniform sampler2D tMask; varying vec2 vUv; void main() { gl_FragColor = texture2D(tMask, vUv); }`,h=new v({uniforms:{tMask:{value:null}},vertexShader:f,fragmentShader:p,blending:2,transparent:!0,depthTest:!1,depthWrite:!1}),_=new v({uniforms:{tMask:{value:null}},vertexShader:f,fragmentShader:p,blending:5,blendEquation:104,blendSrc:201,blendDst:201,transparent:!0,depthTest:!1,depthWrite:!1}),b=new oe(-1,1,1,-1,0,1),x=new y(2,2),S=new g,C=new D(x,h);C.frustumCulled=!1,S.add(C);let w=new g,T=new D(x,_);T.frustumCulled=!1,w.add(T);let E=new v({uniforms:{tCount:{value:null},uTexel:{value:new m(1,1)},uStepPx:{value:0},uInputScale:{value:255},uOutputScale:{value:Y},uMode:{value:0}},vertexShader:f,fragmentShader:`
      uniform sampler2D tCount;
      uniform vec2 uTexel;
      uniform float uStepPx;
      uniform float uInputScale;
      uniform float uOutputScale;
      uniform float uMode;
      varying vec2 vUv;

      float sampleRaw(vec2 uv) {
        return texture2D(tCount, uv).r * uInputScale;
      }

      float blurRaw() {
        vec2 axis = uTexel * uStepPx;
        vec2 diag = axis * 0.70711;
        float value = sampleRaw(vUv) * 4.0;

        value += sampleRaw(vUv + vec2( axis.x, 0.0)) * 2.0;
        value += sampleRaw(vUv + vec2(-axis.x, 0.0)) * 2.0;
        value += sampleRaw(vUv + vec2(0.0,  axis.y)) * 2.0;
        value += sampleRaw(vUv + vec2(0.0, -axis.y)) * 2.0;

        value += sampleRaw(vUv + vec2( diag.x,  diag.y));
        value += sampleRaw(vUv + vec2(-diag.x,  diag.y));
        value += sampleRaw(vUv + vec2( diag.x, -diag.y));
        value += sampleRaw(vUv + vec2(-diag.x, -diag.y));

        return value / 16.0;
      }

      void main() {
        float raw = uMode < 0.5 ? blurRaw() : floor(sampleRaw(vUv) + 0.5);
        gl_FragColor = vec4(clamp(raw / uOutputScale, 0.0, 1.0), 0.0, 0.0, 1.0);
      }
    `,depthTest:!1,depthWrite:!1}),k=new g,ee=new D(x,E);ee.frustumCulled=!1,k.add(ee);let j=ue.interference.colors[e],te=new v({uniforms:{tBase:{value:null},tCount:{value:null},uColor0:{value:j[0]},uColor1:{value:j[1]},uColor2:{value:j[2]},uColor3:{value:j[3]},uColor4:{value:j[4]},uColor5:{value:j[5]}},vertexShader:ft.vertexShader,fragmentShader:ft.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1}),M=new g,ne=new D(x,te);return ne.frustumCulled=!1,M.add(ne),t.uniforms.tOverlay.value=c.texture,{baseRenderTarget:n,groupCountRenderTarget:r,countRenderTarget:i,roundedScratchRenderTarget:a,roundedBlurRenderTarget:o,roundedCountRenderTarget:s,outputRenderTarget:c,apMaskScratchRenderTarget:l,baseMaterial:u,perApMaterial:d,ortho:b,additiveMaterial:h,additiveScene:S,maxBlitMaterial:_,blitScene:w,roundingMaterial:E,roundingScene:k,compositeMaterial:te,compositeScene:M}},gt=(e,t,n)=>{if(e.baseRenderTarget.width===t&&e.baseRenderTarget.height===n)return;let r=mt(t,n);e.baseRenderTarget.setSize(t,n),e.groupCountRenderTarget.setSize(t,n),e.countRenderTarget.setSize(t,n),e.roundedScratchRenderTarget.setSize(r.width,r.height),e.roundedBlurRenderTarget.setSize(r.width,r.height),e.roundedCountRenderTarget.setSize(t,n),e.outputRenderTarget.setSize(t,n),e.apMaskScratchRenderTarget.setSize(t,n)},_t=e=>{e.apMaskScratchRenderTarget.dispose(),e.baseRenderTarget.dispose(),e.groupCountRenderTarget.dispose(),e.countRenderTarget.dispose(),e.roundedScratchRenderTarget.dispose(),e.roundedBlurRenderTarget.dispose(),e.roundedCountRenderTarget.dispose(),e.outputRenderTarget.dispose(),e.baseMaterial.dispose(),e.perApMaterial.dispose(),e.additiveMaterial.dispose(),e.maxBlitMaterial.dispose(),e.roundingMaterial.dispose(),e.compositeMaterial.dispose(),e.additiveScene.children[0].geometry.dispose()},vt=(e,t)=>{let n=null;return{peek:()=>n,ensure:()=>n||(n=ht(e,t),n),setEnabled:e=>{n&&(t.enabled=e)},resize:(e,t)=>{n&&gt(n,e,t)},dispose:()=>{t.enabled=!1,t.uniforms.tOverlay.value=null,n&&=(_t(n),null)}}},yt=new i,bt=(e,t,n,r)=>{let i=t.material;try{t.material=r.perApMaterial,e.setRenderTarget(r.apMaskScratchRenderTarget),e.clear(!0,!1,!1),e.render(t,n)}finally{t.material=i}return r.apMaskScratchRenderTarget},xt=(e,t,n,r,i)=>{let a=t.overrideMaterial,o=e.getClearColor(yt),s=e.getClearAlpha(),c=e.getRenderTarget();t.overrideMaterial=r.baseMaterial,n.layers.set(i),e.setClearColor(0,0),e.setRenderTarget(r.baseRenderTarget),e.clear(!0,!1,!1),e.render(t,n),e.setRenderTarget(c),e.setClearColor(o,s),t.overrideMaterial=a},St=(e,t,n,r,i,a,o,s)=>{let c=e.getClearColor(yt),l=e.getClearAlpha(),u=e.autoClear,d=e.getRenderTarget(),f=n.layers.mask;e.setClearColor(0,0),e.autoClear=!1,n.layers.set(a),e.setRenderTarget(r.countRenderTarget),e.clear(!0,!1,!1);let p=s.size>0,m=!1;try{for(let a of i){if(p&&!a.some(e=>s.has(e)))continue;let i=a.filter(e=>{let n=t.hash[e];return!n||n.userData.app!==`network`||n.userData.children||s.has(e)&&o[e]!==!0?!1:p||o[e]===!0});if(!(p&&!i.some(e=>s.has(e)))&&!(i.length<2)){e.setRenderTarget(r.groupCountRenderTarget),e.clear(!0,!1,!1);for(let a of i){let i=t.hash[a];i.visible=!0;let o=bt(e,i,n,r);r.additiveMaterial.uniforms.tMask.value=o.texture,e.setRenderTarget(r.groupCountRenderTarget),e.render(r.additiveScene,r.ortho)}r.maxBlitMaterial.uniforms.tMask.value=r.groupCountRenderTarget.texture,e.setRenderTarget(r.countRenderTarget),e.render(r.blitScene,r.ortho),m=!0}}return m}finally{e.setRenderTarget(d),e.setClearColor(c,l),e.autoClear=u,n.layers.mask=f}},Ct=(e,t)=>{let n=e.getClearColor(yt),r=e.getClearAlpha(),i=e.autoClear,a=e.getRenderTarget();e.setClearColor(0,0),e.autoClear=!1,t.roundingMaterial.uniforms.uTexel.value.set(1/t.countRenderTarget.width,1/t.countRenderTarget.height);let o=(n,r,i,a,o,s)=>{t.roundingMaterial.uniforms.tCount.value=n.texture,t.roundingMaterial.uniforms.uMode.value=i,t.roundingMaterial.uniforms.uStepPx.value=a,t.roundingMaterial.uniforms.uInputScale.value=o,t.roundingMaterial.uniforms.uOutputScale.value=s,e.setRenderTarget(r),e.clear(!0,!1,!1),e.render(t.roundingScene,t.ortho)};try{o(t.countRenderTarget,t.roundedScratchRenderTarget,0,pt*.5,255,Y),o(t.roundedScratchRenderTarget,t.roundedBlurRenderTarget,0,pt*.25,Y,Y),o(t.roundedBlurRenderTarget,t.roundedScratchRenderTarget,0,pt*.125,Y,Y),o(t.roundedScratchRenderTarget,t.roundedCountRenderTarget,1,0,Y,255)}finally{e.setRenderTarget(a),e.setClearColor(n,r),e.autoClear=i}},wt=(e,t)=>{let n=e.getClearColor(yt),r=e.getClearAlpha(),i=e.getRenderTarget();try{e.setClearColor(0,0),e.setRenderTarget(t.roundedCountRenderTarget),e.clear(!0,!1,!1)}finally{e.setRenderTarget(i),e.setClearColor(n,r)}},Tt=(e,t,n,r,i,a)=>{let o={};for(let e in t.hash)t.hash[e].userData.app===`network`&&(o[e]=t.hash[e].visible);let s=new Set([...t.selected].filter(e=>t.hash[e]?.userData.app===`network`&&!t.hash[e].userData.children));try{xt(e,t,n,r,a),St(e,t,n,r,i,a,o,s)?Ct(e,r):wt(e,r),r.compositeMaterial.uniforms.tBase.value=r.baseRenderTarget.texture,r.compositeMaterial.uniforms.tCount.value=r.roundedCountRenderTarget.texture;let c=e.autoClear,l=e.getRenderTarget();e.autoClear=!1,e.setRenderTarget(r.outputRenderTarget),e.clear(!0,!1,!1),e.render(r.compositeScene,r.ortho),e.setRenderTarget(l),e.autoClear=c}finally{for(let e in o)t.hash[e].visible=o[e]}},Et=(e,t,n,r,i)=>(e.readRenderTargetPixels(t.baseRenderTarget,n,r,1,1,i),i[3]===0?null:(e.readRenderTargetPixels(t.roundedCountRenderTarget,n,r,1,1,i),i[0]>=Y&&e.readRenderTargetPixels(t.countRenderTarget,n,r,1,1,i),Math.max(i[0]-1,0))),Dt=class{viewMode=`primary`;band=`low`;dirty=!1;cancelled=!1;requestedCompute=0;devices={};editor={country:`US`,isClientExperience:!1};constructor(e){this.emit=e}updateEditorData=({country:e,isClientExperience:t,viewMode:n,band:r})=>{this.editor.country=e,this.editor.isClientExperience=t,this.viewMode=n,this.band=r,this.scheduleCompute()};upsertDeviceStatus=(e,t)=>{let n=this.devices[e];n&&(n.status=t,this.scheduleCompute())};upsertDeviceTransceiver=(e,t,n,r)=>{if(!r){e in this.devices&&(delete this.devices[e],this.scheduleCompute());return}let i=this.getDevice(e);i.productTitle=t,i.radios=n,this.scheduleCompute()};removeDevice=e=>{delete this.devices[e],this.scheduleCompute()};destroy=()=>{this.cancelled=!0,this.requestedCompute&&=(de(this.requestedCompute),0)};scheduleCompute=()=>{this.dirty=!0,this.viewMode===`interference`&&(this.requestedCompute||=ce(this.compute))};compute=()=>{if(this.requestedCompute=0,this.cancelled||!this.dirty)return;this.dirty=!1;let e=this.getWifiDevices();this.emit({[this.band]:this.computeGroups(e,this.band)})};getDevice=e=>this.devices[e]||={id:e,productTitle:null,radios:null,status:`default`};getWifiDevices=()=>{let e=[];for(let t in this.devices){let n=this.devices[t];n.status===`default`&&e.push(n)}return e};getSpectralInput=(e,t)=>{if(e.productTitle===null)return null;let{country:n,isClientExperience:r}=this.editor,i=ve(e.productTitle,n);if(!i)return null;let a=le(t,e.radios,r,i.variants);if(a===void 0)return null;let o=ve(e.productTitle,n,a);if(!o)return null;let s=e.radios?.byId[a];if(_e(s))return null;let c=s.channel;if(c===void 0||c<=0)return null;let l=s.channelWidth??ye[R(a)];return{id:e.id,channel:c,channelWidth:l,channelsMap:o.channels}};computeGroups=(e,t)=>{let n=[];for(let r of e){let e=this.getSpectralInput(r,t);e&&n.push(e)}return Re(n)}},Ot=10,kt=.25,Z=24,At=1,jt=2,Mt=e=>{let t=Math.sin(e*12.9898+e*78.233)*43758.5453;return t-Math.floor(t)},Nt=(0,J.memo)(({scene:e})=>{let[t,n]=(0,J.useState)(null),r=De(),i=(0,J.useRef)({startTime:0,originalPositions:null,bucketSeeds:null,bucketDisplacements:new Float32Array(Z),centerX:0,centerY:0,numVertices:0,active:!1,activeShapeId:null,geometryVersion:null}),a=H.api();return(0,J.useEffect)(()=>{let t=t=>{let r=t.values().next().value;if(t.size===1&&r&&e.hash[r]?.userData.app===`network`){n(r);return}n(null)},r=t=>new Set(t.all.device.list.flatMap(t=>e.hash[t.id]?.userData.app===`network`&&t.$flags.SELECTED?[t.id]:[]));return t(r(a.getState())),a.subscribe(r,t,{equalityFn:(e,t)=>e.size===t.size&&Array.from(e).every(e=>t.has(e))})},[a,e.hash]),(0,J.useEffect)(()=>{let n=i.current;if(t){let r=e.hash[t];if(r?.geometry?.attributes?.position){let e=r.geometry.attributes.position.array;n.originalPositions=new Float32Array(e);let i=e.length/3,a=0,o=0;for(let t=0;t<i;t++)a+=e[t*3],o+=e[t*3+1];n.centerX=a/i,n.centerY=o/i,n.numVertices=i,n.bucketSeeds=new Float32Array(Z*4);for(let e=0;e<Z*4;e++)n.bucketSeeds[e]=Mt(e*1.337+t.charCodeAt(0));n.startTime=performance.now()/1e3,n.active=!0,n.activeShapeId=t,n.geometryVersion=e}}else{if(n.active&&n.originalPositions&&n.activeShapeId){let t=e.hash[n.activeShapeId];if(t?.geometry?.attributes?.position){let i=t.geometry.attributes.position;i.array.set(n.originalPositions),i.needsUpdate=!0,t.geometry.boundingBox=null,t.geometry.boundingSphere=null,e.rerender(),r()}}n.active=!1,n.originalPositions=null,n.bucketSeeds=null,n.activeShapeId=null,n.geometryVersion=null}},[t,e,r]),M(()=>{let n=i.current;if(!n.active||!t||!n.originalPositions||!n.bucketSeeds)return;let a=e.hash[t];if(!a?.geometry?.attributes?.position)return;let o=a.geometry.attributes.position,s=o.array;if(n.geometryVersion!==s){n.active=!1,n.originalPositions=null,n.bucketSeeds=null,n.activeShapeId=null,n.geometryVersion=null;return}let c=performance.now()/1e3-n.startTime;if(c>=Ot){o.array.set(n.originalPositions),o.needsUpdate=!0,n.active=!1,n.activeShapeId=null,e.rerender(),r();return}let l=n.originalPositions,u=n.bucketSeeds,{centerX:d,centerY:f,numVertices:p}=n,m=Math.min(c/At,1)*(c>Ot-jt?(Ot-c)/jt:1),h=n.bucketDisplacements;for(let t=0;t<Z;t++){let n=t/Z*Math.PI*2-Math.PI,r=u[t*4],i=u[t*4+1],a=u[t*4+2],o=u[t*4+3],s=Math.sin(n*3+c*.1*Math.PI*2),l=.15+r*.2,d=.08+i*.12,f=a*Math.PI*2,p=o*Math.PI*2,g=Math.sin(c*l*Math.PI*2+f),_=Math.sin(c*d*Math.PI*2+p),v=.3+r*.7,y=s*.3+g*.4+_*.3;h[t]=kt*e.plan.scale*v*y*m}for(let e=0;e<p;e++){let t=l[e*3],n=l[e*3+1],r=t-d,i=n-f,a=Math.sqrt(r*r+i*i);if(a>0){let o=r/a,c=i/a,l=(Math.atan2(i,r)+Math.PI)/(Math.PI*2)*Z,u=Math.floor(l)%Z,d=(u+1)%Z,f=l-Math.floor(l),p=(1-Math.cos(f*Math.PI))/2,m=h[u]*(1-p)+h[d]*p;s[e*3]=t+o*m,s[e*3+1]=n+c*m}}o.needsUpdate=!0,a.geometry.boundingBox=null,a.geometry.boundingSphere=null,e.rerender(),r()}),null});function Pt(e,t){let n=n=>{let r=new C(e,t,{format:_,type:h,minFilter:k,magFilter:k,generateMipmaps:!1,colorSpace:``});return r.texture.name=n,r},r={primary:n(`RankBufferPrimary`),secondary:n(`RankBufferSecondary`),tertiary:n(`RankBufferTertiary`)},i={primary:n(`RankBufferPrimaryCopy`),secondary:n(`RankBufferSecondaryCopy`)},a=n(`ThroughputBuffer`),o=new lt,s={primary:n(`SignalBufferPrimary`),secondary:n(`SignalBufferSecondary`),tertiary:n(`SignalBufferTertiary`)},c=[...Object.values(r),...Object.values(i),a,...Object.values(s)];return{target:r,copy:i,throughput:a,throughputMaterial:o,signal:s,dispose:()=>{c.forEach(e=>e.dispose()),o.dispose()},resize:(e,t)=>c.forEach(n=>n.setSize(e,t))}}var Ft=null;function It(){if(!Ft){let e=new g,t=new oe(-1,1,1,-1,0,1),n=new v({uniforms:u.clone(N.uniforms),vertexShader:N.vertexShader,fragmentShader:N.fragmentShader,depthTest:!1,depthWrite:!1}),r=new D(new y(2,2),n);e.add(r),Ft={scene:e,camera:t,mesh:r,material:n}}return Ft}function Lt(e,t,n){let{scene:r,camera:i,material:a}=It(),o=e.getRenderTarget();a.uniforms.tDiffuse.value=t.texture,e.setRenderTarget(n),e.clear(),e.render(r,i),e.setRenderTarget(o)}var Rt=new i;function zt(e,t){let n=e.getRenderTarget(),r=e.getClearColor(Rt),i=e.getClearAlpha();e.setClearColor(0,0),e.setRenderTarget(t),e.clear(!0,!0,!0),e.setRenderTarget(n),e.setClearColor(r,i)}function Bt(e,t,n,r,i,a,o){let{width:s,height:c}=r,l=[];i.forEach(({mesh:e,apId:t,material:n},r)=>{l[r]=e.material,n.apId=t,n.setResolution(s,c),n.useRank1Exclusion=!!a,a&&(n.rank1Texture=a),n.useRank2Exclusion=!!o,o&&(n.rank2Texture=o),e.material=n}),e.setRenderTarget(r),e.clear(!0,!0,!0),e.render(t,n),e.setRenderTarget(null),i.forEach(({mesh:e},t)=>{l[t]&&(e.material=l[t])})}function Vt(e,t,n,r,i,a,o){let{width:s,height:c}=r,l=[],u=[];i.forEach(({mesh:e,apId:t,material:n,signalGeometry:r},i)=>{l[i]=e.material,u[i]=e.geometry,n.apId=t,n.setResolution(s,c),n.useRank1Exclusion=!!a,a&&(n.rank1Texture=a),n.useRank2Exclusion=!!o,o&&(n.rank2Texture=o),e.material=n,e.geometry=r}),e.setRenderTarget(r),e.clear(!0,!0,!0),e.render(t,n),e.setRenderTarget(null),i.forEach(({mesh:e},t)=>{e.material=l[t],e.geometry=u[t]})}function Ht(e,t,n,r,i){return e.readRenderTargetPixels(t,n,r,1,1,i),i[3]===0?null:{dbm:i[0]-128,apId:i[1]*256+i[2]}}var Ut={name:`SNRCompositeShader`,uniforms:{tBase:{value:null},tSignal1:{value:null},uColor0:{value:new i},uColor1:{value:new i},uColor2:{value:new i},uColor3:{value:new i},uColor4:{value:new i},uColor5:{value:new i},uColor6:{value:new i},uColor7:{value:new i},uColor8:{value:new i},uThresholds:{value:[10,15,20,23,27,30,35,40]},uNoiseFloor20Mhz:{value:-85},uResolution:{value:new m(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tBase;
    uniform sampler2D tSignal1;
    uniform vec3 uColor0;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    uniform vec3 uColor5;
    uniform vec3 uColor6;
    uniform vec3 uColor7;
    uniform vec3 uColor8;
    uniform float uThresholds[8];
    uniform float uNoiseFloor20Mhz;
    uniform vec2 uResolution;
    varying vec2 vUv;

    const float LN10 = 2.302585093;

    float decodeDbm(vec4 sig) { return sig.r * 255.0 - 128.0; }

    float decodeChannelWidth(vec4 sig) {
      float code = floor(sig.a * 255.0 + 0.5);
      if (code < 0.5) return 0.0;
      return 20.0 * pow(2.0, code - 1.0);
    }

    // Pure SNR: serving dBm minus channel-width-scaled thermal noise. Returns -1e6 when
    // the serving rank has no data (alpha=0).
    float servingSnr(vec4 sigServing) {
      float channelWidth = decodeChannelWidth(sigServing);
      if (channelWidth < 0.5) return -1e6;
      float servingDbm = decodeDbm(sigServing);
      float noiseDbm = uNoiseFloor20Mhz + 10.0 * (log(channelWidth / 20.0) / LN10);
      return servingDbm - noiseDbm;
    }

    // Best SNR sampled at offset uv — for seam patching when the current pixel has no data.
    float snrAt(vec2 uv) {
      vec4 s1 = texture2D(tSignal1, uv);
      return servingSnr(s1);
    }

    void main() {
      vec4 sig1 = texture2D(tSignal1, vUv);
      float baseCoverage = texture2D(tBase, vUv).a;

      bool anyRank = decodeChannelWidth(sig1) > 0.0;
      // OR-gate: discard only when the regular coverage mesh AND rank-1 are both empty.
      if (!anyRank && baseCoverage < 0.01) { gl_FragColor = vec4(0.0); return; }

      float snrDb;
      if (anyRank) {
        snrDb = servingSnr(sig1);
      } else {
        // Current pixel is a 1-pixel rasterisation seam in signalGeometry (no rank has data
        // here) but the base mesh covers — peek at 4 cardinal neighbours and use the best SNR
        // among them. Falls back to bucket 0 only when all four neighbours are also empty
        // (true multi-pixel gap, e.g. the centre of a wall-shadowed region).
        vec2 px = 1.0 / uResolution;
        float best = max(
          max(snrAt(vUv + vec2( px.x, 0.0)), snrAt(vUv + vec2(-px.x, 0.0))),
          max(snrAt(vUv + vec2(0.0,  px.y)), snrAt(vUv + vec2(0.0, -px.y)))
        );
        if (best <= -1e5) { gl_FragColor = vec4(uColor0, 1.0); return; }
        snrDb = best;
      }

      vec3 color;
      if      (snrDb >= uThresholds[7]) color = uColor8;
      else if (snrDb >= uThresholds[6]) color = uColor7;
      else if (snrDb >= uThresholds[5]) color = uColor6;
      else if (snrDb >= uThresholds[4]) color = uColor5;
      else if (snrDb >= uThresholds[3]) color = uColor4;
      else if (snrDb >= uThresholds[2]) color = uColor3;
      else if (snrDb >= uThresholds[1]) color = uColor2;
      else if (snrDb >= uThresholds[0]) color = uColor1;
      else                                color = uColor0;
      gl_FragColor = vec4(color, 1.0);
    }
  `},Wt=class extends v{constructor(){super({uniforms:{signalShift:{value:0},channelWidthCode:{value:1}},vertexShader:`
        attribute float signal;
        uniform float signalShift;
        varying float vSignal;

        void main() {
          vSignal = signal;
          vec4 mvPosition = modelViewMatrix * vec4(position.xy, 0.0, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Depth-test by (vSignal - signalShift) so the AP with the strongest SNR wins the depth
          // test. Mapping the shifted dBm to [-1, 1] gives ~100 distinct depths in 1 dB increments,
          // eliminating ties.
          float normalizedSnr = clamp((vSignal - signalShift + 100.0) / 100.0, 0.0, 1.0);
          gl_Position.z = mix(1.0, -1.0, normalizedSnr) * gl_Position.w;
        }
      `,fragmentShader:`
        uniform int channelWidthCode;
        varying float vSignal;

        void main() {
          // Encode dBm: shift by +128 so -128..-1 maps to 0..127 and 0..127 maps to 128..255
          float encoded = clamp(vSignal + 128.0, 0.0, 255.0);
          gl_FragColor = vec4(
            (floor(encoded) + 0.5) / 256.0,
            0.0,
            0.0,
            (float(channelWidthCode) + 0.5) / 256.0
          );
        }
      `,depthTest:!0,depthWrite:!0})}set signalShift(e){this.uniforms.signalShift.value=e}set channelWidthCode(e){this.uniforms.channelWidthCode.value=e}},Gt=(e,t)=>e?.[t]??ue.snr.noiseFloor[t],Kt=new WeakMap,qt=(e,t,n)=>{if(e.productTitle===null)return null;let r=`${t}|${n}|${e.productTitle}`;if(e.radios){let t=Kt.get(e.radios);if(t&&t.key===r)return t.result}let i=ve(e.productTitle,n);if(!i)return null;let a=le(t,e.radios,!1,i.variants);if(a===void 0)return null;let o=e.radios?.byId[a]?.channelWidth??ye[R(a)];return e.radios&&Kt.set(e.radios,{key:r,result:o}),o},Jt=e=>Math.max(1,Math.round(Math.log2(e/20))+1),Yt=e=>e>0?20*2**(e-1):0,Xt=e=>{let t=new C(1,1,{format:_,type:h,minFilter:k,magFilter:k,generateMipmaps:!1,colorSpace:``,depthBuffer:!1,stencilBuffer:!1});return t.texture.name=e,t},Zt=(e,t)=>{let n=Xt(`SNRBase`),r=Xt(`SNROutput`),i=new O({color:16777215,depthTest:!1,depthWrite:!1}),a=new oe(-1,1,1,-1,0,1),o=new y(2,2),s=ue.snr.colors[e],c=new v({uniforms:{tBase:{value:null},tSignal1:{value:null},uColor0:{value:s[0]},uColor1:{value:s[1]},uColor2:{value:s[2]},uColor3:{value:s[3]},uColor4:{value:s[4]},uColor5:{value:s[5]},uColor6:{value:s[6]},uColor7:{value:s[7]},uColor8:{value:s[8]},uThresholds:{value:[...ue.snr.thresholds]},uNoiseFloor20Mhz:{value:ue.snr.noiseFloor.low},uResolution:{value:new m(1,1)}},vertexShader:Ut.vertexShader,fragmentShader:Ut.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1}),l=new g,u=new D(o,c);return u.frustumCulled=!1,l.add(u),t.uniforms.tOverlay.value=r.texture,{baseRenderTarget:n,outputRenderTarget:r,baseMaterial:i,ortho:a,compositeMaterial:c,compositeScene:l,compositeMesh:u}},Qt=(e,t,n)=>{e.baseRenderTarget.width===t&&e.baseRenderTarget.height===n||(e.baseRenderTarget.setSize(t,n),e.outputRenderTarget.setSize(t,n),e.compositeMaterial.uniforms.uResolution.value.set(t,n))},$t=e=>{e.baseRenderTarget.dispose(),e.outputRenderTarget.dispose(),e.baseMaterial.dispose(),e.compositeMaterial.dispose(),e.compositeMesh.geometry.dispose()},en=(e,t)=>{let n=null;return{peek:()=>n,ensure:()=>n||(n=Zt(e,t),n),setEnabled:e=>{n&&(t.enabled=e)},resize:(e,t)=>{n&&Qt(n,e,t)},dispose:()=>{t.enabled=!1,t.uniforms.tOverlay.value=null,n&&=($t(n),null)}}},tn=(e,t,n)=>{let r={};for(let i of e){let e=qt({productTitle:i.$product?.title??null,radios:i.$radios??null},t,n);e!==null&&(r[i.id]=e)}return r},nn=(e,t)=>{let n=new Map,r=new Map;for(let i in e.hash){let a=e.hash[i]?.userData.apId,o=t[i];typeof a==`number`&&o!==void 0&&(n.set(a,Jt(o)),r.set(a,10*Math.log10(o/20)))}return{channelWidthCodeByApId:n,signalShiftByApId:r}},rn=new i,an=(e,t,n,r,i)=>{let a=t.overrideMaterial,o=e.getClearColor(rn),s=e.getClearAlpha(),c=e.getRenderTarget();t.overrideMaterial=r.baseMaterial,n.layers.set(i),e.setClearColor(0,0),e.setRenderTarget(r.baseRenderTarget),e.clear(!0,!1,!1),e.render(t,n),e.setRenderTarget(c),e.setClearColor(o,s),t.overrideMaterial=a},on=(e,t,n,r,i,a)=>{let o=[],s=[];i.forEach(({mesh:e,apId:t,material:n,signalGeometry:r},i)=>{o[i]=e.material,s[i]=e.geometry,n.signalShift=a.signalShiftByApId.get(t)??0,n.channelWidthCode=a.channelWidthCodeByApId.get(t)??1,e.material=n,e.geometry=r});let c=e.getRenderTarget();e.setRenderTarget(r),e.clear(!0,!0,!0),e.render(t,n),e.setRenderTarget(c),i.forEach(({mesh:e},t)=>{e.material=o[t],e.geometry=s[t]})},sn=(e,t,n,r,i,a,o)=>{an(e,t,n,r,o),r.compositeMaterial.uniforms.tBase.value=r.baseRenderTarget.texture,r.compositeMaterial.uniforms.tSignal1.value=a,r.compositeMaterial.uniforms.uNoiseFloor20Mhz.value=i;let s=e.autoClear,c=e.getRenderTarget();e.autoClear=!1,e.setRenderTarget(r.outputRenderTarget),e.clear(!0,!1,!1),e.render(r.compositeScene,r.ortho),e.setRenderTarget(c),e.autoClear=s},cn=(e,t,n,r,i,a)=>{if(e.readRenderTargetPixels(t,r,i,1,1,a),a[3]===0)return null;let o=a[0]-128,s=Yt(a[3]);return s===0?null:o-(n+10*Math.log10(s/20))},ln=(e,t,n,r,i,a,o)=>{if(!t)return null;let s=cn(e,t,r,i,a,o);if(s!==null)return s;if(e.readRenderTargetPixels(n,i,a,1,1,o),o[3]===0)return null;let c=null;for(let[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let l=i+n,u=a+s;if(l<0||u<0||l>=t.width||u>=t.height)continue;let d=cn(e,t,r,l,u,o);d!==null&&(c===null||d>c)&&(c=d)}return c},un=({sensor:e,gateway:t})=>{let n=e.compatibility,r=t.compatibility;return!n&&!r?!1:!!(n?.includes(`superlink-${t.id}`)||n?.includes(`superlink-${t.sku}`)||r?.includes(`superlink-${e.id}`)||r?.includes(`superlink-${e.sku}`)||t.subcategory&&n?.includes(`superlink-${t.subcategory}`)||e.subcategory&&r?.includes(`superlink-${e.subcategory}`))},dn=e=>e.getState().plan.device.list.some(e=>e.$flags.SELECTED&&ge(e.$product)),fn=(e,t)=>Ce(e.getState().plan.device.list,t.getState().currently),Q={context:(e,t)=>({focusIds:fn(e,t)}),isSuperLinkSensorSelected:dn};function pn(e,t,n,r,i,a){let o=[];i.forEach((e,t)=>{o[t]=e.material,e.material=a}),e.setRenderTarget(r),e.clear(!0,!0,!0),e.render(t,n),e.setRenderTarget(null),i.forEach((e,t)=>{o[t]&&(e.material=o[t])})}function mn(e,t,n,r,i){e.readRenderTargetPixels(t,n,r,1,1,i);let[a,o,s,c]=i;return c>0?Math.round(a*65536+o*256+s):null}var $=t(),hn=16777215,gn=11776947,_n=(e,t)=>t?1:jn(e)?2:1,vn=(0,J.memo)(()=>{let e=(0,J.useRef)(null),t=H(e=>e.plan.wall.list),n=(0,J.useMemo)(()=>t.filter(e=>!e.$flags.CREATING),[t]),r=Tn(e);wn(e,r,n);let i=H(e=>e.plan.attenuationObject.list),a=H(e=>e.all.wall.hash),o=H(e=>e.plan.marker.list),s=H(e=>e.all.marker.list),c=H(e=>e.adjacent.wall.list),l=H(e=>e.adjacent.attenuationObject.list),u=H(e=>e.plan.device.list),d=H(e=>e.adjacent.device.list),f=G(e=>e.settings.visual.adjacentFloorSignal),p=H(e=>e.plan.coverageZone.list.length>0),m=G(e=>V.has(e.editor.view,[V.$view.UI_CABLE,V.$view.UI_WALL,V.$view.UI_ATTENUATION_OBJECT,V.$view.UI_ALIGN_PLANS,V.$view.UI_ALIGN_IMAGE,V.$view.UI_SCALE])),h=G(e=>V.has(e.editor.view,V.$view.UI_CLIENT_EXPERIENCE)||V.has(e.editor.view,V.$view.UI_CAMERA_EXPERIENCE)||!!e.settings.coverage.type||!!e.currently.hovered||!!e.currently.placed||!!e.currently.dragged||!!e.currently.aimed||!!r?.selected.size),g=H.api(),_=H(()=>Q.isSuperLinkSensorSelected(g)),v=(h||_||p)&&!m,y=z(e=>e.byVariant),b=K(e=>e.current),x=K(e=>e.byId),S=(0,J.useMemo)(()=>!f||!d.length||!b?.ordering?[]:c.map(e=>({wall:e,floor:x[e.planId].ordering-b.ordering})),[f,d.length,c,b,x]),C=(0,J.useMemo)(()=>!f||!d.length||!b?.ordering?[]:l.map(e=>({object:e,floor:x[e.planId].ordering-b.ordering})),[f,d.length,l,b,x]),w=(0,J.useMemo)(()=>Fe(c.length>0?[...n,...c]:n,a,c.length>0?s:o),[n,c,a,s,o]),T=W(),E=Ke();return r?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`mesh`,{ref:e,renderOrder:-1,visible:v}),(0,$.jsx)(yn,{scene:r}),!T&&(0,$.jsx)(Nt,{scene:r}),u.map(e=>(0,$.jsx)(bn,{device:e,scene:r},e.id)),f&&d.map(e=>(0,$.jsx)(bn,{device:e,scene:r},e.id)),n.map(e=>{let t=e.$wallType,{variantKey:n,topHeight:i,bottomHeight:a}=t,o=Ee(t),s=o?w.get(e.id):void 0;return o&&!s?(0,$.jsx)(xn,{wall:e,scene:r,attenuation:y[n]?.attenuation??0,floor:0,topHeight:E.height,bottomHeight:0},e.id):(0,$.jsx)(xn,{wall:e,scene:r,attenuation:y[n]?.attenuation??0,floor:0,topHeight:i??E.height,bottomHeight:a??0,fillAttenuation:s?y[s.$wallType.variantKey]?.attenuation??0:null},e.id)}),S.map(({wall:e,floor:t})=>{let n=e.$wallType,{variantKey:i,topHeight:a,bottomHeight:o}=n,s=Ee(n),c=s?w.get(e.id):void 0;return s&&!c?(0,$.jsx)(xn,{wall:e,scene:r,attenuation:y[i]?.attenuation??0,floor:t},e.id):(0,$.jsx)(xn,{wall:e,scene:r,attenuation:y[i]?.attenuation??0,floor:t,topHeight:a,bottomHeight:o,fillAttenuation:c?y[c.$wallType.variantKey]?.attenuation??0:null},e.id)}),i.map(e=>{let t=e.$attenuationObjectType;return(0,$.jsx)(Sn,{object:e,scene:r,attenuation:t.attenuation,floor:0,topHeight:t.topHeight??E.height,bottomHeight:t.bottomHeight??0},e.id)}),C.map(({object:e,floor:t})=>{let n=e.$attenuationObjectType;return(0,$.jsx)(Sn,{object:e,scene:r,attenuation:n.attenuation,floor:t,topHeight:n.topHeight,bottomHeight:n.bottomHeight},e.id)})]}):null}),yn=(0,J.memo)(({scene:e})=>{let t=Ke(),n=G.api(),r=H.api(),i=pe(e=>e.motif),a=K(e=>e.current),o=K(e=>e.list),s=G(e=>e.consumer);e.coverage=G(e=>e.settings.coverage);let c=Ge(),l=G(e=>V.has(e.editor.view,V.$view.UI_CLIENT_EXPERIENCE)),u=G(e=>V.has(e.editor.view,V.$view.UI_CAMERA_EXPERIENCE)),d=H(e=>e.all.cameratargetconnection.list.find(e=>e.active)?.originIdDevice??null),f=H(e=>e.plan.client.list[0]),[p]=me(),m=l?f?.deviceName??U:U;(0,J.useEffect)(()=>n.subscribe(e=>{if(e.currently.placed)return e.currently.placed.id;if(e.currently.hovered)return e.currently.hovered.id;if(e.currently.dragged)return e.currently.dragged.id;if(e.currently.aimed)return e.currently.aimed.id},(t,i)=>{if(e.activeId=t??void 0,i&&e.hash[i]){e.hash[i].userData.hovered=!1;for(let t of e.hash[i].userData.children||[])e.hash[t].userData.hovered=!1}if(t&&e.hash[t]){e.hash[t].userData.hovered=!0;for(let n of e.hash[t].userData.children||[])e.hash[n].userData.hovered=!0}let a=n.getState().settings.coverage.type,o=Q.context(r,n);for(let t in e.hash)e.handleVisibility(e.hash[t],a,e.mode,o);e.rerender()},{fireImmediately:!0}),[n,e,r]);let h=Se(()=>{let{dispatcher:t}=n.getState();e.rerender(),t.debounced(`editor:coverage:rendered`,null,{name:`editor-coverage`,wait:10})},{wait:10,trail:!0}),g=H(e=>Ie(e.getScale({type:`real`,planId:`current`,fallbackPlanIds:[]})).height),_=H(e=>{if(!a?.ordering)return;let t=o.find(e=>e?.ordering&&e?.ordering===a.ordering+1);return t?e.getScale({type:`real`,planId:t.id,fallbackPlanIds:[]}):void 0}),v=H(e=>{if(!a?.ordering)return;let t=o.find(e=>e?.ordering&&e?.ordering===a.ordering-1);return t?e.getScale({type:`real`,planId:t.id,fallbackPlanIds:[]}):void 0}),y=(0,J.useMemo)(()=>{let e={attenuation:a?.attenuation||20,height:g,scale:t.scale};if(!a?.ordering)return{current:e,above:null,below:null};let n=o.find(e=>e?.ordering&&e?.ordering===a.ordering+1),r=n?{attenuation:n.attenuation??20,height:Ie(_).height,scale:t.scale}:null,i=o.find(e=>e?.ordering&&e?.ordering===a.ordering-1);return{current:e,above:r,below:i?{attenuation:i.attenuation??20,height:Ie(v).height,scale:t.scale}:null}},[g,_,v,a?.ordering,a?.attenuation,o,t.scale]);(0,J.useEffect)(()=>{let{coverage:t,mode:a}=e,{band:o,ranges:u,type:f,autoBand:h,viewMode:g}=t,_=Q.context(r,n);for(let t in e.hash)e.handleVisibility(e.hash[t],f,a,_),e.hash[t].userData.rendered=void 0;e.send.editorData({autoBand:h,consumer:s,plans:y,band:o,ranges:u,mode:a,motif:i,country:c,isClientExperience:l,activeCameraDeviceId:d,clientDeviceName:m,clientData:p,viewMode:g})},[e,e.mode,e.coverage,e.coverage.type,e.coverage.viewMode,t,i,y,c,l,u,d,m,p,s,n,r]),(0,J.useEffect)(()=>{let t=t=>{let r=t.data,{dispatcher:i}=n.getState();if(Ve(r.pending),r.type===`coverage`){let t=e.rebuild(r.deviceId,r.data),n=e.hash[r.deviceId];n&&r.sensitivityShift!=null&&e.sensitivityShiftByApId.set(n.userData.apId,r.sensitivityShift),i.emit(`editor:coverage`,{shapeId:r.deviceId,mesh:n,composer:t,scene:e,readThroughputAt:e.readThroughputAt,readSignalDataAt:e.readSignalDataAt,readInterferenceCountAt:e.readInterferenceCountAt,readSNRAt:e.readSNRAt})}let a=Object.values(e.hash);a.length&&a.every(t=>t.userData.rendered===`${e.coverage.type}-${e.coverage.band}`)&&h()};return e.worker.addEventListener(`message`,t),()=>{e.worker.removeEventListener(`message`,t)}},[n,e,h]);let b=(n,r,i)=>{if(!e.hash[n.id]||!n.$instance||!B.device(n))return;if(i){e.hash[n.id].visible=!1;return}let a=B.device(n)?n.$product.properties:null;e.send.deviceOrientation(n.id,On(n,e.mode,t),kn(n,r),An(n,e.mode),n.$transceiver,Dn(n),!0,En(n),a?.focalLength,a?.sensorWidth)};return q(`shape:cone:move`,e=>{b(e.detail.shape,e.detail.pov)}),q(`shape:cone:zoom`,e=>{b(e.detail.shape)}),q(`shape:drag:move`,e=>{b(e.detail.shape,void 0,e.detail.secondary)}),q(`shape:create:move`,e=>{b(e.detail.shape)}),null}),bn=(0,J.memo)(({device:e,scene:t})=>{let n=H.api(),r=H(()=>e.$transceiver),i=H(()=>!e.$flags.INVISIBLE&&!e.$flags.INVALID_PLACE),a=H(()=>e.$flags.SELECTED||!!e.$related.parent?.$flags.SELECTED),o=G(t=>t.currently.hovered?.id===e.id),s=G(t=>{let n=t.currently.hovered??t.currently.placed;return B.device(n)&&n.$product.subcategory===L.SUPERLINK_SENSOR&&un({sensor:n.$product,gateway:e.$product})}),c=H(()=>e.$product.subcategory===L.SUPERLINK_GATEWAY&&Q.isSuperLinkSensorSelected(n)),l=H(()=>e.$world),u=H(()=>e.$zoom),d=H(t=>!!t.adjacent.device.hash[e.id]),f=K(e=>e.byId),p=K(e=>e.current),m=H(()=>e.$radios),h=(0,J.useMemo)(()=>!d||!e.planId?0:(f[e.planId]?.ordering||0)-(p?.ordering||0),[d,f,p,e.planId]),g=G(e=>V.has(e.editor.view,V.$view.UI_CLIENT_EXPERIENCE)),{activeClientId:_,activeDeviceId:v,interactedDeviceId:y}=H.clientLinks(),b=Ke(),x=xe.wifi(r)?`network`:`protect`,S=e.$product.compatibility?.includes(`wifi`)??!1,C=e.$product.properties?.focalLength,w=e.$product.properties?.sensorWidth,T=xe.camera(r)&&r.h>=180,E=H(t=>{if(t.consumer===`innerspace`){if(!e.$status.ONLINE)return`offline`;let t=e.$doorStatus;if(t===`failed`)return`doorFailed`;if(t===`unlocked`)return`doorOpening`;if(e.$flags.CAMERA_DETECTION)return`detection`}return`default`}),D=e.$product.subcategory===L.SUPERLINK_GATEWAY,O=G(t=>Pe(t.currently)?.id===e.id),k=i&&!he(e)&&!!r&&(E!==`offline`||x===`protect`)&&e.$product.subcategory!==L.UDB&&e.$product.subcategory!==L.UBB&&(!D||a||o||s||c||O),ee=(0,J.useRef)(e);ee.current=e;let A=(0,J.useRef)(null);return(0,J.useEffect)(()=>{if(!k){A.current?.(),A.current=null;return}let r=n.getState().all.device.hash[e.id],i=r?.$related.children?.map(({id:e})=>e)??null;return A.current=t.handleCoverageItem(e.id,x,T,i,!!r?.parentId),()=>{A.current?.(),A.current=null}},[t,e.id,T,x,k,n,e.productId]),(0,J.useEffect)(()=>{if(k){if(g){y&&y!==_&&v!==y?(t.handleSelected(e.id,!1),t.handleSelected(y,!0)):t.handleSelected(e.id,e.id===v);return}t.handleSelected(e.id,a)}},[t,e.id,k,a,r,g,_,y,v]),(0,J.useEffect)(()=>{k&&t.send.deviceTransceiver(e.id,e.$product.title,e.$product.uidbId??null,m,e.antenna,r,S,C,w)},[t.send,e.id,e.$product.title,e.$product.uidbId,m,e.antenna,r,S,C,w,k,g]),(0,J.useEffect)(()=>{k&&t.send.deviceStatus(e.id,E)},[t.send,e.id,e.status,E,k,r]),(0,J.useEffect)(()=>{k&&t.send.deviceFloor(e.id,h)},[t.send,e.id,h,k,r]),(0,J.useEffect)(()=>{if(!k)return;let e=ee.current;t.send.deviceOrientation(e.id,On(e,t.mode,b),kn(e),An(e,t.mode),e.$transceiver,Dn(e),!1,u,C,w)},[t,e.id,l,e.mount,k,b,u,C,w]),null}),xn=(0,J.memo)(({wall:e,scene:t,attenuation:n,floor:r,topHeight:i=null,bottomHeight:a=null,fillAttenuation:o=null})=>{let s=H(()=>e.$world2D),c=H(()=>!!e.$flags.CREATING);return(0,J.useEffect)(()=>{c||t.send.wallPosition(e.id,s.position)},[t.send,e.id,s.position,c]),(0,J.useEffect)(()=>{c||t.send.wallData(e.id,e.variant,n,r,i,a,o)},[t.send,e.id,e.variant,n,r,i,a,o,c]),(0,J.useEffect)(()=>()=>t.send.shapeRemove(e.id,`wall`),[t.send,e.id]),null}),Sn=(0,J.memo)(({object:e,scene:t,attenuation:n,floor:r,topHeight:i=null,bottomHeight:a=null})=>{let o=H(()=>e.$world2D),s=H(()=>!!e.$flags.CREATING);return(0,J.useEffect)(()=>{s||t.send.attenuationObjectPosition(e.id,o.position)},[t.send,e.id,o.position,s]),(0,J.useEffect)(()=>{s||t.send.attenuationObjectData(e.id,e.variant,n,r,i,a)},[t.send,e.id,e.variant,n,r,i,a,s]),(0,J.useEffect)(()=>()=>t.send.shapeRemove(e.id,`attenuation-object`),[t.send,e.id]),null}),Cn=e=>{let t=H.api(),n=H(e=>e.plan.map.list[0]),r=K(e=>e.list),i=K(e=>e.current),a=G(e=>e.multiFloorEnabled),o=G(e=>e.mode),{scale:s}=Ke(),l=(0,J.useMemo)(()=>ke(je(r),i?.ordering)<=0,[i,r]);return(0,J.useMemo)(()=>{if(o!==`3D`||!a||l||!n)return null;let r=tt(e,s);return r?new c(r.getPoints().map(e=>{let r=t.getState().localToWorld(new S(e.x,0,-e.y),n.planId,`3D`);return new m(r.x,-r.z)})):null},[t,o,a,l,n,e,s])},wn=(e,t,n)=>{let r=G(e=>e.mode),i=G(e=>e.print),a=T(e=>e.camera),o=T(e=>e.size),s=T(e=>e.gl),c=(0,J.useRef)(null),l=_n(s,i),u=Cn(n),d=(0,J.useMemo)(()=>r===`3D`?u?new f(u):new y(Xe.GROUND_SIZE,Xe.GROUND_SIZE):null,[r,u]);(0,J.useEffect)(()=>()=>d?.dispose(),[d]),(0,J.useLayoutEffect)(()=>{if(!e.current)return;if(r===`3D`){d&&(e.current.geometry=d),e.current.rotation.set(-Math.PI/2,0,0),e.current.position.set(0,Xe.COVERAGE_LIFT,0),e.current.scale.setScalar(1);return}let t=o.width*l,n=o.height*l,i=c.current,s=i&&i.parameters.width===t&&i.parameters.height===n?i:new y(t,n);s!==i&&(i?.dispose(),c.current=s),e.current.geometry=s,e.current.rotation.set(0,0,0),e.current.scale.setScalar(1/a.zoom/l),e.current.position.copy(a.position)},[r,t,d,o.width,o.height,e,a,l]),(0,J.useEffect)(()=>()=>c.current?.dispose(),[]),(0,J.useEffect)(()=>{t?.rerender()},[t,d])},Tn=e=>{let[,t]=(0,J.useState)(0),n=(0,J.useRef)(null),r=(0,J.useRef)(new i),a=(0,J.useRef)(new S),o=(0,J.useRef)(new S),s=G(e=>e.print),u=G(e=>e.mode),h=G(e=>e.settings.visual.opacity.coverage),_=G(e=>e.settings.coverage),v=T(e=>e.gl),k=T(e=>e.size),j=T(e=>e.camera),M=Ke(),re=pe(e=>e.motif),ae=De(),P=G(e=>V.has(e.editor.view,V.$view.UI_CLIENT_EXPERIENCE)),ce=G(e=>V.has(e.editor.view,V.$view.UI_CAMERA_EXPERIENCE)),le=P||ce,de=!P&&_.viewMode===`interference`,F=!P&&_.viewMode===`snr`,me=Gt(_.snrNoiseFloor,_.band),I=G.api(),L=H.api(),ge=We.api(),_e=Ge(),ve=H(e=>F?e.plan.device.list:Fn),ye=H(e=>F?e.adjacent.device.list:Fn),be=(0,J.useMemo)(()=>F?tn([...ve,...ye].filter(e=>xe.wifi(e.$transceiver)&&!he(e)),_.band,_e):{},[ye,_.band,_e,F,ve]);n.current||=Pt(k.width,k.height);let R=n.current,z=(0,J.useMemo)(()=>{let e=new C(1,1,{stencilBuffer:!0});e.texture.minFilter=A,e.texture.magFilter=A;let t={item:new O({vertexColors:!0}),coverageStackMaterial:new O({blending:2,depthTest:!1}),coverage:u===`2D`?new O({transparent:!0,opacity:.8}):new nt({transparent:!0,opacity:.8}),mask:e,zoneScene:new g,zoneMaskStencilMaterial:new O({side:2,depthTest:!1,depthWrite:!1,colorWrite:!1,stencilWrite:!0,stencilFunc:519,stencilZPass:ne}),zoneMaskFillMaterial:new O({color:16777215,side:2,depthTest:!1,depthWrite:!1,stencilWrite:!0,stencilFunc:514,stencilRef:255}),zoneFillScene:new g,zoneFillCamera:new oe(-1,1,1,-1,-1,1),debug:new b({transparent:!0,color:16711680,size:u===`2D`?5:2})};u===`3D`&&(t.item.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`
          #include <project_vertex>
          gl_Position.z -= (85.0 + transformed.z) * 0.001 * (1.0 + gl_Position.w / 200.0);
          `)}),t.coverageStackMaterial.onBeforeCompile=e=>{let t={out:`
          out float layer;
        `,in:`
          in float layer;
        `},n=e.vertexShader.replace(`#include <project_vertex>`,`
        #include <project_vertex>
        layer = transformed.z;
        ${u===`3D`?`gl_Position.z -= (85.0 + transformed.z) * 0.001 * (1.0 + gl_Position.w / 200.0);`:``}
        `);e.vertexShader=`${t.out} ${n}`;let r=e.fragmentShader.replace(`#include <opaque_fragment>`,`
        #include <opaque_fragment>
        float fraction = fract(layer); //Handle precision errors due to interpolation
        if(fraction < 0.001 || fraction > 0.999) {
          //Render only poor part of coverage since that contains also other layers
          gl_FragColor = vec4(vec3(${at}), diffuseColor.a );
        } else {
          gl_FragColor = vec4(vec3(0.0), diffuseColor.a );
        }
        `);e.fragmentShader=`${t.in} ${r}`};let n=new D(new y(2,2),t.zoneMaskFillMaterial);return n.frustumCulled=!1,t.zoneFillScene.add(n),t},[u]);(0,J.useEffect)(()=>{z.coverage.opacity=h,z.coverage instanceof nt&&(z.coverage.uniforms.opacity.value=h)},[z.coverage,h]);let Se=H(e=>e.plan.coverageZone.list),[U,W]=(0,J.useMemo)(()=>{let e=new g,[t,n,r,i,a]=[,,,,,].fill(null).map(()=>{let e=new ee(v,new C(void 0,void 0,{colorSpace:`srgb`}));return e.renderToScreen=!1,e.setPixelRatio(_n(v,!1)),e});t.setPixelRatio(_n(v,s));let o=new w(it);o.uniforms.uMaskTexture.value=z.mask.texture,o.setSize=(e,t)=>{o.uniforms.resolution.value.set(e,t)};let c=new w(ot);c.setSize=(e,t)=>{c.uniforms.resolution.value.set(e,t)},c.uniforms.diffuse.value=ue.camera.outlineColor(re),n.addPass(new ie(e,j,z.coverageStackMaterial,null,0)),n.addPass(c),n.addPass(new w(N));let l={ranks:In(t,r),interference:new w(st),snr:new w(st),coverage:In(t,i),protect:In(t,a),outline:In(t,n)};l.interference.uniforms.tDiffuse.value=t.writeBuffer.texture,l.interference.enabled=!1,l.snr.uniforms.tDiffuse.value=t.writeBuffer.texture,l.snr.enabled=!1;let d=vt(re,l.interference),f=en(re,l.snr),p=re===`dark`,m=new w(rt);m.uniforms.uMaskTexture.value=z.mask.texture,m.uniforms.uBgColor.value.setScalar(+!p),m.uniforms.uMaskedCoverageScale.value=p?.1:2,m.uniforms.uHatchColor.value.setScalar(p?.02:.6),m.uniforms.uMode2D.value=u===`2D`,m.uniforms.uPixelRatio.value=_n(v,s),t.addPass(new ie(new g,j,null,null,0)),t.addPass(l.ranks),t.addPass(l.interference),t.addPass(l.snr),t.addPass(l.coverage),t.addPass(m),t.addPass(l.protect),t.addPass(o),t.addPass(l.outline),t.addPass(new te),t.addPass(new w(N));let h={ranks:new w(dt),coverage:new ie(e,j,null,null),protect:new ie(e,j,null,null)};return r.addPass(h.ranks),r.addPass(new w(N)),i.addPass(h.coverage),i.addPass(new w(N)),a.addPass(h.protect),a.addPass(new w(N)),e.hash={},e.selected=new Set,e.sensitivityShiftByApId=new Map,e.readSensitivityShift=t=>e.sensitivityShiftByApId.get(t)??0,[e,{main:t,outline:n,ranks:r,coverage:i,protect:a,blends:l,passes:h,effectLine:o,maskPass:m,interference:d,snr:f}]},[v,s,j,z.coverageStackMaterial,z.mask.texture,re,u]);U.mode=u,U.plan=M,U.autoRender=!s,(0,J.useEffect)(()=>{R.resize(k.width,k.height)},[R,k.width,k.height]),(0,J.useEffect)(()=>()=>R.dispose(),[R]),(0,J.useEffect)(()=>{let e=jn(v)?2:1;z.mask.setSize(k.width*e,k.height*e)},[z.mask,v,k.width,k.height]),(0,J.useEffect)(()=>()=>{z.mask.dispose(),z.item.dispose(),z.coverageStackMaterial.dispose(),z.coverage.dispose(),z.zoneMaskStencilMaterial.dispose(),z.zoneMaskFillMaterial.dispose(),z.debug.dispose();for(let e of z.zoneScene.children)e instanceof D&&e.geometry.dispose();for(let e of z.zoneFillScene.children)e instanceof D&&e.geometry.dispose()},[z]),(0,J.useEffect)(()=>()=>{for(let e of Object.values(W))if(e instanceof ee){for(let t of e.passes)t.dispose?.();e.dispose()}W.interference.dispose(),W.snr.dispose()},[W]);let Ce=(0,J.useCallback)(()=>{let e=z.zoneScene;for(let t of e.children)t instanceof D&&t.geometry.dispose();e.clear();for(let t of Se){if(t.$flags.CREATING)continue;let n=t.$instance?.userData.positions??t.$world2D.position;if(n.length<4)continue;let r=new D(new f(new c(n.slice(0,-1).map(e=>new m(e.x,e.y)))),z.zoneMaskStencilMaterial);u===`3D`&&(r.rotation.set(-Math.PI/2,0,0),r.scale.set(1/M.scale,1/M.scale,1),r.position.setY(.085)),e.add(r)}ae(),U.rerender()},[z.zoneScene,z.zoneMaskStencilMaterial,Se,u,M.scale,ae,U]);(0,J.useEffect)(()=>{Ce()},[Ce]);let we=(0,J.useCallback)(()=>{let e=!le&&z.zoneScene.children.length>0,t=v.getRenderTarget(),n=v.autoClear,i=v.getClearAlpha();v.getClearColor(r.current);try{v.setRenderTarget(z.mask),v.autoClear=!0,v.setClearColor(e?gn:hn,1),v.render(z.zoneScene,j),e&&(v.autoClear=!1,v.render(z.zoneFillScene,z.zoneFillCamera))}finally{v.setRenderTarget(t),v.autoClear=n,v.setClearColor(r.current,i)}},[v,j,le,z.zoneScene,z.mask,z.zoneFillScene,z.zoneFillCamera,r]);U.rerender=(0,J.useCallback)(()=>{if(!_)return;we();let t=P&&_.viewMode!==`dataRate`?`primary`:_.viewMode;W.effectLine.enabled=t!==`dataRate`;let n=null,r=_.type===`network`&&t!==`primary`&&t!==`dataRate`&&t!==`interference`&&t!==`snr`,i=I.getState().settings.coverage.type,s;if(_.type===`network`||r){s=Q.context(L,I);for(let e in U.hash)U.handleVisibility(U.hash[e],i,U.mode,s)}let c=Object.values(U.hash).filter(e=>e&&e.visible&&e.userData.rankMaterial).map(e=>({mesh:e,apId:e.userData.apId,material:e.userData.rankMaterial})),l=W.passes.ranks.uniforms,d=c.length>=Pn[t],f=U.selected.size>0||(s??Q.context(L,I)).focusIds.size>0,p=r&&d;if(r&&!d&&!f)for(let{mesh:e}of c)e.visible&&=!1;if(p){Bt(v,U,j,R.target.primary,c),Lt(v,R.target.primary,R.copy.primary),Bt(v,U,j,R.target.secondary,c,R.copy.primary.texture),t===`tertiary`&&(Lt(v,R.target.secondary,R.copy.secondary),Bt(v,U,j,R.target.tertiary,c,R.copy.primary.texture,R.copy.secondary.texture));let e=R.target[t].texture;l.rankTexture.value=e}else l.rankTexture.value=null;if(t===`dataRate`){let e=Object.values(U.hash).filter(e=>e&&e.visible);if(e.length>0){let t=j.layers.mask;j.layers.set(Nn),pn(v,U,j,R.throughput,e,R.throughputMaterial),j.layers.mask=t}else zt(v,R.throughput)}if(t!==`dataRate`&&t!==`interference`){let e=Object.values(U.hash).filter(e=>e&&e.visible&&e.userData.signalMaterial&&e.userData.signalGeometry).map(e=>({mesh:e,apId:e.userData.apId,material:e.userData.signalMaterial,signalGeometry:e.userData.signalGeometry}));if(e.length>0){let r=j.layers.mask;if(j.layers.set(Nn),F){n=nn(U,be);let t=e.flatMap(e=>{let t=e.mesh.userData.snrSignalMaterial;return t?[{...e,material:t}]:[]});on(v,U,j,R.signal.primary,t,n)}else Vt(v,U,j,R.signal.primary,e),p&&(Vt(v,U,j,R.signal.secondary,e,R.copy.primary.texture),t===`tertiary`&&Vt(v,U,j,R.signal.tertiary,e,R.copy.primary.texture,R.copy.secondary.texture));j.layers.mask=r}else zt(v,R.signal.primary),zt(v,R.signal.secondary),zt(v,R.signal.tertiary)}j.layers.set(Mn),W.outline.render();let m=!p&&!de&&!F;if(W.blends.ranks.enabled=p,W.blends.coverage.enabled=m,j.layers.set(Nn),p?W.ranks.render():m&&W.coverage.render(),de||W.interference.dispose(),de){let e=W.interference.ensure();W.interference.setEnabled(!0),W.interference.resize(k.width,k.height),Tt(v,U,j,e,ge.getState().groups?.[_.band]??[],Nn)}if(F||W.snr.dispose(),F){let e=W.snr.ensure();W.snr.setEnabled(!0),W.snr.resize(k.width,k.height),n?sn(v,U,j,e,me,R.signal.primary.texture,Nn):zt(v,e.outputRenderTarget)}if(j.layers.set(Mn),W.protect.render(),j.layers.set(0),u===`2D`){a.current.set(0,0,0).project(j),o.current.set(1,0,0).project(j);let e=Math.abs(o.current.x-a.current.x)*k.width/2;W.maskPass.uniforms.uHatchOffset.value=(j.position.y-j.position.x)*e}if(W.main.render(),e.current){let{width:t,height:n,texture:r}=W.main.writeBuffer;if(e.current.material=z.coverage,e.current.material instanceof O?e.current.material.map=r:e.current.material.uniforms.map.value=r,!(e.current.material instanceof O)){let r=jn(W.main.renderer)?2:1;e.current.material.uniforms.resolution.value.set(t/r*Math.min(2,window.devicePixelRatio),n/r*Math.min(2,window.devicePixelRatio))}ae({force:!0})}},[_,U,j,W,P,de,ge,F,me,k.width,k.height,e,u,be,v,R.target,R.copy,R.throughput,R.throughputMaterial,R.signal,z.coverage,we,ae,L,I]),(0,J.useEffect)(()=>{let e=Array(48).fill(0),t=ue.wifi.colorsByWifiStandard(_.ranges)[re];if(t){let n=Object.keys(t)[0];(n?t[n]:[]).slice(0,16).forEach((t,n)=>{let r=n*3;e[r]=t.r,e[r+1]=t.g,e[r+2]=t.b})}W.passes.ranks.uniforms.mcsColors.value=e},[_,re,W.passes.ranks]),U.rebuild=(0,J.useCallback)((e,[t,n,r,i,a,o])=>{let s=U.hash[e];if(!s)return W.main;if(U.handleVisibility(s,U.coverage.type,U.mode),s.geometry.setIndex(new x(t,1)),s.geometry.setAttribute(`color`,new p(n,3)),s.geometry.setAttribute(`position`,new p(r,3)),s.geometry.index.needsUpdate=!0,s.geometry.attributes.color.needsUpdate=!0,s.geometry.attributes.position.needsUpdate=!0,s.geometry.boundingBox=null,s.geometry.boundingSphere=null,i.byteLength>0&&a.byteLength>0&&o.byteLength>0){let e=s.userData.signalGeometry??new d;e.setIndex(new x(i,1)),e.setAttribute(`position`,new p(a,3)),e.setAttribute(`signal`,new p(o,1)),e.index.needsUpdate=!0,e.attributes.position.needsUpdate=!0,e.attributes.signal.needsUpdate=!0,e.boundingBox=null,e.boundingSphere=null,s.userData.signalGeometry=e}else s.userData.signalGeometry&&(s.userData.signalGeometry.dispose(),s.userData.signalGeometry=null);return s.userData.rendered=`${U.coverage.type}-${U.coverage.band}`,U.debug(e,[r]),W.main},[U,W.main]),U.debug=(0,J.useCallback)((e,[t])=>{let n=U.points[e];if(!n)return W.main;n.geometry.setAttribute(`position`,new p(window.designer?.debugCoverage?t:[],3)),n.geometry.attributes.position.needsUpdate=!0,n.geometry.boundingBox=null,n.geometry.boundingSphere=null},[U,W.main]),(0,J.useEffect)(()=>()=>{U.autoRender=!1},[U]);let Te=(0,J.useRef)(0);U.handleCoverageItem=(0,J.useCallback)((e,t,n,r,i)=>{let a=new D(void 0,z.item),o=new se(void 0,z.debug),s=Te.current++,c=I.getState().currently,l=c.hovered||c.dragged||c.placed||c.aimed,u=L.getState().all.device.hash[e],d=u?.parentId&&u.parentId===U.activeId,f=u?.parentId&&u.parentId===l?.id,p=l?.id===e||U.activeId===e||d||f;return a.userData={shapeId:e,app:t,hovered:p,is360:n,selected:!1,apId:s,rankMaterial:t===`network`?new ct(s):null,signalMaterial:t===`network`?new ut:null,snrSignalMaterial:t===`network`?new Wt:null,children:r,isChild:i},U.add(a),U.hash||={},U.mode===`2D`?(a.matrixAutoUpdate=!1,a.matrixWorldNeedsUpdate=!1):(a.rotation.set(-Math.PI/2,0,0),o.rotation.set(-Math.PI/2,0,0),a.scale.set(1/M.scale,1/M.scale,1/1e3),o.scale.set(1/M.scale,1/M.scale,1/1e3),t===`network`?a.position.setY(.085):t===`protect`&&a.position.setY(.005)),t===`protect`?a.layers.enable(Mn):t===`network`&&a.layers.enable(Nn),U.hash[e]=a,p&&U.handleVisibility&&(U.handleVisibility(U.hash[e],U.coverage.type,U.mode),U.autoRender&&U.rerender()),U.add(o),U.points||={},U.points[e]=o,o.layers.enable(Mn),()=>{U.send.shapeRemove(e,`device`),U.selected.has(e)&&U.handleSelected(e,!1),U.sensitivityShiftByApId.delete(a.userData.apId),delete U.hash[e],delete U.points[e],a.userData.rankMaterial?.dispose?.(),a.userData.signalMaterial?.dispose?.(),a.userData.snrSignalMaterial?.dispose?.(),a.userData.signalGeometry?.dispose?.(),a.geometry?.dispose(),o.geometry?.dispose(),U.remove(a),U.remove(o),U.autoRender&&U.rerender()}},[U,z,M.scale,I,L]),U.handleVisibility=(0,J.useCallback)((e,t,n,r)=>{let i=e.userData.shapeId,a=i?L.getState().all.device.hash[i]:void 0,o=r??Q.context(L,I),s=e.userData.app===`network`&&!!a&&Me(a.$product),c=le||e.userData.app===t||s,l=t!==`off`,u=I.getState().currently.dragged,d=U.selected.size>1&&u&&B.device(u)?!1:e.userData.selected;e.visible=(!U.selected.size&&c||l&&(e.userData.hovered||d))&&!e.userData.children,n===`3D`&&(e.visible=e.visible&&(e.userData.app!==`protect`||!e.userData.hovered||e.userData.is360||e.userData.isChild)),i&&o.focusIds.size>0&&(e.userData.app===`protect`?o.focusIds.has(i)||(e.visible=!1):a&&(s?e.visible=c:e.visible=!1))},[U,le,L,I]);let Ee=Ue(()=>U.rerender(),5);U.handleSelected=(0,J.useCallback)((e,t)=>{if(!U.hash[e]||!U.autoRender||U.hash[e].userData.children)return;U.hash[e].userData.selected=t,t?U.selected.add(e):U.selected.delete(e);let n=Q.context(L,I);for(let e in U.hash)U.handleVisibility(U.hash[e],U.coverage.type,U.mode,n);Ee()},[U,Ee,L,I]),U.handleViewport=(0,J.useCallback)(()=>{e.current&&(U.mode===`2D`&&(e.current.scale.setScalar(1/j.zoom/W.main._pixelRatio),e.current.position.copy(j.position)),U.rerender())},[U,e,j,W.main]);let ke=(0,J.useMemo)(()=>new Uint8Array(4),[]),Ae=(0,J.useMemo)(()=>new Uint8Array(4),[]),je=(0,J.useMemo)(()=>new Uint8Array(4),[]),K=(0,J.useMemo)(()=>new Uint8Array(4),[]);return U.readThroughputAt=(0,J.useCallback)((e,t)=>mn(v,R.throughput,e,t,ke),[v,R.throughput,ke]),U.readInterferenceCountAt=(0,J.useCallback)((e,t)=>{if(!de)return null;let n=W.interference.peek();return n?Et(v,n,e,t,je):null},[v,W.interference,je,de]),U.readSNRAt=(0,J.useCallback)((e,t)=>{if(!F)return null;let n=W.snr.peek();return n?ln(v,R.signal.primary,n.baseRenderTarget,me,e,t,K):null},[v,R.signal.primary,W.snr,K,F,me]),U.readSignalDataAt=(0,J.useCallback)((e,t)=>{let n=Object.values(U.hash).filter(e=>e&&e.visible&&e.userData.rankMaterial).length,r=fe({coverageType:_.type,viewMode:_.viewMode,isClientExperience:P,visibleApCount:n});return r?Ht(v,R.signal[r]??R.signal.primary,e,t,Ae):null},[v,R.signal,Ae,_.type,_.viewMode,P,U]),(0,J.useEffect)(()=>{F&&U.rerender()},[U,F,_.snrNoiseFloor?.low,_.snrNoiseFloor?.high,_.snrNoiseFloor?.ultra]),(0,J.useEffect)(()=>{[W.main,W.outline,W.ranks,W.coverage,W.protect].forEach(e=>{e.setSize(k.width,k.height)}),W.interference.resize(k.width,k.height),W.snr.resize(k.width,k.height),U.rerender()},[U,W,k.width,k.height]),(0,J.useEffect)(()=>{let e=!1,n=new Dt(e=>{ge.getState().setGroups(e),U.coverage.viewMode===`interference`&&U.autoRender&&U.rerender()});return(async()=>{let r;if(r=new Worker(new URL(`/assets/coverage.worker-D6vzuRon.js`,``+import.meta.url),{type:`module`}),e){r.terminate();return}U.worker=r,t(Date.now());let i=new l;U.send={editorData:e=>{U.worker.postMessage({type:`editor-data`,data:e}),n.updateEditorData({country:e.country,isClientExperience:e.isClientExperience,viewMode:e.viewMode,band:e.band})},wallData:(e,t,n,r,i,a,o)=>{U.worker.postMessage({type:`wall-data`,data:[e,t,n,r,i,a,o]})},wallPosition:(e,t)=>{let n=Float64Array.from(t.flatMap(e=>e.toArray()));U.worker.postMessage({type:`wall-position`,data:[e,n.buffer]},[n.buffer])},attenuationObjectData:(e,t,n,r,i,a)=>{U.worker.postMessage({type:`attenuation-object-data`,data:[e,t,n,r,i,a]})},attenuationObjectPosition:(e,t)=>{let n=Float64Array.from(t.flatMap(e=>e.toArray()));U.worker.postMessage({type:`attenuation-object-position`,data:[e,n.buffer]},[n.buffer])},deviceStatus:(e,t)=>{U.worker.postMessage({type:`device-status`,data:[e,t]}),n.upsertDeviceStatus(e,t)},deviceFloor:(e,t)=>{U.worker.postMessage({type:`device-floor`,data:[e,t]})},deviceOrientation:(e,t,n,r,a,o,s,c,l,u)=>{let d=E.radToDeg(i.setFromQuaternion(ze(n)).z),f=Oe(n),p=Be({position:t,pov:n,base:r,transceiver:a,plan:U.plan,ppm:25,zoom:c,mount:o,focalLength:l,sensorWidth:u}),m=Float64Array.from(p.cuts.flatMap(e=>e?.toArray()??[])),h=Float64Array.from(p.position.flatMap(e=>e.toArray()));U.worker.postMessage({type:`device-orientation`,data:[e,d,p.altitude,f,o,c,m.buffer,h.buffer],immediate:s},[m.buffer,h.buffer])},deviceTransceiver:(e,t,r,i,a,o,s,c,l)=>{let u=xe.wifi(o)?`wifi`:`camera`;U.worker.postMessage({type:`device-transceiver`,data:[e,t,r,i,a,{...o,type:u,canJoinWifi:s,focalLength:c,sensorWidth:l}]}),n.upsertDeviceTransceiver(e,t,i??null,u===`wifi`)},shapeRemove:(e,t)=>{U.worker.postMessage({type:`${t}-remove`,data:[e]}),t===`device`&&n.removeDevice(e)}}})(),()=>{e=!0,U.worker?.terminate(),n.destroy(),ge.getState().clear()}},[U,ge]),(0,J.useLayoutEffect)(()=>U.handleViewport(),[U,U.worker]),q(`designer:loaded`,()=>U.handleViewport()),q(`designer:actions`,e=>e.detail.affectors.viewport&&U.handleViewport()),U.worker?U:null},En=e=>e.$instance?.userData.zoom||e.$zoom,Dn=e=>e.$instance?.userData.mount||e.mount,On=(e,t,n)=>{let r=Ne.$position(t,`2D`,n)(e.$instance?.position||e.$world.position[0]);return t===`2D`&&r.setZ(e.$world.position[0].z),[r]},kn=(e,t)=>t||e.$instance?.userData.rotation?.pov||e.$world.rotation.pov,An=(e,t)=>(t===`3D`?e.$instance?.quaternion:e.$instance?.userData.rotation?.base)||e.$world.rotation.base,jn=e=>{let t=e.getContext(),n=t.getExtension(`WEBGL_debug_renderer_info`);return n?!/swiftshader|software|llvmpipe/i.test(t.getParameter(n.UNMASKED_RENDERER_WEBGL)):!1},Mn=1,Nn=2,Pn={primary:1,secondary:2,tertiary:3,dataRate:1,interference:1,snr:1},Fn=[],In=(e,t)=>{let n=new w(st);return n.uniforms.tDiffuse.value=e.writeBuffer.texture,n.uniforms.tOverlay.value=t.writeBuffer.texture,n},Ln=class extends v{name=`CameraConeShader`;opacity=1;diffuse=new i(`lime`);constructor(e){super(),this.uniforms=u.merge([j.common,{diffuse:{value:this.diffuse},opacity:{value:this.opacity},coverageCamera:{value:{view:{position:new S,direction:new S},world:{position:new S,direction:new S},distance:0,matrix:new P,depthMap:new a}}}]),Je.createGetterSetter(this,`opacity`),Je.createGetterSetter(this,`diffuse`),e?.diffuse&&(this.diffuse=e.diffuse)}vertexShader=`
      #define DISTANCE
      #include <common>
      ${Je.cameraStruct}
  
      uniform CoverageCamera coverageCamera;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying vec4 vCoverageCameraCoord; //vSpotLightCoord analogue
      
      void main() {   
        #include <begin_vertex>
        #include <project_vertex>   
        #include <worldpos_vertex>
  
        vViewPosition = - mvPosition.xyz;
        vWorldPosition = worldPosition.xyz;
        vCoverageCameraCoord = coverageCamera.matrix * worldPosition;
      }
    `;fragmentShader=`
      #include <common>
      #include <packing>
      #include <color_pars_fragment>
      ${Je.cameraStruct}
  
      uniform vec3 diffuse;
      uniform float opacity;
      uniform CoverageCamera coverageCamera;
  
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying vec4 vCoverageCameraCoord;

      float coverageTexture2DCompare( sampler2D depths, vec2 uv, float compare ) {
        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
      }
      
      void main() {
        vec4 diffuseColor = vec4( diffuse, opacity );
        vec3 geometryPosition = - vViewPosition;
        vec3 outgoingLight = diffuseColor.rgb;
      
        #include <opaque_fragment>
  
        //translate to homogenous coordinates (1x1x1 cube)
        vec3 camCoords = vCoverageCameraCoord.xyz / vCoverageCameraCoord.w;
        //Check if in cameras frustum and length of vector from current pixel to camera is less than camera range
        bool inFrustum = camCoords.x >= 0.0 && camCoords.x <= 1.0 && camCoords.y >= 0.0 && camCoords.y <= 1.0 && length(coverageCamera.view.position - geometryPosition) < coverageCamera.distance;
  
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
  
        float distance = length(vWorldPosition.xyz - coverageCamera.world.position);
        if (inFrustum && camCoords.z <= 1.0) {
          vec4 shadowCoord = vCoverageCameraCoord;
          shadowCoord.xyz /= shadowCoord.w;
          float beforeObstacle = coverageTexture2DCompare( coverageCamera.depthMap, shadowCoord.xy, shadowCoord.z );
          gl_FragColor = vec4( gl_FragColor.rgb, clamp(opacity * beforeObstacle * (1.0 - distance / coverageCamera.distance), 0.0, 1.0) ); 
        } else {
          gl_FragColor = vec4( gl_FragColor.rgb, 0.0 ); 
        }
      }
    `},Rn=(e,t)=>{let n=H(e=>e.updateInternals),r=H(e=>e.changeShapes),i=H(e=>e.worldToLocal),a=T(e=>e.raycaster),o=(0,J.useCallback)(e=>{let[n]=a.intersectObjects(et.getAimingTargets(e.planId));if(!n||!t)return{valid:!1};let r=Qe(e,{aiming:{target:n.point,origin:t.camera.position}});return r?.target?{valid:!0,pov:r.pov,target:r.target}:{valid:!1}},[t,a]),s=e=>B.device(e)&&(e.$flags.CAMERA_CALIBRATING||!!e.$related.calibration);q(`shape:cone:start`,t=>{e.id===t.detail.shape.id&&(t.defaultPrevented||s(t.detail.shape)||n([{id:e.id,flags:{add:be.AIMING}}]))}),q(`shape:cone:move`,n=>{if(e.id!==n.detail.shape.id)return;let r=o(e);r.valid&&e.$instance&&t?.target&&(t.target.position.copy(r.target.position),t.target.quaternion.copy(r.target.quaternion)),t?.triggerTargetUpdate()}),q(`shape:cone:end`,t=>{if(e.id!==t.detail.shape.id)return;let n=o(e);n.valid&&r({update:[{id:e.id,rotation:{...e.rotation,pov:i(n.pov,e.planId)},flags:{remove:be.AIMING}}]},{history:!0}),delete e.$instance?.userData.rotation})},zn=2048,Bn=new re({depthPacking:o}),Vn=(e,t,n)=>{let r=H(()=>e.$instance),i=T(e=>e.gl),a=De(),o=T(e=>e.scene),s=T(e=>e.camera.matrixWorldInverse),c=(0,J.useMemo)(()=>new C(zn,zn,{minFilter:k,magFilter:A}),[]),l=(0,J.useRef)({gl:i,scene:o,depthRenderTarget:c,elements:t,shape:e,viewMatrix:s,invalidate:a});l.current={gl:i,scene:o,depthRenderTarget:c,elements:t,shape:e,viewMatrix:s,invalidate:a};let u=(0,J.useCallback)((e=!0)=>{let{elements:t,shape:n}=l.current;if(!(!t||!n.$instance)){if(e){let e=Qe(n);e?.target&&(t?.target.position.copy(e.target.position),t?.target.quaternion.copy(e.target.quaternion))}if(t.camera.position.copy(n.$instance.position).add(F({x:0,y:0,z:0},n.$instance.quaternion)),xe.camera(n.$transceiver)){let e=n.$transceiver,r=Math.max(0,t.camera.position.y-He),i=n.$product.properties,a=n.zoom||1,o=Ae(25,e.h/a,e.resolution,r,i?.focalLength,i?.sensorWidth,a);if(t.camera.far=o,o<.1)return}t.camera.lookAt(t.target.position),Wn({...l.current,elements:t}),Hn({...l.current,elements:t}),Un({...l.current,elements:t}),t.triggerTargetUpdate(),l.current.invalidate(),n.$instance.getObjectByName(`cone-section`)?.position.copy(n.$instance.worldToLocal(t.target.position.clone()))}},[]);(0,J.useEffect)(()=>{u()},[u,e.position,e.rotation,t,n,r]),(0,J.useEffect)(()=>()=>{t?.camera&&$e.remove($e.get({camera:t.camera}))},[t?.camera]),(0,J.useEffect)(()=>()=>{c?.dispose()},[c]),q(`shape:cone:move`,t=>{t.detail.shape.id!==e.id||!e.$instance||u(!1)}),q(`shape:create:move`,t=>{t.detail.shape.id!==e.id||!e.$instance||e.$flags.INVALID_PLACE||u()}),q(`shape:drag:move`,t=>{t.detail.shape.id!==e.id||!e.$instance||e.$flags.INVALID_PLACE||u()})},Hn=({gl:e,scene:t,elements:n,depthRenderTarget:r})=>{let{camera:i}=n;r&&(r.texture.name=i.uuid+`.shadowMap`,i.layers.set(1),e.state.setBlending(0),e.state.buffers.color.setClear(1,1,1,1,!0),e.state.buffers.depth.setTest(!0),e.state.setScissorTest(!1),t.overrideMaterial=Bn.clone(),e.setRenderTarget(r),e.clear(),e.render(t,i),e.setRenderTarget(null),t.overrideMaterial=null)},Un=({elements:e})=>{let{camera:t,cone:n}=e,r=n.geometry.getAttribute(`position`);!r||t.far===0||(we(t).forEach((e,t)=>{r.setXYZ(t,e.x,e.y,e.z)}),n.geometry.setIndex([0,1,2,2,3,0,4,5,6,6,7,4,0,1,5,5,4,0,2,3,7,7,6,2,1,2,6,6,5,1,0,3,7,7,4,0]),r.needsUpdate=!0,n.geometry.computeVertexNormals(),n.geometry.computeBoundingSphere())},Wn=({shape:e,elements:t,depthRenderTarget:n,viewMatrix:r})=>{let{camera:i,target:a,cone:o}=t;if(!n)return;i.updateMatrixWorld(),i.updateProjectionMatrix(),$e.get({camera:i})||$e.add({shape:e,camera:i,target:a,uniforms:{view:{position:new S,direction:new S},world:{position:new S,direction:new S},distance:i.far,matrix:new P,depthMap:n.texture}});let s=new P;s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);let c=$e.get({camera:i});c&&(c.uniforms.matrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(s),c.uniforms.view.position.setFromMatrixPosition(c.camera.matrixWorld).applyMatrix4(r),c.uniforms.view.direction.set(0,0,1).applyQuaternion(c.camera.quaternion).transformDirection(r),c.camera.getWorldPosition(c.uniforms.world.position),c.camera.getWorldDirection(c.uniforms.world.direction),o.material.uniforms.coverageCamera.value=c.uniforms)},Gn=5,Kn=1,qn=(e,t,n)=>{let i=new S().copy(Te.Y).applyQuaternion(t),a=Oe(t);if(Math.abs(a)<Kn)return{position:e.clone().addScaledVector(i,Gn),quaternion:new s};let o=new r(e,i).intersectObjects(et.getAimingTargets(n));if(o.length>0){let e=Ze(o[0]),t=new s().setFromUnitVectors(Te.Z,e);return{position:o[0].point,quaternion:t}}return{position:e.clone().addScaledVector(i,Gn),quaternion:new s}},Jn=(e,t,n)=>{let r=H(()=>e.$instance),i=De(),a=(0,J.useRef)({elements:t,shape:e,invalidate:i});(0,J.useEffect)(()=>{a.current={elements:t,shape:e,invalidate:i}});let o=(0,J.useCallback)((e=!0)=>{let{elements:t,shape:n}=a.current;if(!t||!n.$instance)return;if(t.origin.position.copy(n.$instance.position),e){let e=n.$instance.userData.rotation?.pov||n.$world.rotation.pov,r=qn(n.$instance.position,e,n.planId);t.target.position.copy(r.position),t.target.quaternion.copy(r.quaternion)}t.triggerTargetUpdate(),a.current.invalidate();let r=n.$instance.getObjectByName(`cone-section`);r&&r.position.copy(n.$instance.worldToLocal(t.target.position.clone()))},[]);(0,J.useEffect)(()=>{o()},[o,e.position,e.rotation,t,n,r]),q(`shape:cone:move`,t=>{t.detail.shape.id!==e.id||!e.$instance||o(!1)}),q(`shape:create:move`,t=>{t.detail.shape.id!==e.id||!e.$instance||e.$flags.INVALID_PLACE||o()}),q(`shape:drag:move`,t=>{t.detail.shape.id!==e.id||!e.$instance||e.$flags.INVALID_PLACE||o()})},Yn=(e,t)=>{let n=H(e=>e.updateInternals),r=H(e=>e.changeShapes),i=H(e=>e.worldToLocal),a=T(e=>e.raycaster),o=(0,J.useCallback)(e=>{let[n]=a.intersectObjects(et.getAimingTargets(e.planId));if(!n||!t||!e.$instance)return{valid:!1};let r=n.point.clone().sub(e.$instance.position).normalize(),i=new s().setFromUnitVectors(Te.Y,r);return{valid:!0,pov:i,target:qn(e.$instance.position,i,e.planId)}},[t,a]),c=e=>B.device(e)&&(e.$flags.CAMERA_CALIBRATING||!!e.$related.calibration);q(`shape:cone:start`,t=>{e.id===t.detail.shape.id&&(t.defaultPrevented||c(t.detail.shape)||n([{id:e.id,flags:{add:be.AIMING}}]))}),q(`shape:cone:move`,n=>{if(e.id!==n.detail.shape.id)return;let r=o(e);r.valid&&e.$instance&&t?.target&&t?.origin&&(n.detail.pov=r.pov,t.target.position.copy(r.target.position),t.target.quaternion.copy(r.target.quaternion),t.origin.position.copy(e.$instance.position)),t?.triggerTargetUpdate()},{priority:10}),q(`shape:cone:end`,t=>{if(e.id!==t.detail.shape.id)return;let n=o(e);n.valid&&r({update:[{id:e.id,rotation:{...e.rotation,pov:i(n.pov,e.planId)},flags:{remove:be.AIMING}}]},{history:!0}),delete e.$instance?.userData.rotation})};ae({CameraConeMaterial:Ln});var Xn=(0,J.memo)(()=>{let e=G(e=>e.mode===`3D`),t=H(e=>e.plan.device.list);return e?(0,$.jsx)($.Fragment,{children:t.map(e=>he(e)?null:xe.camera(e.$transceiver)&&!e.$related?.children?.length?(0,$.jsx)(Zn,{shape:e,transceiver:e.$transceiver},e.id):xe.wifi(e.$transceiver)?(0,$.jsx)(Qn,{shape:e},e.id):null)}):null}),Zn=(0,J.memo)(({shape:e,transceiver:t})=>{let n=I(),{customRefFunc:r,elements:i}=tr(),{aspect:a,fov:o}=Le(t),s=H(()=>e.$flags.INVISIBLE||!e.$instance),c=H(()=>e.$zoom),l=H(()=>B.coverageable(e)&&t.h<180),u=H(()=>e.$flags.SELECTED||!!e.$related.parent?.$flags.SELECTED||e.$flags.HOVERED||!!e.$related.parent?.$flags.HOVERED),d=l&&!s,f=!t.static;Vn(e,i,d),Rn(e,i);let p=qe(e);(0,J.useEffect)(()=>{et.updateUniforms(e.id,d)},[d,e.id]),(0,J.useEffect)(()=>{let t=e.id;return()=>{et.updateUniforms(t,!1)}},[e.id]);let m=Math.max(0,e.position[0].y-He),h=Ae(25,t.h/c,t.resolution,m,e.$product.properties?.focalLength,e.$product.properties?.sensorWidth,c);return(0,$.jsxs)(`group`,{ref:r,visible:f&&!s,children:[(0,$.jsxs)(`group`,{name:`target`,children:[(0,$.jsxs)(`mesh`,{visible:p,children:[(0,$.jsx)(`circleGeometry`,{args:[.13,24]}),(0,$.jsx)(`meshBasicMaterial`,{side:2,toneMapped:!1,transparent:!0,color:n.designer.motif[`desktop-color-ublue-01`],polygonOffset:!0,polygonOffsetUnits:-3})]}),(0,$.jsxs)(`mesh`,{visible:p,children:[(0,$.jsx)(`circleGeometry`,{args:[.087,24]}),(0,$.jsx)(`meshBasicMaterial`,{side:2,toneMapped:!1,transparent:!0,color:n.designer.motif[`desktop-color-ublue-06`],polygonOffset:!0,polygonOffsetUnits:-7})]})]}),(0,$.jsxs)(`line`,{name:`line`,children:[(0,$.jsx)(`bufferGeometry`,{}),(0,$.jsx)(`lineBasicMaterial`,{visible:l||u,color:n.designer.motif[`desktop-color-ublue-06`],transparent:!0,opacity:.7})]}),(0,$.jsxs)(`mesh`,{name:`cone`,children:[(0,$.jsx)(`bufferGeometry`,{}),(0,$.jsx)(`cameraConeMaterial`,{visible:l,diffuse:n.designer.motif[`desktop-color-ublue-06`],side:2,transparent:!0,opacity:.15,depthWrite:!1})]}),(0,$.jsx)(`perspectiveCamera`,{name:`camera`,aspect:a,fov:o,zoom:c,near:.01,far:h})]})}),Qn=(0,J.memo)(({shape:e})=>qe(e)?(0,$.jsx)($n,{shape:e}):null),$n=(0,J.memo)(({shape:e})=>{let t=I(),{customRefFunc:n,elements:r}=nr(),i=H(()=>e.$flags.INVISIBLE||!e.$instance),a=H(()=>B.coverageable(e)),o=H(()=>e.$flags.SELECTED),s=a&&!i,c=Ye(e);return Jn(e,r,s),Yn(e,r),(0,$.jsxs)(`group`,{ref:n,visible:!i,children:[(0,$.jsxs)(`group`,{name:`target`,children:[(0,$.jsxs)(`mesh`,{children:[(0,$.jsx)(`circleGeometry`,{args:[.13,24]}),(0,$.jsx)(`meshBasicMaterial`,{side:2,toneMapped:!1,transparent:!0,color:t.designer.motif[`desktop-color-ublue-01`],polygonOffset:!0,polygonOffsetUnits:-3})]}),(0,$.jsxs)(`mesh`,{children:[(0,$.jsx)(`circleGeometry`,{args:[.087,24]}),(0,$.jsx)(`meshBasicMaterial`,{side:2,toneMapped:!1,transparent:!0,color:c,polygonOffset:!0,polygonOffsetUnits:-7})]})]}),(0,$.jsxs)(`line`,{name:`line`,children:[(0,$.jsx)(`bufferGeometry`,{}),(0,$.jsx)(`lineBasicMaterial`,{visible:a||o,color:c,transparent:!0,opacity:.7})]}),(0,$.jsx)(`object3D`,{name:`origin`})]})}),er=e=>{let[t,n]=(0,J.useState)(null);return{customRefFunc:(0,J.useCallback)(t=>{if(!t)return n(null);let r=t.getObjectByName(`target`),i=t.getObjectByName(`line`),a;if(e===`camera`){let e=t.getObjectByName(`cone`),n=t.getObjectByProperty(`name`,`camera`);a={target:r,line:i,cone:e,camera:n,subtargets:[],triggerTargetUpdate:()=>{i.geometry.setFromPoints([n.position,r.position]),i.geometry.computeBoundingSphere()}},e.geometry.setFromPoints(Array(8).fill(new S(0,0,0)))}else{let e=t.getObjectByProperty(`name`,`origin`);a={target:r,line:i,origin:e,triggerTargetUpdate:()=>{i.geometry.setFromPoints([e.position,r.position]),i.geometry.computeBoundingSphere()}}}i.geometry.setFromPoints([new S(0,0,0),new S(0,0,1)]),n(a)},[e]),elements:t}},tr=()=>er(`camera`),nr=()=>er(`wifi`),rr=(0,J.memo)(()=>pe(e=>e.permissions.CoverageListener)?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(vn,{}),(0,$.jsx)(Xn,{})]}):null);export{rr as t};
//# sourceMappingURL=src-DUtug-6C.js.map