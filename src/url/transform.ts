import { trimStart } from "lodash"
import { joinPaths, toUrl } from "."
import Cup from "./Cup"

export interface UrlParts {
  protocol?: string, username?: string, password?: string,
  host?: string, pathname?: string, search?: string, hash?: string // Should be "query" and "fragment", blame IE
}

export function partsOrFallback(parts: UrlParts, fallback: UrlParts) {
  const res: UrlParts = {}
  const keys = [
    'protocol', 'username', 'password', 'host', 'pathname', 'search', 'hash'
  ]
  for (const key of keys) {
    const partsVal = (parts as any)[key]
    const fallbackVal = (fallback as any)[key]
    let val;
    if (partsVal !== undefined && partsVal !== '') {
      val = partsVal
    } else if (fallbackVal !== undefined && fallbackVal !== '') {
      val = fallbackVal
    }
    (res as any)[key] = val
  }
  return res
}

export function urlToParts(url: URL): UrlParts {
  return {
    protocol: url.protocol,
    username: url.username,
    password: url.password,
    host: url.host,
    pathname: url.pathname,
    search: url.search,
    hash: url.hash
  }
}

// Origin = scheme + ':' + authority
export function originToParts(origin: string): UrlParts {
  const spl = origin.split(':')
  return {
    protocol: spl[0],
    host: spl.splice(1).join(':')
  }
}

export function urlFromParts(parts: UrlParts) {
  let url = ''
  const p = parts
  if (p.protocol) {
    url += parts.protocol
    if (!url.endsWith(':')) url += ':'
  }
  if (p.username || p.password || p.host) {
    url += "//"
    if (p.username || p.password) {
      if (p.username) url += p.username
      if (p.password) url += ':' + p.password
      url += '@'
    }
    url += p.host
  }
  if (p.pathname) url += p.pathname
  if (p.search) url += '?' + trimStart(p.search, '?')
  if (p.hash) url += '#' + p.hash
  return toUrl(url)
}

export function withOrigin(url: URL, origin: string) {
  return urlFromParts(partsOrFallback(
    originToParts(origin),
    urlToParts(url)
  ))
}

export function withProtocol(url: URL, cup: Cup) {
  const parts = urlToParts(url)
  parts.protocol = cup.toString()
  return urlFromParts(parts)
}

export function withBase(url: URL, base: URL, ignoreProtocol: Boolean = false) {
  const parts = urlToParts(url)
  const baseParts = urlToParts(base)
  if (ignoreProtocol) parts.protocol = undefined
  parts.pathname = joinPaths(baseParts.pathname ?? '', parts.pathname ?? '')
  return urlFromParts(partsOrFallback(
    parts,
    baseParts
  ))
}

export function withPathname(url: URL, pathname: string) {
  return urlFromParts(partsOrFallback(
    { pathname },
    urlToParts(url)
  ))
}

export function withHostname(url: URL, hostname: string) {
  const fallback = urlToParts(url)
  const hostSplit = fallback.host!!.split(':')
  const portPart = hostSplit.length > 1 ? `:${hostSplit[1]}` : ''
  const res = urlFromParts(partsOrFallback(
    { host: hostname + portPart },
    urlToParts(url)
  ))
  return res
}

export function withoutQueryOrFragment(url: URL) {
  const parts = urlToParts(url)
  parts.search = undefined
  parts.hash = undefined
  return urlFromParts(parts)
}

export function hrefWithoutProtocol(url: URL) {
  return url.href.split(':').slice(1).join(':')
}

export function withExtension(url: URL, extension: string) {
  const iExtensionDot = url.pathname.lastIndexOf('.')
  const pathname = url.pathname.slice(0, iExtensionDot) + '.' + extension
  return urlFromParts(partsOrFallback(
    { pathname },
    urlToParts(url)
  ))
}
