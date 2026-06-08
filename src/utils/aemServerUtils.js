/**
 * Server-safe pure utilities extracted from the aem-renderer library.
 * These have NO React dependency and can be used in Server Components.
 */

const DEFAULT_SPAN_MAP = {
  full: { mobile: 12, tablet: 12, desktop: 12, cssClass: "aem-span-full" },
  twoThird: { mobile: 12, tablet: 12, desktop: 8, cssClass: "aem-span-twoThird" },
  half: { mobile: 12, tablet: 12, desktop: 6, cssClass: "aem-span-half" },
  third: { mobile: 12, tablet: 12, desktop: 4, cssClass: "aem-span-third" },
  quarter: { mobile: 6, tablet: 6, desktop: 3, cssClass: "aem-span-quarter" },
  auto: { mobile: 12, tablet: 12, desktop: 12, cssClass: "aem-span-auto" },
};

export function buildContentMap(contentInput) {
  let contentArray = contentInput;
  if (contentInput && !Array.isArray(contentInput) && typeof contentInput === "object") {
    if (Array.isArray(contentInput.contentRef)) {
      contentArray = contentInput.contentRef;
    } else {
      return new Map();
    }
  }
  if (!Array.isArray(contentArray)) return new Map();
  return new Map(contentArray.map((c) => [c.id, c]));
}

export function resolveSectionComponents(section, contentMap, options = {}) {
  const { spanMap = DEFAULT_SPAN_MAP, spanClassResolver } = options;
  if (!section?.components || !Array.isArray(section.components)) return [];
  return [...section.components]
    .sort((a, b) => a.order - b.order)
    .map((cmp) => {
      const entry = spanMap[cmp.span] || spanMap.full || DEFAULT_SPAN_MAP.full;
      return {
        ...cmp,
        spanClass: spanClassResolver ? spanClassResolver(cmp.span) : entry.cssClass,
        data: contentMap.get(cmp.contentRef) || null,
      };
    });
}
