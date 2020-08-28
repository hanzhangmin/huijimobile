import axios from "axios"
import store from "../store"
// 添加请求拦截器

export function newrequest(config) {
    const instance1 = axios.create({
        // http://huitengit.com/web-api/
        // baseURL: "https://hj-webapi.shubuzuo.top/",
        baseURL: "http://huitengit.com/web-api/",
        timeout: 5000
    })
    instance1.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        //判断是否存在token，如果存在将每个页面header都添加token
        if (store.state.token) {
            config.headers.Authorization = 'Bearer  ' + store.state.token
        }
        return config;
    }, error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // http response 拦截器
    instance1.interceptors.response.use(
        response => {
            return response.data;
        },
        error => {
            console.log(error);
            if (error.response) {
                console.log(error.response);
                switch (error.response.status) {
                    case 401:
                        store.commit('del_token');
                }
            }
            return Promise.reject(error.response.data)
        });

    return instance1(config)
}


// 新连接

// 村民登录
export function post_villager_login(username, password) {
    return newrequest({
        url: `villager/login`,
        method: "POST",
        dataType: "JSON",
        params: {
            username: username,
            password: password
        }
    })
}
// 获取村民信息
export function get_villager_info() {
    return newrequest({
        url: `villager/info`,
        method: "GET",
        dataType: "JSON",
    })
}


export function get_village_intro(vid) {
    return newrequest({
        url: `village/${vid}`,
        method: "GET",
        dataType: "JSON",
    })
}



// 获取村公告
export function get_village_bulletins(vid, pageSize, page, fields) {
    return newrequest({
        url: `village-bulletin-board`,
        method: "GET",
        dataType: "JSON",
        // sort: "createdAt,DE",
        params: {
            fields: fields,
            limit: pageSize,
            page: page,
            join: "village",
            s: {
                "village.id": {
                    "$eq": vid
                }
            },
            sort: "createdAt,DESC"
        }
    })
}

export function get_village_bulletin(bid, fields) {
    return newrequest({
        url: `village-bulletin-board/${bid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取村干部信息
export function get_village_cadres(vid, fields) {
    return newrequest({
        url: `village-cadre`,
        method: "GET",
        dataType: "JSON",
        params: {
            // fields: fields,
            // limit: pageSize,
            // page: page,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
            // sort: "createdAt,ASC"
        }
    })
}

export function get_village_cadre(cid, fields) {
    return newrequest({
        url: `village-cadre/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取村会议信息
export function get_village_meetings(vid, pageSize, page, fields) {
    return newrequest({
        url: `village-meeting`,
        method: "GET",
        dataType: "JSON",

        params: {
            // fields: fields,
            limit: pageSize,
            sort: "time,DESC",
            page: page,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
            // sort: "createdAt,ASC"
        }
    })
}

export function get_village_meeting(cid, fields) {
    return newrequest({
        url: `village-meeting/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取村活动信息
export function get_village_actions(vid, pageSize, page, fields) {
    return newrequest({
        url: `village-action`,
        method: "GET",
        dataType: "JSON",
        params: {
            // fields: fields,
            limit: pageSize,
            page: page,
            join: "village",
            sort: "time,DESC",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                },

            },
            // sort: "createdAt,ASC"
        }
    })
}

export function get_village_action(cid, fields) {
    return newrequest({
        url: `village-action/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取项目建设信息
export function get_project_constractions(vid, pageSize, page, fields) {
    return newrequest({
        url: `project-construction`,
        method: "GET",
        dataType: "JSON",
        sort: "time,DESC",
        params: {
            // fields: fields,
            limit: pageSize,
            page: page,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
            // sort: "createdAt,ASC"
        }
    })
}

export function get_project_construction(cid, fields) {
    return newrequest({
        url: `project-construction/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取党组织活动类型信息
export function get_action_types(vid, fields) {
    return newrequest({
        url: `org-action-type`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
            // sort: "createdAt,ASC"
        }
    })
}

export function get_action_type(cid, fields) {
    return newrequest({
        url: `org-action-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取党组织活动
export function get_org_actions(vid, type, pageSize, page, fields) {
    return newrequest({
        // sort: "time,DESC",
        url: `org-action?limit=${pageSize}&page=${page}&sort=${"time,DESC"}&s={"village.id":{"$eq":${vid}},"type.id":{"$eq":${type}}}&join=village&join=type`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village&join=type",
        //     join: {
        //         "village",
        //         type
        //     },
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         },
        //         "type.id": {
        //             "$eq": Number(type)
        //         }
        //     },
        //     sort: "createdAt,ASC"
        // }
    })
}

export function get_org_action(cid, fields) {
    return newrequest({
        url: `org-action/${cid}`,
        method: "GET",
        dataType: "JSON",

        params: {
            fields: fields
        }
    })
}
// 获取党员信息
export function get_party_members(vid, type, pageSize, page, fields) {
    return newrequest({
        url: `party-member`,
        method: "GET",
        dataType: "JSON",
        params: {
            // fields: fields,
            limit: pageSize,
            page: page,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                },
                "status": {
                    "$eq": type.toString()
                },
            },
            // sort: "createdAt,ASC"
        }
    })
}

export function get_party_member(cid, fields) {
    return newrequest({
        url: `party-member/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取补助类型信息
export function get_subsidy_types(vid) {
    return newrequest({
        url: `subsidy-type`,
        method: "GET",
        dataType: "JSON",
        params: {
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                },

            },
        }
    })
}

export function get_subsidy_type(cid, fields) {
    return newrequest({
        url: `subsidy-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取补助类型信息
export function get_subsidys(vid, type, pageSize, page, fields) {
    return newrequest({
        url: `subsidy?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}},"type.id":{"$eq":${type}}}&join=village&join=type`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     // fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         },
        //         "status": {
        //             "$eq": type.toString()
        //         }
        //     },
        // }
    })
}

export function get_subsidy(cid, fields) {
    return newrequest({
        url: `subsidy/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

export function get_subsidy_infos(vid, personal, pageSize, page, keyword1, fields) {
    let keyword = `"${keyword1}"`
    return newrequest({
        url: `subsidy-info?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}},"name":{"$cont":${keyword}},"personal":${personal}}&join=village&join=subsidy`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     // join: "subsidy",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         },
        //         "name": {
        //             "$cont": keyword.toString()
        //         },
        //         "personal": personal
        //     },
        // }
    })
}

export function get_subsidy_info(cid, fields) {
    return newrequest({
        url: `subsidy-info/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取户口迁移信息
export function get_migraters(vid, type, pageSize, page, fields) {
    return newrequest({
        url: `migrate`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            limit: pageSize,
            page: page,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                },
                "type": type.toString()
            },
        }
    })
}

export function get_migrater(cid, fields) {
    return newrequest({
        url: `migrate/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取组信息
export function get_groups(vid, fields) {
    return newrequest({
        url: `group`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
        }
    })
}

export function get_group(cid, fields) {
    return newrequest({
        url: `group/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取资源类别信息
export function get_resource_types(vid, fields) {
    return newrequest({
        url: `resources-type`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
        }
    })
}

export function get_resource_type(cid, fields) {
    return newrequest({
        url: `resources-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 查询资源
export function get_resources(zid, type, pageSize, page, fields) {
    let vid = 9
    return newrequest({
        url: `resources?limit=${pageSize}&page=${page}&s={"group.id":{"$eq":${zid}},"type.id":{"$eq":${type}}}&join=group&join=type`,
        // url: `resources?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}}}&join=village`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         }
        //     },
        // }
    })
}

export function get_resource(cid, fields) {
    return newrequest({
        url: `resources/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取资产类型
export function get_assets_types(vid, fields) {
    return newrequest({
        url: `assets-type`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
        }
    })
}

export function get_assets_type(cid, fields) {
    return newrequest({
        url: `assets-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 查询经营性资产
export function get_assetss(vid, type, pageSize, page, fields) {
    return newrequest({
        url: `assets?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}},"type.id":${type}}&join=village&join=type`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         },
        //         "type": type
        //     },
        // }
    })
}

export function get_assets(cid, fields) {
    return newrequest({
        url: `assets/${cid}?join=operatingAssets&join=nonOperatingAssets`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields
        // }
    })
}
// 查询资金zid
export function get_funds(zid, type, time) {
    return newrequest({
        url: `funds`,
        method: "GET",
        dataType: "JSON",
        params: {
            join: "group",
            sort: "time,DESC",
            s: {
                "group.id": {
                    "$eq": Number(zid)
                },
                "type": type.toString(),
                "time": {
                    "$cont": time.toString()
                },
            },
        }
    })
}

export function get_fund(cid, fields) {
    return newrequest({
        url: `funds/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 查询学习园地
export function get_learning_resources(type, pageSize, page) {
    return newrequest({
        url: `learning-resources`,
        method: "GET",
        dataType: "JSON",
        params: {
            limit: pageSize,
            page: page,
            s: {
                "type": type.toString()
            },
        }
    })
}

export function get_learning_resource(cid, fields) {
    return newrequest({
        url: `learning-resources/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 意见建议处理

export function get_feedback(cid, fields) {
    return newrequest({
        url: `feedback/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
export function get_feedbacks(uid, processed, time, pageSize, page, fields) {
    return newrequest({
        url: `feedback`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            limit: pageSize,
            page: page,
            join: "villager",
            s: {
                "villager.id": {
                    "$eq": Number(uid)
                },
                "processed": {
                    "$eq": Boolean(processed)
                },
                "createdAt": {
                    "$starts": time.toString()
                }
            },

        }
    })
}
export function post_feedback(values) {
    return newrequest({
        url: `feedback`,
        method: "POST",
        dataType: "JSON",
        data: {
            ...values
        }
    })
}

export function patch_feedback(id, values) {
    return newrequest({
        url: `feedback/${id}`,
        method: "PATCH",
        dataType: "JSON",
        data: {
            ...values
        }
    })
}

export function delete_feedback(id) {
    return newrequest({
        url: `feedback/${id}`,
        method: "DELETE",
        dataType: "JSON",

    })
}


// 通过村民id获取村民信息

export function get_villager(cid) {
    return newrequest({
        url: `villager/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            join: "group"
        }
    })
}

// 村民修改密码
// export function patch_villager(cid, password, phone, address, sex) {

export function patch_villager(cid, formdata) {
    console.log(formdata);
    return newrequest({
        url: `villager/${cid}`,
        method: "PATCH",
        dataType: "JSON",
        data: {
            ...formdata
        }
    })
}


// 上传图片
export function post_file(file) {
    return newrequest({
        url: `app/upload`,
        method: "POST",
        dataType: "JSON",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: file
    })
}