import { ChatType, Peer } from '@/core/types';
import { NodeIKernelRecentContactListener } from '@/core/listeners/NodeIKernelRecentContactListener';
import { GeneralCallResult } from '@/core/services/common';
import { FSABRecentContactParams } from '@/core/types/contact';

export interface NodeIKernelRecentContactService {
    setGuildDisplayStatus(...args: unknown[]): unknown; // 2 arguments

    setContactListTop(...args: unknown[]): unknown; // 2 arguments

    updateRecentContactExtBufForUI(...args: unknown[]): unknown; // 2 arguments

    upsertRecentContactManually(...args: unknown[]): unknown; // 1 arguments

    enterOrExitMsgList(...args: unknown[]): unknown; // 1 arguments

    getRecentContactListSnapShot(count: number): Promise<GeneralCallResult & {
        info: {
            errCode: number,
            errMsg: string,
            sortedContactList: Array<number>,
            changedList: Array<{
                remark: any;
                peerName: any;
                sendMemberName: any;
                sendNickName: any;
                peerUid: string; peerUin: string, msgTime: string, chatType: ChatType, msgId: string
                sendStatus: number; //1为正在发送 2为正常状态
                atType: number; //0：正常 1：@全体成员 6：有人@我 
                unreadCnt: string; //返回的是str，不过是确切的未读消息数，不会出现99+之类的东西
                topFlag: number //1为置顶, 0为默认
                shieldFlag: string //群组中 "1"允许消息提醒，"4"接收消息但不提醒 对于好友均为"0"（未测试）；有时会出现群聊为"0"的情况视作不提醒
            }>
        }
    }>; // 1 arguments

    clearMsgUnreadCount(...args: unknown[]): unknown; // 1 arguments

    getRecentContactListSyncLimit(count: number): unknown;

    jumpToSpecifyRecentContact(...args: unknown[]): unknown; // 1 arguments

    fetchAndSubscribeABatchOfRecentContact(params: FSABRecentContactParams): unknown; // 1 arguments

    addRecentContact(peer: Peer): unknown;

    deleteRecentContacts(peer: Peer): unknown; // 猜测

    getContacts(peers: Peer[]): Promise<unknown>;

    setThirdPartyBusinessInfos(...args: unknown[]): unknown; // 1 arguments

    updateGameMsgConfigs(...args: unknown[]): unknown; // 1 arguments

    removeKernelRecentContactListener(listenerid: number): unknown; // 1 arguments

    addKernelRecentContactListener(listener: NodeIKernelRecentContactListener): void;

    clearRecentContactsByChatType(...args: unknown[]): unknown; // 1 arguments

    upInsertModule(...args: unknown[]): unknown; // 1 arguments

    jumpToSpecifyRecentContactVer2(...args: unknown[]): unknown; // 1 arguments

    deleteRecentContactsVer2(...args: unknown[]): unknown; // 1 arguments

    getRecentContactList(): Promise<any>;

    getMsgUnreadCount(): unknown;

    clearRecentContacts(): unknown;

    getServiceAssistantRecentContactInfos(): unknown;

    getRecentContactInfos(): unknown;

    getUnreadDetailsInfos(): unknown;

    cleanAllModule(): unknown;

    setAllGameMsgRead(): unknown;

    getRecentContactListSync(): unknown;
}
