interface IAppoinment {
    id: number;
    date: Date;
    time: string;
    status: "Active" | "Canceled";
    description: string;
    userId: number;

}

export default IAppoinment;
