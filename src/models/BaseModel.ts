export abstract class BaseModel<T> {
    protected state: T
    private listeners: Set<() => void> = new Set()

    protected constructor(initialState: T) {
        this.state = initialState
    }

    public subscribe(listener: () => void): () => void {
        this.listeners.add(listener)
        return () => this.listeners.delete(listener)
    }

    public getState(): T {
        return this.state
    }

    protected notifyListeners(): void {
        this.listeners.forEach((listener) => listener())
    }
}