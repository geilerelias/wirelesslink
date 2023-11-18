import{_ as p}from"./AppLayout-0ddb4929.js";import c from"./DeleteUserForm-552c04e6.js";import l from"./LogoutOtherBrowserSessionsForm-9b4ad80e.js";import{S as s}from"./SectionBorder-08bad394.js";import f from"./TwoFactorAuthenticationForm-0fcc6787.js";import u from"./UpdatePasswordForm-7680aa45.js";import d from"./UpdateProfileInformationForm-5eb44445.js";import{o as e,c as _,w as n,a as i,f as r,b as t,g as a,F as h}from"./app-96be83f2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-f95db603.js";import"./SectionTitle-b268c80c.js";import"./DangerButton-c396416e.js";import"./DialogModal-8ab25ed9.js";import"./InputError-ea8da6d2.js";import"./SecondaryButton-ff6f82d9.js";import"./TextInput-049fdd31.js";import"./ActionMessage-5feb2cfa.js";import"./PrimaryButton-aed35a15.js";import"./InputLabel-d4ec9933.js";import"./FormSection-10b52de6.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",k,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};
