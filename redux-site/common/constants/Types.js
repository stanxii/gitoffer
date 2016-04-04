
import Immutable from 'immutable';

// define JobState shap inside redux state
export const JobState = Immutable.Record({
        jobsById: Immutable.Map(),
        total: 0,
        filter: ''
})

// define Product record shape
export const JobRecord = Immutable.Record({
        id: null,
        mongoid: "",
        jobtitle: "",
        company: "",
        company_agg: "",
        company_agg: "",
        jobtype: "", // transaction id for optimistic update
})


// define ProductState shape inside redux state
export const ProductState = Immutable.Record({
	productsById: Immutable.Map(),
	total: '0',
})

// define Product record shape
export const ProductRecord = Immutable.Record({
	id: null,
	image: "",
	inventory: 0,
	quantity: 0,
	price: 0,
	title: "",
	tid: null, // transaction id for optimistic update
})

// define CartState shape inside redux state
export const CartState = Immutable.Record({
	cartsById: Immutable.List()
})


export function convertToRecordMap( arr, Def ){
	return arr.reduce( (acc, item) => {
		//console.log('fuck arr'+ acc);
	//console.log('fuck item.id' + item.id);
	
			return acc.set( item.mongoid, new Def(item)); 
	}, Immutable.Map() );
}

export function convertMapToImmutable( map, Def ){
	return Object.keys(map)
				 .reduce( (acc, key) => {
				 	let item = map[key];
				 	return acc.set( item.mongoid, new Def(item) );
				 }, Immutable.Map() );
}
