import { DbRecord } from './DbRecord'

type ItemFields = {
    title: string
    description: string
    containerId?: string
    areaId?: string
    quantity?: number
    itemImg?: string
}

export type Item = ItemFields & DbRecord

export function defaultsItem(): Item {
    return {
        itemImg: '',
        title: '',
        description: '',
        containerId: '',
        areaId: '',
        quantity: undefined,
        id: '',
        createdByUserId: '',
        dateCreated: new Date(),
        dateUpdated: new Date(),
        updatedByUserId: undefined,
    }
}
