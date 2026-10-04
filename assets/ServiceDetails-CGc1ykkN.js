import{w as o,r,j as e,W as m,I as p}from"./main-x15dh-c2.js";import{g}from"./services-D6TmqqNg.js";function u(){const{slug:i}=o(),[s,c]=r.useState(null),[x,d]=r.useState("");return r.useEffect(()=>{async function n(){const t=await g(i);c(t)}n()},[i]),r.useEffect(()=>{if(!s)return;const n=document.querySelectorAll("[data-section-heading]"),t=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&d(l.target.id)})},{rootMargin:"-20% 0px -65% 0px",threshold:0});return n.forEach(a=>{t.observe(a)}),()=>{n.forEach(a=>{t.unobserve(a)})}},[s]),s?e.jsxs("div",{className:"min-h-screen bg-[#fdfdfd]",children:[e.jsx(m,{}),e.jsxs("section",{className:"relative pt-32 sm:pt-40 pb-20 sm:pb-24 overflow-hidden",children:[e.jsx("div",{className:`
            absolute inset-0
            z-0
            pointer-events-none
            bg-[radial-gradient(ellipse_at_top,rgba(236,238,127,0.9)_0%,rgba(236,238,127,0.55)_30%,rgba(236,238,127,0.25)_50%,transparent_75%)]
          `}),e.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 lg:px-8",children:e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("h1",{className:`
                font-garet
                text-4xl
                sm:text-5xl
                lg:text-6xl
                tracking-[-0.05em]
                leading-[0.95]
                mb-6
              `,children:s.hero?.title}),e.jsx("p",{className:`
                text-[17px]
                sm:text-lg
                leading-[1.7]
                text-black/70
                mb-8
                max-w-3xl
              `,children:s.hero?.description}),e.jsx("button",{className:`
                px-7
                py-3
                rounded-full
                bg-[#ECEE7F]
                text-black
                font-semibold
              `,children:s.hero?.ctaText})]})})]}),e.jsxs("section",{className:"relative pt-2 pb-14 overflow-hidden",children:[e.jsx("div",{className:"pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#fdfdfd] to-transparent z-10"}),e.jsx("div",{className:"pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#fdfdfd] to-transparent z-10"}),e.jsx("div",{className:"marquee",children:e.jsx("div",{className:"marquee-track",children:[...s.results,...s.results,...s.results].map((n,t)=>e.jsxs("div",{className:`
                    flex
                    items-center
                    gap-2
                    px-5
                    py-2.5
                    mb-10
                    rounded-full
                    bg-white
                    text-sm
                    font-medium
                    text-gray-800
                    shadow-[0_6px_14px_-6px_rgba(0,0,0,0.18)]
                    whitespace-nowrap
                    leading-none
                    mr-3
                  `,children:[e.jsx("span",{className:"text-black",children:"✦"}),n]},t))})})]}),e.jsx("section",{className:"pb-24 sm:pb-32",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 lg:px-8",children:e.jsxs("div",{className:"grid lg:grid-cols-[260px_1fr] gap-16",children:[e.jsx("div",{className:"hidden lg:block",children:e.jsxs("div",{className:"sticky top-28",children:[e.jsx("h3",{className:"text-sm uppercase tracking-[0.14em] text-black/40 mb-6",children:"Table of Contents"}),e.jsx("div",{className:"space-y-4",children:s.sections?.map((n,t)=>({...n,originalIndex:t})).filter(n=>n.type==="heading").map(n=>e.jsx("a",{href:`#section-${n.originalIndex}`,className:`
                          block
                          w-fit
                          pb-1
                          border-b
                          transition-all
                          duration-300
                          ${x===`section-${n.originalIndex}`?"border-black text-black":"border-transparent text-black/50 hover:text-black"}
                        `,children:n.content},n.originalIndex))})]})}),e.jsx("div",{className:"space-y-8 sm:space-y-10",children:s.sections?.map((n,t)=>n.type==="heading"?e.jsx("h2",{id:`section-${t}`,"data-section-heading":!0,className:`
                        font-garet
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        tracking-[-0.04em]
                        leading-[1]
                        scroll-mt-32
                      `,children:n.content},t):n.type==="paragraph"?e.jsx("p",{className:`
                        text-[17px]
                        sm:text-lg
                        leading-[1.8]
                        text-black/75
                      `,children:n.content},t):n.type==="bullet"?e.jsx("ul",{className:`
                        space-y-4
                        pl-5
                        list-disc
                        text-[17px]
                        sm:text-lg
                        text-black/75
                      `,children:n.items?.map((a,l)=>e.jsx("li",{children:a},l))},t):n.type==="faq"?e.jsx("div",{className:"space-y-8",children:n.items?.map((a,l)=>e.jsxs("div",{className:"border-b border-black/10 pb-8",children:[e.jsxs("div",{className:"flex gap-5 mb-4",children:[e.jsx("span",{className:`
                                text-black/30
                                text-base
                                sm:text-lg
                                font-medium
                                min-w-[36px]
                              `,children:(l+1).toString().padStart(2,"0")}),e.jsx("p",{className:`
                                text-xl
                                sm:text-2xl
                                lg:text-3xl
                                leading-[1.3]
                                tracking-[-0.03em]
                                text-black
                              `,children:a.question})]}),e.jsx("div",{className:"pl-[56px] sm:pl-[64px]",children:e.jsx("p",{className:`
                                text-[17px]
                                sm:text-lg
                                leading-[1.8]
                                text-black/70
                              `,children:a.answer})})]},l))},t):null)})]})})}),e.jsx(p,{})]}):null}export{u as default};
