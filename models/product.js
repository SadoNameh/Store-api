const {Schema, model} = require(`mongoose`)

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide name']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    }, 
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum:{
            values: ['ikea','liddy','caressa','marcos'],
            message: '{VALUE} IS NOT SUPPORTED'
        }
        //enum: ['ikea','liddy','caressa','marcos']
    }
})

module.exports = model('Product', productSchema)