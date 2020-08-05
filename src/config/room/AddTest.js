import { TagStandard } from "@/config/tagStandard";

export default function (who) {
  const rank = who.rank

  for (const standard of TagStandard) {
    const list = rank.frontPercent(standard.standard.score)
    list.forEach(item => {
      if (standard.standard.canGua || !item.gua)
      item.tag.push(standard.key)
    })
  }
}
