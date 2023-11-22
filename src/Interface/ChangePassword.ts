export interface IChangePasswordBody {
    UserId: string;
    NewPassword: string;
    OldPassword: string;
};

export interface IChangePasswordResult {
    ChangePasswordResult:string
}