export default {
name: "person",
title: "Person",
type: "document",
fields: [
    {
        name:"fullname",
        title:"FullName",
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