export const contentTableConfig = {
  title: '类别列表',
  showFooter: true,
  showIndexColumn: true,
  propList: [
    {
      label: '类别名称',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handle'
    }
  ]
}
