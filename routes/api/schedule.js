exports.route = {

  /**
   * GET /api/schedule
   * 获取校历（图片地址）
   */
  async get() {
    /*
      let link = 'http://jwc.seu.edu.cn/_t155/10006/list.htm'

      let res = await this.get(link)
      let $ = cheerio.load(res.data)
      link = url.resolve(link, $('#wp_news_w3 a').eq(0).attr('href'))
      
  

      res = await this.get(link)
      $ = cheerio.load(res.data)
      let el = $('[portletmode="simpleArticleContent"] img')
      let path = el.attr('original-src') || el.attr('src')
      link = url.resolve(link, path)

      // 对于前后端分离的严格 RESTful 系统，后端不允许重定向到文件、图片、网页，必须把链接直接返回
      // 需要重定向的情况，在 adapter 中实现
      */
    // 将校历图片上传到七牛云，直接返回七牛云中图片连接
    return 'https://static.myseu.cn/schedule_2019.jpg'
  }
}