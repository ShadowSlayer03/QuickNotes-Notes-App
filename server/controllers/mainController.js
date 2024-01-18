exports.homepage = async(req,res)=>{
    const locals = {
        title: 'QuickNotes | Easy, Secure and Efficient Note Management App',
        description: 'Notes App made with NodeJS, MongoDB, PassportJS',
    }
    res.render('index',{locals,layout: '../views/layouts/front-page'});
}

exports.about = async(req,res)=>{
    const locals = {
        title: 'QuickNotes | Easy, Secure and Efficient Note Management App',
        description: 'Notes App made with NodeJS, MongoDB, PassportJS',
    }
    res.render('about',locals);
}

exports.features = async(req,res)=>{
    const locals = {
        title: 'QuickNotes | Easy, Secure and Efficient Note Management App',
        description: 'Notes App made with NodeJS, MongoDB, PassportJS',
    }
    res.render('features',locals);
}