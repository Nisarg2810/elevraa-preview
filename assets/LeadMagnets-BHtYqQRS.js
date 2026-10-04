import{c as k,r as b,j as e,X as P,L as S,z as p,x as T,y as $,A as I,C as M,o as D,h as f,k as j,l as y,p as z,t as w,q as B}from"./main-x15dh-c2.js";import{P as R,u as O,a as V}from"./index.esm-DT-CZHSt.js";import{Z as W,L as F}from"./LeadMagnetTemplate-BhzSj07O.js";import{U}from"./upload-C3IKs_zE.js";import{P as C}from"./plus-CNG29inm.js";import{T as A}from"./trash-2-DE0iNJqH.js";import{E as G}from"./external-link-ccGw5szf.js";import{A as q}from"./arrow-left-fjwJPth9.js";import{S as H}from"./save-AlabZwG9.js";import{f as Y}from"./format-CSQe5d3I.js";import"./trending-up-B5MyuLm-.js";const _=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],E=k("chevron-down",_);const K=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],L=k("chevron-up",K);function Q({value:n,onChange:o,label:l,className:r=""}){const[a,c]=b.useState(!1),m=async h=>{const d=h.target.files?.[0];if(d){if(!d.type.startsWith("image/")){p.error("Please upload an image file");return}if(d.size>5*1024*1024){p.error("Image must be less than 5MB");return}c(!0);try{const s=T($,`abm-assets/${Date.now()}-${d.name}`);await I(s,d);const t=await M(s);o(t),p.success("Image uploaded")}catch(s){console.error(s),p.error("Upload failed")}finally{c(!1)}}};return n?e.jsxs("div",{className:`relative w-full aspect-video md:aspect-[2/1] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 group ${r}`,children:[e.jsx("img",{src:n,alt:"Uploaded",className:"w-full h-full object-contain"}),e.jsx("button",{type:"button",onClick:()=>o(""),className:"absolute top-2 right-2 p-1 bg-white rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100",children:e.jsx(P,{className:"w-4 h-4 text-gray-500"})})]}):e.jsxs("div",{className:`w-full ${r}`,children:[l&&e.jsx("label",{className:"block text-xs font-medium text-gray-700 mb-2",children:l}),e.jsxs("label",{className:"flex flex-col items-center justify-center w-full aspect-video md:aspect-[2/1] border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-colors",children:[e.jsx("input",{type:"file",className:"hidden",accept:"image/*",onChange:m,disabled:a}),a?e.jsx(S,{className:"w-6 h-6 animate-spin text-gray-400"}):e.jsxs("div",{className:"flex flex-col items-center gap-2 text-gray-500",children:[e.jsx(U,{className:"w-6 h-6"}),e.jsx("span",{className:"text-xs",children:"Click to upload image"})]})]})]})}function N({title:n,isOpen:o,onToggle:l,children:r}){return e.jsxs("div",{className:"border border-gray-200 rounded-xl bg-white overflow-hidden mb-4 shadow-sm transition-all duration-200",children:[e.jsx("div",{className:`flex items-center justify-between p-4 border-b border-gray-100 cursor-pointer ${o?"bg-gray-50":"bg-white hover:bg-gray-50"}`,onClick:l,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`p-1 rounded transition-colors ${o?"bg-gray-200":"bg-transparent"}`,children:o?e.jsx(L,{className:"w-4 h-4"}):e.jsx(E,{className:"w-4 h-4"})}),e.jsx("h3",{className:"font-semibold text-gray-800 text-sm",children:n})]})}),o&&e.jsx("div",{className:"p-5 space-y-4",children:r})]})}function v({control:n,register:o,name:l,itemLabel:r,renderItem:a}){const{fields:c,append:m,remove:h,move:d}=V({control:n,name:l});return e.jsxs("div",{className:"space-y-4",children:[c.map((s,t)=>e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg bg-gray-50/50 relative group",children:[e.jsxs("div",{className:"absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10",children:[e.jsx("button",{type:"button",onClick:()=>d(t,t-1),disabled:t===0,className:"p-1 hover:bg-gray-200 rounded disabled:opacity-30",children:e.jsx(L,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onClick:()=>d(t,t+1),disabled:t===c.length-1,className:"p-1 hover:bg-gray-200 rounded disabled:opacity-30",children:e.jsx(E,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onClick:()=>h(t),className:"p-1 hover:bg-red-100 text-red-500 rounded ml-2",children:e.jsx(A,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500",children:t+1}),e.jsx("span",{className:"text-xs font-bold uppercase text-gray-400 tracking-wider",children:r})]}),a(t)]},s.id)),e.jsxs(y,{type:"button",variant:"secondary",size:"sm",onClick:()=>m({}),className:"w-full border-dashed border-2 hover:border-gray-400",children:[e.jsx(C,{className:"w-4 h-4 mr-2"})," Add ",r]})]})}function X({initialData:n,onClose:o,onSave:l}){const r={companyName:"",slug:"",adminEmail:"",hero:{tagline:"Personalized for [Company]",headline:"Stop Losing Revenue to Competitors",subheadline:"Your limited brand visibility is costing you more than you think.",stat1Value:"$250M+",stat1Label:"Pipeline Generated",stat2Value:"420%",stat2Label:"Average ROI",stat3Value:"150+",stat3Label:"Clients Served",ctaText:"Book Your Strategy Call",ctaLink:"https://calendly.com",image:"",...n?.hero},problem:{pill:"Opportunity Cost: $500k+ Annually",headline:"Why Needs to Act Now",subheadline:"Every quarter without a strategic engine costs you market position.",cards:n?.problem?.cards||[{title:"Competitors are There",description:"While you evaluate, they dominate."},{title:"Longer Cycles",description:"Decisions now involve 6-10 stakeholders."},{title:"Digital First",description:"83% of buyers prefer no sales rep."}]},campaigns:{heading:"Three Proven Campaigns to Transform Pipeline",subheading:"Designed for different stages of market maturity.",items:n?.campaigns?.items||[]}},{register:a,control:c,handleSubmit:m,watch:h,setValue:d}=O({defaultValues:r}),s=h(),[t,g]=b.useState({meta:!0,hero:!0,problem:!1,campaigns:!1}),u=i=>g(x=>({...x,[i]:!x[i]}));return e.jsxs("div",{className:"fixed inset-0 z-50 editor-shell flex h-screen w-screen overflow-hidden font-sans",children:[" ",e.jsxs("div",{className:"absolute top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:o,className:"p-2 hover:bg-gray-100 rounded-full text-gray-500",children:e.jsx(q,{className:"w-5 h-5"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-bold text-sm text-gray-900",children:"Editor"}),e.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-wider",children:s.companyName||"Untitled"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"hidden md:flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100",children:[e.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"})," ","Live Preview"]}),e.jsxs(y,{onClick:m(l),className:"gap-2 bg-black text-white hover:bg-gray-800",children:[e.jsx(H,{className:"w-4 h-4"})," Save"]})]})]}),e.jsxs("div",{className:"flex w-full h-full pt-16",children:[e.jsxs("div",{className:"w-full md:w-[500px] editor-sidebar h-full overflow-y-auto custom-scrollbar z-20",children:[" ",e.jsx(N,{title:"1. Configuration",isOpen:t.meta,onToggle:()=>u("meta"),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Company Name"}),e.jsx("input",{...a("companyName"),className:"input-base",placeholder:"Acme Corp"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Slug"}),e.jsx("input",{...a("slug"),className:"input-base"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Admin Email"}),e.jsx("input",{...a("adminEmail"),className:"input-base"})]})]})]})}),e.jsx(N,{title:"2. Hero Section",isOpen:t.hero,onToggle:()=>u("hero"),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{className:"label-text",children:"Tagline / Pill"}),e.jsx("input",{...a("hero.tagline"),className:"input-base"})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{className:"label-text",children:"Headline"}),e.jsx("textarea",{...a("hero.headline"),className:"input-base",rows:2})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{className:"label-text",children:"Sub-headline"}),e.jsx("textarea",{...a("hero.subheadline"),className:"input-base",rows:2})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{className:"label-text",children:"Hero Image Right"}),e.jsx(Q,{value:s.hero.image,onChange:i=>d("hero.image",i)})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 bg-gray-50 p-3 rounded-lg",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Stat 1 Value"}),e.jsx("input",{...a("hero.stat1Value"),className:"input-base"}),e.jsx("input",{...a("hero.stat1Label"),className:"input-base mt-1 text-xs",placeholder:"Label"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Stat 2 Value"}),e.jsx("input",{...a("hero.stat2Value"),className:"input-base"}),e.jsx("input",{...a("hero.stat2Label"),className:"input-base mt-1 text-xs",placeholder:"Label"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Stat 3 Value"}),e.jsx("input",{...a("hero.stat3Value"),className:"input-base"}),e.jsx("input",{...a("hero.stat3Label"),className:"input-base mt-1 text-xs",placeholder:"Label"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"CTA Button"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{...a("hero.ctaText"),className:"input-base flex-1",placeholder:"Text"}),e.jsx("input",{...a("hero.ctaLink"),className:"input-base flex-1",placeholder:"Link"})]})]})]})}),e.jsx(N,{title:"3. 'Why Act Now' Section",isOpen:t.problem,onToggle:()=>u("problem"),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex gap-2",children:e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"label-text",children:"Pill Text"}),e.jsx("input",{...a("problem.pill"),className:"input-base"})]})}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Section Headline"}),e.jsx("input",{...a("problem.headline"),className:"input-base"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Sub-headline"}),e.jsx("textarea",{...a("problem.subheadline"),className:"input-base",rows:2})]}),e.jsx("label",{className:"label-text mt-4 block border-t pt-4",children:"3 Cards"}),e.jsx(v,{control:c,register:a,name:"problem.cards",itemLabel:"Card",renderItem:i=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{...a(`problem.cards.${i}.title`),className:"input-base font-medium",placeholder:"Title"}),e.jsx("textarea",{...a(`problem.cards.${i}.description`),className:"input-base text-xs",rows:2,placeholder:"Description"})]})})]})}),e.jsxs(N,{title:"4. Campaigns",isOpen:t.campaigns,onToggle:()=>u("campaigns"),children:[e.jsxs("div",{className:"space-y-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Section Headline"}),e.jsx("input",{...a("campaigns.heading"),className:"input-base"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Section Subhead"}),e.jsx("input",{...a("campaigns.subheading"),className:"input-base"})]})]}),e.jsx(v,{control:c,register:a,name:"campaigns.items",itemLabel:"Campaign",renderItem:i=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gray-100 p-3 rounded-md space-y-3",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase text-gray-400",children:"Card Front"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{className:"label-text",children:"Title"}),e.jsx("input",{...a(`campaigns.items.${i}.title`),className:"input-base"})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{className:"label-text",children:"Subtitle (Caps)"}),e.jsx("input",{...a(`campaigns.items.${i}.subtitle`),className:"input-base"})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{className:"label-text",children:"Description"}),e.jsx("textarea",{...a(`campaigns.items.${i}.description`),className:"input-base",rows:2})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Duration"}),e.jsx("input",{...a(`campaigns.items.${i}.duration`),className:"input-base"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Investment"}),e.jsx("input",{...a(`campaigns.items.${i}.investment`),className:"input-base"})]})]})]}),e.jsxs("div",{className:"bg-white border border-gray-200 p-3 rounded-md space-y-3",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase text-blue-500",children:"Popup Details Content"}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Tab 1: Overview"}),e.jsx("textarea",{...a(`campaigns.items.${i}.details.overview`),className:"input-base",rows:4,placeholder:"Full campaign overview..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Tab 2: Phases"}),e.jsx(v,{control:c,register:a,name:`campaigns.items.${i}.details.phases`,itemLabel:"Phase",renderItem:x=>e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("input",{...a(`campaigns.items.${i}.details.phases.${x}.name`),className:"input-base col-span-2",placeholder:"Phase Name"}),e.jsx("input",{...a(`campaigns.items.${i}.details.phases.${x}.weeks`),className:"input-base",placeholder:"Weeks 1-4"}),e.jsx("textarea",{...a(`campaigns.items.${i}.details.phases.${x}.description`),className:"input-base col-span-3",rows:2,placeholder:"Phase description..."})]})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Tab 3: Expected Results"}),e.jsx("textarea",{...a(`campaigns.items.${i}.details.expectedResults`),className:"input-base",rows:4,placeholder:"List items..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"label-text",children:"Tab 4: KPIs"}),e.jsx("textarea",{...a(`campaigns.items.${i}.details.kpis`),className:"input-base",rows:4,placeholder:"List KPIs..."})]})]})]})})]})]}),e.jsxs("div",{className:"hidden md:flex flex-1 bg-[#F5F5F7] h-full overflow-hidden relative items-center justify-center p-8",children:[" ",e.jsx("div",{className:"w-full h-full max-w-[1200px] bg-white shadow-2xl rounded-xl overflow-y-auto custom-scrollbar border border-gray-200",children:e.jsx(F,{data:s})})]})]}),e.jsx("style",{children:`
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.08);
    border-radius: 999px;
  }

  .label-text {
    display: block;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(0,0,0,0.45);
  }

  .input-base {
    width: 100%;
    min-height: 52px;
    border-radius: 18px;
    border: 1px solid rgba(0,0,0,0.08);
    background: white;
    padding: 14px 16px;
    font-size: 14px;
    color: #111;
    outline: none;
    transition: all 0.2s ease;
    line-height: 1.5;
  }

  .input-base:focus {
    border-color: #ECEE7F;
    box-shadow: 0 0 0 4px rgba(236,238,127,0.25);
  }

  .input-base::placeholder {
    color: rgba(0,0,0,0.3);
  }

  textarea.input-base {
    min-height: 110px;
    resize: vertical;
    padding-top: 16px;
  }

  /* MAIN EDITOR */

  .editor-shell {
    background: #f6f6f2;
  }

  /* SIDEBAR */

  .editor-sidebar {
    background: #fcfcf9;
    border-right: 1px solid rgba(0,0,0,0.06);
    padding: 24px;
  }

  /* SECTIONS */

  .editor-section {
    background: white;
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 28px;
    overflow: hidden;
    margin-bottom: 24px;
    transition: all 0.2s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  }

  .editor-section:hover {
    box-shadow: 0 8px 28px rgba(0,0,0,0.05);
  }

  .editor-section-header {
    padding: 22px 24px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    background: linear-gradient(
      to bottom,
      rgba(236,238,127,0.08),
      rgba(236,238,127,0.02)
    );
  }

  .editor-section-title {
    font-size: 15px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.02em;
  }

  .editor-section-body {
    padding: 24px;
  }

  /* GROUPS */

  .field-group {
    margin-bottom: 22px;
  }

  .field-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .field-grid-3 {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 14px;
  }

  /* ARRAY ITEMS */

  .array-card {
    background: #fafaf7;
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 24px;
    padding: 20px;
    margin-bottom: 18px;
    position: relative;
  }

  .array-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .array-badge {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    background: #ECEE7F;
    color: black;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .array-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .array-actions button {
    width: 34px;
    height: 34px;
    border-radius: 12px;
    border: none;
    background: white;
    cursor: pointer;
    transition: 0.2s;
  }

  .array-actions button:hover {
    background: #ECEE7F;
  }

  /* CAMPAIGN BLOCKS */

  .campaign-front {
    background: #f8f8f5;
    border-radius: 24px;
    padding: 22px;
    border: 1px solid rgba(0,0,0,0.05);
    margin-bottom: 18px;
  }

  .campaign-popup {
    background: white;
    border-radius: 24px;
    padding: 22px;
    border: 1px solid rgba(0,0,0,0.06);
  }

  .campaign-label {
    display: inline-flex;
    align-items: center;
    height: 28px;
    padding: 0 12px;
    border-radius: 999px;
    background: rgba(236,238,127,0.25);
    color: black;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  /* ADD BUTTON */

  .add-btn {
    width: 100%;
    height: 54px;
    border-radius: 20px;
    border: 2px dashed rgba(236,238,127,0.45);
    background: rgba(236,238,127,0.08);
    color: #111;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;
  }

  .add-btn:hover {
    background: rgba(236,238,127,0.16);
  }

  /* PREVIEW */

  .preview-shell {
    background: #f2f2ee;
    padding: 32px;
  }

  .preview-card {
    background: white;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
    border: 1px solid rgba(0,0,0,0.06);
  }

  /* MOBILE */

  @media (max-width: 768px) {

    .field-grid-2,
    .field-grid-3 {
      grid-template-columns: 1fr;
    }

    .editor-sidebar {
      padding: 16px;
    }

    .editor-section-body {
      padding: 18px;
    }

    .input-base {
      min-height: 48px;
      font-size: 15px;
    }

    textarea.input-base {
      min-height: 100px;
    }
  }
`})]})}function de(){const[n,o]=b.useState([]),[l,r]=b.useState(null),[a,c]=b.useState("");b.useEffect(()=>{D(f(j,"leadMagnets"),s=>{const t=s.val();o(t?Object.entries(t).map(([g,u])=>({id:g,...u})):[])})},[]);const m=async()=>{const s={companyName:"Acme Corp",slug:"acme-corp-strategy",adminEmail:"demo@acme.com",updatedAt:Date.now(),hero:{tagline:"Personalized for Acme Corp",headline:"Stop Losing $250M in Pipeline to Competitors",subheadline:"Acme Corp, your limited brand visibility in your target market is costing you more than you think. We've helped 150+ B2B companies generate predictable revenue.",stat1Value:"$250M+",stat1Label:"Pipeline Generated",stat2Value:"420%",stat2Label:"Average ROI",stat3Value:"150+",stat3Label:"Clients Served",ctaText:"Book Your Strategy Call",ctaLink:"#",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"},problem:{pill:"Opportunity Cost: $500k+ annually",headline:"Why Acme Corp Needs to Act Now",subheadline:"Every quarter without a strategic B2B marketing engine costs you market position, pipeline, and ultimately revenue.",cards:[{title:"Your Competitors Are Already There",description:"While you're evaluating, your competitors are capturing mindshare with your target accounts."},{title:"Buying Cycles Are Getting Longer",description:"B2B purchase decisions now involve 6-10 stakeholders and take 30% longer than 2 years ago."},{title:"Digital-First Buyers",description:"83% of B2B buyers prefer to self-educate online before engaging sales. Are you present?"}]},campaigns:{heading:"Three Proven Campaigns to Transform Your Pipeline",subheading:"Each campaign is designed for different stages of market maturity. We'll recommend the best fit during your strategy call.",items:[{title:"Brand Awareness & Perception Creation",subtitle:"EXECUTIVE LINKEDIN ACTIVATION PROGRAM",description:"Transform your executive team into thought leaders and build brand authority in your target market.",duration:"6 months",investment:"$45,000 - $65,000",details:{overview:"This comprehensive program positions your executive team as industry authorities. By leveraging personal brands, we create a halo effect that elevates the entire company's market perception.",phases:[{name:"Phase 1: Foundation & Strategy",weeks:"Weeks 1-4",description:"Audience definition, content pillar development, and profile optimization."},{name:"Phase 2: Content Engine Launch",weeks:"Weeks 5-12",description:"Consistent high-value posting, engagement sequences, and network growth."},{name:"Phase 3: Amplification & Authority",weeks:"Weeks 13-24",description:"Newsletter launch, PR integration, and speaking opportunity outreach."}],expectedResults:`• 500% increase in profile views
• 50+ qualified inbound leads
• Featured in 2 tier-1 industry publications`,kpis:`• Profile Impressions
• Engagement Rate
• Inbound DMs
• Website Clicks`}},{title:"Demand Generation Engine",subtitle:"LEAD MAGNET DEVELOPMENT & MULTI-CHANNEL ACTIVATION",description:"Build a predictable pipeline with high-converting lead magnets and omni-channel demand capture.",duration:"6 months",investment:"$55,000 - $85,000",details:{overview:"We interpret your expertise into high-value assets (white papers, webinars) and distribute them to capture high-intent leads.",phases:[{name:"Phase 1: Asset Creation",weeks:"Weeks 1-6",description:"Research, copywriting, and design of flagship lead magnet."},{name:"Phase 2: Funnel Build",weeks:"Weeks 7-8",description:"Landing pages, email automation, and CRM integration."},{name:"Phase 3: Traffic & Optimize",weeks:"Weeks 9-24",description:"Paid social launch, cold email sequences, and conversion rate optimization."}],expectedResults:`• 200+ MQLs per month
• 15% conversion rate on landing pages
• $2M new pipeline opportunity`,kpis:`• CPL (Cost Per Lead)
• MQL Volume
• Email Open Rates
• Demo Bookings`}},{title:"Account-Based Marketing",subtitle:"PRECISION TARGETING FOR HIGH-VALUE ACCOUNTS",description:"Orchestrated, multi-touch campaigns targeting your most valuable prospects with personalized messaging.",duration:"6-12 months",investment:"$65,000 - $120,000",details:{overview:"A highly targeted approach where we treat individual accounts as markets of one, delivering hyper-personalized experiences.",phases:[{name:"Phase 1: Account Selection",weeks:"Weeks 1-4",description:"ICP refinement and target account list building (TAL)."},{name:"Phase 2: Insight & Personalization",weeks:"Weeks 5-8",description:"Account research and development of personalized creative assets."},{name:"Phase 3: Orchestration",weeks:"Ongoing",description:"Direct mail, personalized video, and LinkedIn outreach execution."}],expectedResults:`• 25% penetration into target accounts
• 30 meetings booked with decision makers
• Shortened sales cycle by 40%`,kpis:`• Account Engagement Score
• Meeting Bookings
• Pipeline Velocity
• Deal Size`}}]}};try{await w(f(j,"leadMagnets"),s),p.success("Design-Perfect Demo Created!")}catch(t){console.error(t),p.error("Error creating demo")}},h=async s=>{try{const t=s.slug||s.companyName.toLowerCase().replace(/\s+/g,"-"),g={...s,slug:t,updatedAt:Date.now()};l?.id?(await z(f(j,`leadMagnets/${l.id}`),g),p.success("Saved!")):(await w(f(j,"leadMagnets"),{...g,createdAt:Date.now()}),p.success("Created!")),r(null)}catch{p.error("Error saving")}},d=async s=>{window.confirm("Delete?")&&await B(f(j,`leadMagnets/${s}`))};return l?e.jsx(X,{initialData:l,onClose:()=>r(null),onSave:h}):e.jsxs("div",{className:"p-8 font-sans text-gray-900",children:[e.jsxs("div",{className:"flex justify-between items-center mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Lead Magnets"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(y,{onClick:m,variant:"outline",className:"gap-2 text-green-700 border-green-200 bg-green-50 hover:bg-green-100",children:[e.jsx(W,{className:"w-4 h-4"})," Create Demo"]}),e.jsxs(y,{onClick:()=>r({}),className:"gap-2",children:[e.jsx(C,{className:"w-4 h-4"})," Create New"]})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:n.map(s=>e.jsxs("div",{className:"bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all",children:[e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400",children:s.companyName?.[0]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>r(s),className:"p-2 text-gray-500 hover:bg-gray-100 rounded-md",children:e.jsx(R,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>d(s.id),className:"p-2 text-red-500 hover:bg-red-50 rounded-md",children:e.jsx(A,{className:"w-4 h-4"})})]})]}),e.jsx("h3",{className:"font-bold text-lg",children:s.companyName}),e.jsx("p",{className:"text-sm text-gray-500 mb-4 truncate",children:s.hero?.headline}),e.jsxs("div",{className:"pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500",children:[e.jsx("span",{children:s.updatedAt?Y(s.updatedAt,"MMM d"):"Just now"}),e.jsxs("a",{href:`/lm/${s.slug}`,target:"_blank",className:"flex items-center gap-1 hover:text-black hover:underline",children:[e.jsx(G,{className:"w-3 h-3"})," View"]})]})]},s.id))})]})}export{de as LeadMagnets};
