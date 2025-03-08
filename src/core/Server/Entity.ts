export class PetitionEntity {
    FullPath: string;
    Type: string;

    constructor(FullPath: string, Type: string) {
        this.FullPath = FullPath;
        this.Type = Type;
    }
}
