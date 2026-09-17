"use client";
import { useState, useEffect } from "react";
import PrintButton from "@/components/PrintButton";

/* ─── Types ──────────────────────────────────────────────── */
type Tab = "cover" | "calculator" | "steps" | "form";
type PrintSection = "A" | "D" | null;
type Gender = "Male" | "Female" | "Other" | "Prefer not to say" | "";
type Activity = "Playing" | "Training" | "Travelling" | "Warm up / Cool down" | "Other" | "";
type Grade = "Senior" | "Reserve" | "Junior" | "Not applicable" | "";
type Surface = "Grass" | "Synthetic grass" | "Asphalt" | "Concrete" | "Indoor" | "Timber" | "";
type Weather = "Fine" | "Rain" | "Extreme heat" | "Extreme cold" | "";
type SurfaceCond = "Wet" | "Dry" | "Muddy" | "Indoor" | "";

const CLINICIANS = [
  { name: "Chris Tandy", provider: "4554469H", phone: "0483 918 427", email: "ctandy@stridephysiohealth.com.au" },
  { name: "Tom Yeung",   provider: "5593006J", phone: "0483 918 427", email: "tom.yeung@stridephysiohealth.com.au" },
  { name: "Aimee Mooney", provider: "6154265B", phone: "0483 918 427", email: "aimee.mooney@stridephysiohealth.com.au" },
  { name: "Jordan Schorel", provider: "",       phone: "0483 918 427", email: "info@stridephysiohealth.com.au" },
];

const INJURY_LOCATIONS = [
  "Ankle","Arm","Dental","Facial","Foot","Hand","Head",
  "Knee","Lower leg","Neck","Pelvis/hip","Shoulder",
  "Thigh/upper leg","Trunk/spine","Wrist",
];

interface Form {
  name: string; addressLine1: string; addressLine2: string; postcode: string;
  occupation: string; phone: string; email: string; dob: string;
  gender: Gender; injuryDate: string; injuryTimeAM: boolean;
  clubName: string; association: string; injuryDescription: string;
  activity: Activity; activityOther: string;
  locationIndoor: boolean; grade: Grade; division: string;
  surface: Surface; weather: Weather; surfaceCond: SurfaceCond;
  resumeWork: string; resumeTraining: string; resumePlaying: string;
  hasPHI: boolean | null; phiProvider: string;
  phiPhysio: boolean; phiAmbulance: boolean; phiHospital: boolean; phiDental: boolean;
  hasAmbulanceMembership: boolean | null;
  bankName: string; accountName: string; bsb: string; accountNumber: string;
  signatureDate: string;
  // Section D fields
  consultationDate: string; clinicianIndex: number;
  diagnosis: string; injuryLocations: string[]; bodySide: string;
  gpName: string; gpPhone: string;
}

const EMPTY: Form = {
  name:"",addressLine1:"",addressLine2:"",postcode:"",
  occupation:"",phone:"",email:"",dob:"",
  gender:"",injuryDate:"",injuryTimeAM:true,
  clubName:"",association:"",injuryDescription:"",
  activity:"",activityOther:"",
  locationIndoor:false,grade:"",division:"",
  surface:"",weather:"",surfaceCond:"",
  resumeWork:"",resumeTraining:"",resumePlaying:"",
  hasPHI:null,phiProvider:"",
  phiPhysio:false,phiAmbulance:false,phiHospital:false,phiDental:false,
  hasAmbulanceMembership:null,
  bankName:"",accountName:"",bsb:"",accountNumber:"",
  signatureDate:"",
  consultationDate:"",clinicianIndex:0,
  diagnosis:"",injuryLocations:[],bodySide:"",
  gpName:"",gpPhone:"",
};

/* ─── Calculator ─────────────────────────────────────────── */
function calcReimbursement(sessions:number,cost:number){
  const c=Math.min(cost,150);let gross=0;
  for(let i=1;i<=sessions;i++){
    gross+=c*(i<=5?0.95:i<=10?0.80:0.50);
    if(gross>=1000){gross=1000;break;}
  }
  return{gross:Math.round(gross*100)/100,net:Math.round(Math.max(0,gross-100)*100)/100,hitCap:gross>=1000};
}

/* ─── Shared styles ──────────────────────────────────────── */
const inp:React.CSSProperties={width:"100%",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.14)",borderRadius:7,padding:"9px 12px",color:"#fff",fontSize:"0.88rem",outline:"none",boxSizing:"border-box"};
const lbl:React.CSSProperties={display:"block",fontSize:"0.72rem",color:"rgba(255,255,255,0.40)",letterSpacing:"0.09em",textTransform:"uppercase",marginBottom:5};
const sec:React.CSSProperties={fontFamily:"var(--font-bebas)",fontSize:"1.3rem",letterSpacing:"0.04em",color:"#fff",marginBottom:14,paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,0.08)"};
const r2:React.CSSProperties={display:"grid",gridTemplateColumns:"1fr 1fr",gap:14};
const radio=<T extends string>(opts:T[],val:T|"",set:(v:T)=>void)=>(
  <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
    {opts.map(o=><label key={o} style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer",fontSize:"0.88rem",color:val===o?"#fff":"rgba(255,255,255,0.55)"}}>
      <input type="radio" checked={val===o} onChange={()=>set(o)} style={{accentColor:"var(--blue)"}}/>{o}
    </label>)}
  </div>
);
const PrintRow=({label,value}:{label:string;value:string})=>(
  <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:10}}>
    <span style={{color:"rgba(255,255,255,0.35)",fontSize:"0.78rem",width:200,flexShrink:0}}>{label}</span>
    {value?<span style={{color:"#fff",fontSize:"0.88rem"}}>{value}</span>:<div style={{flex:1,borderBottom:"1px dashed rgba(255,255,255,0.12)",height:20}}/>}
  </div>
);

/* ─── Step card ──────────────────────────────────────────── */
const StepCard=({n,title,who,children,status}:{n:string;title:string;who:string;children:React.ReactNode;status:"athlete"|"stride"|"club"|"echelon"})=>{
  const colors:{[k:string]:string}={athlete:"var(--blue)",stride:"#4ade80",club:"#f59e0b",echelon:"#a78bfa"};
  const labels:{[k:string]:string}={athlete:"You complete this",stride:"Stride physio completes",club:"Your club completes",echelon:"Submit to Echelon"};
  return(
    <div style={{border:"1px solid rgba(255,255,255,0.10)",borderLeft:`4px solid ${colors[status]}`,borderRadius:14,overflow:"hidden",marginBottom:20,background:"rgba(255,255,255,0.03)"}}>
      <div style={{padding:"20px 24px",display:"flex",alignItems:"center",gap:18,borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{width:52,height:52,borderRadius:"50%",background:colors[status],display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-bebas)",fontSize:"1.6rem",color:"#000",flexShrink:0,boxShadow:`0 0 20px ${colors[status]}44`}}>{n}</div>
        <div style={{flex:1}}>
          <div style={{color:"#fff",fontWeight:700,fontSize:"1.1rem",letterSpacing:"0.01em",marginBottom:3}}>{title}</div>
          <div style={{fontSize:"0.72rem",color:colors[status],letterSpacing:"0.10em",textTransform:"uppercase",fontWeight:600}}>{labels[status]}</div>
        </div>
      </div>
      <div style={{padding:"20px 24px"}}>{children}</div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════ */
export default function AFLInsurance(){
  const [tab,setTab]=useState<Tab>("steps");
  const [form,setForm]=useState<Form>(EMPTY);
  const [sessions,setSessions]=useState(6);
  const [cost,setCost]=useState(150);
  const [printSection,setPrintSection]=useState<PrintSection>(null);
  const [showClubEmail,setShowClubEmail]=useState(false);

  const set=(k:keyof Form,v:any)=>setForm(f=>({...f,[k]:v}));
  const calc=calcReimbursement(sessions,cost);
  const clinician=CLINICIANS[form.clinicianIndex];

  // Auto-derive diagnosis from injury description
  useEffect(()=>{
    if(form.injuryDescription&&!form.diagnosis){
      set("diagnosis",form.injuryDescription.slice(0,300));
    }
  },[form.injuryDescription]);

  // Print handler
  const doPrint=(section:PrintSection)=>{
    setPrintSection(section);
    setTimeout(()=>{window.print();setPrintSection(null);},100);
  };

  const clubEmailBody=`Hi [Club Secretary / Team Manager],

I am writing to request the completion of Section B (Club Declaration) for my NRPP personal injury insurance claim.

Player details:
- Name: ${form.name||"[Your name]"}
- Club: ${form.clubName||"[Club name]"}
- Date of injury: ${form.injuryDate||"[Date]"}
- Association: ${form.association||"[Association]"}

Section B requires your club to confirm my registration and the circumstances of the injury. Please complete and sign the attached Section B (Club Declaration) form and return it to me so I can include it with my claim submission to Echelon.

If you have questions, Echelon can be reached at:
Email: ecssa@echelonaustralia.com.au
Phone: 1800 640 009

Thank you,
${form.name||"[Your name]"}
${form.phone||""}`;

  const tabs:[Tab,string][]=[["steps","Claim Steps"],["cover","Your Cover"],["calculator","Claim Calculator"],["form","Claim Form"]];

  return(
    <div style={{background:"var(--navy)",minHeight:"100vh",paddingTop:66}}>
      {/* Print: Section A only */}
      {printSection==="A"&&(
        <style>{`@media print{.print-hide{display:none!important}.print-sec-d{display:none!important}nav,footer{display:none!important}}`}</style>
      )}
      {/* Print: Section D only */}
      {printSection==="D"&&(
        <style>{`@media print{.print-hide{display:none!important}.print-sec-a{display:none!important}nav,footer{display:none!important}}`}</style>
      )}
      {/* Screen: hide print sections */}
      {!printSection&&(
        <style>{`.print-sec-a{display:none}.print-sec-d{display:none}`}</style>
      )}

      <div style={{maxWidth:760,margin:"0 auto",padding:"60px 24px 80px"}}>

        {/* ── HERO ── */}
        <div className="print-hide" style={{
          margin:"0 -24px 48px",
          borderRadius:20,
          overflow:"hidden",
          position:"relative",
          minHeight:280,
          backgroundImage:"linear-gradient(to right, #0D1B2A 35%, rgba(13,27,42,0.82) 60%, rgba(13,27,42,0.35) 100%), url('/afl-ruck.jpg')",
          backgroundSize:"cover",
          backgroundPosition:"center 30%",
          display:"flex",
          alignItems:"center",
          padding:"48px 36px",
        }}>
          <div style={{maxWidth:500,position:"relative",zIndex:1}}>
            <div className="ey ey-blue" style={{marginBottom:12}}>Stride Sports Physio · AFL Insurance</div>
            <h1 className="sh sh-white" style={{fontSize:"clamp(2.6rem,5vw,4.4rem)",marginBottom:14,lineHeight:0.92}}>AFL Injury Claim Guide</h1>
            <p style={{color:"rgba(255,255,255,0.60)",fontSize:"0.95rem",lineHeight:1.65,marginBottom:20}}>
              Community AFL players on Bronze NRPP cover. Five steps — done right.
            </p>
            {/* Privacy badge */}
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(74,222,128,0.12)",border:"1px solid rgba(74,222,128,0.28)",borderRadius:20,padding:"6px 14px"}}>
              <span style={{color:"#4ade80",fontSize:"0.75rem"}}>🔒</span>
              <span style={{color:"#4ade80",fontSize:"0.75rem",fontWeight:600}}>Your data stays in your browser only — we never store or see it</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="print-hide" style={{display:"flex",gap:0,marginBottom:40,borderBottom:"1px solid rgba(255,255,255,0.09)"}}>
          {tabs.map(([id,label])=>(
            <button key={id} onClick={()=>setTab(id)} style={{background:"none",border:"none",cursor:"pointer",padding:"12px 20px",fontSize:"0.92rem",fontWeight:700,color:tab===id?"#fff":"rgba(255,255,255,0.35)",borderBottom:tab===id?"2px solid var(--blue)":"2px solid transparent",transition:"all 0.15s",letterSpacing:"0.01em"}}>{label}</button>
          ))}
        </div>

        {/* ══ TAB: STEPS ══════════════════════════════════════ */}
        {tab==="steps"&&(
          <div className="print-hide">

            {/* Auto-fill + privacy notice */}
            <div style={{background:"rgba(27,144,245,0.08)",border:"1px solid rgba(27,144,245,0.22)",borderRadius:14,padding:"18px 22px",marginBottom:32,display:"flex",gap:14,alignItems:"flex-start"}}>
              <span style={{fontSize:"1.4rem",flexShrink:0}}>📄</span>
              <div>
                <p style={{color:"#fff",fontWeight:700,fontSize:"0.95rem",marginBottom:5}}>How this form works</p>
                <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",lineHeight:1.7,margin:0}}>
                  Echelon does not have a public online claim portal — claims are submitted <strong style={{color:"#fff"}}>by email, fax, or post only</strong>. This tool pre-fills Sections A and D of the official claim form from your details. Print or save as PDF, sign, and email directly to Echelon. <strong style={{color:"#fff"}}>Your details stay in your browser only. Nothing is sent to Stride or stored anywhere.</strong>
                </p>
              </div>
            </div>

            {/* Step heading */}
            <h2 className="sh sh-white" style={{fontSize:"clamp(1.8rem,4vw,2.8rem)",marginBottom:24}}>Your 5-Step Claim Guide</h2>

            <StepCard n="1" title="Complete Section A — Your Details" who="athlete" status="athlete">
              <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:14}}>
                Fill in your personal details, injury information, bank details, and sign the declaration. Use the <strong style={{color:"#fff"}}>Claim Form</strong> tab on this page — it pre-populates your details and is ready to print or save as PDF.
              </p>
              <ul style={{margin:0,padding:0,listStyle:"none"}}>
                {["Your personal details (name, address, DOB, phone, email)","Date, time, and description of injury","Club name and association","Private health insurance details (claim through PHI first where possible)","Your bank account for EFT payment","Your signature and date"].map(i=>(
                  <li key={i} style={{display:"flex",gap:8,marginBottom:8,fontSize:"0.85rem",color:"rgba(255,255,255,0.65)"}}>
                    <span style={{color:"var(--blue)",flexShrink:0}}>✓</span>{i}
                  </li>
                ))}
              </ul>
              <button onClick={()=>setTab("form")} style={{marginTop:16,background:"var(--blue)",color:"#fff",border:"none",borderRadius:8,padding:"10px 20px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer"}}>
                Go to Claim Form →
              </button>
            </StepCard>

            <StepCard n="2" title="Section D — Physician's Declaration" who="stride" status="stride">
              <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:12}}>
                Your Stride physio must complete and sign Section D. This is the <strong style={{color:"#fff"}}>Treating Physician's Report</strong> — it records your diagnosis, injury location, treatment plan, and their provider number.
              </p>
              <div style={{background:"rgba(27,144,245,0.08)",border:"1px solid rgba(27,144,245,0.2)",borderRadius:8,padding:"12px 16px",marginBottom:14}}>
                <p style={{color:"rgba(255,255,255,0.75)",fontSize:"0.85rem",margin:0,lineHeight:1.6}}>
                  <strong style={{color:"#fff"}}>What to do:</strong> Use the Claim Form tab to enter your injury details and consultation date. Print the pre-filled Section D and hand it to your Stride physio at your next appointment. They complete the clinical diagnosis section and sign it.
                </p>
              </div>
              <p style={{color:"rgba(255,255,255,0.45)",fontSize:"0.82rem",margin:0}}>
                Stride Sports Physio · 13 Puckle St, Moonee Ponds · 0483 918 427 · info@stridephysiohealth.com.au
              </p>
            </StepCard>

            <StepCard n="3" title="Section B — Club Declaration" who="club" status="club">
              <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:14}}>
                Your club secretary or team manager must complete and sign Section B. They confirm your registration, the injury circumstances, and your return-to-training status. <strong style={{color:"#fff"}}>You need to chase this up yourself.</strong>
              </p>
              <div style={{background:"rgba(245,165,0,0.08)",border:"1px solid rgba(245,165,0,0.22)",borderRadius:8,padding:"12px 16px",marginBottom:14}}>
                <p style={{color:"rgba(255,255,255,0.75)",fontSize:"0.85rem",margin:"0 0 10px"}}>
                  <strong style={{color:"#fff"}}>What your club needs to confirm:</strong>
                </p>
                <ul style={{margin:0,padding:0,listStyle:"none"}}>
                  {["Club name, association, and contact details","That you were registered for the relevant period","Date, time, location, and circumstances of the injury","Whether you have returned to training and/or competition","Club representative signature"].map(i=>(
                    <li key={i} style={{display:"flex",gap:8,marginBottom:6,fontSize:"0.83rem",color:"rgba(255,255,255,0.65)"}}>
                      <span style={{color:"#f59e0b",flexShrink:0}}>•</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={()=>setShowClubEmail(!showClubEmail)} style={{background:"rgba(245,165,0,0.12)",color:"#f59e0b",border:"1px solid rgba(245,165,0,0.3)",borderRadius:8,padding:"10px 18px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",marginBottom:showClubEmail?14:0}}>
                {showClubEmail?"Hide":"Show"} email template for your club →
              </button>
              {showClubEmail&&(
                <div style={{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:8,padding:16}}>
                  <p style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10}}>Copy and send to your club secretary</p>
                  <pre style={{color:"rgba(255,255,255,0.75)",fontSize:"0.82rem",lineHeight:1.7,whiteSpace:"pre-wrap",margin:0,fontFamily:"inherit"}}>{clubEmailBody}</pre>
                </div>
              )}
            </StepCard>

            <StepCard n="4" title="Submit to Echelon" who="echelon" status="echelon">
              <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:14}}>
                Once you have all three sections and your receipts, submit everything to Echelon. You can submit Section A + D first and send Section B separately when your club returns it — just quote your claim number.
              </p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
                {[
                  {label:"Email",value:"ecssa@echelonaustralia.com.au"},
                  {label:"Phone",value:"1800 640 009"},
                  {label:"Fax",value:"+61 8 8235 6450"},
                  {label:"Post",value:"GPO Box 1693, Adelaide SA 5001"},
                ].map(({label,value})=>(
                  <div key={label} style={{background:"rgba(167,139,250,0.08)",border:"1px solid rgba(167,139,250,0.18)",borderRadius:8,padding:"10px 14px"}}>
                    <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:"0.09em",marginBottom:3}}>{label}</div>
                    <div style={{color:"#fff",fontSize:"0.85rem",fontWeight:600}}>{value}</div>
                  </div>
                ))}
              </div>
              <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,padding:"12px 16px"}}>
                <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.83rem",lineHeight:1.7,margin:0}}>
                  <strong style={{color:"#fff"}}>Include with your submission:</strong><br/>
                  ✓ Section A (signed) &nbsp;·&nbsp; ✓ Section D (signed by physio) &nbsp;·&nbsp; ✓ All Stride invoices/receipts &nbsp;·&nbsp; ✓ Section B (from club, can follow)<br/>
                  <span style={{color:"rgba(255,255,255,0.35)"}}>Must be lodged within <strong style={{color:"#fff"}}>270 days</strong> of injury date. Keep copies of everything.</span>
                </p>
              </div>
            </StepCard>

            <StepCard n="5" title="Follow Up — Confirm Receipt" who="athlete" status="athlete">
              <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.88rem",lineHeight:1.7,marginBottom:14}}>
                Echelon will email you a claim number once your claim is received. Use this claim number for all future invoice submissions. If you haven&apos;t received a response within <strong style={{color:"#fff"}}>5 business days</strong>, follow up.
              </p>
              <div style={{background:"rgba(255,255,255,0.04)",borderRadius:8,padding:"12px 16px",marginBottom:12}}>
                <p style={{color:"rgba(255,255,255,0.75)",fontSize:"0.85rem",lineHeight:1.7,margin:0}}>
                  <strong style={{color:"#fff"}}>Follow-up email to Echelon:</strong><br/>
                  <span style={{color:"rgba(255,255,255,0.55)"}}>Subject: Claim follow-up — {form.name||"[Your name]"} — injury {form.injuryDate||"[date]"}</span><br/><br/>
                  <span style={{color:"rgba(255,255,255,0.65)"}}>Hi Echelon Claims team,<br/>I am following up on my personal injury claim submitted for an injury on {form.injuryDate||"[injury date]"} whilst playing for {form.clubName||"[club name]"}. Could you please confirm receipt and provide my claim number?<br/><br/>My details: {form.name||"[name]"} · {form.email||"[email]"} · {form.phone||"[phone]"}<br/><br/>Thank you.</span>
                </p>
              </div>
              <p style={{color:"rgba(255,255,255,0.35)",fontSize:"0.8rem",margin:0}}>Once you have a claim number, submit any additional Stride invoices directly by email quoting that number.</p>
            </StepCard>

            {/* ── Pricing map ── */}
            <div style={{marginTop:40,paddingTop:32,borderTop:"1px solid rgba(255,255,255,0.09)"}}>
              <h2 className="sh sh-white" style={{fontSize:"clamp(1.6rem,3.5vw,2.4rem)",marginBottom:6}}>Stride Pricing &amp; What NRPP Covers</h2>
              <p style={{color:"rgba(255,255,255,0.40)",fontSize:"0.85rem",marginBottom:24}}>Two ways to see us. Here’s how Bronze cover maps to each.</p>

              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20}}>

                {/* Option 1: Sessions */}
                <div style={{background:"rgba(27,144,245,0.08)",border:"1px solid rgba(27,144,245,0.22)",borderRadius:14,padding:"24px 22px"}}>
                  <div className="ey ey-blue" style={{marginBottom:10}}>Option 1</div>
                  <div style={{fontFamily:"var(--font-bebas)",fontSize:"1.5rem",color:"#fff",letterSpacing:"0.04em",marginBottom:4}}>Session-by-session</div>
                  <div style={{color:"rgba(255,255,255,0.50)",fontSize:"0.8rem",marginBottom:20}}>Pay per visit. No commitment.</div>
                  <div style={{display:"flex",flexDirection:"column",gap:10}}>
                    {[
                      {label:"Initial consultation",price:"$145"},
                      {label:"Subsequent consultation",price:"$145"},
                    ].map(({label,price})=>(
                      <div key={label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(255,255,255,0.07)",paddingBottom:8}}>
                        <span style={{color:"rgba(255,255,255,0.70)",fontSize:"0.85rem"}}>{label}</span>
                        <span style={{color:"#fff",fontWeight:700,fontSize:"0.9rem"}}>{price}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{marginTop:16,background:"rgba(74,222,128,0.08)",border:"1px solid rgba(74,222,128,0.2)",borderRadius:8,padding:"12px 14px"}}>
                    <p style={{color:"#4ade80",fontWeight:700,fontSize:"0.8rem",marginBottom:4}}>🟢 NRPP Bronze covers</p>
                    <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.8rem",lineHeight:1.6,margin:0}}>
                      $145 is within the $150/session cap.<br/>
                      Sessions 1–5: <strong style={{color:"#fff"}}>$137.75 back</strong> (95%)<br/>
                      Sessions 6–10: <strong style={{color:"#fff"}}>$116 back</strong> (80%)<br/>
                      Sessions 11+: <strong style={{color:"#fff"}}>$72.50 back</strong> (50%)<br/>
                      <span style={{color:"rgba(255,255,255,0.40)"}}>Less $100 excess · $1,000 physio cap total</span>
                    </p>
                  </div>
                </div>

                {/* Option 2: Program */}
                <div style={{background:"rgba(245,165,0,0.08)",border:"1px solid rgba(245,165,0,0.22)",borderRadius:14,padding:"24px 22px"}}>
                  <div className="ey" style={{marginBottom:10,color:"#f59e0b"}}><span style={{display:"inline-block",width:22,height:1,background:"#f59e0b",marginRight:10,verticalAlign:"middle"}}/>Option 2</div>
                  <div style={{fontFamily:"var(--font-bebas)",fontSize:"1.5rem",color:"#fff",letterSpacing:"0.04em",marginBottom:4}}>All-Inclusive Rehab Program</div>
                  <div style={{color:"rgba(255,255,255,0.50)",fontSize:"0.8rem",marginBottom:20}}>Weekly fixed fee. Min 4 weeks, then 4-week blocks.</div>
                  <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(255,255,255,0.07)",paddingBottom:8}}>
                      <span style={{color:"rgba(255,255,255,0.70)",fontSize:"0.85rem"}}>Weekly program fee</span>
                      <span style={{color:"#f59e0b",fontWeight:700,fontSize:"0.9rem"}}>Ask Stride</span>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(255,255,255,0.07)",paddingBottom:8}}>
                      <span style={{color:"rgba(255,255,255,0.70)",fontSize:"0.85rem"}}>Minimum commitment</span>
                      <span style={{color:"#fff",fontWeight:700,fontSize:"0.9rem"}}>4 weeks</span>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <span style={{color:"rgba(255,255,255,0.70)",fontSize:"0.85rem"}}>Subsequent blocks</span>
                      <span style={{color:"#fff",fontWeight:700,fontSize:"0.9rem"}}>4-week blocks</span>
                    </div>
                  </div>
                  <div style={{background:"rgba(245,165,0,0.08)",border:"1px solid rgba(245,165,0,0.2)",borderRadius:8,padding:"12px 14px"}}>
                    <p style={{color:"#f59e0b",fontWeight:700,fontSize:"0.8rem",marginBottom:4}}>🟡 NRPP Bronze — how it works</p>
                    <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.8rem",lineHeight:1.6,margin:0}}>
                      NRPP pays per individual session, not weekly fees. Your program sessions are submitted as individual consultations (up to $150/session cap). Stride provides an itemised invoice per session to support your claim. <strong style={{color:"#fff"}}>Speak to us at your first visit — we’ll help structure your invoicing correctly.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:10,padding:"14px 18px"}}>
                <p style={{color:"rgba(255,255,255,0.55)",fontSize:"0.82rem",lineHeight:1.65,margin:0}}>
                  💡 <strong style={{color:"#fff"}}>Tip:</strong> Claim through your private health insurance first where you have physio cover — NRPP Bronze covers the gap not reimbursed by your PHI, up to its own limits. Present both your PHI statement and Stride invoice when submitting to Echelon.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ══ TAB: COVER ══════════════════════════════════════ */}
        {tab==="cover"&&(
          <div className="print-hide">
            <div style={{background:"rgba(27,144,245,0.08)",border:"1px solid rgba(27,144,245,0.22)",borderRadius:14,padding:"24px 28px",marginBottom:28}}>
              <div className="ey ey-blue" style={{marginBottom:8}}>Bronze Tier — Standard AFL Cover</div>
              <p style={{color:"rgba(255,255,255,0.65)",fontSize:"0.9rem",lineHeight:1.7,margin:0}}>
                Registered community AFL players are automatically covered by the NRPP Bronze tier via the National Risk Protection Program (Marsh Sport / Echelon Australia). Covers <strong style={{color:"#fff"}}>non-Medicare medical costs</strong> from accidental injury during sanctioned club activities. This is a <strong style={{color:"#fff"}}>discretionary trust</strong> — not traditional insurance.
              </p>
            </div>
            <h2 style={sec}>Physiotherapy Reimbursement — Bronze</h2>
            <div style={{border:"1px solid rgba(255,255,255,0.09)",borderRadius:12,overflow:"hidden",marginBottom:28}}>
              {[["Sessions 1–5","95%","$150/session"],["Sessions 6–10","80%","$150/session"],["Sessions 11+","50%","$150/session"]].map(([s,r,c],i)=>(
                <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 80px 120px",padding:"14px 20px",background:i%2===0?"rgba(255,255,255,0.03)":"transparent",borderBottom:i<2?"1px solid rgba(255,255,255,0.06)":"none"}}>
                  <span style={{color:"rgba(255,255,255,0.75)",fontSize:"0.88rem"}}>{s}</span>
                  <span style={{color:"var(--blue)",fontWeight:700,fontSize:"0.88rem"}}>{r}</span>
                  <span style={{color:"rgba(255,255,255,0.45)",fontSize:"0.82rem"}}>max {c}</span>
                </div>
              ))}
            </div>
            <h2 style={sec}>Key Limits</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:28}}>
              {[["Physio sub-limit","$1,000 per claim"],["Total claim limit","$2,000 per claim"],["Excess","$100 per claim"],["Session cap","$150 per session"],["Claim window","270 days from injury"],["Benefit period","52 weeks"]].map(([l,v])=>(
                <div key={l} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:10,padding:"14px 16px"}}>
                  <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",letterSpacing:"0.09em",marginBottom:4}}>{l}</div>
                  <div style={{color:"#fff",fontWeight:700,fontSize:"0.95rem"}}>{v}</div>
                </div>
              ))}
            </div>
            <h2 style={sec}>Not Covered</h2>
            <ul style={{margin:"0 0 28px",padding:0,listStyle:"none"}}>
              {["Medicare items — GP fees, surgeon fees, Medicare gap","Pre-existing conditions or illness (accident only)","Injuries outside sanctioned club activities","Amounts already rebated by private health insurance"].map(i=>(
                <li key={i} style={{display:"flex",gap:10,marginBottom:10,color:"rgba(255,255,255,0.55)",fontSize:"0.88rem",lineHeight:1.6}}>
                  <span style={{color:"#f87171",flexShrink:0}}>✗</span>{i}
                </li>
              ))}
            </ul>
            <button onClick={()=>setTab("steps")} style={{width:"100%",background:"var(--blue)",color:"#fff",border:"none",borderRadius:10,padding:14,fontWeight:700,fontSize:"0.9rem",cursor:"pointer"}}>
              View claim steps →
            </button>
          </div>
        )}

        {/* ══ TAB: CALCULATOR ═════════════════════════════════ */}
        {tab==="calculator"&&(
          <div className="print-hide">
            <h2 style={sec}>Estimate Your Physio Claim</h2>
            <p style={{color:"rgba(255,255,255,0.45)",fontSize:"0.85rem",marginBottom:28,lineHeight:1.6}}>Bronze tier rates. $100 excess applies per claim. $1,000 physio sub-limit caps reimbursement.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginBottom:28}}>
              <div><label style={lbl}>Number of sessions</label><input type="number" min={1} max={30} value={sessions} onChange={e=>setSessions(Math.max(1,parseInt(e.target.value)||1))} style={inp}/></div>
              <div><label style={lbl}>Stride charge per session ($)</label><input type="number" min={1} max={500} value={cost} onChange={e=>setCost(Math.max(1,parseInt(e.target.value)||1))} style={inp}/>
                <p style={{color:"rgba(255,255,255,0.30)",fontSize:"0.72rem",marginTop:4}}>NRPP caps reimbursement at $150/session</p>
              </div>
            </div>
            <div style={{border:"1px solid rgba(255,255,255,0.09)",borderRadius:12,overflow:"hidden",marginBottom:16}}>
              {[1,2,3].map(tier=>{
                const [from,to,rate]=tier===1?[1,5,0.95]:tier===2?[6,10,0.80]:[11,999,0.50];
                const n=Math.max(0,Math.min(sessions,to)-from+1);
                if(n<=0)return null;
                const g=n*Math.min(cost,150)*rate;
                return(<div key={tier} style={{display:"grid",gridTemplateColumns:"1fr 70px 80px 100px",padding:"12px 20px",background:tier%2!==0?"rgba(255,255,255,0.03)":"transparent",borderBottom:"1px solid rgba(255,255,255,0.06)",fontSize:"0.85rem"}}>
                  <span style={{color:"rgba(255,255,255,0.65)"}}>Sessions {from}–{to===999?sessions:to} ({n} sessions)</span>
                  <span style={{color:"var(--blue)"}}>{(rate*100).toFixed(0)}%</span>
                  <span style={{color:"rgba(255,255,255,0.45)"}}>${(Math.min(cost,150)*rate).toFixed(2)}/ea</span>
                  <span style={{color:"#fff",textAlign:"right"}}>${g.toFixed(2)}</span>
                </div>);
              }).filter(Boolean)}
            </div>
            <div style={{background:"rgba(27,144,245,0.08)",border:"1px solid rgba(27,144,245,0.25)",borderRadius:12,padding:"20px 24px",marginBottom:16}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}><span style={{color:"rgba(255,255,255,0.55)",fontSize:"0.88rem"}}>Claimable (before excess)</span><span style={{color:"#fff",fontWeight:700}}>${calc.gross.toFixed(2)}{calc.hitCap?" (capped $1,000)":""}</span></div>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:14,paddingBottom:14,borderBottom:"1px solid rgba(255,255,255,0.08)"}}><span style={{color:"rgba(255,255,255,0.55)",fontSize:"0.88rem"}}>Less $100 excess</span><span style={{color:"#f87171",fontWeight:700}}>− $100.00</span></div>
              <div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"rgba(255,255,255,0.90)",fontWeight:700}}>Estimated net reimbursement</span><span style={{color:"var(--blue)",fontWeight:800,fontSize:"1.3rem"}}>${calc.net.toFixed(2)}</span></div>
            </div>
            <p style={{color:"rgba(255,255,255,0.25)",fontSize:"0.72rem",lineHeight:1.6,marginBottom:16}}>Estimate only. Actual reimbursement at Echelon&apos;s discretion. Claim through PHI first.</p>
            <button onClick={()=>setTab("form")} style={{width:"100%",background:"var(--blue)",color:"#fff",border:"none",borderRadius:10,padding:14,fontWeight:700,fontSize:"0.9rem",cursor:"pointer"}}>Complete my claim form →</button>
          </div>
        )}

        {/* ══ TAB: FORM ═══════════════════════════════════════ */}
        {tab==="form"&&(
          <div>
            {/* ─── Form actions bar (screen only) ─── */}
            <div className="print-hide" style={{display:"flex",gap:10,marginBottom:28,flexWrap:"wrap"}}>
              <button onClick={()=>doPrint("A")} style={{flex:"1 1 200px",background:"var(--blue)",color:"#fff",border:"none",borderRadius:10,padding:"12px 18px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer"}}>🖨 Print Section A (your part)</button>
              <button onClick={()=>doPrint("D")} style={{flex:"1 1 200px",background:"rgba(74,222,128,0.12)",color:"#4ade80",border:"1px solid rgba(74,222,128,0.3)",borderRadius:10,padding:"12px 18px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer"}}>🖨 Print Section D (for your physio)</button>
            </div>

            {/* ════ SECTION A (screen form) ════ */}
            <div className="print-hide">
              <h2 style={sec}>Section A — Your Details (Claimant)</h2>
              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
                <div><label style={lbl}>Full name</label><input style={inp} value={form.name} onChange={e=>set("name",e.target.value)} placeholder="First and last name"/></div>
                <div><label style={lbl}>Address line 1</label><input style={inp} value={form.addressLine1} onChange={e=>set("addressLine1",e.target.value)} placeholder="Street address"/></div>
                <div style={r2}>
                  <div><label style={lbl}>Suburb / state</label><input style={inp} value={form.addressLine2} onChange={e=>set("addressLine2",e.target.value)}/></div>
                  <div><label style={lbl}>Postcode</label><input style={inp} value={form.postcode} onChange={e=>set("postcode",e.target.value)} placeholder="3000"/></div>
                </div>
                <div style={r2}>
                  <div><label style={lbl}>Occupation</label><input style={inp} value={form.occupation} onChange={e=>set("occupation",e.target.value)}/></div>
                  <div><label style={lbl}>Phone</label><input style={inp} value={form.phone} onChange={e=>set("phone",e.target.value)} type="tel"/></div>
                </div>
                <div style={r2}>
                  <div><label style={lbl}>Email</label><input style={inp} value={form.email} onChange={e=>set("email",e.target.value)} type="email"/></div>
                  <div><label style={lbl}>Date of birth</label><input style={inp} value={form.dob} onChange={e=>set("dob",e.target.value)} placeholder="DD/MM/YYYY"/></div>
                </div>
                <div><label style={lbl}>Gender</label>{radio<Gender>(["Male","Female","Other","Prefer not to say"],form.gender,v=>set("gender",v))}</div>
              </div>

              <h3 style={{...sec,fontSize:"1.1rem"}}>Injury Details</h3>
              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
                <div style={r2}>
                  <div><label style={lbl}>Date of injury</label><input style={inp} value={form.injuryDate} onChange={e=>set("injuryDate",e.target.value)} placeholder="DD/MM/YYYY"/></div>
                  <div><label style={lbl}>Time</label><div style={{marginTop:4}}>{radio<"AM"|"PM">(["AM","PM"],form.injuryTimeAM?"AM":"PM",v=>set("injuryTimeAM",v==="AM"))}</div></div>
                </div>
                <div style={r2}>
                  <div><label style={lbl}>Club name</label><input style={inp} value={form.clubName} onChange={e=>set("clubName",e.target.value)} placeholder="e.g. Essendon Doutta Stars"/></div>
                  <div><label style={lbl}>Association</label><input style={inp} value={form.association} onChange={e=>set("association",e.target.value)} placeholder="e.g. EDFL"/></div>
                </div>
                <div><label style={lbl}>Describe how the injury happened</label>
                  <textarea style={{...inp,height:80,resize:"vertical"}} value={form.injuryDescription} onChange={e=>set("injuryDescription",e.target.value)} placeholder="Body part injured, mechanism, what you were doing..."/>
                </div>
                <div><label style={lbl}>Activity</label>{radio<Activity>(["Playing","Training","Travelling","Warm up / Cool down","Other"],form.activity,v=>set("activity",v))}
                  {form.activity==="Other"&&<input style={{...inp,marginTop:8}} value={form.activityOther} onChange={e=>set("activityOther",e.target.value)} placeholder="Describe"/>}
                </div>
                <div style={r2}>
                  <div><label style={lbl}>Location</label>{radio<"Indoor"|"Outdoor">(["Indoor","Outdoor"],form.locationIndoor?"Indoor":"Outdoor",v=>set("locationIndoor",v==="Indoor"))}</div>
                  <div><label style={lbl}>Grade</label>{radio<Grade>(["Senior","Reserve","Junior","Not applicable"],form.grade,v=>set("grade",v))}</div>
                </div>
                <div style={r2}>
                  <div><label style={lbl}>Surface</label>{radio<Surface>(["Grass","Synthetic grass","Asphalt","Concrete","Indoor","Timber"],form.surface,v=>set("surface",v))}</div>
                  <div><label style={lbl}>Weather</label>{radio<Weather>(["Fine","Rain","Extreme heat","Extreme cold"],form.weather,v=>set("weather",v))}</div>
                </div>
              </div>

              <h3 style={{...sec,fontSize:"1.1rem"}}>Resumption Dates</h3>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,marginBottom:28}}>
                <div><label style={lbl}>Return to work</label><input style={inp} value={form.resumeWork} onChange={e=>set("resumeWork",e.target.value)} placeholder="DD/MM/YYYY"/></div>
                <div><label style={lbl}>Return to training</label><input style={inp} value={form.resumeTraining} onChange={e=>set("resumeTraining",e.target.value)} placeholder="DD/MM/YYYY"/></div>
                <div><label style={lbl}>Return to playing</label><input style={inp} value={form.resumePlaying} onChange={e=>set("resumePlaying",e.target.value)} placeholder="DD/MM/YYYY"/></div>
              </div>

              <h3 style={{...sec,fontSize:"1.1rem"}}>Private Health Insurance</h3>
              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
                <div><label style={lbl}>Do you have PHI?</label>{radio<"Yes"|"No">(["Yes","No"],form.hasPHI===null?"":form.hasPHI?"Yes":"No",v=>set("hasPHI",v==="Yes"))}</div>
                {form.hasPHI&&<>
                  <div><label style={lbl}>Provider name</label><input style={inp} value={form.phiProvider} onChange={e=>set("phiProvider",e.target.value)} placeholder="e.g. Medibank, Bupa"/></div>
                  <div><label style={lbl}>Covers</label>
                    <div style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:4}}>
                      {(["Physiotherapy","Ambulance","Hospital","Dental"] as const).map((f,i)=>{
                        const keys:Array<keyof Form>=["phiPhysio","phiAmbulance","phiHospital","phiDental"];
                        return(<label key={f} style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer",fontSize:"0.88rem",color:"rgba(255,255,255,0.75)"}}>
                          <input type="checkbox" checked={form[keys[i]] as boolean} onChange={()=>set(keys[i],!form[keys[i]])} style={{accentColor:"var(--blue)"}}/>{f}
                        </label>);
                      })}
                    </div>
                  </div>
                </>}
                <div><label style={lbl}>Ambulance membership?</label>{radio<"Yes"|"No">(["Yes","No"],form.hasAmbulanceMembership===null?"":form.hasAmbulanceMembership?"Yes":"No",v=>set("hasAmbulanceMembership",v==="Yes"))}</div>
              </div>

              <h3 style={{...sec,fontSize:"1.1rem"}}>EFT Payment Details</h3>
              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
                <div style={r2}><div><label style={lbl}>Bank name</label><input style={inp} value={form.bankName} onChange={e=>set("bankName",e.target.value)}/></div>
                  <div><label style={lbl}>Account name</label><input style={inp} value={form.accountName} onChange={e=>set("accountName",e.target.value)}/></div></div>
                <div style={r2}><div><label style={lbl}>BSB</label><input style={inp} value={form.bsb} onChange={e=>set("bsb",e.target.value)} placeholder="000-000"/></div>
                  <div><label style={lbl}>Account number</label><input style={inp} value={form.accountNumber} onChange={e=>set("accountNumber",e.target.value)}/></div></div>
              </div>

              {/* Section D inputs (screen only — part of the form) */}
              <h2 style={{...sec,color:"#4ade80"}}>Section D — For Your Physio (pre-fill)</h2>
              <p style={{color:"rgba(255,255,255,0.45)",fontSize:"0.82rem",marginBottom:20}}>Fill these in and print Section D separately for your Stride physio to sign.</p>
              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
                <div><label style={lbl}>Your Stride clinician</label>
                  <select style={{...inp,appearance:"none"}} value={form.clinicianIndex} onChange={e=>set("clinicianIndex",parseInt(e.target.value))}>
                    {CLINICIANS.map((c,i)=><option key={i} value={i}>{c.name}{c.provider?` (Provider: ${c.provider})`:""}</option>)}
                  </select>
                </div>
                <div><label style={lbl}>Date of consultation at Stride</label><input style={inp} value={form.consultationDate} onChange={e=>set("consultationDate",e.target.value)} placeholder="DD/MM/YYYY"/></div>
                <div><label style={lbl}>Diagnosis / clinical description (physio will review and confirm)</label>
                  <textarea style={{...inp,height:80,resize:"vertical"}} value={form.diagnosis} onChange={e=>set("diagnosis",e.target.value)} placeholder="e.g. Right knee medial collateral ligament sprain, Grade II..."/>
                </div>
                <div><label style={lbl}>Injury location(s)</label>
                  <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:4}}>
                    {INJURY_LOCATIONS.map(loc=>{
                      const active=form.injuryLocations.includes(loc);
                      return(<button key={loc} type="button" onClick={()=>set("injuryLocations",active?form.injuryLocations.filter(l=>l!==loc):[...form.injuryLocations,loc])}
                        style={{background:active?"var(--blue)":"rgba(255,255,255,0.06)",color:active?"#fff":"rgba(255,255,255,0.55)",border:`1px solid ${active?"var(--blue)":"rgba(255,255,255,0.12)"}`,borderRadius:6,padding:"6px 12px",fontSize:"0.8rem",cursor:"pointer"}}>
                        {loc}
                      </button>);
                    })}
                  </div>
                </div>
                <div><label style={lbl}>Body side</label>{radio<string>(["Left","Right","Both","N/A"],form.bodySide,v=>set("bodySide",v))}</div>
                <div style={r2}>
                  <div><label style={lbl}>GP name (if applicable)</label><input style={inp} value={form.gpName} onChange={e=>set("gpName",e.target.value)} placeholder="Dr Smith"/></div>
                  <div><label style={lbl}>GP phone</label><input style={inp} value={form.gpPhone} onChange={e=>set("gpPhone",e.target.value)}/></div>
                </div>
              </div>

              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                <div><label style={lbl}>Signature date</label><input style={{...inp,width:180}} value={form.signatureDate} onChange={e=>set("signatureDate",e.target.value)} placeholder="DD/MM/YYYY"/></div>
              </div>
              <div style={{display:"flex",gap:10,marginTop:20}}>
                <button onClick={()=>doPrint("A")} style={{flex:1,background:"var(--blue)",color:"#fff",border:"none",borderRadius:10,padding:14,fontWeight:700,fontSize:"0.9rem",cursor:"pointer"}}>🖨 Print Section A</button>
                <button onClick={()=>doPrint("D")} style={{flex:1,background:"rgba(74,222,128,0.12)",color:"#4ade80",border:"1px solid rgba(74,222,128,0.3)",borderRadius:10,padding:14,fontWeight:700,fontSize:"0.9rem",cursor:"pointer"}}>🖨 Print Section D (for physio)</button>
              </div>
            </div>

            {/* ════ PRINT: Section A ════ */}
            <div className="print-sec-a">
              <div style={{marginBottom:24,paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.2)"}}>
                <div style={{fontFamily:"var(--font-bebas)",fontSize:"1.6rem",color:"#fff",letterSpacing:"0.04em"}}>NRPP Personal Injury Claim — Section A (Claimant Details)</div>
                <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.40)",marginTop:4}}>Echelon Australia Pty Ltd · ecssa@echelonaustralia.com.au · GPO Box 1693, Adelaide SA 5001</div>
              </div>
              <PrintRow label="Full name" value={form.name}/><PrintRow label="Address" value={[form.addressLine1,form.addressLine2,form.postcode].filter(Boolean).join(", ")}/><PrintRow label="Occupation" value={form.occupation}/><PrintRow label="Phone" value={form.phone}/><PrintRow label="Email" value={form.email}/><PrintRow label="Date of birth" value={form.dob}/><PrintRow label="Gender" value={form.gender}/>
              <div style={{height:16}}/>
              <PrintRow label="Date of injury" value={form.injuryDate}/><PrintRow label="Time" value={form.injuryTimeAM?"AM":"PM"}/><PrintRow label="Club" value={form.clubName}/><PrintRow label="Association" value={form.association}/><PrintRow label="Injury description" value={form.injuryDescription}/><PrintRow label="Activity" value={form.activity==="Other"?form.activityOther:form.activity}/><PrintRow label="Location" value={form.locationIndoor?"Indoor":"Outdoor"}/><PrintRow label="Grade" value={form.grade}/><PrintRow label="Surface" value={form.surface}/><PrintRow label="Weather" value={form.weather}/>
              <div style={{height:16}}/>
              <PrintRow label="Return to work" value={form.resumeWork}/><PrintRow label="Return to training" value={form.resumeTraining}/><PrintRow label="Return to playing" value={form.resumePlaying}/>
              <div style={{height:16}}/>
              <PrintRow label="Has PHI" value={form.hasPHI===null?"":form.hasPHI?"Yes":"No"}/>{form.hasPHI&&<PrintRow label="PHI provider" value={form.phiProvider}/>}<PrintRow label="Ambulance membership" value={form.hasAmbulanceMembership===null?"":form.hasAmbulanceMembership?"Yes":"No"}/>
              <div style={{height:16}}/>
              <PrintRow label="Bank" value={form.bankName}/><PrintRow label="Account name" value={form.accountName}/><PrintRow label="BSB" value={form.bsb}/><PrintRow label="Account number" value={form.accountNumber}/>
              <div style={{marginTop:32,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.15)"}}>
                <p style={{color:"rgba(255,255,255,0.45)",fontSize:"0.75rem",lineHeight:1.65,marginBottom:24}}>I declare the information in this form is true and correct. The injury was sustained accidentally during a sanctioned club activity and was not pre-existing. I authorise Echelon Australia Pty Ltd and Marsh Sport to obtain relevant medical information to assess this claim.</p>
                <div style={{display:"flex",gap:40}}>
                  <div style={{flex:1}}><div style={{borderBottom:"1px solid rgba(255,255,255,0.3)",height:48,marginBottom:6}}/><span style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.35)"}}>Claimant signature (parent/guardian if under 18)</span></div>
                  <div style={{width:220}}><div style={{borderBottom:"1px solid rgba(255,255,255,0.3)",height:48,marginBottom:6,display:"flex",alignItems:"flex-end",paddingBottom:4}}>{form.signatureDate&&<span style={{color:"#fff",fontSize:"0.88rem"}}>{form.signatureDate}</span>}</div><span style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.35)"}}>Date</span></div>
                </div>
              </div>
            </div>

            {/* ════ PRINT: Section D ════ */}
            <div className="print-sec-d">
              <div style={{marginBottom:24,paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.2)"}}>
                <div style={{fontFamily:"var(--font-bebas)",fontSize:"1.6rem",color:"#fff",letterSpacing:"0.04em"}}>NRPP Personal Injury Claim — Section D (Physician&apos;s Report)</div>
                <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.40)",marginTop:4}}>To be completed by the treating physiotherapist, GP, or specialist. Please print legibly.</div>
              </div>
              <PrintRow label="Claimant's name" value={form.name}/>
              <PrintRow label="Physician / Physio name" value={clinician.name}/>
              <PrintRow label="Practice" value="Stride Sports Physio & Performance"/>
              <PrintRow label="Address" value="13 Puckle Street, Moonee Ponds VIC 3039"/>
              <PrintRow label="Phone" value={clinician.phone}/>
              <PrintRow label="Email" value={clinician.email}/>
              {clinician.provider&&<PrintRow label="Provider number" value={clinician.provider}/>}
              <div style={{height:16}}/>
              <PrintRow label="Date of injury" value={form.injuryDate}/>
              <PrintRow label="Date of consultation" value={form.consultationDate}/>
              <div style={{marginBottom:16}}>
                <div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.78rem",marginBottom:8}}>Diagnosis / history of injury</div>
                {form.diagnosis?<div style={{color:"#fff",fontSize:"0.88rem",lineHeight:1.65,borderLeft:"2px solid rgba(27,144,245,0.5)",paddingLeft:12}}>{form.diagnosis}</div>:<div style={{border:"1px dashed rgba(255,255,255,0.15)",borderRadius:6,height:80,marginBottom:8}}/>}
              </div>
              {form.injuryLocations.length>0&&<PrintRow label="Injury location(s)" value={form.injuryLocations.join(", ")}/>}
              {form.bodySide&&<PrintRow label="Body side" value={form.bodySide}/>}
              {form.gpName&&<PrintRow label="Referring GP" value={`${form.gpName}${form.gpPhone?" · "+form.gpPhone:""}`}/>}
              {/* Physician completion section */}
              <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,padding:"16px",marginTop:20,marginBottom:20}}>
                <p style={{color:"rgba(255,255,255,0.55)",fontSize:"0.78rem",marginBottom:16}}>FOR PHYSICIAN COMPLETION:</p>
                {["Recommended treatment plan","Expected duration of treatment","Date of expected return to sport","Any other relevant clinical notes"].map(field=>(
                  <div key={field} style={{marginBottom:20}}>
                    <div style={{color:"rgba(255,255,255,0.40)",fontSize:"0.75rem",marginBottom:6}}>{field}</div>
                    <div style={{borderBottom:"1px solid rgba(255,255,255,0.15)",height:28,marginBottom:4}}/>
                    <div style={{borderBottom:"1px solid rgba(255,255,255,0.1)",height:28}}/>
                  </div>
                ))}
              </div>
              <div style={{marginTop:24,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.15)"}}>
                <p style={{color:"rgba(255,255,255,0.40)",fontSize:"0.75rem",lineHeight:1.65,marginBottom:24}}>I confirm that I am the treating physician for the above-named claimant, that the information provided is accurate to the best of my knowledge, and that I consent to this information being provided to Echelon Australia Pty Ltd and Marsh Sport for the purpose of assessing this insurance claim.</p>
                <div style={{display:"flex",gap:32}}>
                  <div style={{flex:1}}><div style={{borderBottom:"1px solid rgba(255,255,255,0.3)",height:48,marginBottom:6}}/><span style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.35)"}}>Physician signature</span></div>
                  <div style={{width:200}}><div style={{borderBottom:"1px solid rgba(255,255,255,0.3)",height:48,marginBottom:6}}/><span style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.35)"}}>Date</span></div>
                </div>
              </div>
              <div style={{marginTop:24,paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.1)",fontSize:"0.72rem",color:"rgba(255,255,255,0.22)"}}>
                Submit with Sections A, B, C (if applicable) and all original receipts to: ecssa@echelonaustralia.com.au · GPO Box 1693, Adelaide SA 5001 · Fax: +61 8 8235 6450 · Echelon Australia Pty Ltd (ABN 96 085 720 056)
              </div>
            </div>

          </div>
        )}

        {/* Footer */}
        <div className="print-hide" style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:20,marginTop:48}}>
          <p style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.22)",lineHeight:1.65,margin:0}}>
            Provided by Stride Sports Physio &amp; Performance to assist community AFL players access NRPP Bronze cover. Educational purposes only — not insurance or legal advice. Claim decisions are at the absolute discretion of Echelon Australia / Marsh Sport acting as Trustee. Always claim through PHI first. Policy AFL 01112024 · Insurer AHI (ABN 26 053 335 952) · Trustee JLT Group Services Pty Ltd (ABN 26 004 485 214).
          </p>
        </div>

      </div>
    </div>
  );
}
