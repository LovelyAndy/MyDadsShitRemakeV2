export type DbRecord = {
    id: string
    createdByUserId: string // who created the item
    dateCreated: Date
    dateUpdated: Date
    updatedByUserId?: string // who last updated the item
}
