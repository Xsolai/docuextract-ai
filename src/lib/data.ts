export type DocumentStatus='processed'|'review'|'failed';
export type DocumentItem={id:string;name:string;type:string;company:string;date:string;pages:number;confidence:number;status:DocumentStatus;total:string};
export type ExtractedField={id:string;label:string;value:string;confidence:number;valid:boolean};
export type PricingPlan={id:string;name:string;monthly:number;annual:number;description:string;features:string[];popular?:boolean};
export type Activity={time:string;document:string;type:string;status:DocumentStatus;confidence:number;user:string};

export const documents:DocumentItem[]=[
 {id:'inv-4567',name:'INV-2025-04567.pdf',type:'Invoice',company:'Acme Supply Co.',date:'May 15, 2025',pages:2,confidence:96.4,status:'processed',total:'$352.50'},
 {id:'po-78291',name:'PO-78291.pdf',type:'Purchase Order',company:'Global Industrial',date:'May 15, 2025',pages:1,confidence:97.2,status:'processed',total:'$12,480.00'},
 {id:'rcp-998812',name:'RCP-998812.jpg',type:'Receipt',company:'Office Depot',date:'May 14, 2025',pages:1,confidence:95.1,status:'processed',total:'$184.23'},
 {id:'sm-88421',name:'SM-88421.pdf',type:'Shipping Manifest',company:'Pacific Freight Lines',date:'May 13, 2025',pages:2,confidence:94.7,status:'review',total:'—'},
 {id:'inv-4566',name:'INV-2025-04566.pdf',type:'Invoice',company:'Staples Advantage',date:'May 13, 2025',pages:1,confidence:97,status:'processed',total:'$688.20'},
];
export const fields:ExtractedField[]=[
 {id:'invoice',label:'Invoice number',value:'INV-2025-04567',confidence:99.3,valid:true},
 {id:'date',label:'Invoice date',value:'May 15, 2025',confidence:98.7,valid:true},
 {id:'due',label:'Due date',value:'June 14, 2025',confidence:97.4,valid:true},
 {id:'vendor',label:'Vendor name',value:'Acme Supply Co.',confidence:99.1,valid:true},
 {id:'address',label:'Vendor address',value:'123 Industrial Way, Cleveland, OH 44113',confidence:98.2,valid:true},
 {id:'billto',label:'Bill to',value:'Northfield Manufacturing LLC',confidence:99,valid:true},
 {id:'currency',label:'Currency',value:'USD',confidence:100,valid:true},
 {id:'subtotal',label:'Subtotal',value:'$352.50',confidence:99.2,valid:true},
 {id:'tax',label:'Sales tax',value:'$0.00',confidence:100,valid:true},
 {id:'total',label:'Total',value:'$352.50',confidence:99.6,valid:true},
 {id:'items',label:'Line items',value:'5 items',confidence:97.1,valid:false},
 {id:'po',label:'PO number',value:'PO-78291',confidence:86.3,valid:false},
];
export const plans:PricingPlan[]=[
 {id:'starter',name:'Starter',monthly:39,annual:31,description:'For focused document workflows.',features:['2,500 pages / month','Invoice and receipt templates','CSV and JSON export','Email support']},
 {id:'growth',name:'Growth',monthly:99,annual:79,description:'For growing operations teams.',features:['10,000 pages / month','Custom extraction templates','Review queue and analytics','Team workspace'],popular:true},
 {id:'scale',name:'Scale',monthly:249,annual:199,description:'For high-volume simulated processing.',features:['50,000 pages / month','Unlimited templates','Priority review workflows','Advanced export controls']},
];
export const activity:Activity[]=documents.map((d,i)=>({time:['10:21 AM','10:18 AM','9:57 AM','9:41 AM','9:30 AM'][i],document:d.name,type:d.type,status:d.status,confidence:d.confidence,user:i<2?'Alex Morgan':'Jamie Lee'}));
export const volume=[15,12,17,9,7,10,6,12,8,9,13,17,20,14,32,28,26,14,30,16,36,31,28,17,13,18,15,21,25,19,20,12,11];
