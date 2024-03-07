// 主分类数据的接口
export interface Section {
  section_id: number
  name: string
}

// 子分类数据的接口
export interface SubSection {
  subSection_id: number
  name: string
  links?: SubSectionLink[]
  description: string
  section_id: number // 引用主分类的ID
}

// 子分类链接数据的接口
export interface SubSectionLink {
  subSectionLinks_id: number
  name: string
  description: string
  link: string
  subSection_id: number // 引用子分类的ID
}

// 组合后的子分类数据，包括链接
export interface CombinedSubSection extends SubSection {
  links: SubSectionLink[] // 子分类下的链接数组
}

// 组合后的主分类数据，包括子分类
export interface CombinedSection extends Section {
  subSections: CombinedSubSection[] // 主分类下的子分类数组
}
