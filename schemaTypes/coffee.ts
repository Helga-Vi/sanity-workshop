export default {
    name: "Coffee",
    title: "Coffee",
    type: "document",
    fields: [
        {
            name:"nameofcoffee",
            title:"Name",
            type: "string",
    
    },
        {
            name: "image",
            title:"Bilde av kaffe",
            type: "image",
            options: {
                hotspot: true,
              },
            },
            {
              name: 'price',
              title: 'Hvor mye koster kaffe?',
              type: 'number',
            },
    ],
    }