
//アクションメソッド
exports.index = (req, res) => {
    //res.send('HomeController index')
    //処理
    let data = { 
        title: 'Index Page',
        message: 'Welcome to Homepage',
    }
    // HTML の表示 & data を受け渡す
    //views/home/index.ejs
    res.render('home/index.ejs', data)
}

exports.about = (req, res) => {
    //処理
    let data = { 
        title: 'About Page',
        message: 'This is about page',
        name: 'Tokyo Taro',
    }
    // HTML の表示 & data を受け渡す
    //views/home/about.ejs
    res.render('home/about.ejs', data)
}

exports.items = (req, res) => {
    let items = [
        { name: 'Apple', price: 150 },
        { name: 'Orange', price: 200 },
        { name: 'Peach', price: 350 },
    ]
    //処理
    let data = { 
        items: items,
    }
    // HTML の表示 & data を受け渡す
    //views/home/about.ejs
    res.render('home/items.ejs', data)
}