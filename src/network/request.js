import axios from "axios"
export function request(config) {
    const instance1 = axios.create({
            baseURL: "http://47.105.118.98/jdpt/",
            timeout: 5000
        })
        /* 请求拦截器 */
        // instance1.interceptors.request.use((config) => {
        //     if (config.method === "POST") {
        //         config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        //         config.transformRequest = [function(data, headers) {
        //             return qs.stringify(data);
        //         }];
        //     }
        //     return config;
        // }, (err) => {
        //     return Promise.reject(err);
        // })

    // 响应拦截
    instance1.interceptors.response.use((res) => {
        return res.data
    }, err => {
        return err
    })
    return instance1(config)
}
// 后台
export function request1(config) {
    const instance1 = axios.create({
            baseURL: "http://47.105.118.98/jdpth/",
            timeout: 5000
        })
        /* 请求拦截器 */
        // instance1.interceptors.request.use((config) => {
        //     if (config.method === "POST") {
        //         config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        //         config.transformRequest = [function(data, headers) {
        //             return qs.stringify(data);
        //         }];
        //     }
        //     return config;
        // }, (err) => {
        //     return Promise.reject(err);
        // })

    // 响应拦截
    instance1.interceptors.response.use((res) => {
        return res.data
    }, err => {
        return err
    })
    return instance1(config)
}

export function requestformdata(config) {
    const instance1 = axios.create({
            baseURL: "http://47.105.118.98/jdpt/",
            timeout: 5000,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        // 响应拦截
    instance1.interceptors.response.use((res) => {
        return res.data
    }, err => {
        return err
    })
    return instance1(config)
}

// 登录
export function post_login(str1, str2) {
    return request({
        url: "login/",
        method: "POST",
        dataType: "JSON",
        params: {
            username: str1,
            userpwd: str2,
        }
    })
}

// 获取村图片
export function get_vimgs(vid) {
    return request({
        url: `FindVimg/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 主页获取村公告
export function get_bulletins(vid) {
    return request({
        url: `Cungonggao/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 主页获取村简介
export function get_vintro(vid) {
    return request({
        url: `FindVillagesurveyByVid/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取村干部列表，根据村ID
export function get_vmanagers_list(vid) {
    return request({
        url: `PageFindVillagecadres/${vid}/1/1000`,
        dataType: "JSON",
        method: "GET"
    })
}

//获取村公告列表
export function get_vbulletins_list(vid) {
    return request({
        url: `PageFindVillagebulletinByCunId/${vid}/1/1000`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取补助项类别
export function get_subsidy_type(vid) {
    return request({
        url: `FindSubsidytypeByCunId/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取补助项具体信息通过补助类型id 默认不分页
export function get_subsidy_by_typeid(typeid) {
    return request({
        url: `PageFindSubsidynameByTypeId/${typeid}/1/100`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取补助户通过页码和村id，默认一页显示10条
export function get_subsidyFamily_by_vid(vid, page) {
    return request({
        url: `PageFindBuzhuhuById/${vid}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取补助对象通过页码和村id，默认一页显示10条
export function get_subsidyObj_by_vid(vid, page) {
    return request({
        url: `PageFindSubsidyobjectByCunId/${vid}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取补助对象通过页码和村id,姓名，默认一页显示10条
export function get_subsidyObj_by_vidAndName(vid, name, page) {
    return request({
        url: `SearchSubsidyobjectByName/${vid}/${name}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取补助户通过页码和村id，默认一页显示10条
export function get_buzhuhu_by_vid(vid, page) {
    return request({
        url: `PageFindBuzhuhuById/${vid}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取补助户通过页码和村id,姓名，默认一页显示10条
export function get_buzhuhu_by_vidAndName(vid, name, page) {
    return request({
        url: `SearchByNameId/${vid}/${name}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取村会议通过页码和村id，默认一页显示10条
export function get_huiyi_by_vid(vid, page) {
    return request({
        url: `FindHuiyiByCunId/${vid}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取村活动通过页码和村id，默认一页显示10条
export function get_activity_by_vid(vid, page) {
    return request({
        url: `ListHuoDong/${vid}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
//获取迁入迁出通过页码和村id，默认一页显示10条,type迁出为2，迁入为1
export function get_qianyi_by_vid(vid, type, page) {
    return request({
        url: `FindByCunIdLeixing/${vid}/${type}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}

// 通过会议id获取活动详情
export function get_meeting_details(id) {
    return request({
        url: `HuiYiXQ/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过活动id获取会议详情
export function get_activity_details(id) {
    return request({
        url: `Cunzuzhihuodongxq/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过迁入迁出id获取迁入详情
export function get_qianyi_details(id) {
    return request({
        url: `FindHKQYById/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取党组织活动类型列表，通过页码
export function get_dzuzhihd_by_vid(vid, page) {
    return request({
        url: `queryAllLeiXing/${page}/10/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过类型id查找活动列表queryAllHuoDong
export function get_dzuzhihd_list_by_vid(vid, page, zid) {
    return request({
        url: `queryAllHuoDong/${page}/10/${zid}/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过id获取组织活动详情
export function get_dzuzhihd_detail_by_id(id) {
    return request({
        url: `queryHuoDongById/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 得到党规党纪学习资料
/*
type:1党规党纪
2：法律法规
3：政策
4：其他
*/
export function get_Lawlist_bytype(page, type) {
    return request({
        url: `queryLawByType/${page}/10/${type}`,
        dataType: "JSON",
        method: "GET"
    })
}
/*
type:
1:积极分子
2：发展对象
3：预备党员
4：正式党员
*/
export function post_dylist_bytype(vid, page, type, year) {
    return request({
        url: `QSelect/`,
        dataType: "JSON",
        method: "POST",
        params: {
            villageId: vid,
            year: year,
            entity: type,
            startPage: page,
            pageSize: 10
        }
    })
}

//通过村id 获取项目建设信息
export function get_project_byid(vid, page) {
    return request({
        url: `queryOperationManagements/${page}/10/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
//通过村id,关键字模糊查询 获取项目建设信息
export function get_project_byid_andkey(keyword, vid, page) {
    return request({
        url: `queryOperationManagement/${keyword}/${page}/10/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过id获得项目详细信息
export function get_project_detail_byid(id) {
    return request({
        url: `queryOperationManagementFindById/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 资源首页列表默认显示第一页
export function get_ziyuan_byid(vid) {
    return request({
        url: `ziyuanQueryByCunId/${vid}/1/100`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过组id，村id，资源类型id得到资源列表
export function get_ziyuanlist_byid(vid, zid, rid, page) {
    return request({
        url: `ziyuanQueryFangChanName/${vid}/${zid}/${rid}/${page}/100`,
        dataType: "JSON",
        method: "GET"
    })
}
export function post_ziyuan_intro_byid(id) {
    return request1({
        url: `resources/quaryResourcesdetails/`,
        dataType: "JSON",
        method: "POST",
        params: {
            ResourcesDetails_Id: id
        }
    })
}


// 通过村ID查找组
export function get_zu_byid(vid) {
    return request({
        url: `findZuById/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过zuid和村id获取资产类型列表
export function get_zichanlist_byid(vid, zid) {
    return request({
        url: `pageFindAssetsByZuVillage/${vid}/${zid}/1/100`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过资产类型id获取资产列表和详情
export function get_zichanlist_intro_byid(rid, page) {
    return request({
        url: `findZichanmingziById/${rid}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}

// 通过资产id得到资产详情
export function post_zichanintro_byid(vid, zid, id) {
    return request1({
        url: `/assetsdetails/quaryZJTZAndZCJY/`,
        dataType: "JSON",
        method: "POST",
        params: {
            ZCMZ_Id: id,
            aVillagedid: vid,
            aZu: zid,
        }
    })
}

// 通过村id，组id，类型，年份，页码得到资金列表   url:uri+"findByYearStyle/"+vId+"/"+10+"/"+xjnoeyear+"/"+style+"/"+xjnowcount+"/12",
export function get_zijinlist_byid(vid, zid, type, year) {
    return request({
        url: `findByYearStyle/${vid}/${zid}/${year}/${type}/${1}/12`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过资金id获取资金详情 url:uri+"findByZijinId/"+zjid,
export function get_zijinintro_byid(id) {
    return request({
        url: `findByZijinId/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 通过组id得到理财列表
export function post_zijinlicai_list_byid(zid, year, mouth) {
    return request({
        // url: `findLicaiByYear/${zid}/${year}/${mouth}`,
        url: `findLicaiByYear/`,
        dataType: "JSON",
        method: "POST",
        params: {
            zuId: zid,
            year: year,
            month: mouth
        }
    })
}

// 反馈获取意见建议类型
export function get_feedback_type() {
    return request({
        url: `/AllBacktype/`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过userid获取镇id
export function get_zhenid_uid(id) {
    return request({
        url: `/FindByZid/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 提交反馈
export function post_tijiao_feedback(formdata) {
    return requestformdata({
        url: `/TijiaoFeedback/`,
        dataType: "JSON",
        method: "POST",
        data: formdata,
        // async: true,
        // cache: false,
        // contentType: false,
        // processData: false,
    })
}
// 得到已处理反馈列表
export function get_yclfd_list_byid(id, year, page) {
    return request({
        url: `/YichuliSearch/${id}/${year}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
// 得到已处理反馈列表
export function get_wclfd_list_byid(id, year, page) {
    return request({
        url: `/WeichuliSearch/${id}/${year}/${page}/10`,
        dataType: "JSON",
        method: "GET"
    })
}
// 得到反馈详情
export function get_fkdetail_byid(id) {
    return request({
        url: `/YichuliInfo/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 更改密码
export function post_updatapas(id, pas) {
    return request({
        url: `/Updatepwd/`,
        dataType: "JSON",
        method: "POST",
        params: {
            userId: id,
            userPassword: pas
        }
    })
}