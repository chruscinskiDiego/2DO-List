export interface ITaskProps {
    id: number
    title: String
    isCompleted: boolean
}

export interface IComponentTaskProps {
    task: ITaskProps
    handleToggleTask: (clickedTask: ITaskProps) => void
    handleRemoveTask: (taskId: number) =>void
}