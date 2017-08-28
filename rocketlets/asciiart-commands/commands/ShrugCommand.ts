import { IHttp, IModify, IRead, ISettingRead } from 'temporary-rocketlets-ts-definition/accessors';
import { ISlashCommand, SlashCommandContext } from 'temporary-rocketlets-ts-definition/slashcommands';

export class ShrugCommand implements ISlashCommand {
    public command: string = 'shrug';
    public paramsExample: string = 'your_message_optional';
    public i18nDescription: string = 'Slash_Shrug_Description';

    public executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp): void {
        const msgBuilder = modify.getCreator().startMessage()
            .setSender(context.getSender()).setRoom(context.getRoom())
            .setText(context.getArguments().join(' ') +
                (context.getArguments().length === 0 ? '' : ' ') +
                '¯\\_(ツ)_/¯');

        modify.getCreator().finish(msgBuilder);
    }
}
