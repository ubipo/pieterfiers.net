import { toUrl, isRelative, withOrigin } from '@/util/url'
import { originName, version, name } from '.'
import { strictMode } from './runtime'
import { OriginDefinition } from './util'
import { TaggedUrl, tagUrl } from '@/store/site-data/types'

const contentOrigins: OriginDefinition = {
  dev: document.location.origin,
  localProd: 'http://content.local:8000',
  prod: 'https://pfiers.net',
  prerender: 'http://content.local:8000', // To be replaced with prod origin in postprocess
}

export const contentOrigin = new URL(contentOrigins[originName])

export function toContentUrl(url: URL | string) {
  if (typeof url === 'string') url = toUrl(url)
  if (!isRelative(url)) return tagUrl(url)
  url = withOrigin(url, contentOrigin)
  // Check for @ path indicating an asset (instead of relative link)
  if (url.pathname.startsWith('@', 1))
    // pathname starts with '/'
    url.pathname = `/content${url.pathname.slice(2)}`
  return tagUrl(url, false, true)
}

export function infoString() {
  let info = `${name}@${version}`
  info += ` ${originName}`
  if (strictMode) info += ' strict'
  return info
}