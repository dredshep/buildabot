function currentPageTemplate(){const s=location.pathname.substring();if(ANALYTICS_TEMPLATE_STRICT_MATCHING[s])return ANALYTICS_TEMPLATE_STRICT_MATCHING[s];for(const n in ANALYTICS_TEMPLATE_LOOSE_MATCHING){const e=s.match(new RegExp(n));if(e)return ANALYTICS_TEMPLATE_LOOSE_MATCHING[e]}return"Other"}ANALYTICS_TEMPLATE_STRICT_MATCHING={"/fr":"HP","/de":"HP","/it":"HP","/en":"HP","/es":"HP"},ANALYTICS_TEMPLATE_LOOSE_MATCHING={"/blog":"Blog","/tips":"Tips","/pricing":"Business","/team":"Business","/payment-methods":"Business","/open-an-account":"Business","/accounting":"Business","/multi-account":"Business","/connect":"Business","/capital-deposit":"Business","/company-creation":"Buisness","/small-business":"Business","/medium-business":"Business","/freelancers":"Business","/sme":"Business","/compare-pricing":"Business","/contact-form":"Business"};