import { TagStandard } from "@/config/tagStandard";

export function AddTest(who) {
  who.rank.build()
  const rank = who.rank

  for (const standard of TagStandard) {
    const list = rank.frontPercent(standard.standard.score)
    list.forEach(item => {
      if (!item.gua || (item.gua && standard.standard.canGua))
      item.tag.push(standard.key)
    })
  }
}
