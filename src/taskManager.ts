class Task {
    public id: string
    public title: string
    public description: string
    public stages: ((executeNextStage: () => void) => void)[]

    constructor(
        id: string,
        title: string,
        description: string,
        ...stages: ((executeNextStage: () => void) => void)[]
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.stages = stages
    }

    public start() {
        if (this.stages.length === 0) return

        let currentStageIndex = 0
        const executeNextStage = () => {
            currentStageIndex++
            if (currentStageIndex < this.stages.length) {
                this.stages[currentStageIndex](executeNextStage)
            }
        }

        // Start the first stage
        this.stages[0](executeNextStage)
    }
}

export {Task}
