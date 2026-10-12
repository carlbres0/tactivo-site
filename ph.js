// Visit counting for tactivo.co.uk: PostHog EU, the same cookieless setup as
// /founding/ (memory persistence, nothing stored on the device), plus one
// event when a store button is tapped. If PostHog never loads, the stub just
// queues calls and the page is unaffected.
// ponytail: memory persistence counts each page load as a new visitor; switch
// to PostHog's cookieless_mode if unique-visitor accuracy starts to matter.
try {
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('phc_vJjjP6uyNrrexTBsLD5cJYmF53vtSP2LY5S42T75ouZj', {
    api_host: 'https://eu.i.posthog.com', persistence: 'memory', person_profiles: 'identified_only',
    autocapture: false, capture_pageview: true, capture_pageleave: false,
    disable_session_recording: true, disable_surveys: true, advanced_disable_feature_flags: true,
    disable_external_dependency_loading: true,
    capture_exceptions: false, capture_heatmaps: false, capture_dead_clicks: false, capture_performance: false,
  });
} catch (e) {}
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[data-store]');
  if (a) try { posthog.capture('store_click', { store: a.dataset.store, placement: a.dataset.place || null }); } catch (err) {}
});
