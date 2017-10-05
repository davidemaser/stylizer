/**
 * Created by David Maser on 05/10/2017.
 */
export const Config = {
  root:'',
  map:{
    source:'',
    exclude:[],
    references:{

    },
    import(obj){
      let rule = 'recursive';
      let path = 'inherit';
      let structure = [];
      if(obj.hasOwnProperty(o)){
        obj.map(function(a,b){
          structure.push({node:a,rule:b});
        })
      }
    }
  },
  dist:{

  },
  bin:{

  }
};
