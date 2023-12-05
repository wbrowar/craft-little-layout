export function getTableValues(tableElement: HTMLTableElement) {
  const rowValues: Record<string, any>[] = []

  // Loop through each row in the table.
  tableElement.querySelectorAll('tr[data-id]')?.forEach((row) => {
    const rowData: Record<string, any> = {}

    // Loop through each column and get the value from each `select` and `textarea` field.
    const editableElements: NodeListOf<HTMLInputElement> = row.querySelectorAll('td:not(.action) :is(select, textarea)')

    editableElements.forEach((editableElement) => {
      const name = editableElement.name.match(/\[[^\][]*]$/)?.[0].replace(/[\[\]']+/g, '')
      if (name) {
        rowData[name] = editableElement.value
      }
    })

    // Add column values to the row data.
    rowValues.push(rowData)
  })

  return rowValues
}
