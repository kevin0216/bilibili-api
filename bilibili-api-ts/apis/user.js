"use strict";
exports.__esModule = true;
exports.UserAPIData = void 0;
exports.UserAPIData = {
    "info": {
        "my_info": {
            "url": "https://api.bilibili.com/x/space/myinfo",
            "method": "GET",
            "verify": true,
            "comment": "获取自己的信息"
        },
        "info": {
            "url": "https://api.bilibili.com/x/space/acc/info",
            "method": "GET",
            "verify": false,
            "params": {
                "mid": "int: uid"
            },
            "comment": "用户基本信息"
        },
        "relation": {
            "url": "https://api.bilibili.com/x/relation/stat",
            "method": "GET",
            "verify": false,
            "params": {
                "vmid": "int: uid"
            },
            "comment": "关注数，粉丝数"
        },
        "upstat": {
            "url": "https://api.bilibili.com/x/space/upstat",
            "method": "GET",
            "verify": false,
            "params": {
                "mid": "int: uid"
            },
            "comment": "视频播放量，文章阅读量，总点赞数"
        },
        "live": {
            "url": "https://api.bilibili.com/x/space/acc/info",
            "method": "GET",
            "verify": false,
            "params": {
                "mid": "int: uid"
            },
            "comment": "直播间基本信息"
        },
        "video": {
            "url": "https://api.bilibili.com/x/space/arc/search",
            "method": "GET",
            "verify": false,
            "params": {
                "mid": "int: uid",
                "ps": "const int: 30",
                "tid": "int: 分区 ID，0 表示全部",
                "pn": "int: 页码",
                "keyword": "str: 关键词，可为空",
                "order": "str: pubdate 上传日期，pubdate 播放量，pubdate 收藏量"
            },
            "comment": "搜索用户视频"
        },
        "audio": {
            "url": "https://api.bilibili.com/audio/music-service/web/song/upper",
            "method": "GET",
            "verify": false,
            "params": {
                "uid": "int: uid",
                "ps": "const int: 30",
                "pn": "int: 页码",
                "order": "int: 1 最新发布，2 最多播放，3 最多收藏"
            },
            "comment": "音频"
        },
        "article": {
            "url": "https://api.bilibili.com/x/space/article",
            "method": "GET",
            "verify": false,
            "params": {
                "mid": "int: uid",
                "ps": "const int: 30",
                "pn": "int: 页码",
                "sort": "str: publish_time 最新发布，publish_time 最多阅读，publish_time 最多收藏"
            },
            "comment": "专栏"
        },
        "article_lists": {
            "url": "https://api.bilibili.com/x/article/up/lists",
            "method": "GET",
            "verify": false,
            "params": {
                "mid": "int: uid",
                "sort": "int: 0 最近更新，1 最多阅读"
            },
            "comment": "专栏文集"
        },
        "dynamic": {
            "url": "https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history",
            "method": "GET",
            "verify": false,
            "params": {
                "host_uid": "int: uid",
                "offset_dynamic_id": "int: 动态偏移用，第一页为 0",
                "need_top": "int bool: 是否显示置顶动态"
            },
            "comment": "用户动态信息"
        },
        "bangumi": {
            "url": "https://api.bilibili.com/x/space/bangumi/follow/list",
            "method": "GET",
            "verify": false,
            "params": {
                "vmid": "int: uid",
                "pn": "int: 页码",
                "ps": "const int: 15",
                "type": "int: 1 追番，2 追剧"
            },
            "comment": "用户追番列表"
        },
        "followings": {
            "url": "https://api.bilibili.com/x/relation/followings",
            "method": "GET",
            "verify": true,
            "params": {
                "vmid": "int: uid",
                "ps": "const int: 20",
                "pn": "int: 页码",
                "order": "str: desc 倒序, asc 正序"
            },
            "comment": "获取用户关注列表（不是自己只能访问前 5 页）"
        },
        "followers": {
            "url": "https://api.bilibili.com/x/relation/followers",
            "method": "GET",
            "verify": true,
            "params": {
                "vmid": "int: uid",
                "ps": "const int: 20",
                "pn": "int: 页码",
                "order": "str: desc 倒序, asc 正序"
            },
            "comment": "获取用户粉丝列表（不是自己只能访问前 5 页，是自己也不能获取全部的样子）"
        },
        "overview": {
            "url": "https://api.bilibili.com/x/space/navnum",
            "method": "GET",
            "verify": false,
            "params": {
                "mid": "int: uid",
                "jsonp": "const str: jsonp"
            },
            "comment": "获取用户的简易订阅和投稿信息(主要是这些的数量统计)"
        },
        "self_subscribe_group": {
            "url": "https://api.bilibili.com/x/relation/tags",
            "method": "GET",
            "verify": true,
            "params": {},
            "comment": "获取自己的关注分组列表，用于操作关注"
        },
        "get_user_in_which_subscribe_groups": {
            "url": "https://api.bilibili.com/x/relation/tag/user",
            "method": "GET",
            "verify": true,
            "params": {
                "fid": "int: uid"
            },
            "comment": "获取用户在哪一个分组"
        },
        "history": {
            "url": "https://api.bilibili.com/x/v2/history",
            "method": "GET",
            "verify": true,
            "params": {
                "pn": "int: 页码",
                "ps": "const int: 100"
            },
            "comment": "用户浏览历史记录"
        },
        "channel_list": {
            "url": "https://api.bilibili.com/x/polymer/space/seasons_series_list",
            "method": "GET",
            "verity": false,
            "params": {
                "mid": "int: uid",
                "page_num": "int: 开始项",
                "page_size": "int: 开始项后面的项数"
            },
            "comment": "查看用户合集的列表（新版）"
        },
        "channel_video_series": {
            "url": "https://api.bilibili.com/x/series/archives",
            "method": "GET",
            "verity": false,
            "params": {
                "mid": "int: uid",
                "series_id": "int: series_id",
                "pn": "int: 页码",
                "ps": "const int: 100"
            },
            "comment": "查看列表内视频（旧版）"
        },
        "channel_video_season": {
            "url": "https://api.bilibili.com/x/polymer/space/seasons_archives_list",
            "method": "GET",
            "verity": false,
            "params": {
                "mid": "int: uid",
                "season_id": "int: season_id",
                "sort_reverse": "bool: 是否升序排序，否则默认排序",
                "page_num": "int: 页码",
                "page_size": "int: 每一页的项数"
            },
            "comment": "查看用户合集中的视频（新版）"
        },
        "pugv": {
            "url": "https://api.bilibili.com/pugv/app/web/season/page",
            "method": "GET",
            "verity": false,
            "params": {
                "mid": "int: uid"
            },
            "comment": "查看用户的课程"
        },
        "get_coins": {
            "url": "https://account.bilibili.com/site/getCoin",
            "method": "GET",
            "verify": true,
            "comment": "获取硬币数量"
        }
    },
    "operate": {
        "modify": {
            "url": "https://api.bilibili.com/x/relation/modify",
            "method": "POST",
            "verify": true,
            "data": {
                "fid": "int: UID",
                "act": "int: 1 关注 2 取关 3 悄悄关注 5 拉黑 6 取消拉黑 7 移除粉丝",
                "re_src": "const int: 11"
            },
            "comment": "用户关系操作"
        },
        "send_msg": {
            "url": "https://api.vc.bilibili.com/web_im/v1/web_im/send_msg",
            "method": "POST",
            "verify": true,
            "data": {
                "msg[sender_uid]": "int: 自己的 UID",
                "msg[receiver_id]": "int: 对方 UID",
                "msg[receiver_type]": "const int: 1",
                "msg[msg_type]": "const int: 1",
                "msg[msg_status]": "const int: 0",
                "msg[content]": {
                    "content": "str: 文本内容"
                }
            },
            "comment": "给用户发信息"
        },
        "del_channel_aids_series": {
            "url": "https://api.bilibili.com/x/series/series/delArchives",
            "method": "POST",
            "verity": true,
            "params": {
                "mid": "int: uid",
                "series_id": "int: series_id",
                "aids": "int: aid 列表"
            }
        },
        "del_channel_series": {
            "url": "https://api.bilibili.com/x/series/series/delete",
            "method": "POST",
            "verity": true,
            "query": {
                "mid": "int: uid",
                "series_id": "int: series_id",
                "aids": "list: 所有 aid 列表",
                "csrf": "string: bili_jct 的值"
            }
        },
        "create_subscribe_group": {
            "url": "https://api.bilibili.com/x/relation/tag/create",
            "method": "POST",
            "verify": true,
            "data": {
                "tag": "str: 分组名"
            },
            "comment": "添加关注分组"
        },
        "del_subscribe_group": {
            "url": "https://api.bilibili.com/x/relation/tag/del",
            "method": "POST",
            "verify": true,
            "data": {
                "tagid": "int: 分组 id"
            },
            "comment": "删除关注分组"
        },
        "rename_subscribe_group": {
            "url": "https://api.bilibili.com/x/relation/tag/update",
            "method": "POST",
            "verify": true,
            "data": {
                "tagid": "int: 分组 id",
                "name": "str: 新的分组名"
            },
            "comment": "重命名分组"
        },
        "set_user_subscribe_group": {
            "url": "https://api.bilibili.com/x/relation/tags/addUsers",
            "method": "POST",
            "verify": true,
            "data": {
                "fids": "int: UID",
                "tagids": "commaSeparatedList[int]: 分组的 tagids，逗号分隔"
            },
            "comment": "移动用户到关注分组"
        }
    }
};
