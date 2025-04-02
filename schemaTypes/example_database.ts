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
        title:"Bilde av person",
        type: "image",
        options: {
            hotspot: true,
          },
        },
        {
          name: 'nettsted',
          title: 'Nettsted til person',
          type: 'url',
        },
],
}