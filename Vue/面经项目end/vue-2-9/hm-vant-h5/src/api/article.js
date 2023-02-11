import request from '@/utils/request'

// 封装接口，获取文章列表
export const getArticles = (obj) => {
//   const token = getToken()

  return request.get('/interview/query', {
    params: {
      current: obj.current, // 当前页
      pageSize: 10, // 每页条数
      sorter: obj.sorter // 排序字段 =>  传"weight_desc" 获取 推荐， "不传" 获取 最新
    }
    // headers: {
    //   // 注意 Bearer 和 后面的空格不能删除，为后台的token辨识
    //   Authorization: `Bearer ${token}`
    // }
  })
}

// 获取我的收藏
export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 10, // 可选
      optType: 2 // 表示收藏
    }
  })
}

// 获取我的喜欢
export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 10, // 可选
      optType: 1 // 表示喜欢
    }
  })
}

export const getArticleDetail = (id) => {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}

export const updateLike = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 1 // 喜欢
  })
}

export const updateCollect = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 2 // 收藏
  })
}
