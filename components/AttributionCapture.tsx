'use client';

import { useEffect } from 'react';

// First-touch attribution. Captures UTM params, gclid, fbclid (Meta),
// document.referrer, and the landing path into sessionStorage on the
// first page-load of a session. Lead forms read it back at submit so
// ad attribution survives intermediate page navigation.
//
// Session-scoped — a new tab/session captures fresh values. Matches
// how GA4 "session start" works and avoids stale attribution dragging
// across visits.

const STORAGE_KEY = 'att_v1';

export interface Attribution {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
  first_referrer: string;
  first_landing_page: string;
}

const EMPTY: Attribution = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  gclid: '',
  fbclid: '',
  first_referrer: '',
  first_landing_page: '',
};

export function AttributionCapture() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;

      const params = new URLSearchParams(window.location.search);
      const att: Attribution = {
        utm_source: params.get('utm_source') ?? '',
        utm_medium: params.get('utm_medium') ?? '',
        utm_campaign: params.get('utm_campaign') ?? '',
        utm_term: params.get('utm_term') ?? '',
        utm_content: params.get('utm_content') ?? '',
        gclid: params.get('gclid') ?? '',
        fbclid: params.get('fbclid') ?? '',
        first_referrer: document.referrer || '',
        first_landing_page: window.location.pathname + window.location.search,
      };
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(att));
    } catch {
      // sessionStorage disabled / private mode — ignore
    }
  }, []);

  return null;
}

export function readAttribution(): Attribution {
  if (typeof window === 'undefined') return EMPTY;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Attribution>;
    return { ...EMPTY, ...parsed };
  } catch {
    return EMPTY;
  }
}
