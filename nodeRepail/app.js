const Koa = require('koa');
const Router = require('koa-router');
const Express = require('express');
const cheerio = require('cheerio');
const request = require('superagent');
const app = new Koa;
const router = new Router;
const express = new Express;
express.get('/' , function (req , res) {
    console.log(req);
    res.send('this is a method');
});
app.use(router.routes())
    .use(router.allowedMethods());

app.use(async ctx => {
    let content = {};
    await new Promise(resolve => {
        request
            .get('https://isbn.market.alicloudapi.com/ISBN?is_info=0&isbn=0787121177408')
            .end((err, res) => {
                console.log(res);
                content= {
                    name : res
                };
                // const data = res.text;
                // const $ = cheerio.load(data);
                // $('#J_goodsList > ul > li > div >.p-name').each((i , v)=>{
                //     let $v = $(v);
                //     console.log($v.find('em').text());

                // })
                // console.log($($('#J_goodsList > ul > li > div >.p-name')[0]).find('em').text())
                // content = {
                //     src: $($('#J_goodsList >ul  > li > div > div')[0]).find('a').attr('href')
                //     // img: $('#J_goodsList > ul > li').text()
                // };
                resolve(content);
            })
    }).catch(err => {
        console.log(err);
    });
    console.log(content);
    // let url = 'https:' + content.src;
    // console.log(url);
    // await new Promise(resolve => {
    //     request.get(url)
    //         .end((err, res) => {
    //             const data = res.text;
    //             const $ = cheerio.load(data);
    //             // console.log($($('#itemInfo > #name')).find('.sku-name').text().trim());
    //             // console.log($('#name > #p-author > a').text());
    //
    //             content = {
    //                 bookName: $($('#itemInfo > #name')).find('.sku-name').text().trim(),
    //                 bookAuthor: $('#name > #p-author > a').text()
    //             };
    //             resolve(ctx.body = content);
    //         });
    //
    //
    // }).catch(err => {
    //     console.log(err);
    // });
    // console.log(ctx.body);
});

app.listen(3000, () => {
    console.log('成功');
});
